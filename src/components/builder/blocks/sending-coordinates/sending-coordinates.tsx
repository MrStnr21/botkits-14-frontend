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
import { validateAndSaveFlow } from './flow';

const SendingCoordinatesBlock: FC<TBlockProps<TCoordinateBlock>> = ({
  data,
}) => {
  const { getNodes, setNodes } = useReactFlow();
  const id = useNodeId() || '';

  const validateAndSave = validateAndSaveFlow({ getNodes, setNodes, id });

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
