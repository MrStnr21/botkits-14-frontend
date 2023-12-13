import { FC, useState } from 'react';
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

// eslint-disable-next-line import/no-mutable-exports
export let triggers: TTrigger[] = [];

const TriggerBlock: FC<TTriggerBlockProps> = ({ isOpened, close }) => {
  const [triggersData, setTriggersData] = useState<TTrigger[]>(triggers);

  const handleTriggerData = (
    typeOfAction: 'add' | 'delete' | 'update',
    optional: {
      trigger?: TTrigger;
      id?: string;
    }
  ) => {
    if (typeOfAction === 'add' && optional.trigger) {
      triggers = [...triggersData, optional.trigger];
      setTriggersData(triggers);
    } else if (typeOfAction === 'delete' && optional.id) {
      triggers = triggersData.filter((item) => item.id !== optional.id);
      setTriggersData(triggers);
    } else if (typeOfAction === 'update' && optional.trigger) {
      triggers = triggersData.map((item) => {
        if (item.id === optional.trigger?.id) {
          // eslint-disable-next-line no-param-reassign
          item = optional.trigger!;
        }
        return item;
      });
      setTriggersData(triggers);
    }
  };

  const addTrigger = () => {
    handleTriggerData('add', {
      trigger: {
        id: uuidv4(),
        tag: 'start',
        type: 'block',
        name: 'Блок сообщений',
      },
    });
  };

  return (
    <aside
      className={`${styles.wrap} ${isOpened ? styles.opened : styles.closed}`}
    >
      <div className={styles.header}>
        <div className={styles.box}>
          <div className={styles.img} />
          <h2 className={styles.title}>Триггеры</h2>
        </div>
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
              name={item.name}
              text={item.text}
            />
          );
        })}
        <ConstructorAddButton onClick={addTrigger} unadaptive>
          Добавить тэг
        </ConstructorAddButton>
      </div>
    </aside>
  );
};

export default TriggerBlock;
