import React, { ChangeEvent, FC, useState } from 'react';
import { useNodeId, useReactFlow } from 'reactflow';
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
  const [coordinates, setCoordinates] = useState({
    latitude: '',
    longitude: '',
  });
  const { setNodes, getNodes } = useReactFlow();
  const nodeId = useNodeId();

  const save = () => {
    const newNodes = getNodes().map((node) => {
      if (node.id === nodeId) {
        return {
          ...node,
          data: {
            ...data,
            coordinates: [coordinates.longitude, coordinates.latitude],
          },
        };
      }
      return node;
    });

    setNodes(newNodes);

    console.log(
      // eslint-disable-next-line array-callback-return, consistent-return
      getNodes().map((node) => {
        if (node.id === nodeId) return node;
      })
    );
  };

  const onChangeNodeInput = (
    e: ChangeEvent<HTMLInputElement>,
    type: 'latitude' | 'longitude'
  ) => {
    const newCoordinates = { ...coordinates, [type]: e.target.value };
    setCoordinates(newCoordinates);

    save();
  };

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
              onChange={(e) => {
                onChangeNodeInput(e, 'longitude');
              }}
              styled="bot-builder-default"
              placeholder="Введите параметр"
              value={String(data.coordinates[0] || coordinates.longitude)}
            />
          </LabeledInput>
        </div>
        <div className={styles.wrapperInput}>
          <LabeledInput title="Широта" extraClass={styles.extraClass}>
            <Input
              minLength={0}
              type="number"
              onChange={(e) => {
                onChangeNodeInput(e, 'latitude');
              }}
              styled="bot-builder-default"
              placeholder="Введите параметр"
              value={String(data.coordinates[1] || coordinates.latitude)}
            />
          </LabeledInput>
        </div>
      </div>
    </ControlLayout>
  );
};

export default SendingCoordinatesBlock;
