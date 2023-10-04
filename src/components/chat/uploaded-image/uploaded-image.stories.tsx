import type { StoryObj } from '@storybook/react';
import UploadedImage from './uploaded-image';

const meta = {
  title: 'COMPONENTS/UploadedImage',
  component: UploadedImage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const UploadedImageDefault: Story = {
  args: {
    image:
      'https://w-dog.ru/wallpapers/10/0/487435280633581/derevya-prirody-pejzazh-ozero-cvety-puti-nebo-oblaka-zakat-gory.jpg',
  },
};
