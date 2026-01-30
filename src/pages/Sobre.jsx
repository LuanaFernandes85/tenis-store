import "../styles/Home.css";

function Sobre() {
  return (
    <div className="home">
      <h1 className="titulo">Sobre a NextStep</h1>
      <p className="subtitulo">Mais do que um tênis. Um estilo de vida.</p>

      <div className="sobre-container">
        <p>
          A <strong>NextStep</strong> nasceu com o objetivo de levar moda urbana,
          conforto e atitude para quem vive em movimento.
        </p>

        <p>
          Trabalhamos com modelos selecionados, focando em qualidade,
          estilo e um atendimento direto e transparente.
        </p>

        <p>
          Nosso compromisso é ajudar você a dar o próximo passo com
          confiança, autenticidade e personalidade.
        </p>

        <div className="sobre-destaques">
          <div>
            <h3>🚀 Missão</h3>
            <p>Oferecer produtos estilosos com entrega rápida e confiança.</p>
          </div>

          <div>
            <h3>👟 Estilo</h3>
            <p>Moda urbana pensada para o dia a dia.</p>
          </div>

          <div>
            <h3>💬 Atendimento</h3>
            <p>Contato direto e simples pelo WhatsApp.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
