import { FC, useState } from 'react';
import styles from './conditional.module.scss';
import ControlLayout from '../../control-layout/control-layout';
import ConstructorAddButton from '../../../../ui/buttons/constructor-add-button/constructor-add-button';
import {
  TBlockProps,
  TConditionalBlock,
} from '../../../../services/types/builder';
import Mode from './mode/mode';
import ToggleButton from './toggle-button/toggle-button';

const ConditionalBlock: FC<TBlockProps<TConditionalBlock>> = ({ data }) => {
  const [mode, setMode] = useState<'easy' | 'hard'>('easy');
  const [content, setContent] = useState<TConditionalBlock['variables']>(
    data.variables
  );

  const addHard = () => {
    setContent([
      ...content,
      { type: 'hard', sign: '', condition: '', blockName: '' },
    ]);
  };

  const addEasy = () => {
    setContent([
      ...content,
      { type: 'hard', sign: '', condition: '', blockName: '' },
    ]);
  };

  return (
    <ControlLayout type="Условный блок">
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
        {content.map((item) => {
          if (item.type === 'easy') {
            return <Mode type={item.type} title="Если" data={{ ...item }} />;
          }
          return <Mode type={item.type} title="Если" data={{ ...item }} />;
        })}
        <ConstructorAddButton onClick={mode === 'easy' ? addEasy : addHard}>
          Добавить условие
        </ConstructorAddButton>
      </div>
    </ControlLayout>
  );
};

export default ConditionalBlock;
