import { v4 as uuid } from 'uuid';
import { Node } from 'reactflow';
import {
  MessageDataTypes,
  TButtonBlock,
  TFlowSetter,
  TMessageBlock,
  TMessageBlockData,
} from '../../../../services/types/builder';
import { saveVariable } from '../../utils';
import { storeOfVariables } from '../../utils/store';
import { ButtonSizes, ButtonSizesMobile } from '../../utils/data';

export const setVariableFlow =
  ({ getNodes, setNodes, id }: Omit<TFlowSetter<TMessageBlock>, 'data'>) =>
  (finalValue: string) => {
    const idVariable = `${id}|||saveResultVariable`;
    if (finalValue === '') {
      const variableIndex = storeOfVariables.findIndex(
        (item) => item.id === idVariable
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      variableIndex !== -1 && storeOfVariables.splice(variableIndex, 1);
    } else {
      saveVariable(storeOfVariables, finalValue, idVariable);
    }

    return setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              saveAnswer: {
                ...item.data.saveAnswer,
                value: { id: idVariable, name: finalValue, value: '' },
              },
            },
          };
        }
        return item;
      })
    );
  };

type TAddButtonFlowParams = Omit<TFlowSetter<TMessageBlock>, 'data'> & {
  buttonSizes: typeof ButtonSizes | typeof ButtonSizesMobile;
};

export const addButtonFlow =
  ({ getNodes, setNodes, id, buttonSizes }: TAddButtonFlowParams) =>
  /**
   * функция для добавления `node`- кнопки. Кнопкам необходимо задавать абсолютное позиционирование(механика nodes)
   * @param blockType тип блока, в который добавляется кнопка(`answers` или `buttons`)
   * @param direction вертикальная или горизонтальная кнопка
   * @param blockOffset расстояние между верхней границей MessageBlock и блоком кнопок
   * @param blockOffsetMob расстояние между верхней границей MessageBlock и блоком кнопок для мобильной версии
   * @param blockOffsetDesk расстояние между верхней границей MessageBlock и блоком кнопок для настольной версии
   */
  (
    blockType: MessageDataTypes.answers | MessageDataTypes.buttons,
    direction: 'horizontal' | 'vertical',
    blockOffset: number,
    blockOffsetMob: number,
    blockOffsetDesk: number
  ) =>
  ({
    // расположение кнопки по оси x в px относительно MessageBlock
    x,
    // расположение кнопки по оси y в px относительно MessageBlock
    y,
    // расположение кнопки по оси y в px относительно MessageBlock для мобильной версии
    mobY,
    // расположение кнопки по оси x в px относительно MessageBlock для настольной версии
    deskY,
  }: {
    x: number;
    y: number;
    mobY: number;
    deskY: number;
  }) =>
  () => {
    const node: Node = {
      type: 'button',
      id: uuid(),
      position: { x, y: y + blockOffset },
      data: {
        type: blockType.slice(0, 6),
        direction,
        name: 'имя',
        color: '',
        str: '',
        deskY: deskY + blockOffsetDesk,
        mobY: mobY + blockOffsetMob,
      },
      expandParent: true,
      parentNode: id,
      draggable: false,
    };

    setNodes([
      ...getNodes().map((item) => {
        if (
          item.position.y > node.position.y &&
          node.parentNode === item.parentNode
        ) {
          return {
            ...item,
            position: {
              ...item.position,
              y: item.position.y + buttonSizes.buttonHeight + buttonSizes.gap,
            },
            data: {
              ...item.data,
              deskY:
                item.data.deskY + ButtonSizes.buttonHeight + ButtonSizes.gap,
              mobY:
                item.data.mobY +
                ButtonSizesMobile.buttonHeight +
                ButtonSizesMobile.gap,
            },
          };
        }
        return item;
      }),
      node,
    ]);
  };

export const addFileFlow =
  ({ getNodes, setNodes, id }: Omit<TFlowSetter<TMessageBlock>, 'data'>) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              data: [
                ...item.data.data,
                {
                  type: MessageDataTypes.file,
                  file: e.target.files && e.target.files[0],
                },
              ],
            },
          };
        }
        return item;
      })
    );
  };

export const setTextFlow =
  ({ getNodes, setNodes, id }: Omit<TFlowSetter<TMessageBlock>, 'data'>) =>
  (value: string) => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              data: [
                ...item.data.data.map((content: TMessageBlockData) => {
                  if (content.type === MessageDataTypes.message) {
                    return {
                      ...content,
                      value,
                    };
                  }
                  return content;
                }),
              ],
            },
          };
        }
        return item;
      })
    );
  };

type TToggleStringParams = TFlowSetter<TButtonBlock> & {
  getNode: (id: string) => Node<any> | undefined;
  buttonSizes: typeof ButtonSizes | typeof ButtonSizesMobile;
};

export const toggleStringFlow =
  ({
    getNodes,
    setNodes,
    id,
    getNode,
    data,
    buttonSizes,
  }: TToggleStringParams) =>
  () => {
    const node = getNode(id);
    setNodes([
      ...getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: { ...item.data, additionalData: !data.additionalData },
          };
        }
        if (
          item.position.y > node!.position.y &&
          node?.parentNode === item.parentNode
        ) {
          if (node && node.data.additionalData) {
            return {
              ...item,
              position: {
                ...item.position,
                y: item.position.y - buttonSizes.addString,
              },
              data: {
                ...item.data,
                deskY: item.data.deskY - ButtonSizes.addString,
                mobY: item.data.mobY - ButtonSizesMobile.addString,
              },
            };
          }
          if (node && !node.data.additionalData) {
            return {
              ...item,
              position: {
                ...item.position,
                y: item.position.y + buttonSizes.addString,
              },
              data: {
                ...item.data,
                deskY: item.data.deskY + ButtonSizes.addString,
                mobY: item.data.mobY + ButtonSizesMobile.addString,
              },
            };
          }
        }
        if (item.id === node?.parentNode) {
          return { ...item, data: { ...item.data } };
        }
        return item;
      }),
    ]);
  };

export const setColorFlow =
  ({ getNodes, setNodes, id }: Omit<TFlowSetter<TButtonBlock>, 'data'>) =>
  (color: string) => {
    const nodes = getNodes();
    setNodes(
      nodes.map((item) => {
        if (item.id === id) {
          return { ...item, data: { ...item.data, color } };
        }
        return item;
      })
    );
  };

type TDeleteOnClickParams = Omit<TFlowSetter<TButtonBlock>, 'data'> & {
  getNode: (id: string) => Node<any> | undefined;
  isMobile: boolean;
};

export const deleteOnClickFlow = ({
  getNodes,
  setNodes,
  id,
  getNode,
  isMobile,
}: TDeleteOnClickParams) => {
  const closedButtonSizeDesk = ButtonSizes.buttonHeight + ButtonSizes.gap;
  const openedButtonSizeDesk = closedButtonSizeDesk + ButtonSizes.addString;

  const closedButtonSizeMobile =
    ButtonSizesMobile.buttonHeight + ButtonSizesMobile.gap;
  const openedButtonSizeMobile =
    closedButtonSizeMobile + ButtonSizesMobile.addString;

  const closedButtonSize = isMobile
    ? closedButtonSizeMobile
    : closedButtonSizeDesk;
  const openedButtonSize = isMobile
    ? openedButtonSizeMobile
    : openedButtonSizeDesk;
  return () => {
    const node = getNode(id);
    const nodes = getNodes().filter((item) => item.id !== id);
    setNodes(
      nodes.map((item) => {
        if (
          item.position.y > node!.position.y &&
          node?.parentNode === item.parentNode
        ) {
          return {
            ...item,
            position: {
              ...item.position,
              y:
                item.position.y -
                (node!.data.additionalData
                  ? openedButtonSize
                  : closedButtonSize),
            },
            data: {
              ...item.data,
              deskY:
                item.data.deskY -
                (node!.data.additionalData
                  ? openedButtonSizeDesk
                  : closedButtonSizeDesk),
              mobX:
                item.data.mobY -
                (node!.data.additionalData
                  ? openedButtonSizeMobile
                  : closedButtonSizeMobile),
            },
          };
        }
        if (item.id === node?.parentNode) {
          return { ...item, data: { ...item.data } };
        }
        return item;
      })
    );
  };
};

type TRemoveFileFlowParams = Omit<TFlowSetter<TButtonBlock>, 'data'> & {
  data: File;
};

export const removeFileFlow =
  ({ getNodes, setNodes, id, data }: TRemoveFileFlowParams) =>
  () =>
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              data: item.data.data.filter((media: TMessageBlockData) => {
                return (
                  media.type !== MessageDataTypes.file ||
                  media.file.name !== data.name
                );
              }),
            },
          };
        }
        return item;
      })
    );
