import { useState} from "react";
import "../styles/Home.css"
import ProdutoCard from "../components/ProductCard"

function Loja({ produtos }) {
const [filtro, setFiltro] = useState("Todos");



  const produtosFiltrados =
    filtro === "Todos"
      ? produtos
      : produtos.filter(
          (produto) => produto.categoria === filtro
      );
  return (
    <div className="home">
      <h1 className="titulo">NextStep</h1>
      <p className="subtitulo">Os melhores modelos com entrega rápida</p>

      {/* CATEGORIAS */}
      <div className="filtro">
      {["Todos", "Masculino", "Feminino", "Infatil", "Acessórios"].map(
        (item) => (
          <button
          key={item}
          className={filtro === item ? "ativo" : ""}
          onClick={() => setFiltro(item)}
          >
            {item}
          </button>
        )
      )}
          
        
      </div>

      <div className="produtos-grid">
        {produtosFiltrados.length === 0 && (
          <p style={{ textAlign: "center", width: "100%" }}>
            Nenhum produto encontrado
          </p>
        )}

        {produtosFiltrados.map((produto) => (
          <div key={produto.id} className="produto-card">
            <div className="produto-img">
              <img src={produto.imagem} alt={produto.nome} />
            </div>

            <div className="produto-info">
              <h3>{produto.nome}</h3>

              <p className="preco">
                R$ {Number(produto.preco).toFixed(2)}
              </p>

              <a
                className="btn-whatsapp"
                href={`https://wa.me/5537991241329?text=Olá, tenho interesse no produto ${produto.nome}`}
                target="_blank"
                rel="noreferrer"
              >
                Comprar no WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loja;
