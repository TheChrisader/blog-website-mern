import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Create from "./Pages/Create/Create";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="single" element={<Single />} />
          <Route path="create" element={<Create />} />
          {/* <Settings /> */}
          {/* <Login /> */}
          {/* <Register /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
