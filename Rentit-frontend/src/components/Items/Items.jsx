/* eslint-disable react-hooks/exhaustive-deps */
import './Items.css';
import { useEffect, useState } from 'react';
import Loading from '../../images/loading.svg';
import ItemCard from './ItemCard';
import { useGlobalContext } from '../../Context';
import unhappy from '../../images/unhappy.svg';

const Items = () => {
  const [user, setUser] = useState(null);
  const { searching, queryData } = useGlobalContext();
  const [displayData, setDispayData] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('userDetails')));
  }, []);

  useEffect(() => {
    if (queryData && queryData.length) setDispayData(queryData);
    else setDispayData('');
  }, [queryData]);

  //To activate loading screen when data is not there to display or search is going on
  if (displayData === null || searching)
    return (
      <>
        <div id='loader'>
          <img className='loader' src={Loading} alt='loading...' />
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
        <div className='searchMsg'>Sorry,</div>
        <div className='searchMsg'>No results found.</div>
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
