import React from 'react';
import Headers from '../components/header';
import Sidebars from '../components/sidebar';
import Body from '../components/body';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const Layouts = props => {
  const { path } = props.match;
  return (
    <Layout>
      <Sider style={{ height: '100vh', position: 'fixed' }}>
        <Sidebars navigation={path} />
      </Sider>
      <Layout style={{ paddingLeft: 200 }}>
        <Header>
          <Headers />
        </Header>
        <Content>
          <Body navigation={path} />
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    </Layout>
  );
};

export default Layouts;
