import { FC } from 'react';
import stylesMessageInput from './message-input.module.scss';
import PaperClipIcon from '../icons/PaperClip/PaperClipIcon';
import EmojiIcon from '../icons/Emoji/EmojiIcon';
import AddIcon from '../icons/Add/AddIcon';

const MessageInput: FC = (): JSX.Element => {
  return (
    <div className={stylesMessageInput.mainContainer}>
      <input
        className={stylesMessageInput.input}
        placeholder="Введите сообщение..."
      />
      <ul className={stylesMessageInput.inputMenu}>
        <li className={stylesMessageInput.inputIcon}>
          <PaperClipIcon width={20} height={20} />
        </li>
        <li className={stylesMessageInput.inputIcon}>
          <EmojiIcon width={20} height={20} />
        </li>
        <li className={stylesMessageInput.inputIcon}>
          <AddIcon width={24} height={24} />
        </li>
      </ul>
    </div>
  );
};

export default MessageInput;
