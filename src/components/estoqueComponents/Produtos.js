// import axios from 'axios';
import React from 'react';
import '../../styles/Produtos.css'


function Produtos() {
  // axios.get()
  return (
    <div className="bg-produtos">
      <h2>Estoque</h2>
      <div className="content-produtos">
        <div className="produto">
          <div className="produto-header">
            <h4>Nome do Produto</h4>
          </div>
          <div className="produto-img">
            <img className="img" src="https://http2.mlstatic.com/D_NQ_NP_617873-MLB45312003402_032021-O.webp" />
          </div>
          <div className="produto-desc">
            <h5>QTDE:</h5><p>12</p>
            <h4>Ações</h4>
            <button className="button-remove">-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produtos;