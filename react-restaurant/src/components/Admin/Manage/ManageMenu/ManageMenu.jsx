import {
  Button,
  Container,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useMenu } from "../../../../Hooks/useMenu";
import { useState } from "react";
import ConfirmedModal from "../../ConfirmedModal";
export default function ManageMane() {
  const { menu, deleteMenuItem } = useMenu();
  const [confirmed, setConfirmed] = useState(false);
  const [deletedId, setDeletedId] = useState();
  const handleClose = () => {
    setConfirmed(false);
  };
  console.log(deletedId);

  return (
    <>
      <Typography variant="h3">Manage Menu</Typography>
      <Divider />
      <Container>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menu.map((item, idx) => {
                // map to dispay them
                return (
                  <TableRow key={item.id}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>
                      <Button>Edit</Button>
                      <Button
                        onClick={() => (
                          setConfirmed(true), setDeletedId(item.id)
                        )}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      {confirmed && (
        <ConfirmedModal
          open={confirmed}
          onclose={handleClose}
          onconfirm={() => (deleteMenuItem(deletedId), setConfirmed(false))}
        />
      )}
      {/* if open is true, open the modal.  */}
    </>
  );
}
