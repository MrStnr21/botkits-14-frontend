export enum MessageDataTypes {
  buttons = 'buttons',
  message = 'message',
  answers = 'answers',
  file = 'file',
}

export type TBlockProps<T> = {
  data: T;
};

export type TBuilderData = {
  id: string; // id Бота
  name: string; // Название бота
  type: string; // Тип бота(VK/TG/OK и т.д.), можно задать варианты перечислением через |
  variables: TVariable[]; // Пока не ясно что это, некие переменные
  nodes: TReactFlowNode[]; // Коллекция всех нод
  edges: TReactFlowEdge[]; // Коллекция связей
  triggers: TTrigger[]; // Коллекция триггеров
};

export type TReactFlowNode = {
  id: string; // уникальная строка
  type: string; // один из типов блоков (нужно придумать)
  data: // Пропсы блока
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
  position: { y: number; x: number }; // Координаты ноды
  parentNode?: string; // id родительской ноды, если такая есть
};

export type TReactFlowEdge = {
  id: string; // уникальная строка
  source: string; // ReactFlowNode id источника
  target: string; // ReactFlowNode id цели
};

export type TVariable = {
  [key: string]: any; // Пока не понятная структура переменных
};

export type TTrigger = {
  tag: string;
  type: 'block' | 'text'; // Тип цели триггера
  name?: string; // Имя одного из блоков
  text?: string; // Произовльный текст
};

export type TCoordinateBlock = {
  name: string;
  coordinates: string[];
};

export type TTelegramPayBlock = {
  name: string;
  goodsName: string;
  image?: File; // Изображение, если есть. Для отображения будет использоваться компонент File
  description: string;
  payment: number;
  currency: string; // Валюты нужно будет вынести в env.
  providerToken: string;
  onSuccess: string; // name блока, на который происходит перенаправление при успешной оплате
};

export type TDeepLinkBlock = {
  name: string;
  param: string; // Выбор одного из параметров, откуда-то должен получаться список
  type: 'random' | 'static' | 'variable' | 'JS' | 'CRM'; // по умолчанию random
  signsAmount: number; // по умолчанию 8
  additionValue: string;
  additionLink: string;
};

export type TCRMBlock = {
  name: string;
  crmList: string[]; // Подтянуть список crm пользователя, пока закроем хардкодом
  chosenCrm?: string; // Выбор из crmList, можно просто выбрать первую
  save?: 'new' | 'suppl';
};

export type TOperatorBlock = {
  name: string;
};

export type TVariablesControlBlock = {
  // В данном блоке должно происходить присваивание переменной некоторого значения. Вилами по воде писано
  name: string;
  variables: { variable?: TVariable; value: string }[]; // Пока  не точно
};

export type TConditionalBlock = {
  name: string;
  variables: {
    type: 'easy' | 'hard'; // В зависимости от типа переменной нужны (variable, sign, blockName) для easy и (condition, blockName) для hard
    variable?: TVariable; // Некая переменная
    sign: string; // Одно из value принимаемых select, 11 значений, значения стоит отправить в конфиг.
    condition: string; // Строка-условие для сложного режима
    blockName: string; // name одного из блоков
  }[];
};

export type TApiBlock = {
  name: string;
  url: string;
  reqType?: 'get' | 'post';
  headers: {
    type: 'variable' | 'const';
    name: string;
    variable: string;
  }[];
  params: {
    type: 'variable' | 'const';
    name: string;
    variable: string;
  }[];
  variable?: TVariable;
};

export type TButtonBlock = {
  type: 'button' | 'answer';
  direction: 'horizontal' | 'vertical';
  additionalData?: boolean;
  name: string;
  color: string;
  str: string;
  deskY: number;
  mobY: number;
};

export type TMessageBlock = {
  name: string;
  data: TMessageBlockData[];
  saveAnswer: {
    show: boolean;
    value: string;
  };
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
