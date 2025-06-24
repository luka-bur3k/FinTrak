import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const App = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Revolut Finance Tracker
      </Typography>
      <Button variant="contained" color="primary">
        Fetch Data
      </Button>
    </Container>
  );
};

export default App;