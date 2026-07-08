import {
  Button,
  Container,
  Paper,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useMessage } from "../../Hooks/useMessage";
import { useState } from "react";
export default function Feedback() {
  const { createMessage } = useMessage();
  const [newMessage, setNewMessage] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSendMessage = () => {
    createMessage(newMessage);
    setNewMessage({ name: "", email: "", message: "" });
  };
  return (
    <>
      <Container sx={{ m: "auto" }}>
        <Paper
          elevation={4}
          sx={{ my: 2, p: 3, display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Typography variant="h3">Leave your feedback!</Typography>
          <TextField
            label="Name"
            fullWidth
            required
            value={newMessage.name}
            onChange={(e) =>
              setNewMessage({ ...newMessage, name: e.target.value })
            }
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={newMessage.email}
            onChange={(e) =>
              setNewMessage({ ...newMessage, email: e.target.value })
            }
          />
          <TextareaAutosize
            minRows={6}
            placeholder="Messsage"
            required
            value={newMessage.message}
            onChange={(e) =>
              setNewMessage({ ...newMessage, message: e.target.value })
            }
          />
          <Button variant="contained" color="info" onClick={handleSendMessage}>
            Send
          </Button>
        </Paper>
      </Container>
    </>
  );
}
