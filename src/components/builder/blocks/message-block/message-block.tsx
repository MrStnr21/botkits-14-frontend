/* eslint-disable react/no-array-index-key */ // Пока элементы в message не draggable
import { FC, useEffect, useMemo } from 'react';
import { Position, useReactFlow, useNodeId, Node, useStore } from 'reactflow';
import { useMediaQuery } from '@mui/material';
import { v4 as uuid } from 'uuid';
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
import { setFlowData } from '../../utils';
import { ButtonSizes, ButtonSizesMobile } from '../../utils/data';
// eslint-disable-next-line import/no-cycle
import { storOfVariables } from '../../flow/layoutFlow';

const MessageBlock: FC<TBlockProps<TMessageBlock>> = ({ data }) => {
  const { seconds, minutes, hours, days } = data.showTime;
  const id = useNodeId() || '';
  const { setNodes, getNodes } = useReactFlow();
  const isMobile = useMediaQuery('(max-width: 620px)');
  const buttonSizes = isMobile ? ButtonSizesMobile : ButtonSizes;
  const nodes = getNodes();

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

  const { domNode } = useStore((s) => s);

  useEffect(() => {}, [domNode]);

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

  // const setVariable = setFlowData({ selectors: ['saveAnswer', 'value'] });

  const setVariable = (finalValue: any) => {
    if (storOfVariables.length === 1 && storOfVariables[0].id === '') {
      storOfVariables.splice(0, 1, {
        id: uuid(),
        name: finalValue,
        value: { [finalValue]: '' },
      });
    }
    storOfVariables.push({
      id: uuid(),
      name: finalValue,
      value: { [finalValue]: '' },
    });

    return setNodes(
      nodes.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              saveAnswer: {
                ...item.data.saveAnswer,
                value: { [finalValue]: '' },
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

  const addButton =
    (
      blockType: MessageDataTypes.answers | MessageDataTypes.buttons,
      direction: 'horizontal' | 'vertical',
      blockOffset: number,
      blockOffsetMob: number,
      blockOffsetDesk: number
    ) =>
    ({
      x,
      y,
      mobY,
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

  const setText = (value: string) => {
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
              <TextField text={component.value} setText={setText} key={index} />
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
      <div className={styles.content}>
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
            value={Object.keys(data.saveAnswer.value)[0]}
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
