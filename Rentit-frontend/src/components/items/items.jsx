import './items.css';
import { useNavigate } from 'react-router-dom';
import fakedata from '../../fakedata.json';
import { useEffect, useState } from 'react';
const Items = () => {
  const [itemData, setItemData] = useState(null);

  // useEffect(() => {
  fetch('http://127.0.0.1:2000/api-rentit/v1/items')
    .then((response) => response.json())
    .then((data) => setItemData(data));
  // console.log(itemData);
  // });
  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate('/itemDetail', { state: data });
  };

  return (
    <>
      {/* <Search /> */}
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
