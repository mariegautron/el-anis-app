import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import CustomLayout from '@/components/CustomLayout';
import Title from 'antd/es/typography/Title';

const { Header, Sider, Content } = Layout;

const Exercice: React.FC = () => {

    const today = new Date()

  return (
    <CustomLayout>
        <Title>Exercices du {today.toLocaleDateString("fr")}</Title>
        <Title level={2}> Bon courage !</Title>
    </CustomLayout>
  );
};

export default Exercice;