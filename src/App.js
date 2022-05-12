import "./App.css";
import { PizzaList } from "./components/PizzaList/PizzaList";
import { AddPizzaForm } from "./components/AddPizzaForm/AddPizzaForm";
import { RestaurantList } from "./components/RestaurantList/RestaurantList";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
      <RestaurantList />
    </div>
  );
}

export default App;
