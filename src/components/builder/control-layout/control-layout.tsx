import { FC, ReactElement, useState } from 'react';
import { Position, useReactFlow, useNodeId, Edge } from 'reactflow';
import { v4 as uuid } from 'uuid';
import styles from './control-layout.module.scss';
import moreIcon from '../../../images/icon/24x24/common/more.svg';
import MenuBot from '../../../ui/menus/menu-bot/menu-bot';
import CustomHandle from '../flow/custom-handle/custom-handle';
import { setFlowData } from '../utils';
import { storOfVariables } from '../utils/stor';

type TControlLayoutProps = {
  children?: ReactElement | ReactElement[];
  type: string;
};

const ControlLayout: FC<TControlLayoutProps> = ({ children, type }) => {
  const [hidden, setHidden] = useState(true);
  const [menu, toggleMenu] = useState(false);
  const id = useNodeId();
  const { getNodes, setNodes, getNode, getEdges, setEdges } = useReactFlow();
  const node = getNode(id!);

  const setName = setFlowData({ selectors: ['name'] });

  const onClick = () => {
    toggleMenu(!menu);
  };

  const removeNode = () => {
    const nodes = getNodes().filter((item) => {
      return item.id !== id && item.parentNode !== id;
    });
    setNodes(nodes);

    const updatedEdges = getEdges().reduce(
      (acc: Edge<any>[], edge: Edge<any>) => {
        if (edge.source !== id && edge.target !== id) {
          acc.push(edge);
        }
        return acc;
      },
      []
    );

    setEdges(updatedEdges);

    const indexes: number[] = [];
    storOfVariables.forEach((el, ind) => {
      if (el.id.split('|||')[0] === id) {
        indexes.push(ind);
      }
    });

    indexes.forEach((ind, i) => {
      storOfVariables.splice(ind - i, 1);
    });
  };

  const copyNode = () => {
    const newNode = {
      id: uuid(),
      type: node!.type,
      position: { x: node!.position.x + 300, y: node!.position.y },
      data: node!.data,
    };
    const childNodes = getNodes()
      .filter((item) => item.parentNode === id)
      .map((item) => {
        return {
          id: uuid(),
          position: item.position,
          type: item.type,
          data: item.data,
          expandParent: true,
          parentNode: newNode.id,
          draggable: false,
        };
      });
    setNodes([...getNodes(), newNode, ...childNodes]);
  };

  return (
    <article className={styles.container}>
      <div
        className={`${!hidden && styles.outline}`}
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
      >
        <CustomHandle
          position={Position.Top}
          hidden={hidden}
          type="target"
          id="t"
        />
        <CustomHandle
          position={Position.Right}
          hidden={hidden}
          type="source"
          id="r"
        />
        <CustomHandle
          position={Position.Bottom}
          hidden={hidden}
          type="source"
          id="b"
        />
        <CustomHandle
          position={Position.Left}
          hidden={hidden}
          type="target"
          id="l"
        />
        <div className={styles.header}>
          <span className={styles.type}>{type}</span>
          <input
            type="text"
            className={styles.name}
            value={node?.data.name}
            onChange={setName}
          />
          <div className={styles.more} onClick={onClick}>
            <img className={styles.img} src={moreIcon} alt="больше" />
            <MenuBot
              size="medium"
              editFunction={() => {}}
              isActive={menu}
              top={0}
              left={30}
              removeFunction={removeNode}
              copyFuntion={copyNode}
            />
          </div>
        </div>
        {children && (
          <>
            <hr className={styles.hr} />
            {children}
          </>
        )}
      </div>
    </article>
  );
};

export default ControlLayout;
