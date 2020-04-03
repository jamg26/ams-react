import React, { useState } from 'react';
import axios from 'axios';
import AssetForm from '../../../../../../shared/AssetForm';
import { connect } from 'react-redux';
import * as actions from '../../../../../../../actions/';

const General = props => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
    props.newAsset(values);
  };

  return <AssetForm onFinish={onFinish} />;
};

export default connect(null, actions)(General);
