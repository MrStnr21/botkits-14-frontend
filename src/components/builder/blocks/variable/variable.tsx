import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  TBlockProps,
  TVariablesControlBlock,
} from '../../../../services/types/builder';
import ConstructorAddButton from '../../../../ui/buttons/constructor-add-button/constructor-add-button';
import ControlLayout from '../../control-layout/control-layout';
import styleVariableBlock from './variable.module.scss';
import Value from './value/value';
import { setFlowDataInit } from '../../utils';

const VariableBlockNode: FC<TBlockProps<TVariablesControlBlock>> = ({
  data,
}) => {
  const content = data.variables;

  const addField = setFlowDataInit();

  const onClick = () =>
    addField({
      path: ['data', 'variables'],
      value: [
        ...data.variables,
        {
          id: uuidv4(),
          variable: '',
          value: '',
        },
      ],
    });

  return (
    <ControlLayout type="Управление переменными">
      <div className={styleVariableBlock.container}>
        {content.map((item, index) => {
          return <Value idNum={index.toString()} item={item} key={item.id} />;
        })}
        <div className={styleVariableBlock.field}>
          <ConstructorAddButton
            buttonHtmlType="button"
            disabled={false}
            onClick={onClick}
          >
            Добавить переменную
          </ConstructorAddButton>
        </div>
      </div>
    </ControlLayout>
  );
};

export default VariableBlockNode;
