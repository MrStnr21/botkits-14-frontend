import { FC } from 'react';
import styles from './sending-coordinates.module.scss';
import ControlLayout from '../../control-layout/control-layout';
import LabeledInput from '../../labeledInput/labeledInput';
import Input from '../../../../ui/inputs/input/input';
import {
  TBlockProps,
  TCoordinateBlock,
} from '../../../../services/types/builder';
import { setFlowData } from '../../utils';

const SendingCoordinatesBlock: FC<TBlockProps<TCoordinateBlock>> = ({
  data,
}) => {
  // const [name, setName] = useState(data.name);

  const cb = (e: string | number) => {
    return Number(e);
  };

  const setLongitude = setFlowData({
    selectors: ['coordinates', '0'],
    callback: cb,
  });
  const setLatitude = setFlowData({
    selectors: ['coordinates', '1'],
    callback: cb,
  });

  return (
    <ControlLayout type="Отправка координат">
      <div className={styles.content}>
        <div className={styles.wrapperInput}>
          <LabeledInput title="Долгота" extraClass={styles.extraClass}>
            <Input
              minLength={0}
              type="number"
              onChange={setLongitude}
              styled="bot-builder-default"
              placeholder="Введите параметр"
              value={String(data.coordinates[0])}
            />
          </LabeledInput>
        </div>
        <div className={styles.wrapperInput}>
          <LabeledInput title="Широта" extraClass={styles.extraClass}>
            <Input
              minLength={0}
              type="number"
              onChange={setLatitude}
              styled="bot-builder-default"
              placeholder="Введите параметр"
              value={String(data.coordinates[1])}
            />
          </LabeledInput>
        </div>
      </div>
    </ControlLayout>
  );
};

export default SendingCoordinatesBlock;
