import Items from '../../components/items/items';
import Backtotop from '../../components/backtotop/backtotop';
import DropdownSort from '../../components/sort/sort';
import Dropdown from '../../components/dropDown/dropDown';
import Footer from '../../components/footerSection/footerSection';
import './home.css';

const Home = () => {
  return (
    <>
      <main>
        <div id='dropdowns'>
          <Dropdown />
          <DropdownSort />
        </div>
        <Backtotop />
        <Items />
      </main>
      <Footer />
    </>
  );
};

export default Home;
