import { FC } from 'react';
import styles from './mode.module.scss';
import InputSelect from '../../../../../ui/inputs/input-select/input-select';
import { selectValues, signSelectValues } from '../../../utils/data';
import { TVariable } from '../../../../../services/types/builder';
import Input from '../../../../../ui/inputs/input/input';

export type TEasyBlockProps = {
  condition?: string;
  variable?: TVariable;
  sign?: string;
};

const EasyMode: FC<TEasyBlockProps> = ({ variable, sign, condition }) => {
  return (
    <div className={styles['labeled-content']}>
      <div className={styles['selects-string']}>
        <InputSelect
          values={selectValues}
          defaultValue={[(variable && variable.name) || selectValues[0].value]}
          maxWidth={184}
          handleFunction={() => {}}
          isAdaptive
        />
        <InputSelect
          handleFunction={() => {}}
          maxWidth={52}
          values={signSelectValues}
          defaultValue={[sign || signSelectValues[0].value]}
          isAdaptive
        />
      </div>
      <Input
        onChange={() => {}}
        styled="bot-builder-default"
        placeholder="Значение"
        value={condition}
      />
    </div>
  );
};

export default EasyMode;
