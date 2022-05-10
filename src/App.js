import "./App.css";
import { PizzaList } from "./components/PizzaList/PizzaList";
import { AddPizzaForm } from "./components/AddPizzaForm/AddPizzaForm";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
    </div>
  );
}

export default App;
