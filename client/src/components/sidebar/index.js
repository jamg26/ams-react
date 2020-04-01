import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
const { SubMenu, Item } = Menu;

const Sidebar = props => {
  return (
    <div>
      <Menu>
        <Item>
          <Link to='dashboard'>Dashboard</Link>
        </Item>
        <Item>
          <Link to='bulletin'>Bulletin</Link>
        </Item>
        <Item>
          <Link to='ceo'>CEO</Link>O
        </Item>
        <SubMenu title='HR'>
          <Item>Employee List</Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Sidebar;
