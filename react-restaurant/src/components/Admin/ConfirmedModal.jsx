import { Box, Button, Modal, Typography } from "@mui/material";

export default function ConfirmedModal({ open, onclose, onconfirm }) {
  return (
    <>
      <Modal open={open} onClose={onclose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
          }}
        >
          <Typography variant="h5" sx={{ color: "black" }}>
            Are you sure you want to delete this item?
          </Typography>
          <Button color="error" variant="contained" onClick={onconfirm}>
            Delete
          </Button>
          <Button color="warning" variant="contained" onClick={onclose}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </>
  );
}
