import React from 'react';
import { Card, CardContent, Stack } from '@mui/material';

function Wrapper({children}) {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Stack spacing={2}>
            {children}
          </Stack>
        </CardContent>
      </Card> 
    </>
  );
}

export default Wrapper;