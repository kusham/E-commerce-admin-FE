import React from 'react'
import { columns } from '../utils/TableColumns/ProductListColumns'

const ProductList = () => {
  return (
    <div>
      <h3 className="mb-4 title">Products</h3>
      <div>
        <Table columns={columns} dataSource={} />
      </div>
    </div>
  )
}

export default ProductList