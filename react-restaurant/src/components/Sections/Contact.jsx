import { Box, Button, Card, Typography } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Card sx={{ p: 3, maxWidth: "30%" }}>
        <Typography variant="h3">Contact Us</Typography>
        <Typography variant="body2">stay in touch</Typography>
        <Button sx={{ my: 2 }} size="large" variant="contained">
          Contact
        </Button>
      </Card>
    </>
  );
}
