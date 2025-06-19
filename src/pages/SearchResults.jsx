import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useLocation, Link } from "react-router-dom";

function SearchResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await res.json();
        setResults(data.meals || []);
      } catch (error) {
        console.error("Error al buscar recetas:", error);
        setResults([]);
      }
      setLoading(false);
    };

    if (query) fetchRecipes();
  }, [query]);

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Resultados para: <strong>{query}</strong>
      </Typography>

      {loading ? (
        <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
          <img
            src="/panquque.jpeg"
            alt="Preparando receta..."
            style={{ width: "200px", marginBottom: "1rem" }}
          />
          <CircularProgress color="secondary" size={50} />
        </Box>
      ) : results.length > 0 ? (
        <Grid container spacing={3}>
          {results.map((meal) => (
            <Grid item xs={12} sm={6} md={4} key={meal.idMeal}>
              <Link to={`/receta/${meal.idMeal}`}>
                <Card sx={{ cursor: "pointer", height: "100%" }}>
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
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography mt={4}>No se encontraron recetas.</Typography>
      )}
    </Box>
  );
}

export default SearchResults