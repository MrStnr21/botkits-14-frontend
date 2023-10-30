import { FC } from 'react';
import styles from './panel-inline.module.scss';

import LabeledInput from '../../../labeledInput/labeledInput';
import ConstructorAddButton from '../../../../../ui/buttons/constructor-add-button/constructor-add-button';
import Input from '../../../../../ui/inputs/input/input';

interface IPanelInline {
  // eslint-disable-next-line react/no-unused-prop-types
  title: string;
}

const PanelInline: FC<IPanelInline> = (title) => {
  /* const [name, setName] = useState('Название отправки координат');

  const handleNameChange = (newName: string) => {
    setName(newName);
  }; */
  const addHor = () => {};

  return (
    <div className={styles.wrapperInput}>
      <LabeledInput title={title} extraClass={styles.extraClass}>
        <ConstructorAddButton onClick={addHor}>
          Горизонтальный инлайн
        </ConstructorAddButton>
        <Input
          onChange={() => {}}
          styled="bot-builder-default"
          placeholder="Введите параметр"
        />
      </LabeledInput>
    </div>
  );
};

export default PanelInline;
