import { FC } from 'react';
import Input from '../../../../../ui/inputs/input/input';
import styles from './val-field.module.scss';

type TValField = {
  name: string;
  onChangeName: React.ChangeEventHandler;
  value: string;
  onChangeVal: React.ChangeEventHandler;
};

const ValField: FC<TValField> = ({
  name,
  onChangeName,
  value,
  onChangeVal,
}) => {
  return (
    <form className={styles.form}>
      <Input
        styled="bot-builder-default"
        onChange={onChangeName}
        placeholder="Название"
        value={name}
        minLength={0}
      />
      <Input
        styled="bot-builder-default"
        onChange={onChangeVal}
        placeholder="Переменная"
        value={value}
        minLength={0}
      />
    </form>
  );
};

export default ValField;
