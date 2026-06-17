import { Box, TextField, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#9f0000",
          display: "flex",
          flexDirection: "row",
          flexWrap: { sm: "wrap", md: "nowrap" },
          alignItems: "center",
          p: 2,
          justifyContent: "space-evenly",
          gap: 4,
          py: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            color: "white",
          }}
        >
          <Typography variant="body1">Home</Typography>
          <Typography variant="body1">Login</Typography>
          <Typography variant="body1">Register</Typography>
          <Typography variant="body1">Contact</Typography>
          <Typography variant="body1">About us</Typography>
        </Box>
        <Box sx={{ color: "white", width: "40%" }}>
          <Typography variant="body1">Why Us?</Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            maxime, accusamus cum dolorum laborum quasi officiis ipsum
            laboriosam quam explicabo cupiditate totam ratione pariatur illum
            adipisci, nostrum, dolorem corporis tempora.
          </Typography>
        </Box>
        <Box>
          <TextField label="Subscribe NewsLetter" />
        </Box>
      </Box>
    </>
  );
}
