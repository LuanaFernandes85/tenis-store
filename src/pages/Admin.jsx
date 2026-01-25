import { useState } from "react";
import "../styles/Admin.css";

function Admin({ produtos, setProdutos }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [categoria, setCategoria] = useState("Masculino");
  const [editandoId, setEditandoId] = useState(null);

  function limparFormulario() {
    setNome("");
    setPreco("");
    setImagem("");
    setCategoria("Masculino");
    setEditandoId(null);
  }

  function salvarProduto(e) {
    e.preventDefault();

    if (editandoId) {
      // EDITAR
      const produtosAtualizados = produtos.map((p) =>
        p.id === editandoId
          ? { ...p, nome, preco, imagem, categoria }
          : p
      );
      setProdutos(produtosAtualizados);
    } else {
      // CADASTRAR
      const novoProduto = {
        id: Date.now(),
        nome,
        preco,
        imagem,
        categoria,
      };
      setProdutos([...produtos, novoProduto]);
    }

    limparFormulario();
  }

  function editarProduto(produto) {
    setNome(produto.nome);
    setPreco(produto.preco);
    setImagem(produto.imagem);
    setCategoria(produto.categoria);
    setEditandoId(produto.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function excluirProduto(id) {
    if (!window.confirm("Deseja excluir este produto?")) return;
    setProdutos(produtos.filter((p) => p.id !== id));
  }

  return (
    <div className="admin">
      <h2>Painel Administrativo</h2>

      <form className="admin-form" onSubmit={salvarProduto}>
        <input
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          placeholder="Preço (ex: 299.90)"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />

        <input
          placeholder="URL da imagem"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          required
        />

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option>Masculino</option>
          <option>Feminino</option>
          <option>Infantil</option>
          <option>Acessórios</option>
        </select>

        <button type="submit">
          {editandoId ? "Salvar Alterações" : "Cadastrar Produto"}
        </button>

        {editandoId && (
          <button
            type="button"
            className="cancelar"
            onClick={limparFormulario}
          >
            Cancelar edição
          </button>
        )}
      </form>

      <div className="admin-lista">
        {produtos.map((produto) => (
          <div key={produto.id} className="admin-item">
            <img src={produto.imagem} alt={produto.nome} />

            <div className="admin-info">
              <strong>{produto.nome}</strong>
              <span>R$ {Number(produto.preco).toFixed(2)}</span>
              <small>{produto.categoria}</small>
            </div>

            <div className="admin-acoes">
              <button onClick={() => editarProduto(produto)}>✏️</button>
              <button onClick={() => excluirProduto(produto.id)}>🗑</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;