/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
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
      //Filter out the saved IDs which were not having any data. They might have been deleted
      setProducts(responses.filter((e) => e.data.item));
    };
    fetchData();
  }, [savedProducts]);

  const handleLogOut = () => {
    // console.log(logIn);
    sessionStorage.removeItem('userDetails');
    navigate('/');
  };
  return (
    <>
      <div className='logInfo'>
        <div className='wlcm'>
          <div className='wlcmMsg'>
            <p>Logged in as</p>
          </div>
          <div id='userPicName'>
            <p className='or' id='userName'>
              {props.name}
            </p>
            <div id='userPic'>
              <img className='userPic' src={props.picture} alt='' />
            </div>
          </div>
        </div>
        <div id='logOut'>
          <button className='logOut' onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
      <div className='Prod-Heading br'> Saved Products :</div>
      <div className='saves'>
        {products.length !== 0
          ? products.map((data, index) => {
              if (data.data.item)
                return (
                  <ProductCard
                    key={index}
                    data={data.data.item}
                    count={products.length}
                    type={'saves'}
                  />
                );
            })
          : 'No products saved'}
      </div>
      <div className='Prod-Heading br'> Posted Products :</div>
      <div className='saves'>
        {posts.length !== 0
          ? posts.map((data, index) => {
              if (data)
                return (
                  <ProductCard
                    key={index}
                    data={data}
                    count={posts.length}
                    type={'posts'}
                  />
                );
            })
          : 'No products posted'}
      </div>
    </>
  );
};
export default UserDetails;
