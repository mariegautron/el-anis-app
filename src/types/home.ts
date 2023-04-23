import { PrismicDocument } from "@prismicio/types";

export type Home = PrismicDocument & {
  data: {
    hello: string;
    heading: string;
    labelbutton: string;
  };
};
