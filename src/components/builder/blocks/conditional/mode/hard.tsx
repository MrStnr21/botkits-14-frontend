import { FC } from 'react';
import Input from '../../../../../ui/inputs/input/input';

export type THardBlockProps = {
  condition?: string;
};

const HardMode: FC<THardBlockProps> = ({ condition }) => {
  return (
    <Input
      onChange={() => {}}
      styled="bot-builder-default"
      placeholder="Условие"
      value={condition}
    />
  );
};

export default HardMode;
