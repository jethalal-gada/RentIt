import './items.css';
import { useNavigate } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';
// import unavailable from '../../images/unavailable.svg';
import unavb from '../../images/unavb.svg';

const ItemCard = ({ data, user }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    user ? navigate('/itemDetails', { state: { id: id } }) : navigate('/user');
  };

  return (
    <>
      <div className='item' onClick={() => handleClick(data._id)} key={data.id}>
        <div id='itemImgBox'>
          {!data.available && (
            <img className='imgItem unavb' src={unavb} alt='unavaliable' /> //Overlay to show unavailablity
          )}
          <img className='imgItem' src={data.image.image} alt='cover' />
        </div>
        <div className='line lineItems'></div>
        <div className='itemInfo'>
          <div className='itemName'>
            <div>
              <span>{data.product}</span>
            </div>
            <div>
              <BsHeartFill size={10} className='likeItemCard' />
              <span className='likesCount'>{data.likes}</span>
            </div>
          </div>
          <div className='itemDetail'>{data.description}</div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
