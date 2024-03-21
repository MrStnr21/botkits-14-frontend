import { v4 as uuid } from 'uuid';
import { Node } from 'reactflow';
import { Descendant } from 'slate';
import { useMediaQuery } from '@mui/material';
import {
  MessageDataTypes,
  TMessageBlockData,
} from '../../../../services/types/builder';
import { connectStrings, saveNode, saveVariable } from '../../utils';
import { storeOfVariables } from '../../utils/store';
import { ButtonSizes, ButtonSizesMobile } from '../../utils/data';
import useFlow from '../../use-flow';
import { switchingWidth } from '../../../../stylesheets/scss-variables';

export const setVariableFlow = () => {
  const { getNodes, setNodes, getNode, id } = useFlow();
  return (finalValue: string) => {
    const idVariable = connectStrings([id, 'saveResultVariable'], '|||');
    if (finalValue === '') {
      const variableIndex = storeOfVariables.findIndex(
        (item) => item.id === idVariable
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      variableIndex !== -1 && storeOfVariables.splice(variableIndex, 1);
    } else {
      saveVariable(storeOfVariables, finalValue, idVariable);
    }
    const node = getNode(id)!;

    saveNode({
      getNodes,
      setNodes,
      node,
      path: ['data', 'saveAnswer', 'value'],
      value: { id: idVariable, name: finalValue, value: '' },
    });
  };
};

export const addButtonFlow = () => {
  const { getNodes, setNodes, id } = useFlow();
  /**
   * функция для добавления `node`- кнопки. Кнопкам необходимо задавать абсолютное позиционирование(механика nodes)
   * @param blockType тип блока, в который добавляется кнопка(`answers` или `buttons`)
   * @param direction вертикальная или горизонтальная кнопка
   * @param blockOffset расстояние между верхней границей MessageBlock и блоком кнопок
   * @param blockOffsetMob расстояние между верхней границей MessageBlock и блоком кнопок для мобильной версии
   * @param blockOffsetDesk расстояние между верхней границей MessageBlock и блоком кнопок для настольной версии
   */
  return (
      blockType: MessageDataTypes.answers | MessageDataTypes.buttons,
      direction: 'horizontal' | 'vertical',
      blockOffset: number,
      blockOffsetMob: number,
      blockOffsetDesk: number,
      buttonSizes: typeof ButtonSizes | typeof ButtonSizesMobile
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

      // Добавление новой ноды кнопки + перерасчет позиций старых
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
};

export const setTextFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return (value: Descendant[]) => {
    const node = getNode(id)!;

    const settedValue = node?.data.data.map((content: TMessageBlockData) => {
      if (content.type === MessageDataTypes.message) {
        return {
          ...content,
          value,
        };
      }
      return content;
    });

    saveNode({
      getNodes,
      setNodes,
      node,
      path: ['data', 'data'],
      value: settedValue,
    });
  };
};

export const toggleStringFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  const isMobile = useMediaQuery(`(max-width: ${switchingWidth})`);
  return () => {
    const node = getNode(id)!;
    const buttonSizes = isMobile ? ButtonSizesMobile : ButtonSizes;
    setNodes([
      ...getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: { ...item.data, additionalData: !node.data.additionalData },
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
};

export const deleteOnClickFlow = () => {
  const isMobile = useMediaQuery(`(max-width: ${switchingWidth})`);
  const { getNodes, setNodes, id, getNode } = useFlow();
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

export const removeFileFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return (fileId: string) => {
    const node = getNode(id)!;
    const value = node.data.data.filter((media: TMessageBlockData) => {
      if (!('fileId' in media)) {
        return true;
      }
      return media.fileId !== fileId;
    });

    saveNode({
      getNodes,
      setNodes,
      node,
      path: ['data', 'data'],
      value,
    });
  };
};
