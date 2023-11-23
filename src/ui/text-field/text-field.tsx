/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';

import EmojiPicker from 'emoji-picker-react';

import styles from './text-field.module.scss';

import bracketIcon from '../../images/icon/24x24/constructor/bracket.svg';
import emojiIcon from '../../images/icon/24x24/constructor/emoji.svg';
import MenuTextEditor from '../menus/menu-text-editor/menu-text-editor';

interface ITextField {
  maxTextLength?: number;
  text: string;
  setText: (value: string) => void;
}

const TextField: FC<ITextField> = ({ maxTextLength = 4096, text, setText }) => {
  const [emojis, toggleEmojis] = useState(false);
  const [textMenu, toggleTextMenu] = useState(false);

  const onBracketClick = () => {
    toggleTextMenu(!textMenu);
  };

  const onEmojiClick = () => {
    toggleEmojis(!emojis);
  };

  return (
    <div className={styles.textarea}>
      <textarea
        name="textarea"
        id="textarea"
        placeholder="Введите текст"
        maxLength={maxTextLength}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          // if (onChangeText) {
          //   onChangeText(e.target.value);
          // }
        }}
        draggable={false}
        className={styles.textarea__input}
      />
      <span className={styles.textarea__outline} />

      <div className={styles.textarea__footer}>
        <span className={styles.textarea__counter}>
          {text.length}/{maxTextLength}
        </span>
        <button
          className={styles.textarea__font}
          onClick={onBracketClick}
          type="button"
        >
          <img className={styles.icon} src={bracketIcon} alt="Шрифт" />
        </button>
        <MenuTextEditor isActive={textMenu} top={-60} left={36} />
        <button
          className={styles.textarea__font}
          onClick={onEmojiClick}
          type="button"
        >
          <img className={styles.icon} src={emojiIcon} alt="Эмодзи" />
        </button>
        {emojis && (
          <div className={styles.textarea__emojiPicker}>
            <EmojiPicker
              width="100%"
              onEmojiClick={(e) => {
                setText(`${text}${e.emoji}`);
                toggleEmojis(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TextField;
