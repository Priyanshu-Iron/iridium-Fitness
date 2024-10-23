import React from "react";
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import './App.css'
import Home from "./pages/Home";

const App = () => {
    return (
        <Box>
            <Routes>
                <Route path="/" element={<Home/>}/> 
            </Routes>
        </Box>
    )
}

export default App