import React from 'react'
import { Table } from "antd";
import { columns } from '../utils/OrderColumns2';

const Orders = () => {
  return (
    <div>
      <h3 className="mb-4 title">Orders</h3>
      <div>{<Table columns={columns} dataSource={} />}</div>
    </div>
  )
}

export default Orders