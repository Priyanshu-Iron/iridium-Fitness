import React from 'react'
import { Box } from '@mui/material'

import Navbar from '../components/NavBar/Navbar'

const Home = () => {
  return (
    <Box>
      <video autoPlay muted loop id='bgVideo'>
        <source src={require('../assets/images/5320001-uhd_3840_2160_25fps.mp4')} type='video/mp4' />
      </video>
      <Navbar/>
    </Box>
  )
}

export default Home