import { useState } from "react";
import "../styles/Admin.css";

const SENHA_ADMIN = "1234";

function Admin({ produtos, setProdutos }) {
  const [senha, setSenha] = useState("");
  const [logado, setLogado] = useState(false);

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState(null); // FILE
  const [categoria, setCategoria] = useState("Masculino");
  const [editandoId, setEditandoId] = useState(null);

  const totalProdutos = produtos.length;

  const categorias = produtos.reduce((acc, produto) => {
    acc[produto.categoria] = (acc[produto.categoria] || 0) + 1;
    return acc;
  }, {});

  const precoMedio =
    totalProdutos === 0
      ? 0
      : (
          produtos.reduce((soma, p) => soma + Number(p.preco), 0) /
          totalProdutos
        ).toFixed(2);

  function limparFormulario() {
    setNome("");
    setPreco("");
    setImagem(null);
    setCategoria("Masculino");
    setEditandoId(null);
  }

  async function salvarProduto(e) {
    e.preventDefault();

    if (!imagem && !editandoId) {
      alert("Selecione uma imagem");
      return;
    }

    let imageUrl = imagem;

    // Se for um arquivo novo, faz upload
    if (imagem instanceof File) {
      imageUrl = await uploadImagem(imagem);
    }

    if (editandoId) {
      const produtosAtualizados = produtos.map((p) =>
        p.id === editandoId
          ? { ...p, nome, preco, imagem: imageUrl, categoria }
          : p
      );
      setProdutos(produtosAtualizados);
    } else {
      const novoProduto = {
        id: Date.now(),
        nome,
        preco,
        imagem: imageUrl,
        categoria,
      };
      setProdutos([...produtos, novoProduto]);
    }

    limparFormulario();
  }

  function editarProduto(produto) {
    setNome(produto.nome);
    setPreco(produto.preco);
    setImagem(produto.imagem); // URL
    setCategoria(produto.categoria);
    setEditandoId(produto.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function excluirProduto(id) {
    if (!window.confirm("Deseja excluir este produto?")) return;
    setProdutos(produtos.filter((p) => p.id !== id));
  }

  if (!logado) {
    return (
      <div className="admin-login">
        <h2>Área Administrativa</h2>

        <input
          type="password"
          placeholder="Digite a senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button
          onClick={() => {
            if (senha === SENHA_ADMIN) {
              setLogado(true);
            } else {
              alert("Senha incorreta");
            }
          }}
        >
          Entrar
        </button>
      </div>
    );
  }

  return (
    <div className="admin">
      <h2>Painel Administrativo</h2>

      <div className="admin-dashboard">
        <div className="dash-card">
          <span>Total de Produtos</span>
          <strong>{totalProdutos}</strong>
        </div>

        <div className="dash-card">
          <span>Preço Médio</span>
          <strong>R$ {precoMedio}</strong>
        </div>

        {Object.keys(categorias).map((cat) => (
          <div className="dash-card" key={cat}>
            <span>{cat}</span>
            <strong>{categorias[cat]}</strong>
          </div>
        ))}
      </div>

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
          type="file"
          accept="image/*"
          onChange={(e) => setImagem(e.target.files[0])}
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

/* 🔥 UPLOAD CLOUDINARY */
async function uploadImagem(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "nextstep_upload");

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/nextstep/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();
  return data.secure_url;
}

export default Admin;
 