import type { Meta } from '@storybook/react';
import Logo from './logo';

export default {
  title: 'UI/Logo',
  component: Logo,
} satisfies Meta<typeof Logo>;

export const Default = () => <Logo />;
