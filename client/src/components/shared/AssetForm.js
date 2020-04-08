import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button, Select, Col, Row } from 'antd';
import Card from './Card';

const AssetForm = (props) => {
  const [editValues, setEditValues] = useState([]);
  const [form] = Form.useForm();
  const { Option } = Select;
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  useEffect(() => {
    const RemapEdit = () => {
      let val = [];
      props.values &&
        Object.keys(props.values).map((keys) => {
          return val.push({
            name: keys,
            value: props.values[keys],
          });
        });
      setEditValues(val);
    };
    RemapEdit();
  }, [props]);

  return (
    <Form
      {...layout}
      form={form}
      name='asset'
      fields={editValues}
      onFinish={props.onFinish}
      scrollToFirstError
    >
      <Card title='Asset Information'>
        <Row>
          <Col span={12}>
            <Form.Item name='asset_description' label='Asset Description'>
              <Select placeholder='Select asset description'>
                <Option value='Computer'>Computer</Option>
                <Option value='Furniture'>Furniture</Option>
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
              name='asset_brand'
              label='Brand'
              rules={[
                {
                  required: true,
                  message: 'Please input brand.',
                },
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
                  message: 'Please input serial.',
                },
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
                  message: 'Please input location.',
                },
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
                  message: 'Please input site.',
                },
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
                  message: 'Please input vendor name.',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name='purchase_order' label='Purchase Order'>
              <Input placeholder='Purchase Order...' />
            </Form.Item>
            <Form.Item
              name='invoice_number'
              label='Invoice Number'
              rules={[
                {
                  required: true,
                  message: 'Please input invoice number.',
                },
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
                  message: 'Please input purchase date.',
                },
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
                  message: 'Please input purchase cost.',
                },
              ]}
            >
              <InputNumber
                style={{ width: '100%' }}
                placeholder='0.00'
                step='0.00'
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
              />
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
              <InputNumber
                style={{ width: '100%' }}
                placeholder='0.00'
                step='0.00'
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                disabled
              />
            </Form.Item>
          </Col>
          <Col md={7}>
            <Form.Item name='salvage_value' label='Salvage Cost'>
              <InputNumber
                style={{ width: '100%' }}
                placeholder='0.00'
                step='0.00'
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
              />
            </Form.Item>
          </Col>
          <Col md={9}>
            <Form.Item name='depriciable_value' label='Depreciable Cost'>
              <InputNumber
                style={{ width: '100%' }}
                placeholder='0.00'
                step='0.00'
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                disabled
              />
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
              <InputNumber style={{ width: '100%' }} placeholder='0' />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Item name='depreciation_cost' label='Depreciation Cost'>
              <InputNumber
                style={{ width: '100%' }}
                placeholder='0.00'
                step='0.00'
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
              />
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item name='current_cost' label='Current Value'>
              <InputNumber
                style={{ width: '100%' }}
                placeholder='0.00'
                step='0.00'
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
              />
            </Form.Item>
          </Col>
        </Row>
      </Card>
      <Form.Item style={{ marginTop: 10 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AssetForm;
