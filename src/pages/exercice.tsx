import CustomLayout from "@/components/CustomLayout";
import { Typography } from "antd";
import { createClient } from "../../prismicio";
import React from "react";
const { Title } = Typography;
import * as prismicNext from "@prismicio/next";
import { Question } from "@/types/question";

interface QuestionData {
  questions: Question[];
}

const Exercice: React.FC<QuestionData> = ({ questions }) => {
  console.log("questions", questions);
  const today = new Date();

  return (
    <CustomLayout>
      <Title>Exercices du {today.toLocaleDateString("fr")}</Title>
      <Title level={2}> Bon courage !</Title>
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
