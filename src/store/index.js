import { configureStore } from "@reduxjs/toolkit";
import pizzasReducer from "./pizzas/slice";
import userReducer from "./user/slice";
import restaurantsReducer from "./restaurants/slice";

const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    user: userReducer,
    restaurants: restaurantsReducer,
  },
});

export default store;
