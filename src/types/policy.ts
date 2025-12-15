import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export type Policy = {
  id: string;
  title: string;
  body: SerializedEditorState;
};
