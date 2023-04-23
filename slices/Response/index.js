import { PrismicRichText } from "@prismicio/react";
import { Radio } from "antd";

/**
 * @typedef {import("@prismicio/client").Content.ResponseSlice} ResponseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResponseSlice>} ResponseProps
 * @param { ResponseProps }
 */
const Response = ({ slice }) => (
  <Radio
    value={slice.primary.value}
    style={{
      height: "100%",
      padding: "0.3rem 1rem",
      margin: "0.3rem",
      border: "1px solid #f0f0f0",
      background: "rgba(45, 56, 60, 0.02)",
    }}
  >
    <span>
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    {slice.primary.description ? (
      <PrismicRichText field={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
  </Radio>
);

export default Response;
