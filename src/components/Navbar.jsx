import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; 
import useRecipeStore from "../store/useRecipeStore";

export default function Navbar() {
  const user = useRecipeStore((state) => state.user);
  const logout = useRecipeStore((state) => state.logout);
  const counter= useRecipeStore((state) =>
    state.counter);
  const navigate = useNavigate();

  const handleLogout = () => {
  const audio = document.getElementById("app-audio");
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0; 
  }

  logout();
  navigate("/login");
};
   
  return (
    <AppBar position="static" sx={{ backgroundColor: "#e53935" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          Sabores Reactivos
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          {user && (
            <>
              <Button component={Link} to="/" color="inherit">INICIO</Button>
              <Button component={Link} to="/favoritos" color="inherit">FAVORITOS</Button>
              <Button component={Link} to="/contador" 
               color="inherit">
                CONTADOR ({counter})
              </Button>
            </>
          )}
        </Box>

        {user && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography fontWeight="bold">Hola, {user}</Typography>
            <Button color="inherit" onClick={handleLogout}>
              Cerrar sesión
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}