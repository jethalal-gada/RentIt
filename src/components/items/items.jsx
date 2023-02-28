import './items.css';
// import itemImg from '../../images/itemImg.svg';
import { useNavigate } from 'react-router-dom';
import fakedata from '../../fakedata.json';
const Items = () => {
  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate('/itemDetail', { state: data });
  };

  return (
    <>
      <div className='allItems'>
        {fakedata &&
          fakedata.map((data) => {
            return (
              <div
                className='item'
                onClick={() => handleClick(data)}
                key={data.id}
              >
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
            );
          })}
      </div>
    </>
  );
};
export default Items;
