import React, { useState } from 'react';
import { Form, Input, Button, Select, Col, Row } from 'antd';
import Card from '../../../../../../shared/Card';
import axios from 'axios';

const General = props => {
  const [form] = Form.useForm();
  const { Option } = Select;

  const onFinish = async values => {
    console.log('Received values of form: ', values);
    const asset = await axios.post('/api/assets', values);
    console.log(asset);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };

  return (
    <>
      <Form
        {...layout}
        form={form}
        name='asset'
        onFinish={onFinish}
        scrollToFirstError
      >
        <Card title='Asset Information'>
          <Row>
            <Col span={12}>
              <Form.Item name='asset_description' label='Asset Description'>
                <Select placeholder='Select asset description'>
                  <Option value='male'>Computer</Option>
                  <Option value='female'>Furniture</Option>
                </Select>
              </Form.Item>

              <Form.Item name='asset_category_name' label='Category'>
                <Select placeholder='Select category'>
                  <Option value='laptop'>Laptop</Option>
                  <Option value='phone'>Phone</Option>
                </Select>
              </Form.Item>

              <Form.Item name='asset_sub_category' label='Sub Category'>
                <Select placeholder='Select sub-category'>
                  <Option value='asus'>Asus</Option>
                </Select>
              </Form.Item>

              <Form.Item name='asset_manufacturer' label='Manufacturer'>
                <Input />
              </Form.Item>
              <Form.Item
                name='brand'
                label='Brand'
                rules={[
                  {
                    required: true,
                    message: 'Please input brand.'
                  }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name='asset_model' label='Model'>
                <Input />
              </Form.Item>
              <Form.Item
                name='asset_serial_number'
                label='Serial Number'
                rules={[
                  {
                    required: true,
                    message: 'Please input serial.'
                  }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name='plate_number' label='Plate Number'>
                <Input />
              </Form.Item>
              <Form.Item name='asset_condition' label='Condition'>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}></Col>
          </Row>
        </Card>
        <Card title='Asset Location'>
          <Row>
            <Col span={12}>
              <Form.Item
                name='asset_location'
                label='Location'
                rules={[
                  {
                    required: true,
                    message: 'Please input location.'
                  }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='asset_site'
                label='Site'
                rules={[
                  {
                    required: true,
                    message: 'Please input site.'
                  }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name='asset_department_code' label='Department'>
                <Select placeholder='Select department'>
                  <Option value='dept1'>Department 1</Option>
                  <Option value='dept2'>Department 2</Option>
                </Select>
              </Form.Item>
              <Form.Item name='asset_assign_to' label='Assign To'>
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Card title='Purchase details'>
          <Row>
            <Col span={12}>
              <Form.Item
                name='vendor_name'
                label='Vendor Name'
                rules={[
                  {
                    required: true,
                    message: 'Please input vendor name.'
                  }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name='purchase_order' label='Purchase Order'>
                <Input placeholder='Purchase Order...' />
              </Form.Item>
              <Form.Item
                name='invoiceNumber'
                label='Invoice Number'
                rules={[
                  {
                    required: true,
                    message: 'Please input invoice number.'
                  }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='purchase_date'
                label='Purchase Date'
                rules={[
                  {
                    required: true,
                    message: 'Please input purchase date.'
                  }
                ]}
              >
                <Input type='date' />
              </Form.Item>
              <Form.Item
                name='purchase_cost'
                label='Purchase Cost'
                rules={[
                  {
                    required: true,
                    message: 'Please input purchase cost.'
                  }
                ]}
              >
                <Input type='number' />
              </Form.Item>
              <Form.Item name='start_date' label='Start Date'>
                <Input type='date' />
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Card title='Depreciation Information'>
          <Row>
            <Col md={8}>
              <Form.Item name='initial_value' label='Initial Value'>
                <Input step='0.00' type='number' disabled />
              </Form.Item>
            </Col>
            <Col md={7}>
              <Form.Item name='salvage_value' label='Salvage Cost'>
                <Input step='0.00' type='number' />
              </Form.Item>
            </Col>
            <Col md={9}>
              <Form.Item name='depriciable_value' label='Depreciable Cost'>
                <Input step='0.00' type='number' disabled />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Item
                name='depreciation_frequency'
                label='Depreciation Frequency'
              >
                <Select placeholder='Select department'>
                  <Option value='yearly'>Yearly</Option>
                  <Option value='monthly'>Monthly</Option>
                  <Option value='hourly'>Hourly</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item name='useful_life_span' label='Useful Life Span'>
                <Input step='0.00' type='number' />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Item name='depreciation_cost' label='Depreciation Cost'>
                <Input type='number' />
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item name='current_cost' label='Current Value'>
                <Input step='0.00' type='number' />
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Form.Item style={{ marginTop: 10 }}>
          <Button type='primary' htmlType='submit'>
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default General;
