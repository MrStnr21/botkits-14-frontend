import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

type CustomElement = { type: string; children: CustomText[] };
type CustomText = {
  text: string;
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  children?: CustomText[];
};

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
