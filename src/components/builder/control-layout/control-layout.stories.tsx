import type { Meta, StoryObj } from '@storybook/react';
import ControlLayout from './control-layout';

const meta: Meta<typeof ControlLayout> = {
  component: ControlLayout,
};

const styleContainer = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '8px',
  padding: '8px',
};

const stylesInner = {
  height: '100px',
  width: '100%',
  background: '#F8F9FB',
};

export default meta;

type Story = StoryObj<typeof ControlLayout>;

// Вариант с рендером сразу двух блоков
/* export const LayoutFilled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <ControlLayout
        name="Название блока"
        type="Тип блока"
        nameSetter={() => {}}
      >
        <div style={styleContainer}>
          <div style={stylesInner} />
          <div style={stylesInner} />
          <div style={stylesInner} />
        </div>
      </ControlLayout>
      <ControlLayout
        name="Название блока"
        type="Тип блока"
        nameSetter={() => {}}
      />
    </div>
  ),
}; */

export const LayoutFilled: Story = {
  args: {
    name: 'Название блока',
    type: 'Тип блока',
    nameSetter: () => {},
    children: (
      <div style={styleContainer}>
        <div style={stylesInner} />
        <div style={stylesInner} />
        <div style={stylesInner} />
      </div>
    ),
  },
};
