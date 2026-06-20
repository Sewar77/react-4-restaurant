import {
  AppBar,
  List,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
//nothing but import
export default function Header() {
  // js code
  const navigate = useNavigate();
  return (
    <>
      {/* html code */}
      <AppBar position="sticky" sx={{ bgcolor: "#9f0000" }}>
        <Toolbar sx={{ justifyContent: "space-between", p: 3 }}>
          <Typography variant="h3">Logo</Typography>

          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <ListItemButton>Home</ListItemButton>
            <ListItemButton>Login</ListItemButton>
            <ListItemButton>Register</ListItemButton>
            <ListItemButton>Contact</ListItemButton>
            {/* use the router name  */}
            <ListItemButton onClick={() => navigate("/about-us")}>
              About
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/menu")}>
              Menu
            </ListItemButton>
          </List>
        </Toolbar>
      </AppBar>
    </>
  );
}
//nothing
