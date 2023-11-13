import React, { FC, useState } from 'react';
import styles from './sending-coordinates.module.scss';
import ControlLayout from '../../control-layout/control-layout';
import LabeledInput from '../../labeledInput/labeledInput';
import Input from '../../../../ui/inputs/input/input';
import {
  TBlockProps,
  TCoordinateBlock,
} from '../../../../services/types/builder';

const SendingCoordinatesBlock: FC<TBlockProps<TCoordinateBlock>> = ({
  data,
}) => {
  const [name, setName] = useState(data.name);

  return (
    <ControlLayout
      type="Отправка координат"
      name={name}
      nameSetter={(newName: string) => {
        setName(newName);
      }}
    >
      <div className={styles.content}>
        <div className={styles.wrapperInput}>
          <LabeledInput title="Долгота" extraClass={styles.extraClass}>
            <Input
              minLength={0}
              type="number"
              onChange={() => {}}
              styled="bot-builder-default"
              placeholder="Введите параметр"
              value={String(data.coordinates[0] || '')}
            />
          </LabeledInput>
        </div>
        <div className={styles.wrapperInput}>
          <LabeledInput title="Широта" extraClass={styles.extraClass}>
            <Input
              minLength={0}
              type="number"
              onChange={() => {}}
              styled="bot-builder-default"
              placeholder="Введите параметр"
              value={String(data.coordinates[1] || '')}
            />
          </LabeledInput>
        </div>
      </div>
    </ControlLayout>
  );
};

export default SendingCoordinatesBlock;
