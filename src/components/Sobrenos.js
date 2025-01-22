import React from "react";

export default function SobreNos() {
  return (
    <div className="sobre-nos">
      {/* Texto principal */}
      <div className="texto-sobre-nos">
        <h1>Quem Somos</h1>
        <h2>MEDK Do Brazil</h2>
        <p>
          Na <strong>MEDK Do Brazil</strong>, somos uma distribuidora de materiais odontológicos, comprometida em oferecer produtos de alta qualidade para profissionais da área.
        </p>
        <p>
          Trabalhamos com materiais certificados, garantindo segurança, eficiência e satisfação para nossos clientes em todo o Brasil.
        </p>

        {/* Lista de Diferenciais */}
        <ul className="diferenciais">
          <li><strong>Produtos de qualidade superior</strong></li>
          <li><strong>Entrega ágil e segura</strong></li>
          <li><strong>Suporte técnico especializado</strong></li>
          <li><strong>Parcerias com fornecedores confiáveis</strong></li>
        </ul>
        
        {/* Chamada para ação */}
        <p className="chamada-para-acao">
          <strong>Descubra nossa linha completa de materiais odontológicos e faça seu pedido com confiança.</strong>
        </p>
      </div>

      {/* Informações adicionais */}
      <div className="informacoes-adicionais">
        <p>
          📍 <strong>Endereço:</strong> Rua P 25 330 Quadra: 02 Lote: 08, 74550-010
        </p>
        <p>
          🏢 <strong>Empresa:</strong> MEDK DO BRASIL LTDA
        </p>
      </div>

      {/* Botão para WhatsApp */}
      <div className="whatsapp-container">
        <a 
          href="https://api.whatsapp.com/send/?phone=556239323670&text=Olá,+gostaria+de+saber+mais+sobre+os+materiais+odontológicos!&type=phone_number&app_absent=0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          Fale conosco no WhatsApp
        </a>
      </div>
    </div>
  );
}
