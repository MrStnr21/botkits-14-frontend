import { FC } from 'react';

import stylesChatDesktop from './chat.module.scss';

const ChatDesktop: FC = (): JSX.Element => {
  return <div className={stylesChatDesktop.title}>ChatDesktop</div>;
};

export default ChatDesktop;
