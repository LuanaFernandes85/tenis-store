

import { useState } from "react";

function Admin({ produtos, setProdutos }) {
  const SENHA_ADMIN = "1234";

  const [logado, setLogado] = useState(false);
  const [senha, setSenha] = useState("");

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  function entrar() {
    if (senha === SENHA_ADMIN) {
      setLogado(true);
      setSenha("");
    } else {
      alert("Senha incorreta");
    }
  }

  function salvarProduto() {
    if (!nome || !preco || !imagem) {
      alert("Preencha todos os campos");
      return;
    }

    if (editandoId) {
      // ✏️ EDITAR
      const produtosAtualizados = produtos.map((p) =>
        p.id === editandoId
          ? { ...p, nome, preco, imagem }
          : p
      );

      setProdutos(produtosAtualizados);
      setEditandoId(null);
    } else {
      // ➕ CADASTRAR
      setProdutos([
        ...produtos,
        {
          id: Date.now(),
          nome,
          preco,
          imagem
        }
      ]);
    }

    setNome("");
    setPreco("");
    setImagem("");
  }

  function editarProduto(produto) {
    setNome(produto.nome);
    setPreco(produto.preco);
    setImagem(produto.imagem);
    setEditandoId(produto.id);
  }

  function excluirProduto(id) {
    if (confirm("Tem certeza que deseja excluir?")) {
      setProdutos(produtos.filter((p) => p.id !== id));
    }
  }

  // 🔐 LOGIN
  if (!logado) {
    return (
      <div className="formulario">
        <h2>Área Administrativa</h2>

        <input
          type="password"
          placeholder="Digite a senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button onClick={entrar}>Entrar</button>
      </div>
    );
  }

  // ✅ ADMIN
  return (

    <div className="formulario">
      <h2>{editandoId ? "Editar Produto" : "Cadastrar Produto"}</h2>

      <input
        placeholder="Nome do produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />

      <input
        placeholder="URL da imagem"
        value={imagem}
        onChange={(e) => setImagem(e.target.value)}
      />

      <button onClick={salvarProduto}>
        {editandoId ? "Salvar Alterações" : "Cadastrar Produto"}
      </button>

      <hr style={{ margin: "20px 0" }} />

      {produtos.map((produto) => (
        <div
          key={produto.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
            gap: "10px"
          }}
        >
         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img
        src={produto.imagem}
        alt={produto.nome}
        style={{
          width: "50px",
          height: "50px",
          objectFit: "contain",
          background: "#f3f3f3",
          borderRadius: "6px"
        }}
      />
      <span>{produto.nome}</span>
    </div>



          <div>
            <button onClick={() => editarProduto(produto)}>
              ✏️
            </button>

            <button onClick={() => excluirProduto(produto.id)}>
              🗑
            </button>
          </div>
        </div>
      ))}
    </div>



  );
}

export default Admin;
