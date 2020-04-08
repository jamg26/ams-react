import React from 'react';
import AssetForm from '../../../../../../shared/AssetForm';
import { connect } from 'react-redux';
import * as actions from '../../../../../../../actions';

const General = (props) => {
  const onFinish = async (values) => {
    props.updateAsset(props.edit._id, values);
    props.gotoTab('view');
  };

  return <AssetForm onFinish={onFinish} values={props.edit} />;
};

const mapStateToProps = (state) => {
  return {
    edit: state.assets.editAsset,
  };
};

export default connect(mapStateToProps, actions)(General);
