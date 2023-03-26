import React from 'react'
import { Table } from "antd";
import { columns } from '../utils/TableColumns/CustomerColumns'

const Customers = () => {
  return (
    <div>
    <h3 className="mb-4 title">Customers</h3>
    <div>
      <Table columns={columns} dataSource={} />
    </div>
  </div>
  )
}

export default Customers