import React from 'react';
import Workbook from 'react-xlsx-workbook';
import { Button } from 'antd';

const Excel = (props) => {
  return (
    <Workbook
      filename={`${Date.now()}.xlsx`}
      element={
        <div style={{ float: 'right' }}>
          <Button>Download Excel</Button>
        </div>
      }>
      <Workbook.Sheet data={props.selectedRows} name='Assets'>
        <Workbook.Column label='Asset Tag' value='asset_tag' />
        <Workbook.Column label='Asset' value='asset_description' />
        <Workbook.Column label='Brand' value='asset_manufacturer' />
        <Workbook.Column label='Department' value='asset_department' />
        <Workbook.Column label='Site' value='asset_site' />
        <Workbook.Column label='Location' value='asset_location' />
        <Workbook.Column label='Status' value='asset_transaction_status' />
        <Workbook.Column label='Employee' value='' />
      </Workbook.Sheet>
    </Workbook>
  );
};

export default Excel;
