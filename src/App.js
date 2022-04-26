import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AdminPage } from "./pages/Admin";
import { Carrinho } from "./pages/Carrinho";
import { Clubes } from "./pages/Clubes";
import { Home } from "./pages/Home";
import { Selecoes } from "./pages/Selecoes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/admin" element={<AdminPage />}/>
        <Route path="/clubes" element={<Clubes />}/>
        <Route path="/seleçoes" element={<Selecoes />}/>
        <Route path="/carrinho" element={<Carrinho />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
