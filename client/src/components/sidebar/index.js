import React from 'react';
import { Menu } from 'antd';

const Sidebar = props => {
  const { SubMenu } = Menu;

  return (
    <div>
      <Menu>
        <Menu.Item>Dashboard</Menu.Item>
        <Menu.Item>Bulletin</Menu.Item>
        <Menu.Item>CEO</Menu.Item>
        <SubMenu title='HR'>
          <Menu.Item>Employee List</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Sidebar;
