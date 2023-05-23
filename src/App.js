import React, { useState } from 'react';

function App() {
  const [items, pegaItems] = useState(['Queijo', 'Leite', 'Pão']);
  const [itemNovo, pegaNovoItem] = useState('');

  const adcItem = (sr) => {
    sr.preventDefault();
    if (itemNovo !== '') {
      pegaItems([...items, itemNovo]);
      pegaNovoItem('');
    }
  };

  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <div className="lista-compras-container">
        <ul className="lista-items">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <form className="form-adc-item" onSubmit={adcItem}>
        <fieldset>
          <div className="form-group mb-3">
            <label htmlFor="item">Adicionar Novo Item na Lista:</label>
            <input
              type="text"
              className="form-control"
              id="item"
              value={itemNovo}
              onChange={(sr) => pegaNovoItem(sr.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Adicionar
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
