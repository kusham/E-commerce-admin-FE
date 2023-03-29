import React from 'react'
import CustomModal from '../components/CustomModal';
import { columns } from '../utils/TableColumns/CategoryColumns';

const CategoryList = () => {
  return (
    <div>
      <h3 className="mb-4 title">Product Categories</h3>
      <div>
        <Table columns={columns} dataSource={} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteCategory(pCatId);
        }}
        title="Are you sure you want to delete this Product Category?"
      />
    </div>
  )
}

export default CategoryList