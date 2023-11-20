import { FC } from 'react';
import ControlLayout from '../../control-layout/control-layout';
import {
  TBlockProps,
  TOperatorBlock,
} from '../../../../services/types/builder';

const TransferToOperatorBlock: FC<TBlockProps<TOperatorBlock>> = () => {
  return <ControlLayout type="Перевод на оператора" />;
};

export default TransferToOperatorBlock;
