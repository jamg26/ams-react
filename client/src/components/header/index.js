import React from 'react';
import { Menu, Layout } from 'antd';

const { SubMenu } = Menu;
const { Header } = Layout;

const Headers = props => {
  return (
    <Layout className='layout' style={{ float: 'right' }}>
      <Header>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['1']}
          onClick={e => console.log(e)}
        >
          <Menu.Item key='dashboard'>Dashboard</Menu.Item>
          <Menu.Item key='setup'>Company Setup</Menu.Item>
          <SubMenu
            key='sub1'
            title={
              <span>
                <span>Profile</span>
              </span>
            }
          >
            <Menu.Item key='profile'>Profile</Menu.Item>
            <Menu.Item key='logout'>Logout</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Headers;
