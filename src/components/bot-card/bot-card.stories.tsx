import type { Meta, StoryFn } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../services/store';
import messengerIcons from './utils';
import BotCard, { IBotCard } from './bot-card';
import { TBot } from '../../services/types/bot';

export default {
  title: 'Components/BotCard',
  component: BotCard,
  argTypes: {
    messengerName: {
      type: 'string',
      name: 'Отображение бота для разных платформ',
      options: Object.keys(messengerIcons),
      control: {
        type: 'select',
        default: Object.keys(messengerIcons)[0] || '',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Router>
          <Story />
        </Router>
      </Provider>
    ),
  ],
} as Meta<IBotCard>;

const Template: StoryFn<{ messengerName: string }> = ({
  // eslint-disable-next-line react/prop-types
  messengerName,
  ...args
}) => {
  const bot: TBot = {
    _id: '0',
    title: 'Запись клиентов',
    description: 'none',
    profile: '0',
    messengers: [{ name: messengerName }],
    commands: ['/copy', '/delete', '/rename', '/share', '/info', '/notify'],
    isToPublish: false,
    status: 'editing',
    permission: {
      dashboard: true,
      botBuilder: true,
      mailing: true,
      statistics: true,
    },
  };

  return <BotCard bot={bot} {...args} />;
};
export const Facebook = {
  render: Template,
};
