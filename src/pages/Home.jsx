import { useEffect, useState } from "react";
import "../styles/Home.css"

export default function Home(){
    const [produtos, setProdutos] = useState([]);

   useEffect(() => {
    const salvos = JSON.parse(localStorage.getItem("produtos")) || [];
    setProdutos(salvos);
  }, []);


   return (
    <div className="home">
<h1 className="titulo" >Tênis Store</h1>
<p  className="subtitulo">Os melhores modelos com entrega rápida</p> 
      


      <div className="produtos-grid">
        {produtos.map(produto => (

        <div key={produto.id} className="produto-card">
  <span className="badge">Novidade</span>

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
  href={`https://wa.me/5537991241329?text=Olá! Gostei do produto *${produto.nome}* no site. Pode me passar mais informações?`}
  target="_blank"
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