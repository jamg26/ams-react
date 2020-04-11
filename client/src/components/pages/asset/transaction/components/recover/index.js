import React, { useState } from 'react';
import Card from '../../../../../shared/Card';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select,
  Typography,
  Divider,
} from 'antd';
import { connect } from 'react-redux';

const Recover = (props) => {
  const { Option } = Select;
  const { Title } = Typography;
  const { TextArea } = Input;
  const [selected, setSelected] = useState({});
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const handleChange = (value) => {
    let fields = [];
    props.assets.map((asset) => {
      console.log(asset);
      if (asset._id === value) {
        Object.keys(asset).map((key) => {
          return fields.push({
            name: key,
            value: asset[key],
          });
        });
      }
    });
    setSelected(fields);
  };

  return (
    <Card title='Search for Asset to Dispose'>
      <Form {...layout} name='basic' onFinish={onFinish} fields={selected}>
        <Row>
          <Col md={8}>
            <Form.Item>
              <Title level={2}>Filter Asset</Title>
            </Form.Item>
            <Form.Item label='Asset Tag' name='asset_tag'>
              <Select placeholder='Select' showSearch onChange={handleChange}>
                {props.assets?.map((asset) => {
                  return (
                    <Option value={asset._id} key={asset._id}>
                      {asset.asset_tag}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item label='Asset' name='asset_description'>
              <Input />
            </Form.Item>
            <Form.Item label='Department' name='asset_department_code'>
              <Select disabled />
            </Form.Item>
          </Col>
          <Col md={1}>
            <Divider type='vertical' style={{ height: '100%' }} />
          </Col>
          <Col md={15}>
            <Form.Item>
              <Title level={2}>Reason for Recovery</Title>
            </Form.Item>
            <Form.Item label='Recovery Reason' name='recovery_reason'>
              <Select>
                <Option value='Damaged'>Damaged</Option>
                <Option value='Retire'>Retire</Option>
                <Option value='Lost'>Lost</Option>
                <Option value='Sold'>Sold</Option>
                <Option value='Stolen'>Stolen</Option>
                <Option value='Trade In'>Trade In</Option>
              </Select>
            </Form.Item>
            <Form.Item label='Note' name='recovery_note'>
              <TextArea />
            </Form.Item>
            <Button style={{ float: 'right' }}>Recover Asset</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    assets: state.assets?.assets,
  };
};

export default connect(mapStateToProps)(Recover);
