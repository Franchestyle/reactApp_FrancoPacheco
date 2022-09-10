import React from "react";
import { Link } from "react-router-dom";
import Item from './Item'

const ItemList = ({ booster }) => {
  return (
    <div>
      {booster.length ? (
        booster.map((booster) => (
          <Link to={`/Productos/${booster.id}`}>
            <Item
              key={booster.id}
              title={booster.title}
              price={booster.price}
              img={booster.img}
            />
          </Link>
        ))
      ) : (
        <progress class="progress w-56"></progress>
      )}
    </div>
  );
};

export default ItemList;
