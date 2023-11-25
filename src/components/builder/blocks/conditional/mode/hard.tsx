import { FC } from 'react';
import Input from '../../../../../ui/inputs/input/input';

export type THardBlockContent = {
  id: string;
  condition?: string;
};

type THardBlockProps = THardBlockContent & {
  setCondition: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
};

const HardMode: FC<THardBlockProps> = ({ condition, setCondition, id }) => {
  return (
    <Input
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setCondition(event, id)
      }
      styled="bot-builder-default"
      placeholder="Условие"
      value={condition}
    />
  );
};

export default HardMode;
