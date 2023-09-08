import type { Meta, StoryFn } from '@storybook/react';
import ConstructorIconBotton, {
  IConstructorIconBotton,
} from './constructor-icon-botton';
import AddVideoIcon from '../../../images/icon/24x24/add content/video.svg';
import AddFileIcon from '../../../images/icon/24x24/add content/file.svg';
import AddImageIcon from '../../../images/icon/24x24/add content/image.svg';
import AddMusicIcon from '../../../images/icon/24x24/add content/music.svg';

export default {
  title: 'UI/Buttons/ConstructorIconBotton',
  component: ConstructorIconBotton,
  argTypes: {
    disabled: {
      type: 'boolean',
      description: 'Вариант активности кнопки',
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
    buttonHtmlType: {
      type: 'string',
      description: 'Вариант кнопки',
      defaultValue: 'button',
      options: ['button', 'submit', 'reset'],
      control: {
        type: 'radio',
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback функция, вызываемая при клике',
    },
    icon: {
      type: 'string',
      description: 'Иконка кнопки',
      options: [AddVideoIcon, AddFileIcon, AddImageIcon, AddMusicIcon],
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IConstructorIconBotton>;

const Template: StoryFn<IConstructorIconBotton> = (args) => (
  <ConstructorIconBotton {...args} />
);

export const Button = {
  args: {
    buttonHtmlType: 'button',
    disabled: false,
    icon: AddVideoIcon,
  },
  render: Template,
};
