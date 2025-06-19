import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import useRecipeStore from "../store/useRecipeStore";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addFavorite } = useRecipeStore();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}
        `);
        const data = await res.json();
        setRecipe(data.meals?.[0] || null);
      } catch (error) {
        console.error("Error cargando receta:", error);
      }
      setLoading(false);
    };
    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <Box textAlign="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (!recipe) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography>No se encontró la receta.</Typography>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <CardContent>
          <Typography variant="h4">{recipe.strMeal}</Typography>
          <Typography variant="subtitle1" color="text.secondary" mb={2}>
            {recipe.strCategory} - {recipe.strArea}
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={() => addFavorite(recipe)}
            sx={{ mb: 2 }}
          >
            ❤️ Agregar a favoritos
          </Button>
          <Typography variant="h6">🧾 Ingredientes:</Typography>
          <ul>
            {Array.from({ length: 20 }).map((_, i) => {
              const ing = recipe[`strIngredient${i + 1}`];
              const measure = recipe[`strMeasure${i + 1}`];
              return ing && ing.trim() ? (
                <li key={i}>
                  {ing} - {measure}
                </li>
              ) : null;
            })}
          </ul>
          <Typography mt={2} variant="h6">
            🧑‍🍳 Instrucciones:
          </Typography>
          <Typography>{recipe.strInstructions}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}