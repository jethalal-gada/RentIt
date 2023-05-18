import Items from '../../components/Items/Items';
import Backtotop from '../../components/Backtotop/Backtotop';
import Dropdown from '../../components/Filter/DropDown';
import DropdownSort from '../../components/Sort/Sort';
import AppFooter from '../../components/Footer/AppFooter';
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
      <AppFooter />
    </>
  );
};

export default Home;
