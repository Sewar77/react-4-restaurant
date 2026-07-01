import { Typography } from "@mui/material";
import { useAuth } from "../../Hooks/useAuth";

export default function AdminDashboard() {
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <>
      <Typography variant="h5">Hello, {currentUser?.name}</Typography>
    </>
  );
}
