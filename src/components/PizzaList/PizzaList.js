import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selector";
//here import the function that was created in the selector
import { listPizza } from "../../store/pizzas/selector";

const PizzaList = () => {
  const user = useSelector(selectUser);
  //here I do a const pizzas that is the name that is in the slice, doing a useSelector
  const pizzas = useSelector(listPizza);
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! There are
      </p>
      <p>{pizzas.length} pizzas in total </p>
    </div>
  );
};

export { PizzaList };
