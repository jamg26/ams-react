import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { api_base_url } from "../../../../keys";
import { Row, Col, Button, Empty,Pagination,Input } from 'antd';
import { FlagTwoTone, CloseCircleTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
var page_count=10;
const { Search } = Input;

class NewRequest extends React.Component {
    state = {
        request_list : [],
        loop: 0,
        paged_content: [],
        current: 1,
    }
    searchfunction =(value) => {
      var input, filter, table, tr, td, i, txtValue;
      filter = value.toUpperCase();
      table = document.getElementById("approved_request_table");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[0];
        var td1 = tr[i].getElementsByTagName("td")[1];
        var td2 = tr[i].getElementsByTagName("td")[2];
        var td3 = tr[i].getElementsByTagName("td")[3];
        var td4 = tr[i].getElementsByTagName("td")[4];
        var td5 = tr[i].getElementsByTagName("td")[5];
        var td6 = tr[i].getElementsByTagName("td")[6];
        var td7 = tr[i].getElementsByTagName("td")[7];
        var td8 = tr[i].getElementsByTagName("td")[8];
        if (td) {
          var txtValue = td.textContent || td.innerText;
          var txtValue1 = td1.textContent || td1.innerText;
          var txtValue2 = td2.textContent || td2.innerText;
          var txtValue3 = td3.textContent || td3.innerText;
          var txtValue4 = td4.textContent || td4.innerText;
          var txtValue5 = td5.textContent || td5.innerText;
          var txtValue6 = td6.textContent || td6.innerText;
          var txtValue7 = td7.textContent || td7.innerText;
          var txtValue8 = td8.textContent || td8.innerText;
          if(txtValue.toUpperCase().indexOf(filter) > -1 
          || txtValue1.toUpperCase().indexOf(filter) > -1
          || txtValue2.toUpperCase().indexOf(filter) > -1
          || txtValue3.toUpperCase().indexOf(filter) > -1
          || txtValue4.toUpperCase().indexOf(filter) > -1
          || txtValue5.toUpperCase().indexOf(filter) > -1
          || txtValue6.toUpperCase().indexOf(filter) > -1
          || txtValue7.toUpperCase().indexOf(filter) > -1
          || txtValue8.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
    }
    get_asset_setup_list = async () => {
      const headers = {
        'Content-Type': 'application/json',
      };
      const response = await axios.get(api_base_url + '/api/fixed_asset_officer_pending_request', {
        headers: headers,
      });
      this.setState({ request_list : response.data},()=>{
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.request_list.length / page_count); i++) {
          pageNumbers.push(i);
        }
        this.setState({ pageNumbers : pageNumbers })
        var paged=[];
       
        for(var c=parseFloat(this.state.loop)*parseFloat(page_count);c<(parseFloat(this.state.loop)+parseFloat(1))*parseFloat(page_count);c++){
            if(this.state.request_list[c]){
              paged.push(this.state.request_list[c])
            }
            
        }
        this.setState({ paged_content : paged})
        
      })
    };
    componentDidMount(){
        this.get_asset_setup_list();
    }
    approve_request= async (id, ticket_no, type)=>{
        var status="Confirmed";
        if(type=="NEW_ASSET"){
            console.log(id, ticket_no, type);
            const headers = {
              'Content-Type': 'application/json',
            };
            const response = await axios.post(api_base_url + '/api/approve_new_asset',{
                id,
                ticket_no,
                status
            }, {
              headers: headers,
            });
            alert('[temporary alert] new asset request confirmed');
            this.get_asset_setup_list();
        }else if (type=="NEW_ASSET_SETUP"){
            console.log(id, ticket_no, type);
            const headers = {
              'Content-Type': 'application/json',
            };
            const response = await axios.post(api_base_url + '/api/approve_new_asset_setup',{
                id,
                ticket_no,
                status
            }, {
              headers: headers,
            });
            alert('[temporary alert] new asset setup request confirmed');
            this.get_asset_setup_list();
        }
    }
    deny_request = async (id, ticket_no, type) =>{
        var status="Denied";
        if(type=="NEW_ASSET"){
            const headers = {
                'Content-Type': 'application/json',
              };
              const response = await axios.post(api_base_url + '/api/approve_new_asset',{
                  id,
                  ticket_no,
                  status
              }, {
                headers: headers,
              });
              alert('[temporary alert] new asset request denied');
              this.get_asset_setup_list();
        }else if (type=="NEW_ASSET_SETUP"){
            console.log(id, ticket_no, type);
            const headers = {
              'Content-Type': 'application/json',
            };
            const response = await axios.post(api_base_url + '/api/approve_new_asset_setup',{
                id,
                ticket_no,
                status
            }, {
              headers: headers,
            });
            alert('[temporary alert] new asset setup request denied');
            this.get_asset_setup_list();
        }
    }
    render (){
        return [
            <div>
                <Row gutter="16">
                    <Col span="24">
                    {this.state.request_list.length!=0?<Search
                    placeholder="input search text"
                    onSearch={value => this.searchfunction(value)}
                    onChange={value => value.target.value==""? this.searchfunction(value.target.value) : console.log(value.target.value)}
                    style={{ width: 200,float :'right',marginBottom :'10px' }}
                    /> : null}
                    <table className="table table-sm" id="approved_request_table">
                        <thead >
                        <tr style={{backgroundColor : '#083240', color :'white'}}>
                            <th colSpan="9" style={{verticalAlign : 'middle',textAlign : 'center'}}>FIXED ASSET OFFICER APPROVAL</th>
                        </tr>
                        <tr style={{backgroundColor : '#124f62', color :'white'}}>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>TICKET NO</th>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>DATE</th>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>REQUESTED BY</th>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>TRANSACTION</th>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>ITEM</th>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>DUE DATE</th>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>STATUS</th>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>REMARKS</th>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>ACTION</th>
                        </tr>
                        </thead>
                        <tbody style={{backgroundColor : 'white'}}>
                        {this.state.paged_content.length!=0?this.state.paged_content.map((data, index)=>{
                            return [
                            <tr>
                                <td style={{verticalAlign : 'middle',textAlign : 'center'}}>{data[0]}</td>
                                <td style={{verticalAlign : 'middle',textAlign : 'center'}}>{data[2]!=null?moment(data[2]).format('MM-DD-YYYY') : null}</td>
                                <td style={{verticalAlign : 'middle'}}>{data[3]}</td>
                                <td style={{verticalAlign : 'middle',textAlign : 'center'}}>{data[4]}</td>
                                <td style={{verticalAlign : 'middle'}}>{data[5]}</td>
                                <td style={{verticalAlign : 'middle',textAlign : 'center'}}>{data[6]}</td>
                                <td style={{verticalAlign : 'middle'}}>{data[7]}</td>
                                <td style={{verticalAlign : 'middle',textAlign : 'center'}}>{data[8]}</td>
                                <td style={{verticalAlign : 'middle',textAlign : 'center'}}>
                                    <Button onClick={()=>{this.approve_request(data[1],data[0],data[9])}} size="small" type="link" style={{marginRight : '10px'}}><CheckCircleTwoTone twoToneColor="#52c41a" /></Button>
                                    <Button onClick={()=>{this.deny_request(data[1],data[0],data[9])}} size="small" type="link"><CloseCircleTwoTone twoToneColor="#eb2f96" /></Button>
                                </td>
                            </tr>
                            ]
                        }): <tr><td colSpan="9" style={{verticalAlign :'middle'}}><Empty /></td></tr>}
                        </tbody>
                    </table>
                    {this.state.request_list.length!=0? <Pagination style={{textAlign : 'right'}} defaultPageSize={page_count} defaultPageSize={page_count} simple current={this.state.current} onChange={this.onChange} total={this.state.request_list.length} /> : ''}

                    </Col>
                </Row>
            </div>
        ]
    }
}

export default NewRequest;