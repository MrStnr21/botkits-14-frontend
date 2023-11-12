import { FC } from 'react';
import styles from './value.module.scss';
import InputSelect from '../../../../../ui/inputs/input-select/input-select';
import Equal from '../../../../icons/Equal/Equal';
import Input from '../../../../../ui/inputs/input/input';
import { TVariable } from '../../../../../services/types/builder';
import { selectValues } from '../../../utils/data';

export type TValueProps = {
  variable?: TVariable;
  value?: string;
};

const Value: FC<TValueProps> = ({ variable, value }) => {
  return (
    <div className={styles.overlay}>
      <Input
        placeholder="Переменная"
        onChange={() => {}}
        type="text"
        styled="bot-builder-default"
        textColor="default"
        value={variable && variable.name}
      />
      <div className={styles.box}>
        <Equal />
      </div>
      <div className={styles.v}>
        <InputSelect
          defaultValue={[value || selectValues[0].value]}
          values={selectValues}
          maxWidth={98}
          handleFunction={() => {}}
          isAdaptive
        />
      </div>
    </div>
  );
};

export default Value;
