import React from 'react';
import { Modal, Button } from 'antd';
import { Row, Col, Divider, Select, AutoComplete, Checkbox } from 'antd';
const { Option } = Select;

class SiteAndLocationFrom extends React.Component {
  state = {
    AssetDescription: '',
    AssetDescriptionCode: '',
    AssetCategory: '',
    AssetCategoryCode: '',
    AssetSubCategory: '',
    AssetSubCategoryCode: '',
    SerialNumber: false,
    PlateNumber: false,
  };
  render() {
    return [
      <div key={0}>
        <Row gutter='16' align={'middle'} style={{ marginTop: '10px' }}>
          <Col span={24} style={{ textAlign: 'right' }}>
            <div>
              <Button type='primary' style={{ marginRight: '10px' }}>
                Save
              </Button>

              <Button
                onClick={() => {
                  this.setState({
                    AssetDescription: '',
                    AssetDescriptionCode: '',
                    AssetCategory: '',
                    AssetCategoryCode: '',
                    AssetSubCategory: '',
                    AssetSubCategoryCode: '',
                    SerialNumber: false,
                    PlateNumber: false,
                  });
                }}
              >
                Clear
              </Button>
            </div>
          </Col>
        </Row>
      </div>,
    ];
  }
}

export default SiteAndLocationFrom;
