import React from "react";
import "./App.css";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { RippleBadge } from "./app/MaterialTheme/styled";

function App() {
  return (
    <Container maxWidth="sm">
      <Stack>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h1"}>
            {" "}
            React App
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={4}>
            <Button variant="contained">Contained</Button>
          </RippleBadge>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
