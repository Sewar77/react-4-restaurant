import { Box, Container, Grid, Typography } from "@mui/material";
export default function About() {
  return (
    <>
      <Grid container spacing={4}>
        <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ margin: "auto" }}>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            quibusdam ipsa quos. Quis molestias odio perspiciatis impedit quasi
            vel accusantium, similique amet corporis eum. Ipsa et maiores
            voluptatibus sapiente nisi!
          </Typography>
        </Grid>
        <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ margin: "auto" }}>
          <Box
            component={"img"}
            src="../../../public/burger.avif"
            sx={{ borderRadius: "30px", width: { sm: "300px", md: "500px" } }}
          />
        </Grid>
      </Grid>
    </>
  );
}
