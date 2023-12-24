import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
   return (
      <AppBar position="sticky" sx={{ top: 0, zIndex: 1100, paddingX: '70PX', borderBottom: '2px solid black' }} elevation={0}>
         <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'black', fontWeight: '600' }}>
               HikioMath
            </Typography>
            <Button variant='contained' sx={{ backgroundColor: 'black', borderRadius: '50px', "&:hover": { backgroundColor: 'black', boxShadow: 'none'}}}>Get started</Button>
         </Toolbar>
      </AppBar>
   );
}