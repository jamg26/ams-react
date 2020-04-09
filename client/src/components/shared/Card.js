import React from 'react';
import { Card as Ca } from 'antd';

const Card = props => {
  return (
    <Ca
      size='small'
      title={props.title}
      headStyle={{ backgroundColor: '#001529', color: '#fff' }}
    >
      {props.children}
    </Ca>
  );
};

export default Card;
