import { Typography } from "@mui/material";
import { useAuth } from "../../Hooks/useAuth";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import DisplayMenuItems from "../../components/Menu/DisplayMenuItemsList";

export default function Home() {
  const { currentUser } = useAuth();
  console.log("from admin dashboard", currentUser);
  return (
    <>
      <Header />
      <DisplayMenuItems />
      <Footer />
    </>
  );
}
