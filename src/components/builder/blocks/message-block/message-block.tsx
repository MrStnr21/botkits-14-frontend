/* eslint-disable react/no-array-index-key */ // Пока элементы в message не draggable
import { FC, useMemo, useState } from 'react';
import { Position, useReactFlow, useNodeId } from 'reactflow';
import { useMediaQuery } from '@mui/material';
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
import { setFlowDataInit } from '../../utils';
import { ButtonSizes, ButtonSizesMobile } from '../../utils/data';
import { addButtonFlow, setTextFlow, setVariableFlow } from './flow';

const MessageBlock: FC<TBlockProps<TMessageBlock>> = ({ data }) => {
  const setFlowData = setFlowDataInit();
  const { seconds, minutes, hours, days } = data.showTime;
  const [amount, render] = useState(0);
  const id = useNodeId() || '';
  const { getNodes } = useReactFlow();
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

  const setVariable = setVariableFlow();

  const toggleVariableBlock = () =>
    setFlowData({
      path: ['data', 'saveAnswer', 'show'],
      value: !data.saveAnswer.show,
    });

  const setTime = (type: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setFlowData({ path: ['data', 'showTime', type], value: e.target.value });
  const toggleTimeBlock = () =>
    setFlowData({
      path: ['data', 'showTime', 'show'],
      value: !data.showTime.show,
    });

  const addButton = addButtonFlow();

  const addFile = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFlowData({
      path: ['data', 'data'],
      value: [
        ...data.data,
        {
          type: MessageDataTypes.file,
          file: e.target.files && e.target.files[0],
        },
      ],
    });

  const setText = setTextFlow();

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
                  ButtonSizes.secondY,
                  buttonSizes
                )}
                addVerticalButton={addButton(
                  MessageDataTypes.answers,
                  'vertical',
                  buttonSizes.secondY + buttonSizes.blockGap,
                  ButtonSizesMobile.secondY + ButtonSizesMobile.blockGap,
                  ButtonSizes.secondY + ButtonSizes.blockGap,
                  buttonSizes
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
                  ButtonSizes.firstY,
                  buttonSizes
                )}
                addVerticalButton={addButton(
                  MessageDataTypes.buttons,
                  'vertical',
                  buttonSizes.firstY + buttonSizes.blockGap,
                  ButtonSizesMobile.firstY + ButtonSizesMobile.blockGap,
                  ButtonSizes.firstY + ButtonSizes.blockGap,
                  buttonSizes
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
