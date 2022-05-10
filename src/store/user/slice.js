import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311], //adding the favorites array, its just a list of favorites array
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const idToAdd = action.payload;
      //logic to filter de list of favorites
      // Check first if it's already a favorite or not
      const newFav = state.favorites.includes(idToAdd)
        ? state.favorites.filter((nr) => nr !== idToAdd) // if it is => remove it
        : [...state.favorites, idToAdd]; // if not, add it.

      state.favorites = newFav;
    },
  },
});
export const { toggleFavorites } = userSlice.actions;

export default userSlice.reducer;
