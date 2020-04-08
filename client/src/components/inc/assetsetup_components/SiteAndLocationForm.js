import React from 'react';
import axios from 'axios';
import { api_base_url } from '../../../keys';
import { Modal, Button } from 'antd';
import { Row, Col, Divider, Select, AutoComplete, Checkbox } from 'antd';
import { Input } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

class SiteAndLocationFrom extends React.Component {
  state = {
    sites_groupped: [],
    location_groupped: [],
    location: '',
    site: '',
  };
  submit_site_and_location = async () => {
    if (this.state.location != '') {
      if (this.state.site != '') {
        var duplicate = 0;
        for (var c = 0; c < this.props.asset_site_and_location; c++) {
          var dat = this.props.asset_site_and_location[c];
          if (
            dat.asset_setup_location == this.state.location &&
            dat.asset_setup_site == this.state.site
          ) {
            duplicate = 1;
            break;
          }
        }
        if (duplicate == 0) {
          const headers = {
            'Content-Type': 'application/json',
          };
          const response = await axios.post(
            api_base_url + '/api/save_site_and_location',
            {
              asset_setup_location: this.state.location,
              asset_setup_site: this.state.site,
            },
            { headers: headers }
          );
          alert('[temporary alert] Successfully added Location and Site');
          this.setState({
            location: '',
            site: '',
          });
        } else {
          alert('[temporary alert] Location and Site already Exist');
        }
      } else {
        alert('[temporary alert] blank Site');
      }
    } else {
      alert('[temporary alert] blank Location');
    }
  };
  componentDidUpdate(prevProps) {
    if (
      prevProps.data.asset_site_groupped != this.props.data.asset_site_groupped
    ) {
      this.setState({ sites_groupped: this.props.data.asset_site_groupped });
    }
    if (
      prevProps.data.asset_location_groupped !=
      this.props.data.asset_location_groupped
    ) {
      this.setState({
        location_groupped: this.props.data.asset_location_groupped,
      });
    }
  }
  componentDidMount() {
    this.setState({ sites_groupped: this.props.data.asset_site_groupped });
    this.setState({
      location_groupped: this.props.data.asset_location_groupped,
    });
  }
  render() {
    const location_list = this.state.location_groupped.map((data, index) => {
      return [<Option value={data._id}>{data._id}</Option>];
    });
    const site_list = this.state.sites_groupped.map((data, index) => {
      if (
        data.data[0].asset_setup_location == this.state.location &&
        data.data[0].asset_setup_site != '' &&
        data.data[0].asset_setup_site != null &&
        data.data[0].asset_setup_site != undefined
      ) {
        return [
          <Option value={data.data[0].asset_setup_site}>
            {data.data[0].asset_setup_site}
          </Option>,
        ];
      }
    });
    return [
      <div>
        <Row gutter='16' align={'middle'}>
          <Col span={2} style={{ textAlign: 'right' }}>
            Location
          </Col>
          <Col span={6}>
            <AutoComplete
              onChange={(event) => this.setState({ location: event })}
              filterOption={true}
              style={{ width: '100%' }}
              value={this.state.location}
            >
              {location_list}
            </AutoComplete>
          </Col>
          <Col span={2} style={{ textAlign: 'right' }}>
            Site
          </Col>
          <Col span={6}>
            <AutoComplete
              onChange={(event) => this.setState({ site: event })}
              filterOption={true}
              style={{ width: '100%' }}
              value={this.state.site}
            >
              {site_list}
            </AutoComplete>
          </Col>
        </Row>
        <Row gutter='16' align={'middle'} style={{ marginTop: '10px' }}>
          <Col span={24} style={{ textAlign: 'right' }}>
            <div>
              <Button
                type='primary'
                style={{ marginRight: '10px' }}
                onClick={() => this.submit_site_and_location()}
              >
                Save
              </Button>

              <Button
                onClick={() => {
                  this.setState({
                    location: '',
                    site: '',
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
