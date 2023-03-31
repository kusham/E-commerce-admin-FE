import React from 'react'
import CustomModal from '../components/CustomModal';
import { resetState } from '../reducers/brandReducers';
import { deleteABrand, getBrands } from '../action/brand';

const BrandList = () => {
    const [open, setOpen] = useState(false);
  const [brandId, setBrandId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setBrandId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getBrands());
  }, []);
  const brandState = useSelector((state) => state.brand.brands);
  const data = [];
  for (let i = 0; i < brandState.length; i++) {
    data.push({
      key: i + 1,
      name: brandState[i].title,
      action: (
        <>
          <Link
            to={`/admin/brand/${brandState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(brandState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  const deleteBrand = (e) => {
    dispatch(deleteABrand(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getBrands());
    }, 100);
  };
  return (
    <div>
    <h3 className="mb-4 title">Brands</h3>
    <div>
      <Table columns={columns} dataSource={data} />
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