import React, { useState, useCallback } from 'react';

import './App.css';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);

  const handleLog = useCallback(() => {
    console.log("Licznik:", count);
  }, [count]);

  const [products, setProducts] = useState(["Jabłko", "Gruszka", "Banan"]);

  const removeProduct = useCallback((item) => {
    setProducts((prev) => prev.filter((p) => p !== item));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Zad 1</h3>
        <a>Przycisk</a>
        <div>
          <button onClick={() => console.log("Kliknięto przycisk!!!")}>
            Kliknij mnie
          </button>
        </div>

        <h3>Zad 2, 3</h3>
        <a>Licznik:</a>
        <div>
          <button onClick={() => setCount((c) => c + 1)}>Zwiększ: {count}</button>
          <Counter onLog={handleLog} />
        </div>

        <h3>Zad 4</h3>
        <a>Produkty:</a>
        <div>
          {products.map((product) => (
            <div key={product}>
              {product}{" "}
              <button onClick={() => removeProduct(product)}>Usuń</button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;