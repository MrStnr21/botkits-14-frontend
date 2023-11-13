/* eslint-disable react/no-array-index-key */ // Пока элементы в message не draggable
import { FC } from 'react';
import { Position, useReactFlow, useNodeId } from 'reactflow';
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

const MessageBlock: FC<TBlockProps<TMessageBlock>> = ({ data }) => {
  const id = useNodeId();
  const { getNodes, setNodes } = useReactFlow();
  const { seconds, minutes, hours, days } = data.showTime;

  const setName = (name: string) => {
    const nodes = getNodes();
    setNodes(
      nodes.map((item) => {
        if (item.id === id) {
          return { ...item, data: { ...item.data, name } };
        }
        return item;
      })
    );
  };

  const setVariable = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nodes = getNodes();
    setNodes(
      nodes.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              saveAnswer: { ...item.data.saveAnswer, value: e.target.value },
            },
          };
        }
        return item;
      })
    );
  };

  const toggleVariableBlock = () => {
    const nodes = getNodes();
    setNodes(
      nodes.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              saveAnswer: {
                ...item.data.saveAnswer,
                show: !item.data.saveAnswer.show,
              },
            },
          };
        }
        return item;
      })
    );
  };

  const setTime =
    (type: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const nodes = getNodes();
      setNodes(
        nodes.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              data: {
                ...item.data,
                showTime: {
                  ...item.data.showTime,
                  [type]: e.target.value,
                },
              },
            };
          }
          return item;
        })
      );
    };

  const toggleTimeBlock = () => {
    const nodes = getNodes();
    setNodes(
      nodes.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              showTime: {
                ...item.data.showTime,
                show: !item.data.showTime.show,
              },
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
        return <PanelInline key={index} title="Ответ" />;
      }
      case MessageDataTypes.buttons: {
        return <PanelInline key={index} title="Инлайн кнопка" />;
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
    <ControlLayout name={data.name} type="Блок сообщений" nameSetter={setName}>
      <CustomHandle position={Position.Left} type="target" />
      <div className={styles.content}>
        {content}
        <FielsField />
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
                onChange={setTime(days)}
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
                onChange={setTime(hours)}
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
                onChange={setTime(minutes)}
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
                onChange={setTime(seconds)}
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
