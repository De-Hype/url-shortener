import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Redirect from "./pages/Redirect";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<Redirect />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
