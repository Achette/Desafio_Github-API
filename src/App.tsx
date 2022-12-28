import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./routes/Homepage";
import { Home } from "./routes/Homepage/Home";
import { Start } from "./routes/Homepage/Start";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Homepage />}>
          <Route index element={<Home />} />
          <Route path="start/" element={<Start />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
