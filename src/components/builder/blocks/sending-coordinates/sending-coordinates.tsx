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
// import { setFlowData } from '../../utils';

const SendingCoordinatesBlock: FC<TBlockProps<TCoordinateBlock>> = ({
  data,
}) => {
  // const [name, setName] = useState(data.name);
  const { getNodes, setNodes } = useReactFlow();
  const id = useNodeId();

  const save =
    (type: 'longitude' | 'latitude') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNodes(
        getNodes().map((item) => {
          if (item.id === id) {
            const newItem = {
              ...item,
              data: {
                ...item.data,
                coordinates:
                  type === 'longitude'
                    ? [
                        Number(e.target.value),
                        ...item.data.coordinates.slice(1),
                      ]
                    : [
                        ...item.data.coordinates.slice(0, 1),
                        Number(e.target.value),
                      ],
              },
            };
            return newItem;
          }
          return item;
        })
      );
    };

  return (
    <ControlLayout type="Отправка координат">
      <div className={styles.content}>
        <div className={styles.wrapperInput}>
          <LabeledInput title="Долгота" extraClass={styles.extraClass}>
            <Input
              minLength={0}
              type="number"
              onChange={save('longitude')}
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
              onChange={save('latitude')}
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
