import { FC, useState } from 'react';
import ControlLayout from '../../control-layout/control-layout';
import {
  TBlockProps,
  TOperatorBlock,
} from '../../../../services/types/builder';

const TransferToOperatorBlock: FC<TBlockProps<TOperatorBlock>> = ({ data }) => {
  const [name, setName] = useState(data.name);

  return (
    <ControlLayout
      type="Перевод на оператора"
      name={name}
      nameSetter={(newName: string) => {
        setName(newName);
      }}
    />
  );
};

export default TransferToOperatorBlock;
