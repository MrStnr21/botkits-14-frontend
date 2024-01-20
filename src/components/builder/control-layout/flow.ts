import { Edge, Node } from 'reactflow';
import { v4 as uuid } from 'uuid';
import { TFlowNodes } from '../../../services/types/builder';
import { storeOfVariables, namesOfBlocks } from '../utils/store';
import useFlow from '../use-flow';

export const removeNodeFlow = () => {
  const { getNodes, setNodes, id, getEdges, setEdges } = useFlow();
  return () => {
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

    const indexesVariables: number[] = [];
    storeOfVariables.forEach((el, ind) => {
      if (el.id.split('|||')[0] === id) {
        indexesVariables.push(ind);
      }
    });

    indexesVariables.forEach((ind, i) => {
      storeOfVariables.splice(ind - i, 1);
    });

    const indexName = namesOfBlocks.findIndex((item) => item.id === id);
    namesOfBlocks.splice(indexName, 1);
  };
};

type TcopyNodeFlow = TFlowNodes & {
  node: Node<any> | undefined;
};

export const copyNodeFlow =
  ({ getNodes, setNodes, node, id }: TcopyNodeFlow) =>
  () => {
    const newNode = {
      id: uuid(),
      type: node?.type,
      position: node
        ? { x: node!.position.x + 300, y: node!.position.y }
        : { x: 0, y: 0 },
      data: node?.data,
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
