import Items from '../../components/Items/items';
import Backtotop from '../../components/Backtotop/backtotop';
import Dropdown from '../../components/Filter/dropDown';
import DropdownSort from '../../components/Sort/sort';
// import AppFooter from '../../components/Footer/AppFooter';
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
      {/* <AppFooter /> */}
    </>
  );
};

export default Home;
