import { Typography } from "@mui/material";
import { useAuth } from "../../Hooks/useAuth";

export default function Home() {
  const { currentUser } = useAuth();
  console.log("from admin dashboard", currentUser);
  return (
    <>
      <Typography>this is user</Typography>
    </>
  );
}
