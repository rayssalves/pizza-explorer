import "../../style.scss";
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
    <div className="pizza-list">
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! There are
      </p>
      <p>
        <strong>{pizzas.length} </strong>pizzas available
      </p>
      {/* renders the pizzas, this info comes from de slice, the hard coded data*/}
      <ul className="pizzas">
        {/* pizzas from de slice, do a map, and add a prop that can be any name */}
        {pizzas.map((pizza) => (
          <li
            key={pizza.id}
            className="pizza"
            style={{ backgroundImage: `url(${pizza.image})` }}
          >
            <h4>{pizza.name}</h4>
            <button
              onClick={() => dispatch(toggleFavorites(pizza.id))}
              className={`fav-toggle ${
                user.favorites.includes(pizza.id) ? "fav" : ""
              }`}
            >
              {user.favorites.includes(pizza.id) ? "♥" : "♡"}
            </button>
            <div className="overlay">
              <p>{pizza.description}</p>
              <span>
                Bought: <strong>{pizza.bought}</strong> times!
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { PizzaList };
