import { AppBar, Box, Toolbar, Typography } from "@mui/material";
export default function Header() {
  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "#9f0000" }}>
        <Toolbar sx={{ justifyContent: "space-between", p: 3 }}>
          <Typography variant="h3">Logo</Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Typography variant="h6">Home</Typography>
            <Typography variant="h6">Login</Typography>
            <Typography variant="h6">Register</Typography>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="h6">About us</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
