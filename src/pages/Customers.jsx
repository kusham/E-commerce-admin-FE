import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { columns } from '../utils/TableColumns/CustomerColumns'
import { getUsers } from "../action/customer";

const Customers = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const customerState = useSelector((state) => state.customer.customers);
  const data = [];
  for (let i = 0; i < customerState.length; i++) {
    if (customerState[i].role !== "admin") {
      data1.push({
        key: i + 1,
        name: customerState[i].firstName + " " + customerState[i].lastName,
        email: customerState[i].email,
        mobile: customerState[i].mobile,
      });
    }
  }
  return (
    <div>
    <h3 className="mb-4 title">Customers</h3>
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  </div>
  )
}

export default Customers