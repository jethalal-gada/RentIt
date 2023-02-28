import Navbar from '../../components/navbar/navbar';
import Items from '../../components/items/items';
import Backtotop from '../../components/backtotop/backtotop';
// import Search from '../../components/searchBar/search';
const Home = () => {
  return (
    <main>
      <Navbar />
      <Backtotop />
      <Items />
    </main>
  );
};

export default Home;
