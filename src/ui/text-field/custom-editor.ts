import { Editor, BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

const CustomEditor = {
  isBoldMarkActive(editor: BaseEditor & ReactEditor) {
    const marks = Editor.marks(editor);
    return marks ? marks.bold === true : false;
  },

  isItalicMarkActive(editor: BaseEditor & ReactEditor) {
    const marks = Editor.marks(editor);
    return marks ? marks.italic === true : false;
  },

  isCodeMarkActive(editor: BaseEditor & ReactEditor) {
    const marks = Editor.marks(editor);
    return marks ? marks.code === true : false;
  },

  toggleItalicMark(editor: BaseEditor & ReactEditor) {
    const isActive = CustomEditor.isItalicMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, 'italic');
    } else {
      Editor.addMark(editor, 'italic', true);
    }
  },

  toggleBoldMark(editor: BaseEditor & ReactEditor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, 'bold');
    } else {
      Editor.addMark(editor, 'bold', true);
    }
  },

  toggleCodeMark(editor: BaseEditor & ReactEditor) {
    const isActive = CustomEditor.isCodeMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, 'code');
    } else {
      Editor.addMark(editor, 'code', true);
    }
  },

  setDefaultMark(editor: BaseEditor & ReactEditor) {
    Editor.removeMark(editor, 'bold');
    Editor.removeMark(editor, 'italic');
    Editor.removeMark(editor, 'code');
  },
};

export default CustomEditor;
