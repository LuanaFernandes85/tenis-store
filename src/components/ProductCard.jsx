import "./ProductCard.css"

export default function ProductCard({ tenis }) {
  return (
    <div className="card">
      <img src={tenis.imagem} alt={tenis.nome} />
      <h3>{tenis.nome}</h3>
      <p className="preco">R$ {tenis.preco}</p>

      <a
        href={`https://wa.me/5599999999999?text=Olá, tenho interesse no tênis ${tenis.nome}`}
        target="_blank"
        rel="noreferrer"
        className="btn"
      >
        Comprar no WhatsApp
      </a>
    </div>
  )
}