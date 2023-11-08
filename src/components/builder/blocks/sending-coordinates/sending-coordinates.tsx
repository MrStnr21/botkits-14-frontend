import React, { FC, useState } from 'react';
import styles from './sending-coordinates.module.scss';
import ControlLayout from '../../control-layout/control-layout';
import LabeledInput from '../../labeledInput/labeledInput';
import Input from '../../../../ui/inputs/input/input';
import {
  TBlockProps,
  TCoordinateBlock,
} from '../../../../services/types/builder';

type TGetInput = {
  title: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const GetInput: FC<TGetInput> = ({ title, value, onChange }) => {
  return (
    <div className={styles.wrapperInput}>
      <LabeledInput title={title} extraClass={styles.extraClass}>
        <Input
          minLength={0}
          type="number"
          onChange={onChange}
          styled="bot-builder-default"
          placeholder="Введите параметр"
          value={value.toString()}
        />
      </LabeledInput>
    </div>
  );
};

const SendingCoordinatesBlock: FC<TBlockProps<TCoordinateBlock>> = ({
  data,
}) => {
  const [name, setName] = useState(data.name);

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
        <GetInput
          title="Долгота"
          value={data.coordinates[0] || ''}
          onChange={() => {}}
        />
        <GetInput
          title="Широта"
          value={data.coordinates[1] || ''}
          onChange={() => {}}
        />
      </div>
    </ControlLayout>
  );
};

export default SendingCoordinatesBlock;
