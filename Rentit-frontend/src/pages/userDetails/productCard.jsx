import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate('/itemDetails', { state: { id: id } });
  };
  const data = props.data;
  console.log(data);
  return (
    <>
      <div className='productBox' onClick={() => handleClick(data._id)}>
        <div id='img'>
          <img className='img' src={data.image} alt='' />
        </div>
        <div className='line ver'></div>
        <div className='detailsBox'>
          <div className='name BX or'>{data.product}</div>
          <div className='price BX or'>
            {' '}
            ₹{data.price} per {data.unit}
          </div>
          <div className='description BX'>{data.description}</div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
