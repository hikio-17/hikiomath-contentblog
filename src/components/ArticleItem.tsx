/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material';
import React from 'react';
import BookmarkIcon from '@mui/icons-material/BookmarkAddOutlined';
import Link from 'next/link';

export default function ArticleItem() {
   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-around',
            marginBottom: '20px',
            paddingBottom: '10px',
            paddingTop: '10px'
         }}
      >
         <img src='https://unusa.ac.id/wp-content/uploads/2021/05/images-12.jpeg' alt='image' width='200px' />
         <div style={{ paddingRight: '20px' }}>
            <Typography variant='h6' component='div' sx={{ fontWeight: 'bold' }}>
               <Link href={`/article/123`} style={{ color: 'black', textDecoration: 'none'}}>
                  Apakah Matematikan itu menyenangkan
               </Link>
            </Typography>
            <Typography color="text.secondary" variant="body2" mb={1}>
               Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
               just down the hall.
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', alignItems: 'center' }}>
               <p style={{ fontSize: '12px' }}>
                  <span>23 Desember 2023</span>
                  <span style={{ backgroundColor: 'lightgray', borderRadius: '50px', padding: '3px 7px 3px 7px', fontSize: '10px', marginLeft: '10px' }}>Aljabar</span>
               </p>
               <BookmarkIcon sx={{
                  color: 'grey',
                  "&:hover": {
                     color: "black"
                  }
               }} />
            </div>
         </div>
      </Box>
   )
}