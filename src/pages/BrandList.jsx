import React from 'react'
import CustomModal from '../components/CustomModal';

const BrandList = () => {
  return (
    <div>
    <h3 className="mb-4 title">Brands</h3>
    <div>
      <Table columns={columns} dataSource={} />
    </div>
    <CustomModal
      hideModal={hideModal}
      open={open}
      performAction={() => {
        deleteBrand(brandId);
      }}
      title="Are you sure you want to delete this brand?"
    />
  </div>
  )
}

export default BrandList