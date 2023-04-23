import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CgRemove } from 'react-icons/cg';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useGlobalContext } from '../../Context';
import axios from 'axios';
import unavb from '../../images/unavb.svg';

//This component is child of userDetail.jsx
const ProductCard = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState(props.data);
  const { savesCount, setSavesCount, postsCount, setPostsCount } =
    useGlobalContext();
  const type = props.type; //To check if the product is saved one or a posted one
  const user = JSON.parse(sessionStorage.getItem('userDetails')).email;

  const url = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_LOCALHOST}/${process.env.REACT_APP_ADDRESS}/items`;

  const handleClick = (id) => {
    navigate('/itemDetails', { state: { id: id } });
  };
  const removeProduct = async (id, type) => {
    //After sending delete req reduce the total count
    const remove = () => {
      setData(null);
      if (type === 'posts') setPostsCount(postsCount - 1);
      else setSavesCount(savesCount - 1);
    };
    //Confirm the remove req
    if (
      window.confirm(
        type === 'posts'
          ? 'Do you want do delete this post?'
          : 'Do you want to unsave this?'
      )
    ) {
      await axios.delete(`${url}/${id}/${user}/${type}`).then(remove());
    }
  };
  if (!data) return <></>; //Show nothing
  return (
    <>
      <div className='cellBox'>
        <div className='productBox' onClick={() => handleClick(data._id)}>
          <div id='img'>
            {!data.available && (
              <img className='img unavb' src={unavb} alt='unavaliable' /> //Overlay to show unavailablity
            )}
            <img className='img' src={data.image.image} alt='' />
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
        <div
          id='remove'
          className='gentle-hover-shake'
          onClick={() => removeProduct(data._id, type)}
        >
          {type === 'posts' ? (
            <RiDeleteBinLine in className='remove ' size={22} />
          ) : (
            <CgRemove in className='remove ' size={22} />
          )}
        </div>
      </div>
    </>
  );
};
export default ProductCard;
