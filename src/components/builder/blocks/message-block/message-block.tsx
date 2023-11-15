/* eslint-disable react/no-array-index-key */ // Пока элементы в message не draggable
import { FC, useEffect } from 'react';
import { Position, useReactFlow, useNodeId, Node, useStore } from 'reactflow';
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
} from '../../../../services/types/builder';
import File from './file/file';
import HiddenBlock from './hidden-block/hidden-block';
import FielsField from './files-field/fiels-field';
import { setFlowData } from '../../utils';

enum ButtonsBlocksStartPositions {
  first = 170 + 74,
  second = 256 + 74,
  thisrd = 384 + 74,
  fourth = 458 + 74,
}

const MessageBlock: FC<TBlockProps<TMessageBlock>> = ({ data }) => {
  const { seconds, minutes, hours, days } = data.showTime;
  const id = useNodeId() || '';
  const { setNodes, getNodes } = useReactFlow();
  const nodes = getNodes();

  const { domNode } = useStore((s) => s);

  useEffect(() => {}, [domNode]);
  const horButtons = nodes.filter(
    (node) =>
      node.data.type === 'button' &&
      node.data.direction === 'horizontal' &&
      node.parentNode === id
  );

  const verButtons = nodes.filter(
    (node) =>
      node.data.type === 'button' &&
      node.data.direction === 'vertical' &&
      node.parentNode === id
  );

  const horAnswers = nodes.filter(
    (node) =>
      node.data.type === 'answer' &&
      node.data.direction === 'horizontal' &&
      node.parentNode === id
  );

  const verAnswers = nodes.filter(
    (node) =>
      node.data.type === 'answer' &&
      node.data.direction === 'vertical' &&
      node.parentNode === id
  );

  const setVariable = setFlowData({ selectors: ['saveAnswer', 'value'] });
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
      blockOffset: number
    ) =>
    ({ x, y }: { x: number; y: number }) =>
    () => {
      const node: Node = {
        type: 'button',
        id: Math.random().toString(),
        position: { x, y: y + blockOffset },
        data: {
          type: blockType.slice(0, 6),
          direction,
          name: 'имя',
          color: '',
          str: '',
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
              position: { ...item.position, y: item.position.y + 52 },
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

  const content = data.data.map((component, index) => {
    switch (component.type) {
      case MessageDataTypes.answers: {
        return (
          <PanelInline
            addHorizontalButton={addButton(
              MessageDataTypes.answers,
              'horizontal',
              ButtonsBlocksStartPositions.thisrd
            )}
            addVerticalButton={addButton(
              MessageDataTypes.answers,
              'vertical',
              ButtonsBlocksStartPositions.fourth
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
              ButtonsBlocksStartPositions.first
            )}
            addVerticalButton={addButton(
              MessageDataTypes.buttons,
              'vertical',
              ButtonsBlocksStartPositions.second
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
        return <TextField key={index} />;
      }
      default: {
        return null;
      }
    }
  });
  return (
    <ControlLayout type="Блок сообщений">
      <CustomHandle position={Position.Left} type="target" />
      <div className={styles.content}>
        {content}
        <FielsField addFile={addFile} />
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
            onChange={setVariable}
            styled="bot-builder-default"
            value={data.saveAnswer.value}
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
              />
            </div>
          </form>
        </HiddenBlock>
      </div>
    </ControlLayout>
  );
};

export default MessageBlock;
