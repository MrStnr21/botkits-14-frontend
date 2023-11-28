import { FC, useMemo } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
import styles from './mode.module.scss';
import LabeledInput from '../../../labeledInput/labeledInput';
import EasyMode from './easy';
import HardMode from './hard';
import { messagesSuccessful } from '../../../utils/data';
import MenumenuSelectFlow from '../../../../../ui/menus/menu-select-flow/menu-select-flow';

export type TModeProps = {
  id: string;
  setTargetBlock: Function;
};

const Mode: FC<TModeProps> = ({ id, setTargetBlock }) => {
  const { getNodes, getNode } = useReactFlow();
  const idNode = useNodeId() || '';
  const nodes = getNodes();
  const node = getNode(idNode);

  const itemFromVariables: {
    id: string;
    type: 'easy' | 'hard';
    variable?: {
      [keyy: string]: any;
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

  const buttonsTargetBlock = messagesSuccessful.map((item) => item.value);

  const active = useMemo(
    () => itemFromVariables.targetBlock !== '',
    [itemFromVariables]
  );

  const getBlock = useMemo(() => {
    switch (itemFromVariables.type) {
      case 'easy': {
        return <EasyMode id={id} />;
      }
      case 'hard': {
        return <HardMode id={id} />;
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
        <MenumenuSelectFlow
          buttons={buttonsTargetBlock}
          nameMenu={itemFromVariables.targetBlock || 'Имя блока'}
          onClick={(name: string) => {
            setTargetBlock(name);
          }}
          active={active}
        />
      </LabeledInput>
    </div>
  );
};

export default Mode;
