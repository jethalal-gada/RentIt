import './itemDetail.css';
import Subnavbar from '../../components/subnavbar/subnavbar';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../../images/loading.svg';

const ItemDetail = () => {
  const location = useLocation();
  const id = location.state.id;
  console.log(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // setLoading(true);
    let url = `http://127.0.0.1:2000/api-rentit/v1/items/${id}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProduct(data.data.item);
      } catch (error) {
        console.log('error', error);
      }
    };

    console.log(url);
    fetchData();
  }, [id]);

  console.log(product);
  if (!product)
    return (
      <>
        <Subnavbar />
        <img src={Loading} alt='loaing' />
      </>
    );
  return (
    <>
      <Subnavbar />
      <div className='items'>
        <div className='imgItemDetail itemDetailBox'>
          <img className='imgItemTag' src={product.image} alt='' />
        </div>
        <div className='infoItem itemDetailBox'>
          <div className='info1'>
            <p className='infoA br'>{product.product}</p>
            <p className='infoA br'>
              ₹{product.price} per {product.unit}
            </p>
          </div>
          <div className='info2'>
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

          <div className='info3'>
            <p className='infoC   '>{product.description}</p>
          </div>
        </div>
      </div>
      <div id='save'>
        <button className='save btn'>Save</button>
      </div>
    </>
  );
};

export default ItemDetail;
