import "./ProductCard.css"

function ProdutoCard({ produto }) {
  return (
    <div className="produto-card">
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
  );
}

export default ProdutoCard;
