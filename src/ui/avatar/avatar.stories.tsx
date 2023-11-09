import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const OfflineBot: Story = {
  render: () => (
    <Avatar
      isBot="yes"
      state="offline"
      big="no"
      pic="https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpdHRlbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    />
  ),
};

export const OnlineBot: Story = {
  render: () => (
    <Avatar
      isBot="yes"
      state="online"
      big="no"
      pic="https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpdHRlbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    />
  ),
};

export const OfflineUser: Story = {
  render: () => (
    <Avatar
      isBot="no"
      state="offline"
      big="no"
      pic="https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpdHRlbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    />
  ),
};

export const OfflineBigUser: Story = {
  render: () => (
    <Avatar
      isBot="no"
      state="offline"
      big="yes"
      pic="https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpdHRlbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    />
  ),
};

export const OnlineUser: Story = {
  render: () => (
    <Avatar
      isBot="no"
      state="online"
      big="no"
      pic="https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpdHRlbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    />
  ),
};
