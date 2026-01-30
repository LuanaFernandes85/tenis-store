import { useState } from "react";
import "../styles/Home.css";

function Loja({ produtos }) {
  const [filtro, setFiltro] = useState("Todos");

  const produtosFiltrados =
    filtro === "Todos"
      ? produtos
      : produtos.filter(
          (produto) => produto.categoria === filtro
        );

  return (
    <div className="container">
      {/* HERO */}
      <section className="hero">
        <h1>NextStep</h1>
        <p>Os melhores modelos com entrega rápida</p>
      </section>

      {/* FILTROS */}
      <div className="filtros">
        {["Todos", "Masculino", "Feminino", "Infantil", "Acessórios"].map(
          (cat) => (
            <button
              key={cat}
              className={filtro === cat ? "ativo" : ""}
              onClick={() => setFiltro(cat)}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* PRODUTOS */}
      <div className="produtos-grid">
        {produtosFiltrados.length === 0 && (
          <p className="vazio">Nenhum produto nesta categoria</p>
        )}

        {/* ✅ GRID QUE ESTAVA FALTANDO */}
        <div className="produtos">
          {produtosFiltrados.map((produto) => (
            <div className="produto-card" key={produto.id}>
              <div className="produto-img">
                <span className="badge-categoria">{produto.categoria}</span>
                <img src={produto.imagem} alt={produto.nome} />
              </div>

              <h3>{produto.nome}</h3>
              <span className="preco">R$ {produto.preco}</span>

              <a
                className="btn-whats"
                href={`https://wa.me/55SEUNUMEROAQUI?text=Tenho interesse no ${produto.nome}`}
                target="_blank"
                rel="noreferrer"
              >
                Comprar no WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loja;
