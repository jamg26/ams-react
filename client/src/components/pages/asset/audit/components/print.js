import React from 'react';
import ReactToPrint from 'react-to-print';
import { Button } from 'antd';

const Print = (props) => {
  return (
    <>
      <ReactToPrint
        trigger={() => (
          <div style={{ float: 'right' }}>
            <Button>Print</Button>
          </div>
        )}
        content={() => props.printRef}
        onBeforeGetContent={async () => await props.setPrinting(true)}
        onAfterPrint={() => props.setPrinting(false)}
      />
    </>
  );
};

export default Print;
