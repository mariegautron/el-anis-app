import { RichTextField, Slice } from "@prismicio/types";

export type ResponseSlice = Slice & {
  primary: ResponseType;
};

export type ResponseType = {
  title: RichTextField;
  description: RichTextField;
  isgoodanswer: boolean | null;
};
