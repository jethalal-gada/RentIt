/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context';
import './userDetails.css';
import { useEffect, useState } from 'react';
import ProductCard from './productCard';
import Loading from '../../images/loading.svg';

//This component is child of login.jsx
const UserDetails = (props) => {
  const navigate = useNavigate();
  const [savedProducts, setSavedProducts] = useState([]); //Storing array of saves
  const [posts, setPosts] = useState([]); //Storing the array of posts
  const [highlight, setHighlight] = useState(0); //Adding highlight to active Tab
  const [loader, setLoader] = useState(false); //To display loader
  // const { logIn, setLogIn } = useGlobalContext();
  const { savesCount, setSavesCount, postsCount, setPostsCount } =
    useGlobalContext();

  const user = JSON.parse(sessionStorage.getItem('userDetails')).email;
  const access_token = JSON.parse(
    sessionStorage.getItem('userDetails')
  ).access_token;
  const url = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_LOCALHOST}/${process.env.REACT_APP_ADDRESS}/user`;

  //When page loads fetch all saved and posted products
  useEffect(() => {
    //Fetch the array of saved products with matching
    const fetchSaves = async () => {
      setLoader(true);
      const response = await fetch(`${url}/${user}`, {
        headers: {
          'Content-Type': 'application/json',
          access_token: access_token,
        },
      });
      const data = await response.json();
      setSavedProducts(data.saves);
      setLoader(false);
    };
    //Fetch the all posts with matching email
    const fetchPosts = async () => {
      const response = await fetch(`${url}/posts/${user}`, {
        headers: {
          'Content-Type': 'application/json',
          access_token: access_token,
        },
      });
      const data = await response.json();
      setPosts(data.data.posts);
    };
    fetchSaves().then(fetchPosts()); //Fetch saved prods then remove loader and fetch posts
  }, []);

  useEffect(() => {
    savedProducts ? setSavesCount(savedProducts.length) : setSavesCount(null);
  }, [savedProducts]);
  useEffect(() => {
    posts ? setPostsCount(posts.length) : setPosts(null);
  }, [posts]);
  const handleLogOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('userDetails');
    navigate('/');
  };
  const addHighlight = (index) => setHighlight(index); //Highlight the active tab
  if (loader)
    return (
      <>
        <div id='loader'>
          <img className='loader' src={Loading} alt='loaing...' />
        </div>
      </>
    );
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
        {/* tab-1 */}
        <div
          className={
            highlight === 0 ? `box-1 tab highlight` : `box-1 tab unactive`
          }
          onClick={() => addHighlight(0)}
        >
          Saved Products
        </div>
        {/* tab-1 */}
        {/* tab-2 */}
        <div
          className={
            highlight === 1 ? `box-2 tab highlight` : `box-2 tab unactive`
          }
          onClick={() => addHighlight(1)}
        >
          Posted Products
        </div>
        {/* tab-2 */}
      </div>
      <div className={highlight === 0 ? 'saves fade-in' : 'hide'}>
        {savesCount > 0 && savesCount !== null
          ? savedProducts.map((data, index) => {
              if (data)
                return <ProductCard key={index} data={data} type={'saves'} />;
            })
          : 'No products saved'}
      </div>

      <div className={highlight === 1 ? 'saves fade-in' : 'hide'}>
        {postsCount > 0 && postsCount !== null
          ? posts.map((data, index) => {
              if (data)
                return <ProductCard key={index} data={data} type={'posts'} />;
            })
          : 'No products posted'}
      </div>
    </>
  );
};
export default UserDetails;
