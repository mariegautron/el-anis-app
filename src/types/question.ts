import { NumberField, PrismicDocument, RichTextField } from "@prismicio/types";
import { ResponseSlice } from "./response";

export type Question = {
  category: "maths" | "français";
  description: RichTextField;
  points: NumberField;
  title: string;
  slices: ResponseSlice[];
  id: string;
};

export type QuestionData = PrismicDocument & {
  data: Question;
};
