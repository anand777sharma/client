import React from 'react';
import { Box, CircularProgress, Stack,styled } from '@mui/material';
const Wrapper = styled(Box)`
margin-top:10px;
background:#FFFFFF;
`
const Loader = () =>  (
  <Wrapper >
    <Stack direction='row' justifyContent='center'  alignItems='center' height='340px' >
      <CircularProgress />
    </Stack>
  </Wrapper>
);

export default Loader;