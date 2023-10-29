import { FC, useState } from 'react';
import styles from './conditional-block.module.scss';
import ControlLayout from '../../control-layout/control-layout';
import ConstructorAddButton from '../../../../ui/buttons/constructor-add-button/constructor-add-button';
import LabeledInput from '../../labeledInput/labeledInput';
import InputSelect from '../../../../ui/inputs/input-select/input-select';
import Input from '../../../../ui/inputs/input/input';
import equalImage from '../../../../images/icon/24x24/variables/equal.svg';
import notEqualImage from '../../../../images/icon/24x24/variables/equal-not.svg';
import noCaseEqualImage from '../../../../images/icon/24x24/variables/equal without case.svg';
import inLineNoCaseImage from '../../../../images/icon/24x24/variables/in line without case.svg';
import inLineImage from '../../../../images/icon/24x24/variables/in line.svg';
import lessOrEqualImage from '../../../../images/icon/24x24/variables/less or equal.svg';
import lessImage from '../../../../images/icon/24x24/variables/less.svg';
import moreOrEqualImage from '../../../../images/icon/24x24/variables/more or equal.svg';
import moreImage from '../../../../images/icon/24x24/variables/more.svg';
import notInLineWithoutCaseImage from '../../../../images/icon/24x24/variables/not in line without case.svg';
import notInLineImage from '../../../../images/icon/24x24/variables/not in line.svg';

const values = [
  {
    nameValue: equalImage,
    value: '1',
    isIcon: true,
    iconDescription: 'Равно',
  },
  {
    nameValue: notEqualImage,
    value: '2',
    isIcon: true,
    iconDescription: 'Не равно',
  },
  {
    nameValue: moreImage,
    value: '3',
    isIcon: true,
    iconDescription: 'Больше',
  },
  {
    nameValue: moreOrEqualImage,
    value: '4',
    isIcon: true,
    iconDescription: 'Больше или равно',
  },
  {
    nameValue: lessImage,
    value: '5',
    isIcon: true,
    iconDescription: 'Меньше',
  },
  {
    nameValue: lessOrEqualImage,
    value: '6',
    isIcon: true,
    iconDescription: 'Меньше или равно',
  },
  {
    nameValue: noCaseEqualImage,
    value: '7',
    isIcon: true,
    iconDescription: 'Равно (без учёта регистра)',
  },
  {
    nameValue: inLineNoCaseImage,
    value: '8',
    isIcon: true,
    iconDescription: 'Входит в строку (без учёта регистра)',
  },
  {
    nameValue: inLineImage,
    value: '9',
    isIcon: true,
    iconDescription: 'Входит в строку',
  },
  {
    nameValue: notInLineWithoutCaseImage,
    value: '10',
    isIcon: true,
    iconDescription: 'Не входит в строку (без учёта регистра)',
  },
  {
    nameValue: notInLineImage,
    value: '11',
    isIcon: true,
    iconDescription: 'Не входит в строку',
  },
];

const selectValues = [
  { value: '1', nameValue: '1' },
  { value: '2', nameValue: '2' },
  { value: '3', nameValue: '3' },
];

type TToggleButtonProps = {
  onClick: () => void;
  isActive: boolean;
  text: string;
};

type TMode = 'easy' | 'hard';

const ToggleButton: FC<TToggleButtonProps> = ({ text, onClick, isActive }) => {
  const additionalClass = isActive ? styles.active : styles['none-active'];
  return (
    <button
      type="button"
      className={`${styles.button} ${additionalClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const EasyMode = () => {
  return (
    <div className={styles.conditional}>
      <LabeledInput title="Если">
        <div className={styles['selects-string']}>
          <InputSelect
            values={selectValues}
            defaultValue={['1']}
            maxWidth={184}
            handleFunction={() => {}}
          />
          <InputSelect
            handleFunction={() => {}}
            maxWidth={52}
            values={values}
            defaultValue={['1']}
          />
        </div>
        <Input onChange={() => {}} styled="bot-builder-default" />
      </LabeledInput>
      <LabeledInput title="То перейти">
        <InputSelect
          values={selectValues}
          defaultValue={['1']}
          maxWidth={240}
          handleFunction={() => {}}
        />
      </LabeledInput>
    </div>
  );
};

const HardMode = () => {
  return (
    <div className={styles.conditional}>
      <LabeledInput title="Если">
        <Input
          onChange={() => {}}
          styled="bot-builder-default"
          value="Условие"
        />
      </LabeledInput>
      <LabeledInput title="То перейти">
        <InputSelect
          values={selectValues}
          defaultValue={['1']}
          maxWidth={240}
          handleFunction={() => {}}
        />
      </LabeledInput>
    </div>
  );
};

const ConditionalBlock: FC<any> = (data) => {
  const [mode, setMode] = useState<TMode>('easy');
  const [contentHard, setContentHard] = useState<any>([{}]);
  const [contentEasy, setContentEasy] = useState<any>([{}]);

  const onClick = () => {
    if (mode === 'easy') {
      setContentEasy([...contentEasy, {}]);
    } else if (mode === 'hard') {
      setContentHard([...contentHard, {}]);
    }
  };

  return (
    <ControlLayout
      type="Условный блок"
      name="Название условного блока"
      nameSetter={() => data}
    >
      <div className={styles.controls}>
        <ToggleButton
          text="Простой режим"
          onClick={() => setMode('easy')}
          isActive={mode === 'easy'}
        />
        <ToggleButton
          text="Сложный режим"
          onClick={() => setMode('hard')}
          isActive={mode === 'hard'}
        />
      </div>
      <div className={styles.content}>
        {mode === 'easy' && contentEasy.map(() => <EasyMode />)}
        {mode === 'hard' && contentHard.map(() => <HardMode />)}
        <ConstructorAddButton onClick={onClick}>
          Добавить условие
        </ConstructorAddButton>
      </div>
    </ControlLayout>
  );
};

export default ConditionalBlock;
