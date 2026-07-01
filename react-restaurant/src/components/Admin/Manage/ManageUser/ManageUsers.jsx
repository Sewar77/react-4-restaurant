import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { userContext } from "../../../../Context/UserContext";

export default function ManageUsers() {
  const { getAllUsers, users } = useContext(userContext);
  useEffect(() => {
    getAllUsers();
  }, []);
  console.log(users);

  return (
    <>
      <Typography variant="h3">Manage Users</Typography>
      <Divider />
      <Grid container spacing={4} sx={{ m: 3, p: 3 }}>
        {users.map((user) => (
          <Grid key={user.id}>
            <Card>
              <CardContent>
                <Typography variant="h4">{user.name}</Typography>
                <Typography variant="h6">{user.email}</Typography>
                <Typography variant="h6">{user.role}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained">Edit Role</Button>
                <Button variant="contained">Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
