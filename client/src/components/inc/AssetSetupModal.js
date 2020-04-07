import React from 'react';
import { Menu, Layout } from 'antd';
import { Modal, Button } from 'antd';
import { Row, Col, Divider, Select, AutoComplete, Checkbox } from 'antd';
import AssetSetupForm from './assetsetup_components/AssetSetupForm';
import SiteAndLocationFrom from './assetsetup_components/SiteAndLocationForm';
const { Option } = Select;
const { SubMenu } = Menu;
const { Header } = Layout;
class AssetSetup extends React.Component {
  state = {
    reference: '1',
  };
  render() {
    return [
      <Modal
        title='Asset Setup and Reference'
        // visible={this.props.show}
        visible={this.props.show}
        onOk={this.handleOk}
        onCancel={this.props.close}
        width={'50%'}
        footer={[
          <Button key='back' onClick={this.props.close}>
            Return
          </Button>,
          ,
        ]}
      >
        <Row gutter='16'>
          <Col span={24}>
            <table
              class='table table-sm'
              style={{ backgroundColor: 'white', marginBottom: '0px' }}
            >
              <thead>
                <tr style={{ backgroundColor: '#124f62', color: 'white' }}>
                  <th colSpan='7'>Asset Setup and Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: 'middle' }} colSpan='2'></td>
                  <td
                    style={{ verticalAlign: 'middle', textAlign: 'right' }}
                    colSpan='3'
                  >
                    <Select
                      defaultValue='1'
                      onChange={(value) => this.setState({ reference: value })}
                      value={this.state.reference}
                    >
                      <Option value='1'>Asset Setup</Option>
                      <Option value='2'>Site and Location</Option>
                    </Select>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        {this.state.reference == 1 ? (
          <AssetSetupForm
            data={this.props.data.length != 0 ? this.props.data : []}
          />
        ) : (
          <SiteAndLocationFrom
            data={
              this.props.data.length != 0 && this.state.reference == 2
                ? this.props.data
                : []
            }
          />
        )}

        <Divider />
        <Row gutter='16'>
          <Col span={24}>
            <table
              class='table table-sm table-bordered'
              style={{ backgroundColor: 'white' }}
            >
              <thead>
                <tr style={{ backgroundColor: '#124f62', color: 'white' }}>
                  <th colSpan='7'>Asset Info Tagging Example</th>
                </tr>
                <tr>
                  <th>ASSET</th>
                  <th>AD CODE</th>
                  <th>CATEGORY</th>
                  <th>CN CODE</th>
                  <th>SUB-CATEGORY</th>
                  <th>SC CODE</th>
                  <th>ASSET TAG</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td title='Computer'>Computer</td>
                  <td title='COMP'>COMP</td>
                  <td title='Desktop'>Desktop</td>
                  <td title='DESK'>DESK</td>
                  <td title=''></td>
                  <td title=''></td>
                  <td>COMP-DESK-000-001</td>
                </tr>
                <tr>
                  <td title='Computer'></td>
                  <td title='COMP'></td>
                  <td title='Laptop'>Laptop</td>
                  <td title='LAP'>LAP</td>
                  <td title=''></td>
                  <td title=''></td>
                  <td>COMP-LAP-000-001</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td title='Furniture'>Furniture</td>
                  <td title='FUR'>FUR</td>
                  <td title='Chair'>Chair</td>
                  <td title='CHR'>CHR</td>
                  <td title='GASLIFT'>GASLIFT</td>
                  <td title='GAS'>GAS</td>
                  <td>FUR-CHR-GAS-000-001</td>
                </tr>
                <tr>
                  <td title='Furniture'></td>
                  <td title='FUR'></td>
                  <td title='Chair'></td>
                  <td title='CHR'></td>
                  <td title='MONOBLOCK'>MONOBLOCK</td>
                  <td title='MON'>MON</td>
                  <td>FUR-CHR-MON-000-001</td>
                </tr>
                <tr>
                  <td title='Furniture'></td>
                  <td title='FUR'></td>
                  <td title='Table'>Table</td>
                  <td title='TBL'>TBL</td>
                  <td title=''></td>
                  <td title=''></td>
                  <td>FUR-TBL-000-001</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td title='Mobile Device'>Mobile Device</td>
                  <td title='MOB'>MOB</td>
                  <td title='Phone'>Phone</td>
                  <td title='PHON'>PHON</td>
                  <td title=''></td>
                  <td title=''></td>
                  <td>MOB-PHON-000-001</td>
                </tr>
                <tr>
                  <td title='Mobile Device'></td>
                  <td title='MOB'></td>
                  <td title='Tablet'>Tablet</td>
                  <td title='TAB'>TAB</td>
                  <td title=''></td>
                  <td title=''></td>
                  <td>MOB-TAB-000-001</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td title='Vehicle'>Vehicle</td>
                  <td title='VEH'>VEH</td>
                  <td title='Heavy Equipment'>Heavy Equipment</td>
                  <td title='HEAVY'>HEAVY</td>
                  <td title='BULLDOZER'>BULLDOZER</td>
                  <td title='BUL'>BUL</td>
                  <td>VEH-HEAVY-BUL-000-001</td>
                </tr>
                <tr>
                  <td title='Vehicle'></td>
                  <td title='VEH'></td>
                  <td title='Heavy Equipment'></td>
                  <td title='HEAVY'></td>
                  <td title='DUMPTRUCK'>DUMPTRUCK</td>
                  <td title='DUM'>DUM</td>
                  <td>VEH-HEAVY-DUM-000-001</td>
                </tr>
                <tr>
                  <td title='Vehicle'></td>
                  <td title='VEH'></td>
                  <td title='Heavy Equipment'></td>
                  <td title='HEAVY'></td>
                  <td title='GRADER'>GRADER</td>
                  <td title='GRAD'>GRAD</td>
                  <td>VEH-HEAVY-GRAD-000-001</td>
                </tr>
                <tr>
                  <td title='Vehicle'></td>
                  <td title='VEH'></td>
                  <td title='SUV'>SUV</td>
                  <td title='SUV'>SUV</td>
                  <td title=''></td>
                  <td title=''></td>
                  <td>VEH-SUV-000-001</td>
                </tr>
                <tr>
                  <td title='Vehicle'></td>
                  <td title='VEH'></td>
                  <td title='Van'>Van</td>
                  <td title='VAN'>VAN</td>
                  <td title=''></td>
                  <td title=''></td>
                  <td>VEH-VAN-000-001</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row gutter='16'>
          <Col span={6}>
            <table
              class='table table-bordered table-sm'
              style={{ backgroundColor: 'white' }}
            >
              <thead>
                <tr>
                  <th>Site</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Davao City</td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col span={6}>
            <table
              class='table table-bordered table-sm'
              style={{ backgroundColor: 'white' }}
            >
              <thead>
                <tr>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bajada</td>
                </tr>
                <tr>
                  <td>Buhangin</td>
                </tr>
                <tr>
                  <td>Cabantian</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Divider />
      </Modal>,
    ];
  }
}

export default AssetSetup;
