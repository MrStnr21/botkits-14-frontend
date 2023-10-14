import { FC } from 'react';
import stylesMessage from './message.module.scss';

const Message: FC = (): JSX.Element => {
  return <div className={stylesMessage.message}>Message</div>;
};

export default Message;
