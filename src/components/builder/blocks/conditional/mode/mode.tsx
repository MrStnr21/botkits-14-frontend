import { FC } from 'react';
import styles from './mode.module.scss';
import LabeledInput from '../../../labeledInput/labeledInput';
import EasyMode, { TEasyBlockProps } from './easy';
import HardMode, { THardBlockProps } from './hard';
import InputSelect from '../../../../../ui/inputs/input-select/input-select';
import { selectValues } from '../../../utils/data';

type TModeProps = {
  type: 'easy' | 'hard';
  title: string;
  data: TEasyBlockProps | THardBlockProps;
  targetBlock?: string;
};

const Mode: FC<TModeProps> = ({ title, type, data, targetBlock }) => {
  const getBlock = () => {
    switch (type) {
      case 'easy': {
        return <EasyMode {...data} />;
      }
      case 'hard': {
        return <HardMode {...data} />;
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
        <InputSelect
          values={selectValues}
          defaultValue={[targetBlock || selectValues[0].value]}
          maxWidth={240}
          handleFunction={() => {}}
          isAdaptive
        />
      </LabeledInput>
    </div>
  );
};

export default Mode;
