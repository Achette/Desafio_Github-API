import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './routes/Homepage';
import { Home } from './routes/Homepage/Home';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Homepage />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
