import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Listings from './components/Listings'
import ListingDetails from './components/ListingDetail';
 
function App() {
    return (
      <Router>
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
      </Routes>
    </Router>
  );
}

export default App;