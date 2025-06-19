import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "../store/useRecipeStore";
import InputControl from "../components/InputControl/InputControl";
import { Button, Box, Typography } from "@mui/material";

export default function Login() {
  const [name, setName] = useState("");
  const setUser = useRecipeStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setUser(name);
      // 🔊 Inicia música automáticamente (si tenés acceso al componente)
      const audio = document.getElementById("app-audio");
      if (audio) audio.play();
      navigate("/"); // redirige a inicio
    }
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: 400,
        mx: "auto",
        px: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Iniciar sesión
      </Typography>
      <form onSubmit={handleSubmit}>
        <InputControl
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          fullWidth
          sx={{ mt: 2 }}
        >
          Entrar
        </Button>
      </form>
    </Box>
  );
}