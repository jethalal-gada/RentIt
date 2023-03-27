import { useNavigate } from 'react-router-dom';
// import { useGlobalContext } from '../../authContext';
import './userDetails.css';
import { useEffect, useState } from 'react';
import ProductCard from './productCard';

const UserDetails = (props) => {
  const navigate = useNavigate();
  const [savedProducts, setSavedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const user = JSON.parse(sessionStorage.getItem('userDetails')).email;
  const url = `http://127.0.0.1:2000/api-rentit/v1/user`;
  const urlItem = `http://127.0.0.1:2000/api-rentit/v1/items`;

  // const { logIn, setLogIn } = useGlobalContext();

  useEffect(() => {
    const fetchData = async () => {
      //Fetch the array of saved products
      const response = await fetch(`${url}/${user}`);
      const data = await response.json();
      setSavedProducts(data[0].savedProducts);
    };
    const fetchPosts = async () => {
      const response = await fetch(`${url}/posts/${user}`);
      const data = await response.json();
      setPosts(data.data.posts);
    };

    fetchData();
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const responses = await Promise.all(
        savedProducts.map(async (id) => {
          const response = await fetch(`${urlItem}/${id}`);
          const data = await response.json();
          return data;
        })
      );
      setProducts(responses);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedProducts]);
  const handleLogOut = () => {
    // console.log(logIn);
    sessionStorage.removeItem('userDetails');
    navigate('/');
  };
  return (
    <>
      <div className='logInfo'>
        <div className='wlcmMsg'>
          <div className='userName'>You are logged in as {props.name}</div>
          <div id='userPic'>
            <img className='userPic' src={props.picture} alt='nan' />
          </div>
        </div>
        <div id='logOut'>
          <button className='logOut' onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
      <div className='Prod-Heading br'> Saved Products</div>
      <div className='saves'>
        {products.map((data, index) => {
          return <ProductCard key={index} data={data.data.item} />;
        })}
      </div>
      <div className='Prod-Heading br'> Posted Products</div>
      <div className='saves'>
        {posts.map((data, index) => {
          return <ProductCard key={index} data={data} />;
        })}
      </div>
    </>
  );
};
export default UserDetails;

// return <ItemCard key={index} data={product} user={user} />;
