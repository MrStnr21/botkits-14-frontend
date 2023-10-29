import { ReactElement, useState } from 'react';
import styles from './sending-coordinates-block.module.scss';
import ControlLayout from '../../control-layout/control-layout';
import LabeledInput from '../../labeledInput/labeledInput';
import Input from '../../../../ui/inputs/input/input';

const GetInput = (title: string) => {
  return (
    <div className={styles.wrapperInput}>
      <LabeledInput title={title} extraClass={styles.extraClass}>
        <Input
          onChange={() => {}}
          styled="bot-builder-default"
          placeholder="Введите параметр"
        />
      </LabeledInput>
    </div>
  );
};

const SendingCoordinatesBlock = (): ReactElement => {
  const [name, setName] = useState('Название отправки координат');

  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  return (
    <ControlLayout
      type="Отправка координат"
      name={name}
      nameSetter={handleNameChange}
    >
      <div className={styles.content}>
        {GetInput('Долгота')}
        {GetInput('Широта')}
      </div>
    </ControlLayout>
  );
};

export default SendingCoordinatesBlock;
