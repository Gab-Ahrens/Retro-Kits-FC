import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { ShowItemDetails } from "./components/ItemDetails";
import { Navbar } from "./components/Navbar";
import { AdminPage } from "./pages/Admin";
import { Carrinho } from "./pages/Carrinho";
import { Clubes } from "./pages/Clubes";
import { Home } from "./pages/Home";
import { SearchResult } from "./pages/SearchResult";
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
        <Route path="/selecoes" element={<Selecoes />}/>
        <Route path="/carrinho" element={<Carrinho />}/>
        <Route path="/details/:id" element={<ShowItemDetails />} />
        <Route path="/search/:searchresults" element={<SearchResult />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
