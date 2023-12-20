/* eslint-disable react/no-array-index-key */
import { Meta, StoryFn } from '@storybook/react';
import Icon, { IIcon } from './icon';
import IconMapping from './icon-mapping';
import iconsGroups from './utils';

const meta: Meta<IIcon> = {
  component: Icon,
  title: 'UI/Icon',
  argTypes: {
    icon: {
      type: 'string',
      description: 'Имя иконки. Все доступные имена хранятся в IconMapping.',
      options: Object.keys(IconMapping),
      control: {
        type: 'select',
      },
    },
    isColored: {
      type: 'boolean',
      description:
        'Можно ли управлять цветом иконки через css. False для многоцветных иконок',
      control: {
        type: 'boolean',
        default: false,
      },
    },
    extraClass: {
      type: 'string',
      description: 'Стилизация иконки: размеры, цвет, анимация и т.д.',
      control: false,
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const styleIcon = {
  width: '24px',
  height: '24px',
  color: 'black',
};

const Template: StoryFn<IIcon> = (args) => (
  <div style={styleIcon}>
    <Icon {...args} />
  </div>
);

export const IconComponent = {
  args: {
    icon: 'syncDone',
    isColored: false,
  },
  render: Template,
};

const layoutStyle = {
  maxWidth: `100%`,
};
const headerStyle = {
  color: 'grey',
  marginBottom: '10px',
};

const wrapperStyle = {
  maxWidth: `100%`,
  display: 'flex',
  gap: '20px',
  paddingBottom: '15px',
  flexWrap: 'wrap' as const,
};

export const IconsList = () => (
  <div style={layoutStyle}>
    {Object.keys(iconsGroups).map((groupName, groupIndex) => (
      <>
        <div style={headerStyle}>{groupName}</div>
        <div style={wrapperStyle} key={groupIndex}>
          {iconsGroups[groupName].names.map((name, nameIndex) => (
            <div
              style={iconsGroups[groupName].style}
              title={name}
              key={nameIndex}
            >
              <Icon icon={name} isColored={false} />
            </div>
          ))}
        </div>
      </>
    ))}
  </div>
);
