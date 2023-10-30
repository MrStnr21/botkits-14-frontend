import type { Meta, StoryObj } from '@storybook/react';
import PanelInline from './panel-inline';

const meta: Meta<typeof PanelInline> = {
  component: PanelInline,
};

export default meta;

type Story = StoryObj<typeof PanelInline>;

export const Panel: Story = {};
