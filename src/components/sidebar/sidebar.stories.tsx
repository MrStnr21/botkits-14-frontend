import type { Meta } from '@storybook/react';
import Sidebar from './sidebar';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export const Default = () => <Sidebar />;
