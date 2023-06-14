import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Heart from "@mui/icons-material/HeartBroken"

export default function Footer() {
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
            <Heart sx={{color:"#116A7B"}} />
            {/* <img  src="./dog_1.jpg" width={75} height={30} alt="Logo" /> */}
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
            Copyright ©2023
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}