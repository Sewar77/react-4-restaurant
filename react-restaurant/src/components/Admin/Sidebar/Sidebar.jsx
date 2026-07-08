import { Box, List, ListItem, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <List>
          <ListItem>
            <ListItemButton onClick={() => navigate("/admin/dashboard")}>
              Home
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => navigate("/admin/manage-users")}>
              Manage User
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => navigate("/admin/manage-menu")}>
              Manage Menu
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              onClick={() => navigate("/admin/manage-categories")}
            >
              Manage Categories
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => navigate("/admin/manage-messages")}>
              Manage Messages
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>Logout</ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
