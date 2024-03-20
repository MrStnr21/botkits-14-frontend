import { Meta, StoryObj } from '@storybook/react';
import MenuItem, { IMenuItem } from './menu-item';

const divStyles: React.CSSProperties = {
  width: '264px',
  padding: '20px',
  gap: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  backgroundColor: '#E0E6EB',
};

const meta: Meta<IMenuItem> = {
  title: 'UI/Menu/Menu Item',
  component: MenuItem,
  argTypes: {
    isChecked: {
      type: 'boolean',
      description: 'Выбран ли item (в режиме множественного выбора)',
      defaultValue: true,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback функция, вызываемая при клике',
    },
    extraClass: {
      type: 'string',
      description: 'Класс для дополнительной стилизации компонента',
      defaultValue: '',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const option = {
  value: 'val1',
  label: 'Manu item',
};

const onClick = () => {};

export const Item: StoryObj<IMenuItem> = {
  render: () => (
    <div style={divStyles}>
      <MenuItem option={option} onClick={onClick} />
      <MenuItem option={option} onClick={onClick} isChecked />
      <MenuItem
        option={{ ...option, icon: 'dropdownCopyBot' }}
        onClick={onClick}
      />
      {/* Имитация действия extraClass */}
      <div style={{ width: '200px', backgroundColor: '#E0E0E0' }}>
        <MenuItem
          option={{ ...option, label: 'width через extraClass' }}
          onClick={onClick}
        />
      </div>
    </div>
  ),
};

export default meta;
