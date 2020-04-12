import React, { useEffect, useState } from 'react';
import {
  PageHeader,
  Typography,
  Col,
  Row,
  Form,
  Input,
  Select,
  Button,
  Table,
  Checkbox,
} from 'antd';
import Card from '../../../shared/Card';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import * as query from '../../../../queries';
import { columns } from './components/columns';

const Audit = (props) => {
  const [location, setLocation] = useState('');
  const [assets, setAssets] = useState([]);

  const newColumns = [
    {
      title: '',
      render: (row) => <Checkbox />,
    },
    ...columns,
  ];

  const [form] = Form.useForm();

  const { Title } = Typography;
  const { Option } = Select;
  const { TextArea } = Input;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = async (values) => {
    const { asset_location, asset_site } = values;
    const audit = await query.fetchAuditByLocationAndSite(asset_location, asset_site);
    setAssets(audit.data);
  };

  const locationChanged = (value) => {
    setLocation(value);
  };

  const reset = () => {
    setAssets([]);
    form.resetFields();
  };

  useEffect(() => {
    props.getAssets();
  }, []);

  return (
    <div>
      <PageHeader title='Audit' />
      <Card title='Filter asset to Audit'>
        <Title level={2}>Audit Detail</Title>
        <Form
          name='basic'
          {...layout}
          form={form}
          //fields={selected}
          //initialValues={}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <Col md={24}>
            <Row>
              <Col md={12}>
                <Form.Item label='Audit Window Name' name='audit_name'>
                  <Input
                    placeholder='e.g. Audit-Department_Name...'
                    addonAfter={
                      <Button type='link' onClick={reset}>
                        Reset
                      </Button>
                    }
                  />
                </Form.Item>
                <Form.Item label='Location' name='asset_location'>
                  <Select placeholder='Select' onChange={locationChanged}>
                    {props.assets?.map((asset, index) => {
                      return (
                        <Option key={index} value={asset.asset_location}>
                          {asset.asset_location}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item label='Site' name='asset_site'>
                  <Select placeholder='Select'>
                    {props.assets?.map((asset, index) => {
                      if (asset.asset_location !== location) return;
                      return (
                        <Option key={index} value={asset.asset_site}>
                          {asset.asset_site}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>
              <Col md={12}>
                <Form.Item label='Start Date' name='start_date'>
                  <Input type='date' />
                </Form.Item>
                <Form.Item label='Note' name='asset_note'>
                  <TextArea />
                </Form.Item>
              </Col>
              <Col md={24}>
                <div style={{ float: 'right' }}>
                  <Button htmlType='submit'>Fetch Asset</Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Form>
      </Card>
      <Card title='Asset List'>
        <Table
          dataSource={assets}
          columns={newColumns}
          loading={assets ? false : true}
          rowKey={(row) => row._id}
          onRow={(row) => ({
            onDoubleClick: () => {
              console.log(row);
            },
          })}
        />
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    assets: state.assets?.assets,
  };
};
export default connect(mapStateToProps, actions)(Audit);
