import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
//child
export default function MenuItem({ title, price, description, category }) {
  return (
    <>
      <Card sx={{ p: 2 }}>
        <CardHeader title={title} />
        <CardContent>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
          <Typography>{price}</Typography>
          <Typography>{category}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button variant="contained" size="large">
            View
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
