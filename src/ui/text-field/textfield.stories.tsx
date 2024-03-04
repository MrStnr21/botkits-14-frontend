import { Descendant } from 'slate';
import { baseSlateData } from '../../utils/constants';
import TextField from './text-field';

export default {
  title: 'UI/TextField',
  component: TextField,
  argTypes: {
    text: {
      type: 'string',
    },
  },
};

export const Default = () => (
  <TextField
    text={baseSlateData}
    setText={(text: Descendant[]) => {
      console.log(text);
    }}
  />
);
