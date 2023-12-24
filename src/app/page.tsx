/* eslint-disable @next/next/no-img-element */
'use client'
import React, { Fragment } from 'react';
import { Grid, Button, Box, Typography, Divider, Link } from '@mui/material';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa'
import ArticleItem from '@/components/ArticleItem';

export default function App() {
  const categories = [
    'Aljabar',
    'Geometri',
    'Kalkulus',
    'Statiska dan Peluang',
    'Matematika Diskrit',
    'Matematika Terapan'
  ]
  return (
    <Fragment>
      <Navbar />
      {/* Header Section */}
      <Hero />

      {/* New Content */}
      <Box
        sx={{
          marginTop: '20px',
          paddingX: '100px',
          borderBottom: '1px solid black',
        }}
      >
        <Grid container spacing={8}>
          <Grid item xs={7} sm={12} md={8}>
            {
              [1, 2, 3, 4, 5, 6, 7].map((i) => (
                <ArticleItem key={i} />
              ))
            }
          </Grid>

          <Grid item xs={5} sm={12} md={4} 
            style={{
              position: 'sticky',
              top: 0,
              right: 0
            }}
          >
            <Box
              sx={{
                marginBottom: '20px',
              }}
            >
              <Typography sx={{ fontSize: '16px', fontWeight: '600' }} mb={2} component="div">
                Discover more of what matters to you
              </Typography>

              {
                categories.map((category) => (
                  <Button sx={{ marginBottom: '10px', marginRight: '10px', borderRadius: '50px', backgroundColor: 'grey', fontSize: '12px', textTransform: 'none' }} key={category} variant='contained' color='primary' size='small'>{category}</Button>
                ))
              }
              <br></br>
              <Link
                component='button'
                variant="body2"
                underline='none'
                sx={{ "&:hover": { color: 'black' } }}
                style={{ paddingLeft: '5px', marginTop: '20px' }}
              >
                See more topics
              </Link>
            </Box>

            <Divider light />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '20px'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%'
                }}
              >
                <div className="social-icon" style={{ display: 'flex', gap: '20px' }}>
                  <FaYoutube style={{ cursor: 'pointer', fontSize: '24px' }} />
                  <FaInstagram style={{ cursor: 'pointer', fontSize: '24px' }} />
                  <FaTiktok style={{ cursor: 'pointer', fontSize: '24px' }} />
                </div>

                <Typography color='text.secondary' variant='body2'>
                  HikioMath &copy;2023
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  )
}