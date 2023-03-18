import React from 'react'
import { Table } from "antd";
import { columns } from '../utils/OrderColumns';

const ViewOrder = () => {
  return (
    <div>
    <h3 className="mb-4 title">View Order</h3>
    <div>
      <Table columns={columns} dataSource={} />
    </div>
  </div>
  )
}

export default ViewOrder