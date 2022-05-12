//Define a selector to get the list of pizzas, and then add a line of text showing the total number of known pizzas.
export const selectPizzas = (reduxState) => {
  const clonedArray = [...reduxState.pizzas.allPizzas];
  //sorting the pizzas by more popular
  return clonedArray.sort((a, b) => b.bought - a.bought);
};
