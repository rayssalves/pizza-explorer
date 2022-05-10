export const listPizza = (reduxState) => {
  const getArray = [...reduxState.pizzas.allPizzas];
  //sorting the pizzas by more popular
  return getArray.sort((a, b) => b.bought - a.bought);
};
//Define a selector to get the list of pizzas, and then add a line of text showing the total number of known pizzas.
