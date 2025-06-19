import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, Button } from "@mui/material";
import InputControl from "../components/InputControl/InputControl";
import useRecipeStore from "../store/useRecipeStore";

export default function Signup() {
  const [name, setName] = useState("");
  const setUser = useRecipeStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setUser(name);
      navigate("/");
      setTimeout(() => {
        document.getElementById("app-audio")?.play();
      }, 500);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ff9800, #f44336)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper elevation={6} sx={{ p: 4, width: "100%", maxWidth: 400 }}>
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
          Registro
        </Typography>
        <form onSubmit={handleSubmit}>
          <InputControl
            label="Nombre"
            placeholder="Ingrese un nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#9900ff" }}
          >
            Guardar
          </Button>
          <Typography mt={2} textAlign="center">
            Si ya tienes una cuenta inicia sesión{" "}
            <span style={{ color: "#9900ff", cursor: "pointer" }}>
              Login
            </span>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
}