import React, { ChangeEvent, FC, useState } from 'react';

import styles from './trigger.module.scss';

import Input from '../../../ui/inputs/input/input';
import ConstructorDefaultButton from '../../../ui/buttons/constructor-default-button/constructor-default-button';
import MenuVariable from '../../../ui/menus/menu-variable/menu-variable';
import TrashIcon from '../../icons/Trash/TrashIcon';
import { TTrigger } from '../../../services/types/builder';

export interface ITriggerProps {
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
}

type TButtons = 'Приветствие' | 'Какое-нибудь действие' | 'Прощание';

const Trigger: FC<ITriggerProps> = ({ id, handleTriggerData, myTag, type }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [answerType, setAnswerType] = useState<'block' | 'text'>(type!);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [action, setAction] = useState<TButtons>('Приветствие');

  const handleChangeState =
    (state: 'tag' | 'answer type', answer?: 'block' | 'text') =>
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
        default: {
          break;
        }
      }
    };

  // Это заглушка, пока неизвестно что и как будет сюда попадать
  const getButtons = () => {
    return ['Приветствие', 'Какое-нибудь действие', 'Прощание'];
  };

  return (
    <article className={styles.wrap}>
      <div className={styles.block}>
        <div className={styles.header}>
          <h3 className={styles.title}>Тэг</h3>
          <div onClick={() => handleTriggerData('delete', { id })}>
            <TrashIcon />
          </div>
        </div>
        <Input
          styled="bot-builder-default"
          placeholder="Введите тэг"
          value={`${myTag}`}
          onChange={handleChangeState('tag')}
        />
      </div>
      <div className={styles.block}>
        <h3 className={styles.title}>Ответное действие бота</h3>
        <div className={styles.buttons}>
          <ConstructorDefaultButton
            onClick={handleChangeState('answer type', 'block')}
            isActive={answerType === 'block'}
          >
            Блоком
          </ConstructorDefaultButton>
          <ConstructorDefaultButton
            onClick={handleChangeState('answer type', 'text')}
            isActive={answerType === 'text'}
          >
            Текстом
          </ConstructorDefaultButton>
        </div>
        <MenuVariable
          // eslint-disable-next-line @typescript-eslint/no-shadow
          onClick={(action: TButtons) => {
            setAction(action);
          }}
          width="256px"
          nameMenu={getButtons()[0]}
          buttons={getButtons()}
        />
      </div>
    </article>
  );
};

export default Trigger;
