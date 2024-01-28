import React, { ChangeEvent, FC, useState } from 'react';

import styles from './trigger.module.scss';

import Input from '../../../ui/inputs/input/input';
import ConstructorDefaultButton from '../../../ui/buttons/constructor-default-button/constructor-default-button';
import { TTrigger } from '../../../services/types/builder';
import { messagesSuccessful } from '../utils/data';
import Select from '../../../ui/select/select';
import { Option } from '../../../utils/types';
import { getSelectItemByValue } from '../utils';

export interface ITriggerProps {
  /**
   * функция для обновления состояния триггера
   * @param typeOfAction тип действия с триггером
   * @param optional объект настройки с 2-мя необязательными полями: `trigger` с новым состоянием триггера или `id` нового триггера
   */
  handleTriggerData: (
    typeOfAction: 'add' | 'delete' | 'update',
    optional: {
      trigger?: TTrigger;
      id?: string;
    }
  ) => void;
  id: string;
  myTag: string;
  type?: 'block' | 'text';
  text?: string;
  name?: string;
}

const Trigger: FC<ITriggerProps> = ({
  id,
  handleTriggerData,
  myTag,
  type,
  text,
  name,
}) => {
  const getDefaultAnswerType = () => {
    if (text) {
      return 'text';
    }
    if (name) {
      return 'block';
    }
    if (type) {
      return type;
    }
    return 'block';
  };

  const [answerType, setAnswerType] = useState<'block' | 'text'>(
    getDefaultAnswerType()
  );

  const handleChangeState =
    (
      state: 'tag' | 'answer type' | 'text' | 'block',
      answer?: 'block' | 'text'
    ) =>
    (e?: ChangeEvent<HTMLInputElement>) => {
      switch (state) {
        case 'tag': {
          handleTriggerData('update', {
            trigger: { id, type: answerType, tag: e!.target.value },
          });
          break;
        }
        case 'answer type': {
          setAnswerType(answer!);
          handleTriggerData('update', {
            trigger: { id, type: answer!, tag: myTag },
          });
          break;
        }
        case 'text': {
          handleTriggerData('update', {
            trigger: { id, type: 'text', tag: myTag, text: e?.target.value },
          });
          break;
        }
        default: {
          break;
        }
      }
    };

  return (
    <article className={styles.wrap}>
      <div className={styles.block}>
        <div className={styles.header}>
          <h3 className={styles.title}>Тэг</h3>
          <div onClick={() => handleTriggerData('delete', { id })}>
            <div className={styles.trashIcon} />
          </div>
        </div>
        <Input
          styled="bot-builder-default"
          placeholder="Введите тэг"
          value={`${myTag}`}
          onChange={handleChangeState('tag')}
          unadaptive
        />
      </div>
      <div className={styles.block}>
        <h3 className={styles.title}>Ответное действие бота</h3>
        <div className={styles.buttons}>
          <ConstructorDefaultButton
            onClick={handleChangeState('answer type', 'block')}
            isActive={answerType === 'block'}
            unadaptive
          >
            Блоком
          </ConstructorDefaultButton>
          <ConstructorDefaultButton
            onClick={handleChangeState('answer type', 'text')}
            isActive={answerType === 'text'}
            unadaptive
          >
            Текстом
          </ConstructorDefaultButton>
        </div>
        {answerType === 'block' ? (
          <Select
            options={messagesSuccessful}
            handleSelect={(option: Option) =>
              handleTriggerData('update', {
                trigger: { id, type: 'block', tag: myTag, name: option.value },
              })
            }
            currentOption={getSelectItemByValue(name!, messagesSuccessful)}
            elementToCloseListener="flow"
          />
        ) : (
          <Input
            value={text}
            onChange={handleChangeState('text')}
            placeholder="Введите ответ"
          />
        )}
      </div>
    </article>
  );
};

export default Trigger;
