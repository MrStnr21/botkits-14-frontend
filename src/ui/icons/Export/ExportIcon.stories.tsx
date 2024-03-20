import type { Meta, StoryObj } from '@storybook/react';
import ExportIcon from './ExportIcon';

const colors = {
  black: '#060C23',
  blue: '#243CBB',
  while: '#FFFFFF',
};

const meta: Meta<typeof ExportIcon> = {
  title: 'Components/Icons/ExportIcon',
  component: ExportIcon,
  argTypes: {
    color: {
      type: 'string',
      description: 'Выбор цвета',
      options: Object.keys(colors),
      mapping: colors,
      control: {
        type: 'radio',
        labels: {
          black: 'Черный',
          blue: 'Cиний',
          white: 'Белый',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const IconExportBig: Story = {
  args: {
    color: '#243CBB',
    width: 50,
    height: 50,
  },
};

export const IconExportSmall: Story = {
  args: {
    color: '#060C23',
    width: 24,
    height: 24,
  },
};
