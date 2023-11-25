import { FC, useState } from 'react';
import { useNodeId, useReactFlow } from 'reactflow';
import styles from './sending-coordinates.module.scss';
import ControlLayout from '../../control-layout/control-layout';
import LabeledInput from '../../labeledInput/labeledInput';
import Input from '../../../../ui/inputs/input/input';
import {
  TBlockProps,
  TCoordinateBlock,
} from '../../../../services/types/builder';
// import { setFlowData } from '../../utils';

const SendingCoordinatesBlock: FC<TBlockProps<TCoordinateBlock>> = ({
  data,
}) => {
  const [coordinates, setCoordinates] = useState({
    longitude: 0,
    latitude: 0,
  });
  // const [name, setName] = useState(data.name);
  const { getNodes, setNodes } = useReactFlow();
  const id = useNodeId();

  const save = () => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...data,
              coordinates: [coordinates.longitude, coordinates.latitude],
            },
          };
        }
        return item;
      })
    );
  };

  const onChangeNodeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'longitude' | 'latitude'
  ) => {
    setCoordinates({ ...coordinates, [type]: Number(e.target.value) });
    save();
  };

  // const cb = (e: string | number) => {
  //   return Number(e);
  // };

  // const setLongitude = setFlowData({
  //   selectors: ['coordinates', '0'],
  //   callback: cb,
  // });
  // const setLatitude = setFlowData({
  //   selectors: ['coordinates', '1'],
  //   callback: cb,
  // });

  return (
    <ControlLayout type="Отправка координат">
      <div className={styles.content}>
        <div className={styles.wrapperInput}>
          <LabeledInput title="Долгота" extraClass={styles.extraClass}>
            <Input
              minLength={0}
              type="number"
              onChange={(e) => onChangeNodeInput(e, 'longitude')}
              styled="bot-builder-default"
              placeholder="Введите параметр"
              value={String(data.coordinates[0]) || coordinates.longitude}
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
              value={String(data.coordinates[1]) || coordinates.latitude}
            />
          </LabeledInput>
        </div>
      </div>
    </ControlLayout>
  );
};

export default SendingCoordinatesBlock;
