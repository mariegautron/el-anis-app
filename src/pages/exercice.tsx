import CustomLayout from "@/components/CustomLayout";
import Question from "@/components/Question";
import { QuestionData } from "@/types/question";
import * as prismicNext from "@prismicio/next";
import { Typography } from "antd";
import React from "react";
import { createClient } from "../../prismicio";
const { Title } = Typography;

import { Button, Form } from "antd";

const onFinish = (values: unknown) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: unknown) => {
  console.log("Failed:", errorInfo);
};

interface QuestionProps {
  questions: QuestionData[];
}

const Exercice: React.FC<QuestionProps> = ({ questions }) => {
  const today = new Date();

  const questionsData = questions.map((question) => question.data);

  return (
    <CustomLayout>
      <Title>Exercices du {today.toLocaleDateString("fr")}</Title>
      <Title level={2}> Bon courage !</Title>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {questionsData.map((question) => (
          <Question {...question} key={question.id} />
        ))}

        <Form.Item
          style={{
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button type="primary" htmlType="submit">
            J&apos;ai fini !
          </Button>
        </Form.Item>
      </Form>
    </CustomLayout>
  );
};

export async function getStaticProps({
  previewData,
}: prismicNext.CreateClientConfig) {
  const client = createClient({ previewData });

  const questions = await client.getAllByType("question");

  return {
    props: {
      questions,
    },
  };
}

export default Exercice;
