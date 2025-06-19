import React from "react";
import useRecipeStore from "../store/useRecipeStore";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

export default function Favorites() {
  const { favorites, removeFavorite } = useRecipeStore();

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Recetas favoritas
      </Typography>

      {favorites.length === 0 ? (
        <Typography>No hay recetas favoritas aún.</Typography>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((meal) => (
            <Grid item xs={12} sm={6} md={4} key={meal.idMeal}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={meal.strMealThumb}
                  alt={meal.strMeal}
                />
                <CardContent>
                  <Typography variant="h6">{meal.strMeal}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {meal.strArea} - {meal.strCategory}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => removeFavorite(meal.idMeal)}
                    sx={{ mt: 1 }}
                  >
                    Quitar de favoritos
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}