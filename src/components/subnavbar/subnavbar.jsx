import { Link } from 'react-router-dom';
import './subnavbar.css';
import { RiArrowLeftLine } from 'react-icons/ri';

const Subnavbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <div className="back">
            <RiArrowLeftLine size={26} />
          </div>
        </Link>
      </div>
    </>
  );
};
export default Subnavbar;
