import { FC, useMemo } from 'react';
import styles from './mode.module.scss';
import LabeledInput from '../../../labeledInput/labeledInput';
import EasyMode, { TEasyBlockContent } from './easy';
import HardMode, { THardBlockContent } from './hard';
// import InputSelect from '../../../../../ui/inputs/input-select/input-select';
import { messagesSuccessful } from '../../../utils/data';
import MenumenuSelectFlow from '../../../../../ui/menus/menu-select-flow/menu-select-flow';

type TModeProps = {
  // id: string;
  type: 'easy' | 'hard';
  title: string;
  data: TEasyBlockContent | THardBlockContent;
  targetBlock?: string;
  setTargetBlock: Function;
  setCondition: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  setVariable?: Function;
  setSign?: Function;
};

const Mode: FC<TModeProps> = ({
  // id,
  title,
  type,
  data,
  targetBlock,
  setTargetBlock,
  setCondition,
  setVariable,
  setSign,
}) => {
  const buttonsTargetBlock = messagesSuccessful.map((item) => item.value);

  const active = useMemo(() => targetBlock !== '', [targetBlock]);

  const getBlock = () => {
    switch (type) {
      case 'easy': {
        return (
          <EasyMode
            {...data}
            setCondition={setCondition}
            setVariable={setVariable || (() => {})}
            setSign={setSign || (() => {})}
            id={data.id}
          />
        );
      }
      case 'hard': {
        return <HardMode {...data} setCondition={setCondition} id={data.id} />;
      }
      default: {
        return null;
      }
    }
  };
  return (
    <div className={styles.conditional}>
      <LabeledInput title={title} extraClass={styles.extraClass}>
        {getBlock()}
      </LabeledInput>
      <LabeledInput title="То перейти" extraClass={styles.extraClass}>
        <MenumenuSelectFlow
          buttons={buttonsTargetBlock}
          nameMenu={targetBlock || 'Имя блока'}
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
