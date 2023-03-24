import './items.css';
import { useNavigate } from 'react-router-dom';

const ItemCard = (props) => {
  const navigate = useNavigate();

  const data = props.data;
  const user = props.user;

  const handleClick = (id) => {
    user ? navigate('/itemDetail', { state: { id: id } }) : navigate('/user');
  };

  return (
    <>
      <div className='item' onClick={() => handleClick(data._id)} key={data.id}>
        <div id='itemImgBox'>
          <img className='imgItem' src={data.image} alt='cover' />
        </div>
        <div className='line lineItems'></div>
        <div className='itemInfo'>
          <div className='itemName'>
            <span>{data.product}</span>
          </div>
          <div className='itemDetail'>{data.description}</div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
