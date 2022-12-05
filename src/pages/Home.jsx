import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaItems from '../components/PizzaItems';
import Skeleton from '../components/Skeleton';

const Home = () => {
  const [pizzaItems, setPizzaItems] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'Популярное',
    sortProperty: 'rating',
    sortParameter: '&order=desc',
  });

  const categoryTypeLink = categoryId === 0 ? '' : `&category=${categoryId}`;
  const sortValueLink = `?sortBy=${sortType.sortProperty}${sortType.sortParameter}`;

  const getDbPizzasUrl = `https://6380ead7786e112fe1bdfe28.mockapi.io/items${sortValueLink}${categoryTypeLink}`;

  React.useEffect(() => {
    setIsLoaded(true);

    fetch(getDbPizzasUrl)
      .then((res) => res.json())
      .then((res) => {
        setPizzaItems(res);
        setIsLoaded(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <>
      <div className="content__top">
        <Categories activeIndex={categoryId} setActiveIndex={(i) => setCategoryId(i)} />
        <Sort sortType={sortType} setSortType={(obj) => setSortType(obj)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : pizzaItems.map((obj) => <PizzaItems key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default Home;
