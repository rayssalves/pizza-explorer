import { useSelector, useDispatch} from "react-redux";
import { selectUser } from "../../store/user/selector";
//here import the function that was created in the selector
import { listPizza } from "../../store/pizzas/selector";
import { toggleFavorites } from "../../store/user/slice";

const PizzaList = () => {
  const user = useSelector(selectUser);
  //here adds the dispatch 
  const dispatch = useDispatch();
  //here I do a const pizzas that is the name that is in the slice, doing a useSelector
  const pizzas = useSelector(listPizza);
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! There are
      </p>
      <p>
        <strong>{pizzas.length} </strong>pizzas available
      </p>
      {/* renders the pizzas, this info comes from de slice, the hard coded data*/}
      <ul>
        {/* pizzas from de slice, do a map, and add a prop that can be any name */}
        <h2>Here is the list of Pizzas</h2>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <h4>{pizza.name}</h4>
            <p>{pizza.description}</p>
            {/* dispatch logic that was made in the user */}
            <button onClick={() => dispatch(toggleFavorites(pizza.id))}>
              {user.favorites.includes(pizza.id) ? "♥" : "♡"}
            </button>
            <span>
              Ordered: <strong>{pizza.bought}</strong> times!
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { PizzaList };