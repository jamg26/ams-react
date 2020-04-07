import React from 'react';
import { Modal, Button } from 'antd';
import { Row, Col, Divider, Select, AutoComplete, Checkbox } from 'antd';
const { Option } = Select;

class AssetSetupForm extends React.Component {
  state = {
    AssetDescription: '',
    AssetDescriptionCode: '',
    AssetCategory: '',
    AssetCategoryCode: '',
    AssetSubCategory: '',
    AssetSubCategoryCode: '',
    SerialNumber: false,
    PlateNumber: false,
    list: [],
    category_list: [],
    sub_category_list: [],
    desc_code_disable: false,
    cat_code_disable: false,
    sub_cat_code_disable: false,
  };
  submit_asset_setup = async () => {
    var duplicate = 0;
    for (var c = 0; c < this.props.data.asset_tags.length; c++) {
      var dat = this.props.data.asset_tags[c];
      console.log(dat.asset_setup_description);
      if (
        dat.asset_setup_description === this.state.AssetDescription &&
        dat.asset_setup_category === this.state.AssetCategory &&
        dat.asset_setup_sub_cat ===
          (this.state.AssetSubCategory === ''
            ? null
            : this.state.AssetSubCategory)
      ) {
        duplicate = 1;
        break;
      }
    }
  };
  componentDidUpdate(prevProps) {
    if (
      prevProps.data.asset_tags_groupped !== this.props.data.asset_tags_groupped
    ) {
      this.setState({ list: this.props.data.asset_tags_groupped });
    }
    if (
      prevProps.data.asset_tags_category_groupped !==
      this.props.data.asset_tags_category_groupped
    ) {
      this.setState({
        category_list: this.props.data.asset_tags_category_groupped,
      });
    }
    if (
      prevProps.data.asset_tags_sub_category_groupped !==
      this.props.data.asset_tags_sub_category_groupped
    ) {
      this.setState({
        sub_category_list: this.props.data.asset_tags_sub_category_groupped,
      });
    }
  }
  set_other_value = (origin, destination, value) => {
    console.log(origin);
    if (origin === '1-1') {
      var code = '';
      for (var c = 0; c < this.state.list.length; c++) {
        if (this.state.list[c]._id === value) {
          code = this.state.list[c].data[0].asset_setup_ad;
          this.setState(
            { AssetDescriptionCode: code, desc_code_disable: true },
            () => {}
          );
          break;
        }
      }
      if (code === '') {
        this.setState({ desc_code_disable: false });
      }
    } else if (origin === '1-2') {
      var description = '';
      for (var c = 0; c < this.state.list.length; c++) {
        console.log(value + ' ' + this.state.list[c].data[0].asset_setup_ad);
        if (this.state.list[c].data[0].asset_setup_ad === value) {
          description = this.state.list[c]._id;
          this.setState({ AssetDescription: description }, () => {});
          break;
        }
      }
    } else if (origin === '2-1') {
      var code = '';
      for (var c = 0; c < this.state.category_list.length; c++) {
        if (this.state.category_list[c]._id === value) {
          code = this.state.category_list[c].data[0].asset_setup_ac;
          this.setState({ AssetCategoryCode: code, cat_code_disable: true });
          break;
        }
      }
      if (code === '') {
        this.setState({ cat_code_disable: false });
      }
    } else if (origin === '2-2') {
      var description = '';
      for (var c = 0; c < this.state.category_list.length; c++) {
        if (this.state.category_list[c].data[0].asset_setup_ac === value) {
          description = this.state.category_list[c]._id;
          this.setState({ AssetCategory: description });
          break;
        }
      }
    } else if (origin === '3-1') {
      var code = '';
      for (var c = 0; c < this.state.sub_category_list.length; c++) {
        console.log(value);
        if (this.state.sub_category_list[c]._id === value) {
          code = this.state.sub_category_list[c].data[0].asset_setup_sc;
          this.setState({
            AssetSubCategoryCode: code,
            sub_cat_code_disable: true,
          });
        }
      }
      if (code === '') {
        this.setState({ sub_cat_code_disable: false });
      }
    } else if (origin === '3-2') {
      var description = '';
      for (var c = 0; c < this.state.sub_category_list.length; c++) {
        if (this.state.sub_category_list[c].data[0].asset_setup_sc === value) {
          code = this.state.sub_category_list[c]._id;
          this.setState({ AssetSubCategory: description });
        }
      }
    }
  };
  render() {
    const description_options = this.state.list.map((data, index) => {
      return [
        <Option key={index} value={data._id}>
          {data._id}
        </Option>,
      ];
    });
    const description_code_options = this.state.list.map((data, index) => {
      return [
        <Option key={index} value={data.data[0].asset_setup_ad}>
          {data.data[0].asset_setup_ad}
        </Option>,
      ];
    });
    const category_option = this.state.category_list.map((data, index) => {
      if (
        data.data[0].asset_setup_description === this.state.AssetDescription
      ) {
        return [
          <Option key={index} value={data._id}>
            {data._id}
          </Option>,
        ];
      }
    });
    const category_code_option = this.state.category_list.map((data, index) => {
      if (
        data.data[0].asset_setup_description === this.state.AssetDescription
      ) {
        return [
          <Option key={index} value={data.data[0].asset_setup_ac}>
            {data.data[0].asset_setup_ac}
          </Option>,
        ];
      }
    });
    const sub_category_option = this.state.sub_category_list.map(
      (data, index) => {
        if (
          data.data[0].asset_setup_description ===
            this.state.AssetDescription &&
          data.data[0].asset_setup_category === this.state.AssetCategory &&
          data.data[0].asset_setup_category !== null &&
          data.data[0].asset_setup_category !== ''
        ) {
          return [
            <Option key={index} value={data._id}>
              {data._id}
            </Option>,
          ];
        }
      }
    );
    const sub_category_code_option = this.state.sub_category_list.map(
      (data, index) => {
        if (
          data.data[0].asset_setup_description ===
            this.state.AssetDescription &&
          data.data[0].asset_setup_category === this.state.AssetCategory &&
          data.data[0].asset_setup_category !== null &&
          data.data[0].asset_setup_category !== ''
        ) {
          return [
            <Option key={index} value={data.data[0].asset_setup_sc}>
              {data.data[0].asset_setup_sc}
            </Option>,
          ];
        }
      }
    );
    return [
      <div>
        <Row gutter='16' align={'middle'}>
          <Col span={4} style={{ textAlign: 'right' }}>
            Asset Description
          </Col>
          <Col span={6}>
            <AutoComplete
              className='AutoCompleteCapitalize'
              onChange={(event) =>
                this.setState({ AssetDescription: event }, () => {
                  this.set_other_value('1-1', '1-2', event);
                })
              }
              filterOption={true}
              style={{ width: '100%' }}
              value={this.state.AssetDescription}
            >
              {description_options}
            </AutoComplete>
          </Col>
          <Col span={4} style={{ textAlign: 'right' }}>
            AD CODE
          </Col>
          <Col span={6}>
            <AutoComplete
              className='AutoCompleteUpperCase'
              disabled={this.state.desc_code_disable}
              onChange={(event) =>
                this.setState({ AssetDescriptionCode: event }, () => {
                  this.set_other_value('1-2', '1-1', event);
                })
              }
              filterOption={true}
              style={{ width: '100%', textTransform: 'uppercase' }}
              value={this.state.AssetDescriptionCode}
            >
              {description_code_options}
            </AutoComplete>
          </Col>
        </Row>
        <Row gutter='16' align={'middle'} style={{ marginTop: '10px' }}>
          <Col span={4} style={{ textAlign: 'right' }}>
            Category
          </Col>
          <Col span={6}>
            <AutoComplete
              className='AutoCompleteCapitalize'
              onChange={(event) =>
                this.setState({ AssetCategory: event }, () => {
                  this.set_other_value('2-1', '2-2', event);
                })
              }
              filterOption={true}
              style={{ width: '100%' }}
              value={this.state.AssetCategory}
            >
              {category_option}
            </AutoComplete>
          </Col>
          <Col span={4} style={{ textAlign: 'right' }}>
            CN CODE
          </Col>
          <Col span={6}>
            <AutoComplete
              className='AutoCompleteUpperCase'
              disabled={this.state.cat_code_disable}
              onChange={(event) =>
                this.setState({ AssetCategoryCode: event }, () => {
                  this.set_other_value('2-2', '2-1', event);
                })
              }
              filterOption={true}
              style={{ width: '100%', textTransform: 'uppercase' }}
              value={this.state.AssetCategoryCode}
            >
              {category_code_option}
            </AutoComplete>
          </Col>
        </Row>
        <Row gutter='16' align={'middle'} style={{ marginTop: '10px' }}>
          <Col span={4} style={{ textAlign: 'right' }}>
            Sub Category
          </Col>
          <Col span={6}>
            <AutoComplete
              className='AutoCompleteCapitalize'
              onChange={(event) =>
                this.setState({ AssetSubCategory: event }, () => {
                  this.set_other_value('3-1', '3-2', event);
                })
              }
              filterOption={true}
              style={{ width: '100%' }}
              value={this.state.AssetSubCategory}
            >
              {sub_category_option}
            </AutoComplete>
          </Col>
          <Col span={4} style={{ textAlign: 'right' }}>
            SC CODE
          </Col>
          <Col span={6}>
            <AutoComplete
              disabled={this.state.sub_cat_code_disable}
              className='AutoCompleteUpperCase'
              onChange={(event) =>
                this.setState({ AssetSubCategoryCode: event }, () => {
                  this.set_other_value('3-2', '3-1', event);
                })
              }
              filterOption={true}
              style={{ width: '100%', textTransform: 'uppercase' }}
              value={this.state.AssetSubCategoryCode}
            >
              {sub_category_code_option}
            </AutoComplete>
          </Col>
        </Row>
        <Row gutter='16' align={'middle'} style={{ marginTop: '10px' }}>
          <Col span={4} style={{ textAlign: 'right' }}>
            Required Fields
          </Col>
          <Col span={20}>
            <Checkbox
              checked={this.state.SerialNumber}
              onChange={(event) =>
                this.setState({ SerialNumber: event.target.checked })
              }
            >
              Serial Number
            </Checkbox>
            <Checkbox
              checked={this.state.PlateNumber}
              onChange={(event) =>
                this.setState({ PlateNumber: event.target.checked })
              }
            >
              Plate Number
            </Checkbox>
          </Col>
        </Row>
        <Row gutter='16' align={'middle'} style={{ marginTop: '10px' }}>
          <Col span={24} style={{ textAlign: 'right' }}>
            <div>
              <Button
                type='primary'
                style={{ marginRight: '10px' }}
                onClick={() => this.submit_asset_setup()}
              >
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
                    desc_code_disable: false,
                    cat_code_disable: false,
                    sub_cat_code_disable: false,
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

export default AssetSetupForm;
