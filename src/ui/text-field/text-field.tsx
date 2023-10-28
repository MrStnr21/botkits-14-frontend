import { FC, useState } from 'react';

import EmojiPicker from 'emoji-picker-react';

import stylesTextField from './text-field.module.scss';
import Typography from '../typography/typography';
import { ReactComponent as Bracket } from '../../images/icon/24x24/constructor/bracket.svg';
import { ReactComponent as EmojiIcon } from '../../images/icon/24x24/constructor/emoji.svg';

const TextField: FC = (): JSX.Element => {
  const textareaTextLength = 4096;
  const [showEmojis, setShowEmojis] = useState(false);

  const [text, setText] = useState('');

  return (
    <div className={stylesTextField.textarea}>
      <textarea
        name="textarea"
        id="textarea"
        placeholder="Введите текст"
        maxLength={textareaTextLength}
        value={text}
        onChange={(e) => setText(e.target.value)}
        draggable={false}
        className={stylesTextField.textarea__input}
      />
      <Typography
        tag="span"
        className={stylesTextField.textarea__outline}
        // eslint-disable-next-line react/no-children-prop
        children={null}
        font="OpenSans"
      />

      <div className={stylesTextField.textarea__footer}>
        <Typography
          tag="p"
          className={stylesTextField.textarea__counter}
          font="OpenSans"
        >
          {text.length}/{textareaTextLength}
        </Typography>
        <Bracket
          className={stylesTextField.textarea__icon}
          onClick={() => console.log('Что-то не происходит')}
        />
        {showEmojis && (
          <div className={stylesTextField.textarea__emojiPicker}>
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
        <EmojiIcon
          className={stylesTextField.textarea__icon}
          onClick={() => setShowEmojis(!showEmojis)}
        />
      </div>
    </div>
  );
};

export default TextField;
