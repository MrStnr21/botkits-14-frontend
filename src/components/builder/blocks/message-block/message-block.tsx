/* eslint-disable react/no-array-index-key */ // Пока элементы в message не draggable
import { FC, useMemo, useState } from 'react';
import { Position, useReactFlow, useNodeId, Node } from 'reactflow';
import { useMediaQuery } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { Descendant } from 'slate';
import styles from './message-block.module.scss';
import ControlLayout from '../../control-layout/control-layout';
import TextField from '../../../../ui/text-field/text-field';
import PanelInline from './panel-inline/panel-inline';
import Input from '../../../../ui/inputs/input/input';
import CustomHandle from '../../flow/custom-handle/custom-handle';
import {
  MessageDataTypes,
  TBlockProps,
  TMessageBlock,
  TMessageBlockData,
} from '../../../../services/types/builder';
import File from './file/file';
import HiddenBlock from './hidden-block/hidden-block';
import FielsField from './files-field/fiels-field';
import { saveVariable, setFlowData } from '../../utils';
import { ButtonSizes, ButtonSizesMobile } from '../../utils/data';
import { storeOfVariables } from '../../utils/store';

const MessageBlock: FC<TBlockProps<TMessageBlock>> = ({ data }) => {
  const { seconds, minutes, hours, days } = data.showTime;
  const [amount, render] = useState(0);
  const id = useNodeId() || '';
  const { setNodes, getNodes } = useReactFlow();
  const isMobile = useMediaQuery('(max-width: 620px)');
  const buttonSizes = isMobile ? ButtonSizesMobile : ButtonSizes;
  const nodes = getNodes();

  // загружено ли пользователем изображение
  const image = useMemo(
    () =>
      !!data.data.find((item) => {
        return (
          item.type === MessageDataTypes.file &&
          item.file.type.includes('image')
        );
      }),
    [data.data]
  );
  // загружен ли пользователем документ
  const doc = useMemo(
    () =>
      !!data.data.find((item) => {
        return (
          item.type === MessageDataTypes.file &&
          item.file.type.includes('application')
        );
      }),
    [data.data]
  );
  // загружено ли пользователем видео
  const video = useMemo(
    () =>
      !!data.data.find((item) => {
        return (
          item.type === MessageDataTypes.file &&
          item.file.type.includes('video')
        );
      }),
    [data.data]
  );
  // загружено ли пользователем аудио
  const audio = useMemo(
    () =>
      !!data.data.find((item) => {
        return (
          item.type === MessageDataTypes.file &&
          item.file.type.includes('audio')
        );
      }),
    [data.data]
  );

  // список горизонтальных кнопок
  const horButtons = useMemo(
    () =>
      nodes.filter(
        (node) =>
          node.data.type === 'button' &&
          node.data.direction === 'horizontal' &&
          node.parentNode === id
      ),
    [nodes]
  );

  // список вертикальных кнопок
  const verButtons = useMemo(
    () =>
      nodes.filter(
        (node) =>
          node.data.type === 'button' &&
          node.data.direction === 'vertical' &&
          node.parentNode === id
      ),
    [nodes]
  );

  // список горизонтальных ответов
  const horAnswers = useMemo(
    () =>
      nodes.filter(
        (node) =>
          node.data.type === 'answer' &&
          node.data.direction === 'horizontal' &&
          node.parentNode === id
      ),
    [nodes]
  );

  // список вертикальных ответов
  const verAnswers = useMemo(
    () =>
      nodes.filter(
        (node) =>
          node.data.type === 'answer' &&
          node.data.direction === 'vertical' &&
          node.parentNode === id
      ),
    [nodes]
  );

  const setVariable = (finalValue: string) => {
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
      nodes.map((item) => {
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

  const toggleVariableBlock = setFlowData({
    selectors: ['saveAnswer', 'show'],
    value: !data.saveAnswer.show,
  });

  const setTime = (type: string) =>
    setFlowData({ selectors: ['showTime', type] });
  const toggleTimeBlock = setFlowData({
    selectors: ['showTime', 'show'],
    value: !data.showTime.show,
  });

  /**
   * функция для добавления `node`- кнопки. Кнопкам необходимо задавать абсолютное позиционирование(механика nodes)
   * @param blockType тип блока, в который добавляется кнопка(`answers` или `buttons`)
   * @param direction вертикальная или горизонтальная кнопка
   * @param blockOffset расстояние между верхней границей MessageBlock и блоком кнопок
   * @param blockOffsetMob расстояние между верхней границей MessageBlock и блоком кнопок для мобильной версии
   * @param blockOffsetDesk расстояние между верхней границей MessageBlock и блоком кнопок для настольной версии
   */
  const addButton =
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

  const addFile = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const setText = (value: Descendant[]) => {
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

  // подблоки MessageBlock, передаваемые при помощи массива в data.data с полем type
  const content = useMemo(
    () =>
      data.data.map((component, index) => {
        switch (component.type) {
          case MessageDataTypes.answers: {
            return (
              <PanelInline
                addHorizontalButton={addButton(
                  MessageDataTypes.answers,
                  'horizontal',
                  buttonSizes.secondY,
                  ButtonSizesMobile.secondY,
                  ButtonSizes.secondY
                )}
                addVerticalButton={addButton(
                  MessageDataTypes.answers,
                  'vertical',
                  buttonSizes.secondY + buttonSizes.blockGap,
                  ButtonSizesMobile.secondY + ButtonSizesMobile.blockGap,
                  ButtonSizes.secondY + ButtonSizes.blockGap
                )}
                buttonsBefore={[...horButtons, ...verButtons]}
                horizontalButtons={horAnswers}
                verticalButtons={verAnswers}
                key={index}
                title="Ответ"
              />
            );
          }
          case MessageDataTypes.buttons: {
            return (
              <PanelInline
                addHorizontalButton={addButton(
                  MessageDataTypes.buttons,
                  'horizontal',
                  buttonSizes.firstY,
                  ButtonSizesMobile.firstY,
                  ButtonSizes.firstY
                )}
                addVerticalButton={addButton(
                  MessageDataTypes.buttons,
                  'vertical',
                  buttonSizes.firstY + buttonSizes.blockGap,
                  ButtonSizesMobile.firstY + ButtonSizesMobile.blockGap,
                  ButtonSizes.firstY + ButtonSizes.blockGap
                )}
                buttonsBefore={[]}
                horizontalButtons={horButtons}
                verticalButtons={verButtons}
                key={index}
                title="Инлайн кнопка"
              />
            );
          }
          case MessageDataTypes.file: {
            return <File key={index} data={component.file} />;
          }
          case MessageDataTypes.message: {
            return (
              <TextField
                text={component.value}
                setText={setText}
                key={index}
                adaptive
              />
            );
          }
          default: {
            return null;
          }
        }
      }),
    [nodes]
  );
  return (
    <ControlLayout type="Блок сообщений">
      <CustomHandle position={Position.Left} type="target" />
      <div
        className={styles.content}
        onClick={() => setTimeout(() => render(amount + 1))}
      >
        {content}
        <FielsField
          addFile={addFile}
          image={image}
          doc={doc}
          video={video}
          audio={audio}
        />
      </div>
      <hr className={styles['split-line']} />
      <div className={styles['hidden-blocks']}>
        <HiddenBlock
          name="Сохранить ответ"
          toggle={toggleVariableBlock}
          visible={data.saveAnswer.show}
        >
          <Input
            minLength={0}
            placeholder="Введите переменную"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setVariable(event.target.value)
            }
            styled="bot-builder-default"
            value={data.saveAnswer.value.name}
          />
        </HiddenBlock>
        <HiddenBlock
          name="Время вывода"
          toggle={toggleTimeBlock}
          visible={data.showTime.show}
        >
          <form className={styles['inputs-num']}>
            <div className={styles['labeled-input']}>
              <label htmlFor="d">Дней</label>
              <Input
                name="d"
                placeholder="0"
                onChange={setTime('days')}
                styled="bot-builder-num"
                value={days}
                type="number"
                min="0"
              />
            </div>
            <div className={styles['labeled-input']}>
              <label htmlFor="h">Часов</label>
              <Input
                name="h"
                placeholder="0"
                onChange={setTime('hours')}
                styled="bot-builder-num"
                value={hours}
                type="number"
                min="0"
                max="23"
              />
            </div>
            <div className={styles['labeled-input']}>
              <label htmlFor="m">Минут</label>
              <Input
                name="m"
                placeholder="0"
                onChange={setTime('minutes')}
                styled="bot-builder-num"
                value={minutes}
                type="number"
                min="0"
                max="59"
              />
            </div>
            <div className={styles['labeled-input']}>
              <label htmlFor="s">Секунд</label>
              <Input
                name="s"
                placeholder="0"
                onChange={setTime('seconds')}
                styled="bot-builder-num"
                value={seconds}
                type="number"
                min="0"
                max="59"
              />
            </div>
          </form>
        </HiddenBlock>
      </div>
    </ControlLayout>
  );
};

export default MessageBlock;
