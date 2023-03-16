import React from 'react'
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { columns } from '../utils/Columns';
import { data1 } from '../utils/Data1';
import { config } from '../utils/configData';


const Dashboard = () => {
  return (
    <div>
    <h3 className="mb-4 title">Dashboard</h3>
    <div className="d-flex justify-content-between align-items-center gap-3">
      <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
        <div>
          <p className="desc">Total</p>
          <h4 className="mb-0 sub-title">$1100</h4>
        </div>
        <div className="d-flex flex-column align-items-end">
          <h6>
            <BsArrowDownRight /> 32%
          </h6>
          <p className="mb-0  desc">Compared To April 2022</p>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
        <div>
          <p className="desc">Total</p>
          <h4 className="mb-0 sub-title">$1100</h4>
        </div>
        <div className="d-flex flex-column align-items-end">
          <h6 className="red">
            <BsArrowDownRight /> 32%
          </h6>
          <p className="mb-0  desc">Compared To April 2022</p>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
        <div>
          <p className="desc">Total</p>
          <h4 className="mb-0 sub-title">$1100</h4>
        </div>
        <div className="d-flex flex-column align-items-end">
          <h6 className="green">
            <BsArrowDownRight /> 32%
          </h6>
          <p className="mb-0 desc">Compared To April 2022</p>
        </div>
      </div>
    </div>
    <div className="mt-4">
      <h3 className="mb-5 title">Income Statics</h3>
      <div>
        <Column {...config} />
      </div>
    </div>
    <div className="mt-4">
      <h3 className="mb-5 title">Recent Orders</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  </div>
  )
}

export default Dashboard