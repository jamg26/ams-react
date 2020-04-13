import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { api_base_url } from "../../../../keys";
import { Row, Col, Button, Empty,Pagination,Input } from 'antd';
import { FlagTwoTone } from '@ant-design/icons';
var page_count=10;
const { Search } = Input;

class RequestLog extends React.Component {
    state = {
        checked_out_assets : [],
        loop: 0,
        paged_content: [],
        current: 1,
    }
    searchfunction =(value) => {
        var input, filter, table, tr, td, i, txtValue;
        filter = value.toUpperCase();
        table = document.getElementById("checked_out_asset_table");
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
      const response = await axios.get(api_base_url + '/api/checked_out_asset_list', {
        headers: headers,
      });
      this.setState({ checked_out_assets : response.data},()=>{
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.checked_out_assets.length / page_count); i++) {
          pageNumbers.push(i);
        }
        this.setState({ pageNumbers : pageNumbers })
        var paged=[];
       
        for(var c=parseFloat(this.state.loop)*parseFloat(page_count);c<(parseFloat(this.state.loop)+parseFloat(1))*parseFloat(page_count);c++){
            if(this.state.checked_out_assets[c]){
              paged.push(this.state.checked_out_assets[c])
            }
            
        }
        this.setState({ paged_content : paged})
        
      })
    };
    componentDidMount(){
        this.get_asset_setup_list();
    }
    render (){
        
        return [
            <div>
                <Row gutter="16">
                    <Col span="24">
                    {this.state.checked_out_assets.length!=0?<Search
                    placeholder="input search text"
                    onSearch={value => this.searchfunction(value)}
                    onChange={value => value.target.value==""? this.searchfunction(value.target.value) : console.log(value.target.value)}
                    style={{ width: 200,float :'right',marginBottom :'10px' }}
                    /> : null}
                    <table className="table table-sm" id="checked_out_asset_table">
                        <thead >
                        <tr style={{backgroundColor : '#083240', color :'white'}}>
                            <th colSpan="9" style={{verticalAlign : 'middle',textAlign : 'center'}}>CHECKED OUT ASSETS</th>
                        </tr>
                        <tr style={{backgroundColor : '#124f62', color :'white'}}>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>TICKET NO</th>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>REQUESTED BY</th>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>ASSET</th>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>DEPARTMENT</th>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>QUANTITY</th>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>DATE BORROWED</th>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>DUE DATE</th>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>OVERDUE</th>
                            <th style={{verticalAlign : 'middle',textAlign : 'center'}}>STATUS</th>
                        </tr>
                        </thead>
                        <tbody style={{backgroundColor : 'white'}}>
                        {this.state.paged_content.length!=0?this.state.paged_content.map((data, index)=>{
                            var a = moment(data.asset_due_date);
                            var b = moment();
                            var difference = a.diff(b, 'days');
                            console.log(difference);
                            return [
                            <tr>
                                <td style={{verticalAlign : 'middle',textAlign : 'center'}}>{data.request_id}</td>
                                <td style={{verticalAlign : 'middle'}}>{data.emp_id.length!=0? data.emp_id[0].name : null }</td>
                                <td style={{verticalAlign : 'middle'}}>{data.asset_tag.length!=0? data.asset_tag[0].asset_description : null}</td>
                                <td style={{verticalAlign : 'middle'}}>{data.asset_tag.length!=0? data.asset_tag[0].asset_department_code : null}</td>
                                <td style={{verticalAlign : 'middle',textAlign : 'center'}}>1</td>
                                <td style={{verticalAlign : 'middle',textAlign : 'center'}}>{moment(data.asset_borrow_date).format('MM-DD-YYYY')}</td>
                                <td style={{verticalAlign : 'middle',textAlign : 'center'}}>{moment(data.asset_due_date).format('MM-DD-YYYY')}</td>
                                <td style={{verticalAlign : 'middle',textAlign : 'center'}}>{ difference<=0? difference*-1 : null}</td>
                                <td style={{verticalAlign : 'middle',textAlign : 'center'}}>{ difference<0? <Button><FlagTwoTone twoToneColor="#c42e1a" /></Button> : (difference==0? <Button><FlagTwoTone twoToneColor="#b0c41a" /></Button> : null) }</td>
                            </tr>
                            ]
                        }): <tr><td colSpan="9" style={{verticalAlign :'middle'}}><Empty /></td></tr>}
                        </tbody>
                    </table>
                    {this.state.checked_out_assets.length!=0? <Pagination style={{textAlign : 'right'}} defaultPageSize={page_count} defaultPageSize={page_count} simple current={this.state.current} onChange={this.onChange} total={this.state.checked_out_assets.length} /> : ''}
                    
                    </Col>
                </Row>
            </div>
        ]
    }
}

export default RequestLog;