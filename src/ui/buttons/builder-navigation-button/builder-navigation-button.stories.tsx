import { Meta, StoryFn } from '@storybook/react';
import NavigationButton from './builder-navigation-button';
import fit from '../../../images/icon/24x24/screen navigation/fit.svg';
import fullScreen from '../../../images/icon/24x24/screen navigation/full screen.svg';
import minus from '../../../images/icon/24x24/screen navigation/minus.svg';
import plus from '../../../images/icon/24x24/screen navigation/plus.svg';
import page from '../../../images/icon/24x24/screen navigation/page.svg';

const icons = {
  fit,
  fullScreen,
  minus,
  plus,
  page,
};

const meta: Meta<typeof NavigationButton> = {
  title: 'UI/Buttons/Button-Navigation-Panel',
  component: NavigationButton,
  argTypes: {
    icon: {
      type: 'string',
      description: 'Вариант изображения на кнопке',
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'radio',
      },
      alt: {
        type: 'string',
        description: 'Альтернативный текст кнопки',
        control: {
          type: 'text',
        },
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof NavigationButton> = (args) => (
  <NavigationButton {...args} />
);

export const Button = {
  args: {
    icon: fit,
    alt: 'Центрировать',
  },
  render: Template,
};
