import { Box, Container, Typography } from "@mui/material";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

export default function AboutUs() {
  return (
    <>
      <Header />
      <Container sx={{ minHeight: "100vh" }}>
        <Typography variant="h3">About Our Resturant</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, minus.
            Quibusdam, ipsum eum! Delectus dicta fugiat, voluptates nulla
            doloremque odit commodi aperiam rerum odio. Ad optio enim molestiae
            similique quos!
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, minus.
            Quibusdam, ipsum eum! Delectus dicta fugiat, voluptates nulla
            doloremque odit commodi aperiam rerum odio. Ad optio enim molestiae
            similique quos!
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
