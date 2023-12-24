import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { TextField } from '@mui/material';

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <AppBar className='bg-white' position="sticky" sx={{ top: 0, zIndex: 1100, paddingX: '70px', borderBottom: '1px solid lightgrey' }} elevation={0}>
            <Toolbar className='flex justify-between'>
               <div className='flex items-center'>
                  <Typography variant="h5" component="div" sx={{ flexGrow: 0, color: 'black', fontWeight: '400' }}>
                     HikioMath
                  </Typography>
                  <Box
                     component="form"
                     sx={{
                        '& .MuiTextField-root': { ml: 4, width: '25ch' },
                     }}
                     noValidate
                     autoComplete="off"
                  >
                     <TextField
                        id="standard-search"
                        type="search"
                        variant="standard"
                        placeholder='Search'
                     />
                  </Box>
               </div>
               <div className='flex items-center'>
                  <Button className='bg-green-600' variant='contained' sx={{ backgroundColor: 'black', marginRight: '10px', borderRadius: '50px', "&:hover": { backgroundColor: 'black', boxShadow: 'none' } }}>Sign up</Button>
                  <p className="cursor-pointer text-black">Sign in</p>
               </div>
            </Toolbar>
         </AppBar>
         {children}
      </>
   );
}