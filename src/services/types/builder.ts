import { Instance } from 'reactflow';

/**
 * типы контент-блока в MessageBlock
 */
export enum MessageDataTypes {
  buttons = 'buttons',
  message = 'message',
  answers = 'answers',
  file = 'file',
}

export type TBlockProps<T> = {
  data: T;
};

export type TFlowSetter<T> = {
  setNodes: Instance.SetNodes<any>;
  getNodes: Instance.GetNodes<any>;
  id: string;
  data: T;
};

/**
 * объект данных для инициализации билдера
 */
export type TBuilderData = {
  /**
   * коллекция переменных для билдера
   */
  variables: TVariable[];
  /**
   * коллекция нод для билдера
   */
  nodes: TReactFlowNode[];
  /**
   * коллекция связей для билдера
   */
  edges: TReactFlowEdge[];
  /**
   * коллекция триггеров для билдера
   */
  triggers: TTrigger[];
};

/**
 * стандартный интерфейс получаемой ноды reactFlow
 */
export type TReactFlowNode = {
  id: string;
  /**
   * тип ноды `nodeTypes`
   */
  type: string;
  /**
   * все внутренние данные ноды (`props`)
   */
  data:
    | TApiBlock
    | TConditionalBlock
    | TVariablesControlBlock
    | TOperatorBlock
    | TCRMBlock
    | TDeepLinkBlock
    | TTelegramPayBlock
    | TCoordinateBlock
    | TMessageBlock
    | TButtonBlock;
  /**
   * координаты расположения ноды в flow
   */
  position: { y: number; x: number };
  /**
   * `id` родительской ноды, относительно которой происходит позиционирование
   */
  parentNode?: string;
};

/**
 * стандартный интерфейс получаемой edge reactFlow
 */
export type TReactFlowEdge = {
  id: string;
  /**
   * `id` ноды - источника
   */
  source: string;
  /**
   * `id` ноды - цели
   */
  target: string;
};

export type TVariable = {
  id: string;
  name: string;
  value: any;
};

export type TTrigger = {
  id: string;
  tag: string;
  type: 'block' | 'text'; // Тип цели триггера
  /**
   * имя одного из блоков `nodes`
   */
  name?: string;
  text?: string;
};

export type TCoordinateBlock = {
  name: string;
  /**
   * массив из 2-х строк, `широты` и `долготы`
   */
  coordinates: string[];
};

export type TTelegramPayBlock = {
  name: string;
  goodsName: string;
  image?: File;
  description: string;
  /**
   * сумма оплаты
   */
  payment: number;
  /**
   * используемая валюта
   */
  currency: string;
  providerToken: string;
  /**
   * `name` блока, на который происходит перенаправление при успешной оплате
   */
  onSuccess: string;
};

export type TDeepLinkBlock = {
  name: string;
  param: string;
  type: 'random' | 'static' | 'variable' | 'JS' | 'CRM';
  signsAmount: number;
  additionValue: string;
  additionLink: string;
};

export type TCRMBlock = {
  name: string;
  crmList: string[];
  chosenCrm?: string;
  save?: 'new' | 'suppl';
};

export type TOperatorBlock = {
  name: string;
};

export type TVariablesControlBlock = {
  name: string;
  variables: {
    id: string;
    variable: string;
    value: string;
  }[];
};

export type TConditionalBlock = {
  name: string;
  variables: {
    id: string;
    type: 'easy' | 'hard'; // В зависимости от типа переменной нужны (variable, sign, blockName) для easy и (condition, blockName) для hard
    variable?: TVariable;
    /**
     * один из операторов, выбранный из `select`
     */
    sign?: string;
    /**
     * строка-условие для сложного режима или значение для легкого
     */
    condition?: string;
    /**
     * `name` одного из блоков
     */
    targetBlock: string;
  }[];
};

export type TApiBlock = {
  name: string;
  url: string;
  /**
   * тип `http`- запроса
   */
  reqType?: 'get' | 'post';
  /**
   * массив заголовков `http`- запроса
   */
  headers: {
    type: 'variable' | 'const';
    name: string;
    variable: string;
  }[];
  /**
   * массив url-параметров `http`- запроса
   */
  params: {
    type: 'variable' | 'const';
    name: string;
    variable: string;
  }[];
  variables: TVariable[];
};

export type TButtonBlock = {
  /**
   * тип кнопки, влияет на стилизацию
   */
  type: 'button' | 'answer';
  /**
   * отношение кнопки к подблоку
   */
  direction: 'horizontal' | 'vertical';
  additionalData?: boolean;
  name: string;
  color: string;
  str: string;
  /**
   * высота кнопки в настольной версии
   */
  deskY: number;
  /**
   * высота кнопки в мобильной версии
   */
  mobY: number;
};

export type TMessageBlock = {
  name: string;
  /**
   * набор блоков для последовательной отрисовки в MessageBlock
   */
  data: TMessageBlockData[];
  /**
   * блок для сохранения ответа в переменную
   */
  saveAnswer: {
    show: boolean;
    value: TVariable;
  };
  /**
   * блок отложенной отправки сообщения
   */
  showTime: {
    show: boolean;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
};

export type TMessageBlockData =
  | TMessageData
  | TButtonsData
  | TAnswersData
  | TFileData;

export type TMessageData = {
  type: MessageDataTypes.message;
  value: string;
  emoji?: string;
};

export type TButtonsData = {
  type: MessageDataTypes.buttons;
};

export type TAnswersData = {
  type: MessageDataTypes.answers;
};

export type TFileData = {
  type: MessageDataTypes.file;
  file: File;
};

export type TBuilder = {
  features: TBuilderData;
};
