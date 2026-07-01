import {
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "../../Hooks/useAuth";
import { useState } from "react";

export default function Register() {
  const { register } = useAuth();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleRegister = () => {
    register(userData);
    setUserData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  const handleReset = () => {
    setUserData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <>
      <Container sx={{ m: "auto" }}>
        <Paper
          elevation={4}
          sx={{ p: 3, display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Typography variant="h3">Create Account</Typography>
          <Divider sx={{ mb: 2, p: 0.01, bgcolor: "green" }} />
          <TextField
            label="Name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <TextField
            label="Email"
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <TextField
            label="Password"
            type="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <TextField
            label="Confirm Password"
            type="password"
            value={userData.confirmPassword}
            onChange={(e) =>
              setUserData({ ...userData, confirmPassword: e.target.value })
            }
          />
          <Button variant="contained" color="success" onClick={handleRegister}>
            Register
          </Button>
          <Button variant="contained" color="success" onClick={handleReset}>
            Reset
          </Button>
        </Paper>
      </Container>
    </>
  );
}
