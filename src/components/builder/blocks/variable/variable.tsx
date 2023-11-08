import { FC } from 'react';
import {
  TBlockProps,
  TVariablesControlBlock,
} from '../../../../services/types/builder';
import ConstructorAddButton from '../../../../ui/buttons/constructor-add-button/constructor-add-button';
import InputSelect from '../../../../ui/inputs/input-select/input-select';
import Input from '../../../../ui/inputs/input/input';
import Equal from '../../../icons/Equal/Equal';
import ControlLayout from '../../control-layout/control-layout';
import styleVariableBlock from './variable.module.scss';

const func = () => console.log(1);

const VariableBlockNode: FC<TBlockProps<TVariablesControlBlock>> = ({
  data,
}) => {
  return (
    <ControlLayout
      type="Управление переменными"
      name={data.name}
      nameSetter={func}
    >
      <div className={styleVariableBlock.container}>
        <div className={styleVariableBlock.overlay}>
          <Input
            placeholder="Переменная"
            onChange={func}
            type="text"
            styled="bot-builder-default"
            textColor="default"
          />
          <div className={styleVariableBlock.box}>
            <Equal />
          </div>
          <InputSelect
            defaultValue={['1']}
            values={[
              {
                nameValue: 'Значение 1',
                value: '1',
              },
              {
                nameValue: 'Значение 2',
                value: '2',
              },
              {
                nameValue: 'Значение 3',
                value: '3',
              },
            ]}
            maxWidth={98}
            handleFunction={func}
          />
        </div>
        <div className={styleVariableBlock.field}>
          <ConstructorAddButton
            buttonHtmlType="button"
            disabled={false}
            onClick={func}
          >
            Добавить переменную
          </ConstructorAddButton>
        </div>
      </div>
    </ControlLayout>
  );
};

export default VariableBlockNode;
