import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './triggerBlock.module.scss';
import CloseIcon from '../../icons/Close/CloseIcon';
import ConstructorAddButton from '../../../ui/buttons/constructor-add-button/constructor-add-button';
import Trigger from '../trigger/trigger';
import { TTrigger } from '../../../services/types/builder';

type TTriggerBlockProps = {
  isOpened: boolean;
  close: () => void;
};

const TriggerBlock: FC<TTriggerBlockProps> = ({ isOpened, close }) => {
  const [triggersData, setTriggersData] = useState<TTrigger[]>([]);

  const handleTriggerData = (
    typeOfAction: 'add' | 'delete' | 'update',
    optional: {
      trigger?: TTrigger;
      id?: string;
    }
  ) => {
    if (typeOfAction === 'add' && optional.trigger) {
      setTriggersData([...triggersData, optional.trigger]);
    } else if (typeOfAction === 'delete' && optional.id) {
      setTriggersData(triggersData.filter((item) => item.id !== optional.id));
    } else if (typeOfAction === 'update' && optional.trigger) {
      setTriggersData(
        triggersData.map((item) => {
          if (item.id === optional.trigger?.id) {
            // eslint-disable-next-line no-param-reassign
            item = optional.trigger!;
          }
          return item;
        })
      );
    }
  };

  const addTrigger = () => {
    handleTriggerData('add', {
      trigger: {
        id: uuidv4(),
        tag: 'start',
        type: 'block',
      },
    });
  };

  return (
    <aside
      className={`${styles.wrap} ${isOpened ? styles.opened : styles.closed}`}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>Триггеры</h2>
        <div onClick={close} className={styles.close}>
          <CloseIcon color="#A6B3C9" />
        </div>
      </div>
      <div className={styles.triggers}>
        {triggersData.map((item) => {
          return (
            <Trigger
              handleTriggerData={handleTriggerData}
              id={item.id}
              key={item.id}
              myTag={item.tag}
              type={item.type}
            />
          );
        })}
        <ConstructorAddButton onClick={addTrigger}>
          Добавить тэг
        </ConstructorAddButton>
      </div>
    </aside>
  );
};

export default TriggerBlock;
