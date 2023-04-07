/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context';
import './userDetails.css';
import { useEffect, useState } from 'react';
import ProductCard from './productCard';

const UserDetails = (props) => {
  const navigate = useNavigate();
  const [savedProducts, setSavedProducts] = useState([]);
  // const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [highlight, setHighlight] = useState(0);
  // const { logIn, setLogIn } = useGlobalContext();
  const { savesCount, setSavesCount, postsCount, setPostsCount } =
    useGlobalContext();

  const user = JSON.parse(sessionStorage.getItem('userDetails')).email;
  const _id = JSON.parse(sessionStorage.getItem('userDetails'))._id;
  const url = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_LOCALHOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_ADDRESS}/user`;

  // const urlItem = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_LOCALHOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_ADDRESS}/items`;

  useEffect(() => {
    //Fetch the array of saved products
    const fetchSaves = async () => {
      const response = await fetch(`${url}/${user}`, {
        headers: {
          'Content-Type': 'application/json',
          _id: _id,
        },
      });
      const data = await response.json();
      setSavedProducts(data.saves);
    };
    //Fetch the all posts with matching email
    const fetchPosts = async () => {
      const response = await fetch(`${url}/posts/${user}`);
      const data = await response.json();
      setPosts(data.data.posts);
    };

    fetchSaves();
    fetchPosts();
  }, []);

  useEffect(() => {
    setSavesCount(savedProducts.length);
    setPostsCount(posts.length);
  }, [savedProducts]);

  const handleLogOut = (e) => {
    e.preventDefault();
    // setLoginObj(null);
    // setLogIn(false);
    sessionStorage.removeItem('userDetails');
    navigate('/');
  };
  const addHighlight = (index) => setHighlight(index);
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
      <div className='container'>
        <div
          className={
            highlight === 0 ? `box-1 tab highlight` : `box-1 tab unactive`
          }
          onClick={() => addHighlight(0)}
        >
          Saved Products
        </div>
        <div
          className={
            highlight === 1 ? `box-2 tab highlight` : `box-2 tab unactive`
          }
          onClick={() => addHighlight(1)}
        >
          Posted Products
        </div>
      </div>
      <div className={highlight === 0 ? 'saves fade-in' : 'hide'}>
        {!(savesCount <= 0)
          ? savedProducts.map((data, index) => {
              if (data)
                return (
                  <ProductCard
                    key={index}
                    data={data}
                    // count={products.length}
                    type={'saves'}
                  />
                );
            })
          : 'No products saved'}
      </div>

      <div className={highlight === 1 ? 'saves fade-in' : 'hide'}>
        {!(postsCount <= 0)
          ? posts.map((data, index) => {
              if (data)
                return (
                  <ProductCard
                    key={index}
                    data={data}
                    // count={posts.length}
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
