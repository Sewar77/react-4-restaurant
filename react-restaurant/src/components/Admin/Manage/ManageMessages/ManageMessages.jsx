import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useMessage } from "../../../../Hooks/useMessage";
import { useEffect } from "react";
export default function ManageMessages() {
  const { fetchAllMessages, messages, updateMessage } = useMessage();
  useEffect(() => {
    fetchAllMessages();
  }, []);
  const handleUpdateStatus = (id, newStatus) => {
    updateMessage({ id, newStatus });
    fetchAllMessages();
  };
  //   render in manage messages!
  return (
    <>
      <Container sx={{ my: "auto", justifyContent: "center" }}>
        <Typography variant="h2" sx={{ my: 2 }}>
          Manage Messages
        </Typography>
        <Grid container spacing={4} sx={{ m: 2 }}>
          {messages.map((mesg) => {
            return (
              <Grid key={mesg.id}>
                <Card sx={{ p: 3 }}>
                  <CardContent>
                    <Typography variant="h4">{mesg.status}</Typography>
                    <Divider sx={{ bgcolor: "red", my: 1 }} />
                    <Typography variant="h4">{mesg.name}</Typography>
                    <Typography variant="h6">
                      {mesg.email || "No Email provider"}
                    </Typography>
                    <Typography variant="h4">{mesg.message}</Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button
                      color="success"
                      variant="contained"
                      onClick={() => handleUpdateStatus(mesg.id, "approved")}
                    >
                      Approve
                    </Button>
                    <Button
                      color="warning"
                      variant="contained"
                      onClick={() => handleUpdateStatus(mesg.id, "pending")}
                    >
                      Pending
                    </Button>
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => handleUpdateStatus(mesg.id, "rejected")}
                    >
                      Rejecet
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
