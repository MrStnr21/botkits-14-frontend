import { FC } from 'react';
import { useNodeId, useReactFlow } from 'reactflow';
import styles from './sending-coordinates.module.scss';
import ControlLayout from '../../control-layout/control-layout';
import LabeledInput from '../../labeledInput/labeledInput';
import Input from '../../../../ui/inputs/input/input';
import {
  TBlockProps,
  TCoordinateBlock,
} from '../../../../services/types/builder';
import { rangeForCoordinates } from '../../utils/data';

const SendingCoordinatesBlock: FC<TBlockProps<TCoordinateBlock>> = ({
  data,
}) => {
  const { getNodes, setNodes } = useReactFlow();
  const id = useNodeId();

  const save = (type: 'longitude' | 'latitude', newValue: string) => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          const newItem = {
            ...item,
            data: {
              ...item.data,
              coordinates:
                type === 'longitude'
                  ? [newValue, ...item.data.coordinates.slice(1)]
                  : [...item.data.coordinates.slice(0, 1), newValue],
            },
          };
          return newItem;
        }
        return item;
      })
    );
  };

  const validateAndSave =
    (type: 'longitude' | 'latitude') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.value.startsWith('.') || !e.target.value.startsWith(',')) {
        if (/^-?\d*[.,]?\d*$/.test(e.target.value)) {
          const newValue = e.target.value.replace(/,/g, '.');
          const valueArr = newValue.split('.');
          const int = Number(valueArr[0]);
          const fractialPart = valueArr[1];

          const rangeValidate = () => {
            if (
              (newValue.length > 2 &&
                type === 'longitude' &&
                (int < rangeForCoordinates.longitude.min ||
                  int > rangeForCoordinates.longitude.max)) ||
              (newValue.length > 1 &&
                type === 'latitude' &&
                (int < rangeForCoordinates.latitude.min ||
                  int > rangeForCoordinates.latitude.max))
            ) {
              return false;
            }
            return true;
          };

          if (valueArr[0].length < 4 && rangeValidate()) {
            if (newValue.includes('.') && fractialPart) {
              if (fractialPart.length < 6) save(type, newValue);
            } else {
              save(type, newValue);
            }
          }
        }
      }
    };

  return (
    <ControlLayout type="Отправка координат">
      <div className={styles.content}>
        <div className={styles.wrapperInput}>
          <LabeledInput title="Долгота" extraClass={styles.extraClass}>
            <Input
              minLength={0}
              onChange={validateAndSave('longitude')}
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
              onChange={validateAndSave('latitude')}
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
