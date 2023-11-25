/* eslint-disable */
import { memo, HTMLAttributes, useCallback, useRef, useState } from 'react';
import { Node, Rect, useStore, getRectOfNodes, useReactFlow } from 'reactflow';
import {
  createUseGesture,
  UserHandlers,
  wheelAction,
  dragAction,
} from '@use-gesture/react';
import MiniMapNode from './mini-map-node';
// Why does this not work?
// import { getBoundsofRects } from "react-flow-renderer/dist/utils/graph";

type StringFunc = (node: Node) => string;

export interface MiniMapProps extends HTMLAttributes<SVGSVGElement> {
  nodeColor?: string | StringFunc;
  nodeStrokeColor?: string | StringFunc;
  nodeClassName?: string | StringFunc;
  nodeBorderRadius?: number;
  nodeStrokeWidth?: number;
  maskColor?: string;
}

// declare const window: any;

const defaultWidth = 225;
const defaultHeight = 116;

const useGesture = createUseGesture([dragAction, wheelAction]);

const MiniMap = ({
  style,
  className,
  nodeStrokeColor = '#555',
  nodeColor = '#fff',
  nodeClassName = '',
  nodeBorderRadius = 5,
  nodeStrokeWidth = 2,
  maskColor = 'none',
}: MiniMapProps) => {

  const { domNode } = useStore(s => s);
  const containerWidth = useStore((s) => s.width);
  const containerHeight = useStore((s) => s.height);
  const [tX, tY, tScale] = useStore((s) => s.transform);
  const nodes = useStore((s) => s.getNodes)();

  const mapClasses = `react-flow__minimap ${className}`;
  const elementWidth = (style?.width || defaultWidth)! as number;
  const elementHeight = (style?.height || defaultHeight)! as number;
  const nodeStrokeColorFunc = (
    nodeStrokeColor instanceof Function
      ? nodeStrokeColor
      : () => nodeStrokeColor
  ) as StringFunc;
  const nodeClassNameFunc = (
    nodeClassName instanceof Function ? nodeClassName : () => nodeClassName
  ) as StringFunc;
  const viewBB: Rect = {
    x: -tX / tScale,
    y: -tY / tScale,
    width: containerWidth / tScale,
    height: containerHeight / tScale,
  };
  const boundingRect = viewBB;
  const scaledWidth = boundingRect.width / elementWidth;
  const scaledHeight = boundingRect.height / elementHeight;
  const viewScale = Math.max(scaledWidth, scaledHeight);
  const viewWidth = viewScale * elementWidth;
  const viewHeight = viewScale * elementHeight;
  const offset = 5 * viewScale;
  const x = boundingRect.x - (viewWidth - boundingRect.width) / 2 - offset - 50 * viewScale;
  const y = boundingRect.y - (viewHeight - boundingRect.height) / 2 - offset - 38 * viewScale;
  const width = viewWidth + offset * 2;
  const height = viewHeight + offset * 2;
  const shapeRendering =
    typeof window === 'undefined' || !!(window as any).chrome
      ? 'crispEdges'
      : 'geometricPrecision';

  const minZoom = useStore((s) => s.minZoom);
  const maxZoom = useStore((s) => s.maxZoom);

  const rectRef = useRef<SVGRectElement>(null);

  const { setViewport } = useReactFlow();

  const onDrag = useCallback<UserHandlers['onDrag']>(
    ({ delta: [x, y] }) => {
      setViewport({
        x: tX + -x * tScale * scaledWidth,
        y: tY + -y * tScale * scaledHeight,
        zoom: tScale,
      });
    },
    [scaledHeight, scaledWidth, tScale, tX, tY, setViewport]
  );

  const onWheel = useCallback<UserHandlers['onWheel']>(
    ({ event: { clientX, clientY, deltaY }, active }) => {
      if (!active) return;
      const sign = Math.sign(deltaY);

      const { x, y } = rectRef.current?.getBoundingClientRect() || {
        x: clientX,
        y: clientY,
      };
      const pX = clientX - x;
      const pY = clientY - y;

      const multiplier = sign === -1 ? 1.2 : sign === 1 ? 1 / 1.2 : 1;
      const zoom = tScale * multiplier;
      if (zoom > maxZoom || zoom < minZoom) return;
      setViewport({
        x: tX + sign * pX * zoom,
        y: tY + sign * pY * zoom,
        zoom,
      });
    },
    [tScale, maxZoom, minZoom, setViewport, tX, tY]
  );

  const bind = useGesture({
    onWheel,
    onDrag,
  });

  return (
    <svg
      width={elementWidth}
      height={elementHeight}
      viewBox={`${x} ${y} ${width*1.5} ${height*1.5}`}
      style={style}
      className={mapClasses}
    >
      {nodes
        .filter((node) => !node.hidden)
        .map((node) => {
          if(node.type === 'button'){
            return null
          }
          return <MiniMapNode
            key={node.id}
            x={node.position.x}
            y={node.position.y}
            width={node.width || 0}
            height={node.height || 0}
            style={node.style}
            className={nodeClassNameFunc(node)}
            color='#22FFAA'
            borderRadius={nodeBorderRadius}
            strokeColor={nodeStrokeColorFunc(node)}
            strokeWidth={nodeStrokeWidth}
            shapeRendering={shapeRendering}
          />}
        )}
      <rect
        ref={rectRef}
        className="react-flow__minimap-mask"
        x={viewBB.x}
        y={viewBB.y}
        width={viewBB.width}
        height={viewBB.height}
        fill={maskColor}
        stroke='#A6B3C9'
        fillRule="evenodd"
        style={{
          touchAction: 'none',
        }}
        {...bind()}
      />
    </svg>
  );
};

MiniMap.displayName = 'MiniMap';

export default memo(MiniMap);
