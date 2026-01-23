import { useState, useEffect } from "react";
import "../styles/admin.css";

export default function Admin() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const salvos = JSON.parse(localStorage.getItem("produtos")) || [];
    setProdutos(salvos);
  }, []);

  function cadastrarProduto(e) {
    e.preventDefault();

    const novo = {
      id: Date.now(),
      nome,
      preco,
      imagem
    };

    const lista = [...produtos, novo];
    setProdutos(lista);
    localStorage.setItem("produtos", JSON.stringify(lista));

    setNome("");
    setPreco("");
    setImagem("");
  }

  function excluirProduto(id) {
    const lista = produtos.filter(p => p.id !== id);
    setProdutos(lista);
    localStorage.setItem("produtos", JSON.stringify(lista));
  }

  return (
    <div className="admin-page">
      <h2>Cadastrar Produto</h2>

      <form className="admin-form" onSubmit={cadastrarProduto}>
      <input
  type="text"
  placeholder="Nome do produto"
  value={nome}
  onChange={e => setNome(e.target.value)}
  required
/>

<input
  type="number"
  inputMode="decimal"
  placeholder="Preço"
  value={preco}
  onChange={e => setPreco(e.target.value)}
  required
/>

<input
  type="url"
  placeholder="URL da imagem"
  value={imagem}
  onChange={e => setImagem(e.target.value)}
  required
/>

        <button type="submit">Cadastrar Produto</button>
      </form>

      <div className="admin-list">
        {produtos.map(produto => (
          <div key={produto.id} className="admin-item">
            <img src={produto.imagem} alt={produto.nome} />
            <span>{produto.nome}</span>

            <div className="admin-actions">
              <button onClick={() => excluirProduto(produto.id)}>🗑</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
