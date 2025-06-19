import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [query, setQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() !== "") {
      setLoading(true);

      // Espera 1 segundo antes de navegar
      setTimeout(() => {
        setLoading(false);
        navigate(`/search?query=${query}`);
      }, 1000);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/banner1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textShadow: "0 2px 4px #0008",
      }}
    >
      <Typography variant="h3" fontWeight="bold" mb={4}>
        ¡Bienvenido a la Recetas App!
      </Typography>

      {loading ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <img
            src="/panquque.jpeg"
            alt="Buscando receta..."
            style={{ width: "150px", marginBottom: "1rem" }}
          />
          <CircularProgress color="secondary" />
          <Typography mt={2}>¡Buscando recetas deliciosas!</Typography>
        </Box>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
          <TextField
            placeholder="Buscar"
            variant="outlined"
            size="small"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={{ background: "#fff", borderRadius: 1 }}
          />
          <Button type="submit" variant="contained" color="success">
            Buscar
          </Button>
        </form>
      )}
    </Box>
  );
}