import { Box, Typography } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "#d2cfc1",
            minHeight: "100vh",
            maxWidth: 250,
          }}
        >
          {/* sidebar */}
          <Sidebar />
        </Box>
        <Box sx={{ flexGrow: 4, my: 4 }}>
          {/* content */}
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
