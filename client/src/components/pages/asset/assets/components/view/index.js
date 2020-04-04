import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import * as actions from '../../../../../../actions';

const View = (props) => {
  const [activeColumns, setActiveColumns] = useState([
    {
      show: false,
      title: 'Asset Tag',
      dataIndex: 'asset_tag',
    },
    {
      show: true,
      title: 'Asset',
      dataIndex: 'asset_description',
    },
    {
      show: true,
      title: 'Category',
      dataIndex: 'asset_category_name',
    },
    {
      show: true,
      title: 'Sub Category',
      dataIndex: 'asset_sub_category',
    },
  ]);

  const [assetView, setAssetView] = useState({
    columns: [],
  });

  useEffect(() => {
    const getAssets = async () => {
      props.getAssets();
      activeColumns.map((columns) => {
        if (!columns.show) return;
        assetView.columns.push({
          title: columns.title,
          dataIndex: columns.dataIndex,
          key: columns.key,
        });
      });
    };
    getAssets();
  }, [activeColumns, assetView]);

  return (
    <>
      <Table dataSource={props.assets} columns={assetView.columns} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    assets: state.assets?.assets,
  };
};

export default connect(mapStateToProps, actions)(View);
