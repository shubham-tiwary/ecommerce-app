import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element = {<Home />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
