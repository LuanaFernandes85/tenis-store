import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Footer from "./components/Footer";

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
      <header className="topo">
        <div className="topo-container">
          <span className="logo">Sua Marca</span>

        
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Loja produtos={produtos} />} />
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
