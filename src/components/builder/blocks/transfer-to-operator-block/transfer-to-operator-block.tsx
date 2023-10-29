import { ReactElement } from 'react';
import ControlLayout from '../../control-layout/control-layout';

const TransferToOperatorBlock = (
  nameSetter: (val: string) => void
): ReactElement => {
  return (
    <ControlLayout
      type="Перевод на оператора"
      name="Перевод на оператора"
      nameSetter={nameSetter}
    />
  );
};

export default TransferToOperatorBlock;
