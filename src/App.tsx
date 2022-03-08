import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  LinearProgress,
  Typography,
  Modal,
  Box,
  Snackbar,
  Alert
} from "@mui/material";
import { Route, Router } from 'react-router-dom';
import history from './history';
import Footer from './pages/footer';
import Header from './pages/header';
import Home from './pages/home';

function App() {
  return <Box className={`container`}>
    <Header/>
    <Router history={history}>
      <Route exact path='/' component={Home} />
    </Router>
    <Footer/>
  </Box>
}

export default App;
