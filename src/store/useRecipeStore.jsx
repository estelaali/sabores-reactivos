import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRecipeStore = create(
  persist(
    (set, get) => ({
      user: null,
      favorites: [],
      counter: 0,

      setUser: (user) => set({ user }),

      logout:() => set({ user: null, favorites:[], counter:0}),

      addFavorite: (recipe) => {
        const favorites = get().favorites;
        if (!favorites.find((r) => r.idMeal === recipe.idMeal)) {
          set({
            favorites: [...favorites, recipe],
            counter: get().counter + 1,
          });
        }
      },

      removeFavorite: (idMeal) => {
        const updated = get().favorites.filter((r) => r.idMeal !== idMeal);
        set({
          favorites: updated,
          counter: Math.max(get().counter - 1, 0),
        });
      },
    }),
    {
      name: "sabores-storage",
    }
  )
);

export default useRecipeStore;