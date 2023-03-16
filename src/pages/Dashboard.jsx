import React from 'react'

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
        <Column {} />
      </div>
    </div>
    <div className="mt-4">
      <h3 className="mb-5 title">Recent Orders</h3>
      <div>
        <Table columns={} dataSource={} />
      </div>
    </div>
  </div>
  )
}

export default Dashboard