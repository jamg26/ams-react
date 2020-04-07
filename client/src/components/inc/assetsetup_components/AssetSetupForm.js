import React from 'react';
import { Modal, Button } from 'antd';
import { Row, Col,Divider,Select,AutoComplete,Checkbox} from 'antd';
const { Option } = Select;

class AssetSetupForm extends React.Component {
    state = {
        AssetDescription: '',
        AssetDescriptionCode : '',
        AssetCategory: '',
        AssetCategoryCode : '',
        AssetSubCategory : '',
        AssetSubCategoryCode : '',
        SerialNumber : false,
        PlateNumber : false,
    }
    render (){
        return [
            <div>
                <Row gutter="16" align={'middle'}>
                    <Col span={4} style={{textAlign : 'right'}}>
                    Asset Description
                    </Col>
                    <Col span={6} >
                        <AutoComplete
                            onChange={(event)=>this.setState({ AssetDescription : event })}
                            
                            style={{width : '100%'}}
                            value={this.state.AssetDescription}
                        >
                        <Option value="Asset Setup">Asset Setup</Option>
                        <Option value="Site and Location">Site and Location</Option>
                        </AutoComplete>
                    </Col>
                    <Col span={4} style={{textAlign : 'right'}}>
                    AD CODE
                    </Col>
                    <Col span={6} >
                        <AutoComplete
                            onChange={(event)=>this.setState({ AssetDescriptionCode : event })}
                            
                            style={{width : '100%'}}
                            value={this.state.AssetDescriptionCode}
                        >
                        <Option value="Asset Setup">Asset Setup</Option>
                        <Option value="Site and Location">Site and Location</Option>
                        </AutoComplete>
                    </Col>
                </Row>
                <Row gutter="16" align={'middle'} style={{marginTop : '10px'}}>
                    <Col span={4} style={{textAlign : 'right'}}>
                    Category
                    </Col>
                    <Col span={6} >
                        <AutoComplete
                            onChange={(event)=>this.setState({ AssetCategory : event })}
                            
                            style={{width : '100%'}}
                            value={this.state.AssetCategory}
                        >
                        <Option value="Asset Setup">Asset Setup</Option>
                        <Option value="Site and Location">Site and Location</Option>
                        </AutoComplete>
                    </Col>
                    <Col span={4} style={{textAlign : 'right'}}>
                    CN CODE
                    </Col>
                    <Col span={6} >
                        <AutoComplete
                            onChange={(event)=>this.setState({ AssetCategoryCode : event })}
                            
                            style={{width : '100%'}}
                            value={this.state.AssetCategoryCode}
                        >
                        <Option value="Asset Setup">Asset Setup</Option>
                        <Option value="Site and Location">Site and Location</Option>
                        </AutoComplete>
                    </Col>
                </Row>
                <Row gutter="16" align={'middle'} style={{marginTop : '10px'}}>
                    <Col span={4} style={{textAlign : 'right'}}>
                    Sub Category
                    </Col>
                    <Col span={6} >
                        <AutoComplete
                            onChange={(event)=>this.setState({ AssetSubCategory : event })}
                            
                            style={{width : '100%'}}
                            value={this.state.AssetSubCategory}
                        >
                        <Option value="Asset Setup">Asset Setup</Option>
                        <Option value="Site and Location">Site and Location</Option>
                        </AutoComplete>
                    </Col>
                    <Col span={4} style={{textAlign : 'right'}}>
                    SC CODE
                    </Col>
                    <Col span={6} >
                        <AutoComplete
                            onChange={(event)=>this.setState({ AssetSubCategoryCode : event })}
                            
                            style={{width : '100%'}}
                            value={this.state.AssetSubCategoryCode}
                        >
                        <Option value="Asset Setup">Asset Setup</Option>
                        <Option value="Site and Location">Site and Location</Option>
                        </AutoComplete>
                    </Col>
                </Row> 
                <Row gutter="16" align={'middle'} style={{marginTop : '10px'}}>
                    <Col span={4} style={{textAlign : 'right'}}>
                        Required Fields 
                    </Col>
                    <Col span={20}>
                        <Checkbox checked={this.state.SerialNumber} onChange={(event)=>this.setState({SerialNumber : event.target.checked})}>Serial Number</Checkbox>
                        <Checkbox checked={this.state.PlateNumber} onChange={(event)=>this.setState({PlateNumber :  event.target.checked})}>Plate Number</Checkbox>
                    </Col>
                    
                </Row>
                <Row gutter="16" align={'middle'} style={{marginTop : '10px'}}>
                    
                    <Col span={24} style={{textAlign : 'right'}}>
                    <div>
                    <Button type="primary" style={{marginRight : '10px'}}>Save</Button>

                    <Button onClick={()=>{this.setState({
                        AssetDescription: '',
                        AssetDescriptionCode : '',
                        AssetCategory: '',
                        AssetCategoryCode : '',
                        AssetSubCategory : '',
                        AssetSubCategoryCode : '',
                        SerialNumber : false,
                        PlateNumber : false,
                    })}}>Clear</Button>
                    </div>
                    </Col>
                    
                </Row>
            </div>
        ]
    }
}

export default AssetSetupForm;