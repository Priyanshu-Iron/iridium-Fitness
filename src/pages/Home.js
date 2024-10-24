import React from 'react'
import { Box } from '@mui/material'

import Navbar from '../components/NavBar/Navbar'
import Center from '../components/Center/Center'

const Home = () => {
  return (
    <Box>
      <video autoPlay muted loop id='bgVideo'>
        <source src={require('../assets/images/5320001-uhd_3840_2160_25fps.mp4')} type='video/mp4' />
      </video>
      <Navbar/>
      <Center/>
    </Box>
  )
}

export default Home