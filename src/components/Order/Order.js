import React from 'react';
import classes from './Order.module.css';
const order = (props) => {
  //creat an array that stor all the ingredients into it
  const ingredients = [];
  // Using the for method ,we loop thought all the item inside the ingredients and push name and number of that
  // ingredient inside the ingredients array that we created.
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }
  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #eee',
          padding: '5px',
        }}
        key={ig.name}>
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};
export default order;
