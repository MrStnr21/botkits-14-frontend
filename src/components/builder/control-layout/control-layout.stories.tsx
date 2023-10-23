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

export const LayoutFilled: Story = {
  render: () => (
    <ControlLayout name="Название блока" type="Тип блока" nameSetter={() => {}}>
      <div style={styleContainer}>
        <div style={stylesInner} />
        <div style={stylesInner} />
        <div style={stylesInner} />
      </div>
    </ControlLayout>
  ),
};

export const LayoutEmpty: Story = {
  render: () => (
    <ControlLayout
      name="Название блока"
      type="Тип блока"
      nameSetter={() => {}}
    />
  ),
};
