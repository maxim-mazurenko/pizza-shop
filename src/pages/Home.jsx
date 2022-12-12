import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaItems from '../components/PizzaItems';
import Skeleton from '../components/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContex } from '../App';
import { useSelector } from 'react-redux';

const Home = () => {
  const { sortValue, categoryId } = useSelector((state) => state.filter);

  const [pizzaItems, setPizzaItems] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(true);

  const [onPageChange, setOnPageChange] = React.useState(1);

  const { searchValue } = React.useContext(SearchContex);

  const sortParameter = sortValue.sortProperty.includes('-') ? 'desc' : 'asc';
  const sortPropertyCorrect = sortValue.sortProperty.replace('-', '');
  const categoryTypeLink = categoryId === 0 ? '' : `&category=${categoryId}`;
  const sortValueLink = `sortBy=${sortPropertyCorrect}&order=${sortParameter}`;
  const getDbPizzasUrl = `https://6380ead7786e112fe1bdfe28.mockapi.io/items?page=${onPageChange}&limit=4&${sortValueLink}${categoryTypeLink}`;

  const searchPizzaItems = pizzaItems.filter((item) => {
    if (item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
      return item;
    }
  });

  React.useEffect(() => {
    setIsLoaded(true);

    fetch(getDbPizzasUrl)
      .then((res) => res.json())
      .then((res) => {
        setPizzaItems(res);
        setIsLoaded(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortValue, onPageChange]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : searchPizzaItems.map((obj) => <PizzaItems key={obj.id} {...obj} />)}
      </div>
      <Pagination onPageChange={onPageChange} setOnPageChange={(obj) => setOnPageChange(obj)} />
    </>
  );
};

export default Home;
