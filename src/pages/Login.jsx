import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button, Paper } from "@mui/material";
import useRecipeStore from "../store/useRecipeStore";

export default function Login() {
  const [name, setName] = useState("");
  const setUser = useRecipeStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogin = (e) => {
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
        background: "linear-gradient(to right, #8e2de2, #4a00e0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper elevation={8} sx={{ p: 4, width: "100%", maxWidth: 400 }}>
        <Typography variant="h5" align="center" fontWeight="bold" color="primary.contrastText">
          Iniciar Sesión
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            label="Nombre"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ my: 2 }}
            autoFocus
          />
          <Button fullWidth variant="contained" type="submit">
            Entrar
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
