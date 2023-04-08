/* eslint-disable react-hooks/exhaustive-deps */
import './itemDetails.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../../images/loading.svg';
import { useNavigate } from 'react-router-dom';
import miniLoader from './../../images/miniLoader.svg';

const ItemDetails = () => {
  const location = useLocation();
  const id = location.state.id;
  const navigate = useNavigate();
  const [count, setCount] = useState(0); //Count user's saved products
  const [product, setProduct] = useState(null); //Store product's data
  const [save, setSave] = useState(false); //Sontroll save button
  const [available, setAvailable] = useState(true); //Mark product's availablity
  const [owner, setOwner] = useState(false); //Check if current user is owner or not
  const [loader, setLoader] = useState(false); //To display loader

  const url = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_LOCALHOST}/${process.env.REACT_APP_ADDRESS}/items/${id}`;

  const urlItemPg = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_LOCALHOST}/${process.env.REACT_APP_ADDRESS}/itemDetail`;

  const user = JSON.parse(sessionStorage.getItem('userDetails')).email;
  const access_token = JSON.parse(
    sessionStorage.getItem('userDetails')
  ).access_token;

  //Fuction to save the dava into saved items of user
  const saveData = async () => {
    try {
      await fetch(`${urlItemPg}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ user }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          access_token: access_token,
        },
      });
    } catch (err) {
      console.log('Error -', err);
    }
  };

  //Check and mark product's availability
  const handleAvailable = async () => {
    if (owner && !loader) {
      setLoader(true);
      const response = await fetch(`${urlItemPg}/${!available}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          email: user,
        },
      });
      const data = await response.json();
      setAvailable(data.data.available);
      setLoader(false);
    }
  };
  //calling the function  to save item'data
  const saveItem = () => {
    if (save !== 'Saved') {
      if (count >= 5) alert('cannot save more than 5 items');
      else {
        setSave('Saved');
        saveData();
      }
    } else if (save === 'Saved') navigate('/user');
  };

  //To fetch product data and user's details as soon as the app has prod id from state
  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProduct(data.data.item);
      } catch (error) {
        console.log('error', error);
      }
    };
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`${urlItemPg}/${user}`, {
          headers: {
            'Content-Type': 'application/json',
            access_token: access_token,
          },
        });
        const data = await response.json();
        const savedProducts = await data.saves;
        setCount(data.saves.length);
        if (savedProducts.find((i) => i === id)) setSave('Saved');
      } catch (error) {
        console.log(error);
      }
    };
    fetchItemData();
    fetchUserDetails();
  }, [id]);

  //Mark product's avaliablity as soon as we get the data
  useEffect(() => {
    if (product) {
      setAvailable(product.available);
      if (product.email === user) {
        setOwner(true);
      }
    }
  }, [product]);

  if (!product)
    return (
      <>
        <div id='loader'>
          <img className='loader' src={Loading} alt='loaing...' />
        </div>
      </>
    );
  return (
    <>
      <div className='items'>
        <div className='imgItemDetail itemDetailBox'>
          <img className='imgItemTag' src={product.image} alt='' />
        </div>

        <div className='infoItem itemDetailBox'>
          <div
            className={owner ? 'info0 info owner' : 'info0 info'}
            onClick={handleAvailable}
          >
            {loader ? (
              <img src={miniLoader} className='miniLoader' alt='Loading...' />
            ) : owner ? ( //If currnet user is the owner then -
              available ? (
                'Marked available'
              ) : (
                'Marked unavailable'
              )
            ) : available ? ( //If current user is not the owner then
              'Available'
            ) : (
              'Not Available'
            )}
          </div>
          <div className='info1 info'>
            <p className='infoA br'>{product.product}</p>
            <p className='infoA br'>
              ₹{product.price} per {product.unit}
            </p>
          </div>
          <div className='info2 info'>
            <div className='txtA'>
              <p className='infoB br'>Owner: </p>
              <p className='infoB or' id='name'>
                {product.owner}
              </p>
            </div>
            <div className='txtA'>
              <p className='infoB br'>Contact: </p>
              <p className='infoB or' id='contact'>
                {product.contact}
              </p>
            </div>
            <div className='txtA'>
              <p className='infoB br'>Lpu id: </p>
              <p className='infoB or' id='lpuId'>
                {product.lpuid}
              </p>
            </div>
          </div>

          <div className='info3 info'>
            <p className='infoC   '>{product.description}</p>
          </div>
        </div>
      </div>
      <div id='save'>
        <button className='save btn' onClick={saveItem}>
          {save ? 'Saved' : 'Save'}
        </button>
      </div>
    </>
  );
};

export default ItemDetails;
