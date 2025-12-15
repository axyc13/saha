import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export type Term = {
  id: string;
  title: string;
  body: SerializedEditorState;
};
