import CustomLayout from "@/components/CustomLayout";
import { Typography } from "antd";
import React from "react";
const { Title } = Typography;

const Exercice: React.FC = () => {
  const today = new Date();

  return (
    <CustomLayout>
      <Title>Exercices du {today.toLocaleDateString("fr")}</Title>
      <Title level={2}> Bon courage !</Title>
    </CustomLayout>
  );
};

export default Exercice;
