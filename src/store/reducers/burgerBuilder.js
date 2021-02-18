import * as actionTypes from '../action/actionTypes';
import { updateObject } from '../utility';
const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};
const INGREDIENT_PRICE = {
  salad: 0.4,
  cheese: 0.3,
  meat: 1.4,
  bacon: 0.7,
};
// all the method below :add, remove,set and fetch are easy way to update the ingredient so that you have a
// cleaner and easy to understand switch case
const addIngredients = (state, action) => {
  const updateIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updateIngredients = updateObject(state.ingredients, updateIngredient);
  const updateState = {
    ingredients: updateIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName],
  };
  // this is show how simple it is when we use updateObject
  return updateObject(state, updateState);
};
const removeIngredients = (state, action) => {
  const updateIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updateIngs = updateObject(state.ingredients, updateIng);
  const updateSt = {
    ingredients: updateIngs,
    totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName],
  };
  // this is show how simple it is when we use updateObject
  return updateObject(state, updateSt);
};
const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      cheese: action.ingredients.cheese,
      bacon: action.ingredients.bacon,
      meat: action.ingredients.meat,
    },
    totalPrice: 4,
    error: false,
  });
};
const fetchIngredientFailed = (state, action) => {
  return updateObject(state, { error: true });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredients(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredients(state, action);
    case actionTypes.SET_INGREDIENT:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENT_FAILED:
      return fetchIngredientFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
