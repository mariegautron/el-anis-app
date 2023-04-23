import { Question } from "@/types/question";
import { PrismicRichText } from "@prismicio/react";
import { Card, Form, Radio, Rate, Tag } from "antd";
import React from "react";
import Response from "../../../slices/Response";

const Question: React.FC<Question> = ({
  title,
  description,
  slices,
  category,
  points,
}) => (
  <>
    <Card style={{ marginTop: 16 }} type="inner" title={title}>
      <PrismicRichText field={description} />

      <Form.Item name={title} label="Choisi la bonne réponse">
        <Radio.Group style={{ display: "flex" }}>
          {/* 👀 Types is not good */}

          {slices.map((slice) => (
            <Response
              slice={slice}
              key={slice.id}
              index={0}
              slices={[]}
              context={undefined}
            />
          ))}
        </Radio.Group>
      </Form.Item>

      <Tag color={category === "maths" ? "cyan" : "volcano"}>{category}</Tag>
      {points && <Rate allowHalf defaultValue={points} />}
    </Card>
  </>
);

export default Question;
