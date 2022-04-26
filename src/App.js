import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AdminPage } from "./pages/Admin";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/admin" element={<AdminPage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
