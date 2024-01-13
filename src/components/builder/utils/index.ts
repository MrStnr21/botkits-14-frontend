/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
import { Node, Instance } from 'reactflow';
import { v4 as uuid } from 'uuid';
import _ from 'lodash';
import { Option } from '../../../utils/types';
import { TVariable, TName, TTrigger } from '../../../services/types/builder';

// svg-иконки для вставки в nameBot, в зависимости от платформы (соцсети) бота, выбранной пользователем
import fb from '../../../images/icon/40x40/facebook/hover.svg';
import tg from '../../../images/icon/40x40/telegram/hover.svg';
import vb from '../../../images/icon/40x40/viber/hover.svg';
import vk from '../../../images/icon/40x40/vk/hover.svg';
import ok from '../../../images/icon/40x40/odnoklassniki/hover.svg';
import al from '../../../images/icon/40x40/alisa/hover.svg';
import wh from '../../../images/icon/40x40/whatsapp/hover.svg';
import ig from '../../../images/icon/40x40/insta/hover.svg';
import ws from '../../../images/icon/40x40/web/hover.svg';
import useFlow from '../use-flow';
import { rangeForCoordinates } from './data';

type TTimeObj = {
  s: number;
  m: number;
  h: number;
  d: number;
};

type TSaveNode<T> = {
  node: Node<any>;
  value: T;
  path: string[] | string;
  setNodes: Instance.SetNodes<any>;
  getNodes: Instance.GetNodes<any>;
};

export const newBlockData = {
  easy: () => ({
    id: `easy-${uuid()}`,
    type: 'easy',
    variable: { id: '', name: '', value: '' },
    sign: '',
    condition: '',
    targetBlock: '',
  }),
  hard: () => ({
    id: `hard-${uuid()}`,
    type: 'hard',
    condition: '',
    targetBlock: '',
  }),
};

/** Проверка корректности значения введенной координаты
 * @param newValue проверяемое значение
 * @param type тип координаты
 * @returns true в случае корректности | false в случае некорректности
 */
export const validateCoordinateRange = (
  newValue: string,
  type: 'longitude' | 'latitude'
) => {
  const valueArr = newValue.split('.');
  const int = Number(valueArr[0]);
  const fractialPart = valueArr[1];
  if (
    type === 'longitude' &&
    (int < rangeForCoordinates.longitude.min ||
      int > rangeForCoordinates.longitude.max)
  ) {
    return false;
  }
  if (
    type === 'latitude' &&
    (int < rangeForCoordinates.latitude.min ||
      int > rangeForCoordinates.latitude.max)
  ) {
    return false;
  }
  if (fractialPart && fractialPart.length > 5) {
    return false;
  }
  return true;
};

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
  return arr.find((item) => item.value === value);
};

/**
 * сохранение variable
 * @param {TVariable[]} variables массив переменных
 * @param {string} name имя переменной
 * @param {string} id id переменной
 */
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

/**
 * актуализация массив переменных variables на основе массива нод nodes (очистка от старых переменных)
 * @param {TVariable[]} variables массив переменных
 * @param {Node[]} nodes массив нод
 */
export const clearingVariables = (variables: TVariable[], nodes: Node[]) => {

  const indexesVariables: number[] = [];
  variables.forEach((el, ind) => {
    if (nodes.findIndex((item: { id: string }) => item.id === el.id.split('|||')[0]) === -1) {
      indexesVariables.push(ind);
    }
  });

  indexesVariables.forEach((ind, i) => {
    variables.splice(ind - i, 1);
  });
};

/**
 * сохранение name
 * @param {TName[]} names массив имен блоков
 * @param {string} name сохраняемое имя блока
 * @param {string} id id имени (блока)
 * @param {string} type тип блока (ноды)
 */
export const saveName = (
  names: TName[],
  name: string,
  id: string,
  type: string | undefined
) => {
  const nameIndex = names.findIndex((item) => item.id === id);
  if (nameIndex === -1) {
    names.push({
      id,
      name,
      type: type || '',
    });
  } else {
    names[nameIndex] = {
      ...names[nameIndex],
      name,
    };
  }
};

/**
 * актуализация массив имен блоков names на основе массива нод nodes (очистка от старых имен)
 * @param {TName[]} names массив имен
 * @param {Node[]} nodes массив нод
 */
export const clearingNames = (names: TName[], nodes: Node[]) => {

  const indexesNames: number[] = [];
  names.forEach((el, ind) => {
    if (nodes.findIndex((item: { id: string }) => item.id === el.id) === -1) {
      indexesNames.push(ind);
    }
  });

  indexesNames.forEach((ind, i) => {
    names.splice(ind - i, 1);
  });
};

/**
 * сохранение trigger
 * @param {TTrigger[]} triggers массив триггеров
 * @param {string} id id триггера
 * @param {string} tag ключевое слово триггера
 * @param {'block' | 'text'} type тип ответного действия бота
 * @param {string} name имя блока в селекте
 * @param {string} text текст ответа
 */
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

/**
 * фильтрация объектов Node от ненужных полей перед отправкой на бэк
 * @param {Node[]} nodes массив нод
 * @returns массив нод без полей dragging, positionAbsolute, selected, height, width
 */
export const filterNodes = (nodes: Node[]) => {
  return nodes.map((item) => {
    const { dragging, positionAbsolute, selected, height, width, ...rest } =
      item;
    return rest;
  });
};

/**
 * объект для мапинга добавочного url в builder
 */
export const getUrlPath: {
  [key: string]: string;
} = {
  custom: 'bots',
  template: 'bots/template',
};

/**
 * сохранение ноды в стор ReactFlow (дженерик по типу передаваемого value)
 */
export function saveNode<T>({
  node,
  value,
  path,
  setNodes,
  getNodes,
}: TSaveNode<T>) {
  // копирование для перезаписи поля data
  const cloneNode = { ...node, data: { ...node.data } };

  _.set(cloneNode, path, value);

  setNodes(
    getNodes().map((item: Node<any>) => {
      if (item.id === node.id) {
        return cloneNode;
      }
      return item;
    })
  );
}

/**
 * сохранение данных input в стор ReactFlow
 */
export const setFlowDataInit = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return ({ path, value }: { path: string | string[]; value: unknown }) => {
    const node = getNode(id)!;
    saveNode({
      getNodes,
      setNodes,
      node,
      path,
      value,
    });
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

/**
 * очистка массива любых данных
 * @param {any[]} elements массив любых значений
 */
export const resetVar = (elements: any[]) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < elements.length; i++) {
    elements.splice(0, 1);
  }
};

/**
 * создание строки из любого числа строк, разделенных строкой-сепаратором
 * @param {string[]} strings массив разделяемых строк
 * @param {string} separator сепаратор
 * @returns строка из строк, разделенных сепаратором
 */
export const connectStrings = (strings: string[], separator: string) => {
  return strings.join(separator);
};

/**
 * создание массива объектов для передачи в селект из массива объектов с ключом name 
 * @param {{ name: string }[]} store массив разделяемых строк
 * @returns {{ value: string, label: string }[]} массива объектов с ключами value и label
 */
export const getSelectLabel = (store: { name: string }[]) =>
  store.map((elem, ind) => ({
    value: `${ind + 1}`,
    label: elem.name,
  }));

export default {};
