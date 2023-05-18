import { useEffect, useState } from 'react';
import './backtotop.css';
import { IoIosArrowDropupCircle } from 'react-icons/io';

const Backtotop = () => {
  const [Backtotop, setBacktotop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) setBacktotop(true);
      else setBacktotop(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {Backtotop && (
        <button className='backToTop' onClick={scrollUp}>
          <IoIosArrowDropupCircle size={27} />
        </button>
      )}
    </>
  );
};
export default Backtotop;
