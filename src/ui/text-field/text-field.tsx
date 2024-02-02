/* eslint-disable default-case */
import { FC, useState, useCallback, useMemo } from 'react';
import { createEditor, Descendant } from 'slate';
import { withHistory } from 'slate-history';

import { Slate, Editable, withReact, RenderLeafProps } from 'slate-react';

import EmojiPicker from 'emoji-picker-react';

import styles from './text-field.module.scss';

import bracketIcon from '../../images/icon/24x24/constructor/bracket.svg';
import emojiIcon from '../../images/icon/24x24/constructor/emoji.svg';
import MenuTextEditor from '../menus/menu-text-editor/menu-text-editor';
import Leaf from './leaf';
import CustomEditor from './custom-editor';
import { slateSerialize } from '../../utils/utils';

interface ITextField {
  maxTextLength?: number;
  text: Descendant[];
  setText: (value: Descendant[]) => void;
  adaptive?: boolean;
}

const TextField: FC<ITextField> = ({
  maxTextLength = 4096,
  text,
  setText,
  adaptive,
}) => {
  const [counter, rerender] = useState(1);
  const [emojis, toggleEmojis] = useState(false);
  const [editor] = useState(() => withReact(withHistory(createEditor())));
  const length = useMemo(() => {
    return slateSerialize(editor.children).length;
  }, [text]);

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Leaf {...props} />;
  }, []);

  const showMenu =
    !!editor.selection &&
    (editor.selection.anchor.offset !== editor.selection.focus.offset ||
      editor.selection.anchor.path[0] !== editor.selection.focus.path[0] ||
      editor.selection.anchor.path[1] !== editor.selection.focus.path[1]);

  const onEmojiClick = () => {
    toggleEmojis(!emojis);
  };

  return (
    <div
      className={adaptive ? styles.textarea_adaptive : styles.textarea}
      onClick={(e) => {
        e.stopPropagation();
        rerender(counter + 1);
      }}
      onMouseDownCapture={(e) => e.stopPropagation()}
      onWheelCapture={(e) => e.stopPropagation()}
    >
      <Slate
        onChange={(value) => setText(value)}
        editor={editor}
        initialValue={
          text || [
            {
              type: 'paragraph',
              children: [{ text: '' }],
            },
          ]
        }
      >
        <Editable
          onScroll={(e) => e.stopPropagation()}
          className={styles.textarea__input}
          renderLeaf={renderLeaf}
          placeholder="Введите текст"
          onKeyDown={(event) => {
            if (length === 0) {
              CustomEditor.setDefaultMark(editor);
            }
            switch (event.key) {
              case 'Enter':
              case ' ': {
                CustomEditor.setDefaultMark(editor);
                break;
              }
            }
          }}
        />
      </Slate>
      <span className={styles.textarea__outline} />

      <div className={styles.textarea__footer}>
        <span className={styles.textarea__counter}>
          {length}/{maxTextLength}
        </span>
        <button className={styles.textarea__font} type="button">
          <img className={styles.icon} src={bracketIcon} alt="Шрифт" />
        </button>
        <MenuTextEditor
          boldHandler={() => CustomEditor.toggleBoldMark(editor)}
          italicHandler={() => CustomEditor.toggleItalicMark(editor)}
          codeHandler={() => CustomEditor.toggleCodeMark(editor)}
          isActive={showMenu}
          top={-60}
          left={60}
        />
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
                editor.insertText(e.emoji);
                /* setText(`${text}${e.emoji}`); */
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
