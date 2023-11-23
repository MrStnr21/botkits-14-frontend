import TextField from './text-field';

export default {
  title: 'UI/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      type: 'string',
    },
  },
};

export const Default = () => (
  <TextField
    text="Какой-то текст"
    setText={(text: string) => {
      console.log(text);
    }}
  />
);
