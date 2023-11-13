import type { StoryObj } from '@storybook/react';
import VideoCard from './video-card';
import createbot from '../../images/prewiew/createbot.png';
import prew1 from '../../images/prewiew/prew1.png';
import prew2 from '../../images/prewiew/prew2.png';
import prew3 from '../../images/prewiew/prew3.png';
import { URL_YOUTUBE_CONNECT_CHATBOT } from '../../utils/config';

const meta = {
  title: 'COMPONENTS/VideoCard',
  component: VideoCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const VideoCardM: Story = {
  args: {
    src: URL_YOUTUBE_CONNECT_CHATBOT!,
    title: 'Подключение чат бота и основные параметры | Bot Kits',
    prewiew: createbot,
    size: 's',
    hiddenRemoveButton: false,
    hover: false,
  },
};

export const VideoCardS: Story = {
  args: {
    src: URL_YOUTUBE_CONNECT_CHATBOT!,
    title: 'Подключение чат бота и основные параметры | Bot Kits',
    prewiew: createbot,
    size: 's',
    hiddenRemoveButton: false,
    hover: false,
  },
};

export const Prew1: Story = {
  args: {
    src: URL_YOUTUBE_CONNECT_CHATBOT!,
    title: 'Подключение чат бота и основные параметры | Bot Kits',
    prewiew: prew1,
    size: 's',
    hiddenRemoveButton: true,
    hover: true,
  },
};

export const Prew2: Story = {
  args: {
    src: URL_YOUTUBE_CONNECT_CHATBOT!,
    title: 'Подключение чат бота и основные параметры | Bot Kits',
    prewiew: prew2,
    size: 's',
    hiddenRemoveButton: true,
    hover: true,
  },
};

export const Prew3: Story = {
  args: {
    src: URL_YOUTUBE_CONNECT_CHATBOT!,
    title: 'Подключение чат бота и основные параметры | Bot Kits',
    prewiew: prew3,
    size: 's',
    hiddenRemoveButton: true,
    hover: true,
  },
};
