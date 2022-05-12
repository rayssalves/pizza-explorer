export const selectRestaurants = (reduxState) => {
  const clonedArray = [...reduxState.restaurants.all];
  return clonedArray.sort((a, b) => a.name.localeCompare(b.name));
  //sorting logic goes in the selector
};
// parameterized selector. Our parameterized selector is actually a function that returns a function
export const selectRestaurantsThatSellPizza = (pizzaId) => (reduxState) => {
  return reduxState.restaurants.all.filter((r) => r.pizzas.includes(pizzaId));
};
