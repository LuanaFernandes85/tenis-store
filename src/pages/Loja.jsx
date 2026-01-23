
import "../styles/Home.css";

function Loja({ produtos }) {
  return (
    <div className="home">
      <h1 className="titulo">Tênis Store</h1>
      <p className="subtitulo">Os melhores modelos com entrega rápida</p>

      <div className="produtos-grid">
     {produtos.length === 0 ? (
  <div className="sem-produtos">
    <h2>🛒 Nenhum produto disponível</h2>
    <p className="sem-produtos">Em breve teremos novidades para você!</p>
  </div>
) : (
  produtos.map((produto) => (
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
  ))
)}

      </div>
    </div>
  );
}

export default Loja;
