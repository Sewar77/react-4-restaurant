import { Container } from "@mui/material";
import Header from "../../components/Layout/Header";
import About from "../../components/Sections/About";
import Feedbacks from "../../components/Sections/Feedbacks";
import Footer from "../../components/Layout/Footer";
import Contact from "../../components/Sections/Contact";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Container
        sx={{
          my: 4,
          minHeight: "100vh",
          alignItems: "center",
          marginX: "auto",
        }}
      >
        <About />
        <Feedbacks />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}
