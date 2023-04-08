import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ModeOfTravel } from '@mui/icons-material';
import UserContext from '../UserContext';
import {useContext} from 'react';
import { Link } from 'react-router-dom';


function Navbar({isLoggedIn}) {
  const { user,setUser } = useContext(UserContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // eslint-disable-next-line
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: '#E9967A', marginBottom: '20px'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ModeOfTravel sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Travel-Buddy
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link style={{textDecoration:'none'}} to="/book_main">
                  <Button textAlign="center" color="inherit" variant='contained' >Book-Ride</Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                <Link style={{textDecoration:'none'}} to='/postride'>
                  <Button textAlign="center" color="inherit" variant='contained' >Post-Ride</Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link style={{textDecoration:'none'}} to="/rideHistory">
                  <Button textAlign="center" color="inherit" variant='contained' >Ride-History</Button>
                  </Link>
                </MenuItem>
            </Menu>
          </Box>
          <ModeOfTravel sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Travel-Buddy
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link style={{textDecoration:'none'}} to="/book_main">
              <Button 
              to='/book_main'
              variant='contained'
                onClick={handleCloseNavMenu}
                color='warning'
                sx={{ my: 2, color: 'white', display: 'block',backgroundColor: '#E9967A' }}
              >
                Book-Ride
              </Button>
              </Link>
              <Link style={{textDecoration:'none'}} to='/postride'>
              <Button 
              
              variant='contained'
              color='warning'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' ,backgroundColor: '#E9967A'}}
              >
                Post-Ride
              </Button>
              </Link>
              <Link style={{textDecoration:'none'}} to='/rideHistory'>
              <Button 
              variant='contained'
              color='warning'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',backgroundColor: '#E9967A' }}  
              >
                Ride-History
              </Button>
              </Link>
          </Box>
          {user ? (<><Typography
            variant="h5">{user}</Typography>
            <Link  style={{textDecoration:'none'}} to='/login'>
            <Button color="inherit"  variant='outlined' sx={{marginLeft:'5px', my: 2, color: 'white', display: 'block'}} onClick={()=>setUser('')}>LogOut</Button></Link></>):(<>
          <Button color="inherit" variant='outlined' sx={{marginRight:'5px'}} href='/login'>Login</Button>
          <Button color="inherit" variant='outlined' href='/signup'>SignUp</Button> </>)
}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;