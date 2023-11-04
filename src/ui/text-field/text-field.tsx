import { FC, useRef, useState } from 'react';

import EmojiPicker from 'emoji-picker-react';

import styles from './text-field.module.scss';

import { ReactComponent as Bracket } from '../../images/icon/24x24/constructor/bracket.svg';
import { ReactComponent as EmojiIcon } from '../../images/icon/24x24/constructor/emoji.svg';
// import useOutsideClick from '../../utils/hooks/useOutsideClick';

interface ITextField {
  maxTextLength?: number;
  text: string;
  setText: (value: string) => void;
}

const TextField: FC<ITextField> = ({ maxTextLength = 4096, text, setText }) => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [textMenu, setTextMenu] = useState(false);

  //  временно, не должно вызывать меню
  const onBracketClick = () => {
    setTextMenu(!textMenu);
  };
  const refPicker = useRef<HTMLDivElement>(null);

  // useOutsideClick(refPicker, document, () => {
  //   setShowEmojis(false);
  // });

  return (
    <div className={styles.textarea}>
      <textarea
        name="textarea"
        id="textarea"
        placeholder="Введите текст"
        maxLength={maxTextLength}
        value={text}
        onChange={(e) => setText(e.target.value)}
        draggable={false}
        className={styles.textarea__input}
      />
      <span className={styles.textarea__outline} />

      <div className={styles.textarea__footer}>
        <p className={styles.textarea__counter}>
          {text.length}/{maxTextLength}
        </p>
        <Bracket className={styles.extarea__icon} onClick={onBracketClick} />
        <EmojiIcon
          className={styles.textarea__icon}
          onClick={() => setShowEmojis(!showEmojis)}
        />
        {showEmojis && (
          <div className={styles.textarea__emojiPicker} ref={refPicker}>
            (
            <EmojiPicker
              width={300}
              onEmojiClick={(e) => {
                setText(`${text}${e.emoji}`);
                setShowEmojis(false);
              }}
            />
            )
          </div>
        )}
      </div>
    </div>
  );
};

export default TextField;
