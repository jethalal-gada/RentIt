import Items from '../../components/items/items';
import Backtotop from '../../components/backtotop/backtotop';
import Dropdown from '../../components/filter/dropDown';
import DropdownSort from '../../components/sort/sort';
// import Footer from '../../components/footer/footer';
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
      {/* <Footer /> */}
    </>
  );
};

export default Home;
