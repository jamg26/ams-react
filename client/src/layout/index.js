import React from 'react';
import Headers from '../components/header';
import Sidebars from '../components/sidebar';
import Body from '../components/body';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const Layouts = props => {
  return (
    <Layout>
      <Header>
        <Headers />
      </Header>
      <Layout>
        <Sider>
          <Sidebars />
        </Sider>
        <Content>
          <Body navigation={props.match.params.navigation} />
        </Content>
      </Layout>
      {/* <Footer>{props.footer()}</Footer> */}
    </Layout>
  );
};

export default Layouts;
