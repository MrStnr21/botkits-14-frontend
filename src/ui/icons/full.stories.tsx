import type { Meta } from '@storybook/react';
import FullLogo from './full-logo';

export default {
  title: 'UI/FullLogo',
  component: FullLogo,
} satisfies Meta<typeof FullLogo>;

export const Default = () => <FullLogo />;
