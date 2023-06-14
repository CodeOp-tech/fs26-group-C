import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function GuestFooter() {
  return (
    <Paper sx={{marginTop: 'calc(10% + 60px)',
    position: 'sticky',
    bottom: 0,
    width: '100%',
    }} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
            <div>
            <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" />
            </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2022. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}