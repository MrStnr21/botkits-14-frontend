/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
import { useReactFlow, useNodeId, Node } from 'reactflow';
import { Option } from '../../../utils/types';
import { TVariable, TTrigger } from '../../../services/types/builder';
import fb from '../../../images/icon/40x40/facebook/hover.svg';
import tg from '../../../images/icon/40x40/telegram/hover.svg';
import vb from '../../../images/icon/40x40/viber/hover.svg';
import vk from '../../../images/icon/40x40/vk/hover.svg';
import ok from '../../../images/icon/40x40/odnoklassniki/hover.svg';
import al from '../../../images/icon/40x40/alisa/hover.svg';
import wh from '../../../images/icon/40x40/whatsapp/hover.svg';
import ig from '../../../images/icon/40x40/insta/hover.svg';
import ws from '../../../images/icon/40x40/web/hover.svg';

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
  return arr.find((item) => item.value === value);
};

export const saveVariable = (
  variables: TVariable[],
  name: string,
  id: string
) => {
  const variableIndex = variables.findIndex((item) => item.id === id);
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
};

export const saveTrigger = (
  triggers: TTrigger[],
  id: string,
  tag: string,
  type: 'block' | 'text',
  name?: string,
  text?: string
) => {
  const triggerIndex = triggers.findIndex((item) => item.id === id);
  if (triggerIndex === -1) {
    triggers.push({
      id,
      tag,
      type,
      name,
      text,
    });
  } else {
    triggers[triggerIndex] = {
      ...triggers[triggerIndex],
      tag,
      type,
      name,
      text,
    };
  }
};

export const filterNodes = (nodes: Node[]) => {
  return nodes.map((item) => {
    const { dragging, positionAbsolute, selected, height, width, ...rest } =
      item;
    return rest;
  });
};

export const getUrlPath = (type: string | null) => {
  switch (type) {
    case 'custom': {
      return 'bots';
    }
    case 'template': {
      return 'bots/template';
    }
    default: {
      return '';
    }
  }
};

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

export const iconOfPlatform: {
  [key: string]: string;
} = {
  Facebook: fb,
  Telegram: tg,
  Viber: vb,
  VK: vk,
  Odnoklassniki: ok,
  Алиса: al,
  Whatsapp: wh,
  Instagram: ig,
  'Веб-сайт': ws,
};

export const resetVar = (elemetnts: any[]) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < elemetnts.length; i++) {
    elemetnts.splice(0, 1);
  }
};

export default {};
