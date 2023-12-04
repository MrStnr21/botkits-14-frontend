/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
import { useReactFlow, useNodeId } from 'reactflow';
import { Option } from '../../../utils/types';
import { TVariable } from '../../../services/types/builder';

export const getTimeDHMS = (time: number) => {
  const s = Math.floor(time % 60);
  const m = Math.floor((time / 60) % 60);
  const h = Math.floor((time / (60 * 60)) % 24);
  const d = Math.floor(time / (60 * 60 * 24));

  return {
    s,
    m,
    h,
    d,
  };
};

export const getSeconds = ({ s, m, h, d }: { [key: string]: number }) => {
  return s + m * 60 + h * 60 * 60 + d * 60 * 60 * 24;
};

export const getTimeMS = (s: number) => {
  const minutes = String(Math.floor(s / 60));
  const seconds = String(Math.floor(s % 60));
  return `${minutes}:${seconds.length === 2 ? seconds : `0${seconds}`}`;
};

export const getSelectItemByValue = (value: string, arr: Option[]) => {
  return arr.find(item => item.value === value)
}

export const saveVariable = (variables: TVariable[], name: string, id: string) => {
  const variableIndex = variables.findIndex(
    (item) => item.id === id
  );
  if (variableIndex === -1) {
    variables.push({
      id,
      name,
      value: '',
    });
  } else {
    variables[variableIndex] = {
      ...variables[variableIndex],
      name,
    };
  }
}

export const setFlowData = ({
  selectors,
  value,
  callback,
}: {
  selectors: string[];
  value?: any;
  callback?: Function;
}) => {
  const { getNodes, setNodes } = useReactFlow();
  const id = useNodeId();
  return (e?: React.ChangeEvent<HTMLInputElement>) => {
    const nodes = getNodes();
    const finalData =
      value !== undefined
        ? value
        : callback
          ? callback(e?.target.value)
          : e?.target.value;
    switch (selectors.length) {
      case 1: {
        return setNodes(
          nodes.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                data: {
                  ...item.data,
                  [selectors[0]]: finalData,
                },
              };
            }
            return item;
          })
        );
      }
      case 2: {
        return setNodes(
          nodes.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                data: {
                  ...item.data,
                  [selectors[0]]: {
                    ...item.data[selectors[0]],
                    [selectors[1]]: finalData,
                  },
                },
              };
            }
            return item;
          })
        );
      }
      case 3: {
        return setNodes(
          nodes.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                data: {
                  ...item.data,
                  [selectors[0]]: {
                    ...item.data[selectors[0]],
                    [selectors[1]]: {
                      ...item.data[selectors[0]][selectors[1]],
                      [selectors[2]]: finalData,
                    },
                  },
                },
              };
            }
            return item;
          })
        );
      }
      default: {
        return nodes;
      }
    }
  };
};

export default {};
