import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navigation from './components/Navigation';


function App() {
  return (

    <BrowserRouter>
      <Navigation />
      <AppRoutes />
    </BrowserRouter>

  );
}

export default App;
