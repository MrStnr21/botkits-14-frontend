import { FC, useState } from 'react';
import { Position } from 'reactflow';
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
import { getTimeDHMS } from '../../utils';
import FielsField from './files-field/fiels-field';

const MessageBlock: FC<TBlockProps<TMessageBlock>> = ({ data }) => {
  const [name, setName] = useState(data.name);

  const content = data.data.map((component) => {
    switch (component.type) {
      case MessageDataTypes.answers: {
        return <PanelInline title="Ответ" />;
      }
      case MessageDataTypes.buttons: {
        return <PanelInline title="Инлайн кнопка" />;
      }
      case MessageDataTypes.file: {
        return <File data={component.file} />;
      }
      case MessageDataTypes.message: {
        return <TextField />;
      }
      default: {
        return null;
      }
    }
  });

  const { s, m, h, d } = getTimeDHMS(data.showTime || 0);
  return (
    <ControlLayout
      name={name}
      type="Блок сообщений"
      nameSetter={(a) => {
        setName(a);
      }}
    >
      <CustomHandle position={Position.Left} type="target" />
      <div className={styles.content}>
        {content}
        <FielsField />
      </div>
      <hr className={styles['split-line']} />
      <div className={styles['hidden-blocks']}>
        <HiddenBlock name="Сохранить ответ">
          <Input
            placeholder="Введите переменную"
            onChange={() => {}}
            styled="bot-builder-default"
          />
        </HiddenBlock>
        <HiddenBlock name="Время вывода ">
          <form className={styles['inputs-num']}>
            <div className={styles['labeled-input']}>
              <label htmlFor="d">Дней</label>
              <Input
                name="d"
                placeholder="0"
                onChange={() => {}}
                styled="bot-builder-num"
                value={d.toString() || ''}
              />
            </div>
            <div className={styles['labeled-input']}>
              <label htmlFor="h">Часов</label>
              <Input
                name="h"
                placeholder="0"
                onChange={() => {}}
                styled="bot-builder-num"
                value={h.toString() || ''}
              />
            </div>
            <div className={styles['labeled-input']}>
              <label htmlFor="m">Минут</label>
              <Input
                name="m"
                placeholder="0"
                onChange={() => {}}
                styled="bot-builder-num"
                value={m.toString() || ''}
              />
            </div>
            <div className={styles['labeled-input']}>
              <label htmlFor="s">Секунд</label>
              <Input
                name="s"
                placeholder="0"
                onChange={() => {}}
                styled="bot-builder-num"
                value={s.toString() || ''}
              />
            </div>
          </form>
        </HiddenBlock>
      </div>
    </ControlLayout>
  );
};

export default MessageBlock;
