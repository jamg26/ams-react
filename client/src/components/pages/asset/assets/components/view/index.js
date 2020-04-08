import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table, Modal } from 'antd';
import * as actions from '../../../../../../actions';
import { columns } from './components/columns';

const View = (props) => {
  const [assets, setAssets] = useState([]);
  const [viewAsset, setViewAsset] = useState({});
  const [column, setColumns] = useState([]);
  const [viewModal, setViewModal] = useState(false);

  // const [activeColumns, setActiveColumns] = useState([
  //   {
  //     show: false,
  //     title: 'Asset Tag',
  //     dataIndex: 'asset_tag',
  //   },
  //   {
  //     show: true,
  //     title: 'Asset',
  //     dataIndex: 'asset_description',
  //   },
  //   {
  //     show: true,
  //     title: 'Category',
  //     dataIndex: 'asset_category_name',
  //   },
  //   {
  //     show: true,
  //     title: 'Sub Category',
  //     dataIndex: 'asset_sub_category',
  //   },
  // ]);

  // const [assetView, setAssetView] = useState({
  //   columns: [],
  // });

  useEffect(() => {
    const getAssets = async () => {
      if (assets?.length === props.assets?.length) return; // returning null if same size (dont re render)
      props.getAssets();
      setAssets(props.assets);
      setColumns(columns);
      console.log('useEffect rendered');
    };
    getAssets();
  }, [assets, props]);

  return (
    <>
      <Modal
        title='Information'
        visible={viewModal}
        onCancel={() => setViewModal(false)}
        footer={null}
        width='90%'
      >
        <Table
          dataSource={viewAsset}
          columns={column}
          loading={assets ? false : true}
          rowKey={(row) => row._id}
          onRow={(row) => ({
            onClick: () => {
              props.gotoTab('info');
              props.editAsset(row);
              setViewModal(false);
            },
          })}
        />
      </Modal>
      <Table
        dataSource={assets}
        columns={column}
        loading={assets ? false : true}
        rowKey={(row) => row._id}
        onRow={(row) => ({
          onClick: () => {
            setViewAsset([row]);
            setViewModal(true);
          },
        })}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    assets: state.assets?.assets,
  };
};

export default connect(mapStateToProps, actions)(View);
