import './items.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../../images/loading.svg';
// import { useGlobalContext } from '../../authContext';

const Items = () => {
  const [itemData, setItemData] = useState(null);
  const [user, setUser] = useState(null);
  // const { logIn, setLogIn } = useGlobalContext();

  const url = 'http://127.0.0.1:2000/api-rentit/v1/items';

  const checkLogin = () =>
    setUser(JSON.parse(sessionStorage.getItem('userDetails')));

  useEffect(() => {
    const fetchData = async () => {
      checkLogin();
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

  const navigate = useNavigate();
  const handleClick = (id) => {
    user ? navigate('/itemDetail', { state: { id: id } }) : navigate('/user');
  };

  if (!itemData)
    return (
      <>
        <div id='loader'>
          <img className='loader' src={Loading} alt='loaing...' />
        </div>
      </>
    );
  return (
    <>
      <div className='allItems'>
        {itemData &&
          itemData.map((data) => {
            return (
              <div
                className='item'
                onClick={() => handleClick(data._id)}
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
