import React from 'react';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [classActiveLi, setClassActiveLi] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => {
          return (
            <li
              key={i}
              onClick={() => setClassActiveLi(i)}
              className={classActiveLi === i ? 'active' : null}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
