import {
  KeyTextField,
  NumberField,
  PrismicDocument,
  RichTextField,
} from "@prismicio/types";
import { ResponseSlice } from "./response";

export type Question = {
  category: "maths" | "français";
  description: RichTextField;
  points: NumberField;
  title: KeyTextField;
  slices: ResponseSlice[];
};

export type QuestionData = PrismicDocument & {
  data: Question;
};
