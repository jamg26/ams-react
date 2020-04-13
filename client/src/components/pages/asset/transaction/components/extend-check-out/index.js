import React, { useEffect, useState } from 'react';
import { Row, Col, Select, Typography, Form, Input, Button, Table, Divider } from 'antd';
import Card from '../../../../../shared/Card';
import { connect } from 'react-redux';

const ExtendCheckOut = (props) => {
  const { Title } = Typography;
  const { Option } = Select;
  const [selected, setSelected] = useState({});
  const columns = [
    {
      show: true,
      title: 'Asset Tag',
      dataIndex: 'asset_tag',
    },
    {
      show: true,
      title: 'Ticket No.',
      dataIndex: '',
    },
    {
      show: true,
      title: 'Asset',
      dataIndex: '',
    },
    {
      show: true,
      title: 'Location',
      dataIndex: '',
    },
    {
      show: true,
      title: 'Department',
      dataIndex: '',
    },
    {
      show: true,
      title: 'Asignee',
      dataIndex: '',
    },
    {
      show: true,
      title: 'New Due Date',
      dataIndex: 'asset_transaction_status',
    },
  ];

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
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

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Form
        name='basic'
        {...layout}
        fields={selected}
        //initialValues={}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Card title='Asset Detail'>
          <Row>
            <Col md={24}>
              Scan Here:
              <Select
                placeholder='Select'
                showSearch
                style={{ width: '100%' }}
                onChange={handleChange}>
                {props.assets?.map((asset) => {
                  if (asset.asset_transaction_status !== 'Checked Out') return;
                  return (
                    <Option value={asset._id} key={asset._id}>
                      {asset.asset_tag}
                    </Option>
                  );
                })}
              </Select>
            </Col>
            <Col md={12}>
              <Row>
                <Col md={24}>
                  <Title level={2}>Asset Details</Title>
                </Col>
                <Col md={24}>
                  <Form.Item label='Asset Tag' name='asset_tag'>
                    <Input />
                  </Form.Item>
                  <Form.Item label='Asset' name='asset_description'>
                    <Input />
                  </Form.Item>
                  <Form.Item label='Site' name='asset_site'>
                    <Input />
                  </Form.Item>
                  <Form.Item label='Location' name='asset_location'>
                    <Input />
                  </Form.Item>
                  <Form.Item label='Department Name' name='asset_department_code'>
                    <Select placeholder='Select'>
                      <Option value='dept1'>Department 1</Option>
                      <Option value='dept2'>Department 2</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col md={1}>
              <Divider type='vertical' style={{ height: '100%' }} />
            </Col>
            <Col md={11}>
              <Row>
                <Col md={24}>
                  <Title level={2}>Check In By</Title>
                </Col>
                <Col md={24}>
                  <Form.Item label='Employee ID' name='employee_id'>
                    <Select placeholder='Select' showSearch />
                  </Form.Item>
                  <Form.Item label='Due Date' name='due_date'>
                    <Input type='date' />
                  </Form.Item>
                  <Form.Item label='New Due Date' name='new_due_date'>
                    <Input type='date' />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col md={24}>
              <Form.Item style={{ float: 'right' }}>
                <Button type='primary' htmlType='submit'>
                  Add to Queue
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
      <Form
        name='basic'
        //initialValues={}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Card title='Check In Queue'>
          <Row justify='end'>
            <Col md={24}>
              <Table columns={columns} />
            </Col>
            <Col>
              <Form.Item>
                <Button type='primary' htmlType='submit'>
                  Process Request
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    assets: state.assets?.assets,
  };
};

export default connect(mapStateToProps)(ExtendCheckOut);
