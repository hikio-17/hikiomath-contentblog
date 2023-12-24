import React from 'react';
import { Box, Button, Grid, Typography, styled } from '@mui/material';

const ContainerPage = styled(Box)`
  height: 80vh;
  display: flex;
  padding: 0pc 100px 0px 100px;
  align-items: center;
  background-color: #1976d2;
`

export default function Hero() {
   return (
      <ContainerPage color='primary'>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Typography variant="h2" component="div">
              Stay curious.
            </Typography>
            <Typography variant="h6" component="div">
              Discover stories, thinking, and expertise from writers on any topic.
            </Typography>
            {/* <Button className='custom-button'>Start reading</Button> */}
            <Button variant='contained' sx={{ backgroundColor: 'black', borderRadius: '50px',"&:hover": { backgroundColor: 'black', boxShadow: 'none'}}}>Start reading</Button>
          </Grid>
          <Grid item xs={5}>
          </Grid>
        </Grid>
      </ContainerPage>
   )
}