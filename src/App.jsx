import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Footer from "./components/Footer";
import Sobre from "./pages/Sobre";
import Loja from "./pages/Loja";
import Admin from "./pages/Admin";

import "./App.css";

function App() {
  const [produtos, setProdutos] = useState(() => {
    const dados = localStorage.getItem("produtos");
    return dados ? JSON.parse(dados) : [];
  });

  useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }, [produtos]);

  return (
    <BrowserRouter>
      {/* TOPO */}
      <header className="topo">
        <div className="topo-container">
          <span className="logo">NextStep</span>

          {/* NÃO usar className aqui */}
          <nav>
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
          </nav>
        </div>
      </header>

      {/* ROTAS */}
      <Routes>
        <Route path="/" element={<Loja produtos={produtos} />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route
          path="/admin"
          element={<Admin produtos={produtos} setProdutos={setProdutos} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;