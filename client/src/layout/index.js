import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const Layouts = props => {
  return (
    <div>
      <Layout>
        <Header>{props.header()}</Header>
        <Layout>
          <Sider>{props.sidebar()}</Sider>
          <Content>{props.body()}</Content>
        </Layout>
        {/* <Footer>{props.footer()}</Footer> */}
      </Layout>
    </div>
  );
};

export default Layouts;
