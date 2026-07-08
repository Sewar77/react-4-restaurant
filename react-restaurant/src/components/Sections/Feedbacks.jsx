import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  CardMedia,
  Divider,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useMessage } from "../../Hooks/useMessage";
import { useEffect } from "react";
export default function Feedbacks() {
  const { fetchApprovedMessages, approvedMessages } = useMessage();
  useEffect(() => {
    fetchApprovedMessages();
  }, []);
  console.log(approvedMessages);

  return (
    <>
      <Box sx={{ my: 5 }}>
        <Typography variant="h2">Reviews From our clients</Typography>
        {approvedMessages.map((app) => {
          return (
            <Grid key={app.id} size={{ sm: 12, md: 6, lg: 3, my: 3 }}>
              <Card sx={{ my: 2, p: 3 }}>
                <CardHeader title={app.name} />
                <CardContent>
                  <Typography variant="body1">
                    {app.email || "np email"}
                  </Typography>
                  <Typography variant="body1">{app.message}</Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Box>
              </Card>
            </Grid>
          );
        })}
        <Divider sx={{ my: 1, bgcolor: "red" }} />
        <Grid container spacing={4}>
          <Grid size={{ sm: 12, md: 6, lg: 3 }}>
            <Card>
              <CardHeader title="George M.Michel" />
              <CardMedia component={"img"} src="/burger.avif" />
              <CardContent>
                <Typography variant="body1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta id nobis nulla.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ sm: 12, md: 6, lg: 3 }}>
            <Card>
              <CardHeader title="George M.Michel" />
              <CardMedia component={"img"} src="/burger.avif" />
              <CardContent>
                <Typography variant="body1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta id nobis nulla.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ sm: 12, md: 6, lg: 3 }}>
            <Card>
              <CardHeader title="George M.Michel" />
              <CardMedia component={"img"} src="/burger.avif" />
              <CardContent>
                <Typography variant="body1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta id nobis nulla.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ sm: 12, md: 6, lg: 3 }}>
            <Card>
              <CardHeader title="George M.Michel" />
              <CardMedia component={"img"} src="/burger.avif" />
              <CardContent>
                <Typography variant="body1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta id nobis nulla.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ sm: 12, md: 6, lg: 3 }}>
            <Card>
              <CardHeader title="George M.Michel" />
              <CardMedia component={"img"} src="/burger.avif" />
              <CardContent>
                <Typography variant="body1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta id nobis nulla.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ sm: 12, md: 6, lg: 3 }}>
            <Card>
              <CardHeader title="George M.Michel" />
              <CardMedia component={"img"} src="/burger.avif" />
              <CardContent>
                <Typography variant="body1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta id nobis nulla.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ sm: 12, md: 6, lg: 3 }}>
            <Card>
              <CardHeader title="George M.Michel" />
              <CardMedia component={"img"} src="/burger.avif" />
              <CardContent>
                <Typography variant="body1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta id nobis nulla.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
