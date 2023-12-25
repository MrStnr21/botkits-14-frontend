import { FC, useMemo } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
import styles from './mode.module.scss';
import LabeledInput from '../../../labeledInput/labeledInput';
import EasyMode from './easy';
import HardMode from './hard';
import { messagesSuccessful } from '../../../utils/data';
import Select from '../../../../../ui/select/select';
import { getSelectItemByValue } from '../../../utils';

export type TModeProps = {
  id: string;
  setTargetBlock: Function;
  index: number;
};

/**
 * компонент-подблок для  взаимодействия с переменной
 */
const Mode: FC<TModeProps> = ({ id, setTargetBlock, index }) => {
  const { getNodes, getNode } = useReactFlow();
  const idNode = useNodeId() || '';
  const nodes = getNodes();
  const node = getNode(idNode);

  const itemFromVariables: {
    id: string;
    type: 'easy' | 'hard';
    variable?: {
      id: string;
      name: string;
      value: string;
    };
    sign?: string;
    condition?: string;
    targetBlock: string;
  } = useMemo(
    () =>
      node &&
      node.data.variables.filter((el: { id: string }) => el.id === id)[0],
    [node]
  );

  const getBlock = useMemo(() => {
    switch (itemFromVariables.type) {
      case 'easy': {
        return <EasyMode index={index} id={id} />;
      }
      case 'hard': {
        return <HardMode index={index} id={id} />;
      }
      default: {
        return null;
      }
    }
  }, [nodes]);

  return (
    <div className={styles.conditional}>
      <LabeledInput title="Если" extraClass={styles.extraClass}>
        {getBlock}
      </LabeledInput>
      <LabeledInput title="То перейти" extraClass={styles.extraClass}>
        <Select
          options={messagesSuccessful}
          handleSelect={(option) => setTargetBlock(option.value)}
          currentOption={getSelectItemByValue(
            itemFromVariables.targetBlock,
            messagesSuccessful
          )}
          elementToCloseListener="flow"
          adaptive
        />
      </LabeledInput>
    </div>
  );
};

export default Mode;
