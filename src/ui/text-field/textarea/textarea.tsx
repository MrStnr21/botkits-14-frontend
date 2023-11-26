import React, {
  useMemo,
  useRef,
  useEffect,
  SyntheticEvent,
  FC,
  ReactNode,
} from 'react';
import {
  Slate,
  Editable,
  withReact,
  useSlate,
  useFocused,
  ReactEditor,
} from 'slate-react';
import { css } from '@emotion/css';
import { Editor, createEditor, Descendant, Range, BaseEditor } from 'slate';
import { HistoryEditor, withHistory } from 'slate-history';

import { Button, Icon, Menu, Portal } from './components';

type CustomElement = { type: 'paragraph'; children: CustomText[] };
type CustomText = { text: string; bold?: true; italic?: true; code?: true };

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const isMarkActive = (editor: Editor, format: string) => {
  // пропсы как у CustomText, но опциональные
  const marks = Editor.marks(editor) as Partial<
    Record<keyof CustomText, boolean>
  >;
  return marks ? marks[format as keyof CustomText] === true : false;
};

const toggleMark = (editor: Editor, format: string) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

interface LeafProps {
  attributes: object;
  children: ReactNode;
  leaf: CustomText;
}

const Leaf: FC<LeafProps> = ({ attributes, children, leaf }) => {
  let modifiedChildren: ReactNode = children; // избежать reassign

  if (leaf.bold) {
    modifiedChildren = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    modifiedChildren = <em>{children}</em>;
  }

  if (leaf.code) {
    modifiedChildren = <pre>{children}</pre>;
  }

  return <span {...attributes}>{modifiedChildren}</span>;
};

interface FormatButtonProps {
  format: string;
  icon: string;
}

const FormatButton: FC<FormatButtonProps> = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      reversed
      active={isMarkActive(editor, format)}
      onClick={() => toggleMark(editor, format)}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'This example shows how you can make a hovering menu appear above your content, which you can use to make text ',
      },
      { text: 'bold', bold: true },
      { text: ', ' },
      { text: 'italic', italic: true },
      { text: ', or anything else you might want to do!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      { text: 'Try it out yourself! Just ' },
      { text: 'select any piece of text and the menu will appear', bold: true },
      { text: '.' },
    ],
  },
];

const HoveringToolbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const editor = useSlate();
  const inFocus = useFocused();

  useEffect(() => {
    const el = ref.current;
    const { selection } = editor;

    if (!el) {
      return;
    }

    if (
      !selection ||
      !inFocus ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ''
    ) {
      el.removeAttribute('style');
      return;
    }

    const domSelection = window.getSelection();

    //  проверка на существование
    if (!domSelection) {
      return;
    }
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    el.style.opacity = '1';
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
    el.style.left = `${
      rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
    }px`;
  });

  return (
    <Portal>
      <Menu
        ref={ref}
        className={css`
          padding: 8px 7px 6px;
          position: absolute;
          z-index: 1;
          top: -10000px;
          left: -10000px;
          margin-top: -6px;
          opacity: 0;
          background-color: #222;
          border-radius: 4px;
          transition: opacity 0.75s;
        `}
        onMouseDown={(e: SyntheticEvent) => {
          // prevent toolbar from taking focus away from editor
          e.preventDefault();
        }}
      >
        <FormatButton format="bold" icon="format_bold" />
        <FormatButton format="italic" icon="format_italic" />
        <FormatButton format="underlined" icon="format_underlined" />
      </Menu>
    </Portal>
  );
};

const HoveringMenuExample = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <HoveringToolbar />
      <Editable
        renderLeaf={(props) => <Leaf {...props} />}
        placeholder="Enter some text..."
        onDOMBeforeInput={(event: InputEvent) => {
          switch (event.inputType) {
            case 'formatBold':
              event.preventDefault();
              return toggleMark(editor, 'bold');
            case 'formatItalic':
              event.preventDefault();
              return toggleMark(editor, 'italic');
            case 'formatUnderline':
              event.preventDefault();
              return toggleMark(editor, 'underlined');
            default:
              return editor;
          }
        }}
      />
    </Slate>
  );
};

export default HoveringMenuExample;
