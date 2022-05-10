import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selector";

const PizzaList = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>!
      </p>
      <p>TODO: the list of pizzas</p>
    </div>
  );
};

export { PizzaList };
