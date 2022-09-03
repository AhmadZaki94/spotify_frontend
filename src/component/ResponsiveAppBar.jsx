import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ResponsiveAppBar = () => {

  let logo = "https://upload.wikimedia.org/wikipedia/commons/7/74/Spotify_App_Logo.svg";

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex'}}}>
            <img src={logo} alt="" width='50px' height='50px' />
          </Box>          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent='space-evenly' style={{ fontFamily: '35px'}}>
            <Link to='/' style={{textDecoration: 'none'}}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>Songs</Button>
            </Link>

            <Link to='/artist' style={{textDecoration: 'none'}}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>Artist</Button>
            </Link>

            <Link to='/addsong' style={{textDecoration: 'none'}}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>Add New Songs</Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
