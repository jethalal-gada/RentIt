import './items.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Items = () => {
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const url = 'http://127.0.0.1:2000/api-rentit/v1/items';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setItemData(data.data.items);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  console.log(itemData);
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log(id);
    navigate('/itemDetail', { state: { id: id } });
  };

  return (
    <>
      <div className='allItems'>
        {itemData &&
          itemData.map((data) => {
            return (
              <div
                className='item'
                onClick={() => handleClick(data.id)}
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
