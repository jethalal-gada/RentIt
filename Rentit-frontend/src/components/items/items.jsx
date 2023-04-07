/* eslint-disable react-hooks/exhaustive-deps */
import './items.css';
import { useEffect, useState } from 'react';
import Loading from '../../images/loading.svg';
import ItemCard from './itemCard';
import { useGlobalContext } from '../../Context';
import unhappy from '../../images/unhappy.svg';

const Items = () => {
  const [itemData, setItemData] = useState(null);
  const [user, setUser] = useState(null);
  const { searchData, searching } = useGlobalContext();
  const [displayData, setDispayData] = useState(null);

  const url = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_LOCALHOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_ADDRESS}/items`;

  const checkLogin = () => {
    setUser(JSON.parse(sessionStorage.getItem('userDetails')));
  };

  //Fetch all products on pags load
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

  //Change the data which is getting displayed after we get search data
  useEffect(() => {
    //If search data is not null and length not is not empty ('')
    if (searchData && searchData.length) setDispayData(searchData);
    //If search data is set null; This will be used to show all prodcuts again
    else if (searchData === null) setDispayData(itemData);
    //This will be used to show no results
    else setDispayData('');
  }, [searchData]);

  //When we have all products's data
  useEffect(() => {
    //If nothing is searched then display all products
    if (itemData && searchData === null) {
      setDispayData(itemData);
    }
  }, [itemData]);
  //To activate loading screen when data is not there to display or search is going on
  if (displayData === null || searching)
    return (
      <>
        <div id='loader'>
          <img className='loader' src={Loading} alt='loaing...' />
        </div>
      </>
    );
  //To show empty search
  if (displayData === '')
    return (
      <>
        <div className='unhappy'>
          <img id='unhappy' src={unhappy} alt='' />
        </div>
        <div className='searchMsg'>No search results found</div>
      </>
    );
  return (
    <>
      <div className='allItems'>
        {displayData.map((data, index) => {
          return <ItemCard key={index} data={data} user={user} />;
        })}
      </div>
    </>
  );
};
export default Items;
