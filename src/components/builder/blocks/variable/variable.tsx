import { FC, useState } from 'react';
import {
  TBlockProps,
  TVariablesControlBlock,
} from '../../../../services/types/builder';
import ConstructorAddButton from '../../../../ui/buttons/constructor-add-button/constructor-add-button';
import ControlLayout from '../../control-layout/control-layout';
import styleVariableBlock from './variable.module.scss';
import Value from './value/value';

const VariableBlockNode: FC<TBlockProps<TVariablesControlBlock>> = ({
  data,
}) => {
  const [content, setContent] = useState<TVariablesControlBlock['variables']>(
    data.variables
  );

  console.log(content);

  const addValue = () => {
    setContent([...content, { value: '' }]);
  };

  return (
    <ControlLayout
      type="Управление переменными"
      name={data.name}
      nameSetter={() => data}
    >
      <div className={styleVariableBlock.container}>
        {content.map(() => {
          return <Value />;
        })}
        <div className={styleVariableBlock.field}>
          <ConstructorAddButton
            buttonHtmlType="button"
            disabled={false}
            onClick={addValue}
          >
            Добавить переменную
          </ConstructorAddButton>
        </div>
      </div>
    </ControlLayout>
  );
};

export default VariableBlockNode;
