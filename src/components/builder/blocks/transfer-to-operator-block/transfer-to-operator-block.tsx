import { ReactElement, useState } from 'react';
import ControlLayout from '../../control-layout/control-layout';

const TransferToOperatorBlock = (): ReactElement => {
  const [blockName, setBlockName] = useState('Перевод на оператора');

  const handleNameChange = (newName: string) => {
    setBlockName(newName);
  };

  return (
    <ControlLayout
      type="Перевод на оператора"
      name={blockName}
      nameSetter={handleNameChange}
    />
  );
};

export default TransferToOperatorBlock;
