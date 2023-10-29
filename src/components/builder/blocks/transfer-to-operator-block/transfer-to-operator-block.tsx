import { ReactElement, useState } from 'react';
import ControlLayout from '../../control-layout/control-layout';

const TransferToOperatorBlock = (): ReactElement => {
  const [name, setName] = useState('Перевод на оператора');

  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  return (
    <ControlLayout
      type="Перевод на оператора"
      name={name}
      nameSetter={handleNameChange}
    />
  );
};

export default TransferToOperatorBlock;
