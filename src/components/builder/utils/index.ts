/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
import { useReactFlow, useNodeId, Node } from 'reactflow';
import { Option } from '../../../utils/types';
import { TVariable } from '../../../services/types/builder';

type TTimeObj = {
  s: number;
  m: number;
  h: number;
  d: number;
}


/** перевод секунд в секунды/минуты/часы/дни
 * @param {number} time время в секундах
 * @returns {TTimeObj} объект формата : ```{
 * s: number,
 * m: number,
 * h: number,
 * d: number
 * }``` где s - секунды, m - минуты, h - часы, d - дни
 */
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

/**
 * перевод времени в секунды
 * @param {TTimeObj} obj объект формата : ```{
 * s: number,
 * m: number,
 * h: number,
 * d: number
 * }``` где s - секунды, m - минуты, h - часы, d - дни
 * @returns {number} кол-во секунд
 */
export const getSeconds = ({ s, m, h, d }: TTimeObj) => {
  return s + m * 60 + h * 60 * 60 + d * 60 * 60 * 24;
};


/**
 * форматирование времени
 * @param {number} s время в секундах
 * @returns {string} строка формата `minutes:seconds`
 */
export const getTimeMS = (s: number) => {
  const minutes = String(Math.floor(s / 60));
  const seconds = String(Math.floor(s % 60));
  return `${minutes}:${seconds.length === 2 ? seconds : `0${seconds}`}`;
};

/**
 * поиск Option в массиве
 * @param {string} value value искомого объекта
 * @param {Option[]} arr массив объектов Option
 * @returns найденный объект Option или undefined
 */
export const getSelectItemByValue = (value: string, arr: Option[]) => {
  return arr.find(item => item.value === value)
}

/**
 * сохранение variable
 * @param {TVariable[]} variables массив переменных
 * @param {string} name имя переменной
 * @param {string} id id переменной
 */
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

/**
 * фильтрация объектов Node от ненужных полей перед отправкой на бэк
 * @param {Node[]} nodes массив нод
 * @returns массив нод без полей dragging, positionAbsolute, selected, height, width
 */
export const filterNodes = (nodes: Node[]) => {
  return nodes.map(item => {
    const {dragging, positionAbsolute, selected, height, width, ...rest} = item
    return rest
  })
}

/**
 * получение добавочного URL для получения/сохранения данных билдера
 * @param {tring | null} type
 * @returns добавочный URL
 */
export const getUrlPath = (type: string|null) => {
  switch(type){
    case 'custom': {
      return 'bots'
    }
    case 'template': {
      return 'bots/templates'
    }
    default: {
      return ''
    }
  }
}

/**
 * сохранение данных input в стор ReactFlow
 * @param {Object} obj
 * @param {string[]} obj.selectors массив строк, последовательность полей объекта, по которым можно получить значение `input`
 * @param {any} obj.value необязательный параметр. Если передан - `value` записывается в `value` инпута
 * @param {Function} obj.callback необязательный параметр. Коллбэк, если передан - будет вызван применен к value перед записью в `store`
 */
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
