import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaItems from '../components/PizzaItems';
import Skeleton from '../components/Skeleton';

const Home = () => {
  const [pizzaItems, setPizzaItems] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(true);
  const getDbPizzasUrl = 'https://6380ead7786e112fe1bdfe28.mockapi.io/items';

  React.useEffect(() => {
    fetch(getDbPizzasUrl)
      .then((res) => res.json())
      .then((res) => {
        setPizzaItems(res);
        setIsLoaded(false);
      });
  }, []);
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
          : pizzaItems.map((obj) => <PizzaItems key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default Home;
