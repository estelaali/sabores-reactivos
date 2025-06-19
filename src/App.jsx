import { Routes, Route, Navigate } from "react-router-dom";
import useRecipeStore from "./store/useRecipeStore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; 
import SearchResults from "./pages/SearchResults";
import Favorites from "./pages/Favorites";
import Counter from "./pages/Counter";
import RecipeDetail from "./pages/RecipeDetail";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const user = useRecipeStore((state) => state.user);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" replace />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="/contador" element={<Counter />} />
        <Route path="/receta/:id" element={<RecipeDetail />} />
      </Routes>
      <MusicPlayer />
    </>
  );
}