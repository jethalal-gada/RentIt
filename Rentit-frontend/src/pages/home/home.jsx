import Items from '../../components/items/items';
import Backtotop from '../../components/backtotop/backtotop';
import Dropdown from '../../components/dropDown/dropDown';
const Home = () => {
  return (
    <main>
      <Dropdown />
      <Backtotop />
      <Items />
    </main>
  );
};

export default Home;
