import React from 'react';

function Categories({ activeIndex, setActiveIndex }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => {
          return (
            <li
              key={i}
              onClick={() => setActiveIndex(i)}
              className={activeIndex === i ? 'active' : null}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
