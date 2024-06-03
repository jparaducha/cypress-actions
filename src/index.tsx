import React from 'react';
import ReactDOM from 'react-dom/client';
import AvatarApp from './AvatarApp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import TrafficLight from './TrafficLight';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavBar/>
    <BrowserRouter>
    <Routes>
    <Route path="/avatar" element={<AvatarApp/>}/>
    <Route path="/" element={<TrafficLight/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);