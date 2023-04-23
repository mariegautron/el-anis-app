import { Button, Spin, Typography } from "antd";
import React, { CSSProperties } from "react";
const { Title } = Typography;
import { Card } from "antd";
import { createClient } from "../../prismicio";
import { Home } from "@/types/home";

const cardStyle: CSSProperties = {
  width: 600,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
};

const bgImage: CSSProperties = {
  background:
    "url('https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg')",
  width: "50%",
  height: "100vh",
};

interface HomeProps {
  page: Home;
}

const Home: React.FC<HomeProps> = ({ page }) => {
  if (!page.data) {
    return <Spin />;
  }

  const { data } = page;

  return (
    <div style={{ display: "flex" }}>
      <div style={bgImage}></div>
      <div style={{ width: "50%", position: "relative", height: "100vh" }}>
        <Card title={data.hello} style={cardStyle}>
          <Title>{data.heading}</Title>
          <Button type="primary" size="large" href="/exercice">
            {data.labelbutton}
          </Button>
        </Card>
      </div>
    </div>
  );
};

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage");

  console.log("page: " + page);

  return {
    props: {
      page,
    },
  };
}

export default Home;
