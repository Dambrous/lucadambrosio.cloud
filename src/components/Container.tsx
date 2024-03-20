import { Outlet } from "@tanstack/react-router";
import { Box, Container } from "@mui/material";
export function ContainerCustom() {
  return (
    <>
      <Box>
        <Container fixed>
          <Outlet />
        </Container>
      </Box>

      {/* LUNARHOME */}
      {/* <Box sx={{ backgroundColor: "black" }}>
        <Outlet />
      </Box> */}
    </>
  );
}
