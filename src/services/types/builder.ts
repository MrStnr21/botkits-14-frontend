/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/naming-convention */

// Состояние Воронок описывается объектом (нужно передавать/получать на/от сервер(а)):
export type TBuilderData = {
  id: string; // id Бота
  name: string; // Название бота
  type: string; // Тип бота(VK/TG/OK и т.д.), можно задать варианты перечислением через |
  variables: TVariable[]; // Пока не ясно что это, некие переменные
  nodes: ReactFlowNode[];
  edges: ReactFlowEdge[];
  triggers: Trigger[];
};

// eslint-disable-next-line prettier/prettier
export interface IBuilderDataResponse extends TBuilderData { }

export type TGetBuilderDataState = {
  dataBuilder: TBuilderData | null;
  isLoading: boolean;
  hasError: boolean;

  getBuiderDataRequest: boolean;
  getBuiderDataSuccess: boolean;
  getBuiderDataError: boolean;
};

export type ReactFlowNode = {
  id: string; // уникальная строка
  type: string; // один из типов блоков (нужно придумать)
  data:
  | ApiBlock
  | ConditionalBlock
  | VariablesControlBlock
  | OperatorBlock
  | CRMBlock
  | DeepLinkBlock
  | TelegramPayBlock
  | CoordinateBlock
  | MessageBlock
  | ButtonBlock;
  position: { y: number; x: number };
  parentNode?: string; // id родительской ноды, если такая есть
};

export type ReactFlowEdge = {
  id: string; // уникальная строка
  source: string; // ReactFlowNode id источника
  target: string; // ReactFlowNode id цели
};

class TVariable {
  // Переменные, подтягивающиеся из акаунта User или иных мест
  // Предположительно есть 2 типа переменных - локальные, глобальные (структура не известна)
}

export type Trigger = {
  tag: string;
  type: 'block' | 'text';
  name?: string; // Имя одного из блоков
  text?: string; // Произовльный текст
};

export type CoordinateBlock = {
  name: string; // У каждого блока должно быть !уникальное! поле name
  coordinates: number[]; // Массив из 2-х чисел
};

export type TelegramPayBlock = {
  name: string;
  image?: File;
  description?: string;
  payment?: number;
  currency?: string;
  providerToken?: string;
  onSuccess?: string; // name блока, на который происходит перенаправление при успешной оплате
};

export type DeepLinkBlock = {
  name: string;
  param?: string; // Выбор одного из параметров, откуда-то должен получаться список
  type: 'random' | 'static' | 'variable' | 'JS' | 'CRM'; // по умолчанию random
  signsAmount: number; // по умолчанию 8
  additionValue?: string;
  additionLink?: string;
};

export type CRMBlock = {
  name: string;
  crmList?: string[]; // Подтянуть список crm пользователя, если его нет, пока можно оставить пустым, закроем хардкодом
  chosenCrm?: string; // Выбор из crmList, если была выбрана, пока можно оставить пустым
  save?: 'new' | 'suppl';
};

export type OperatorBlock = {
  name: string;
};

export type VariablesControlBlock = {
  // В данном блоке должно происходить присваивание переменной некоторого значения. Вилами по воде писано
  name: string;
  variables?: { variable: TVariable; value: string }[]; // Пока не точно
};

export type ConditionalBlock = {
  name: string;
  variables: {
    type: 'easy' | 'hard'; // В зависимости от типа переменной нужны (variable, sign, blockName) для easy и (if, then) для hard, можно сгруппировать
    variable?: TVariable; // Некая переменная
    sign?: string; // Одно из value принимаемых select, 11 значений, можно продумать и задать через |
    condition?: string;
    blockName?: string; // name одного из блоков
  }[];
};

export type ApiBlock = {
  name: string;
  url?: string;
  reqType?: 'get' | 'post';
  headers?: {
    type: 'variable' | 'const';
    name?: string;
    variable?: string;
  }[];
  params?: {
    type: 'variable' | 'const';
    name?: string;
    variable?: string;
  }[];
  variable?: TVariable;
};

export type MessageBlock = {
  name: string;
  data: (messageData | buttonsData | answersData | fileData)[];
  saveAnswer?: string;
  showTime?: number;
};

export type ButtonBlock = {
  type: 'button' | 'answer';
  name?: string;
  color?: string;
  url?: string;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export type messageData = {
  type: 'message';
  value?: string;
  emoji?: string;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export type buttonsData = {
  type: 'buttons';
  horizontalAmount?: number;
  verticalAmount?: number;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export type answersData = {
  type: 'answers';
  horizontalAmount?: number;
  verticalAmount?: number;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export type fileData = {
  type: 'file';
  file: File;
};
