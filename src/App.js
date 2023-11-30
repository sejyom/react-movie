import { useState, useEffect } from "react"; 

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json()) //text 타입으로 반환된 값을 json으로 파싱
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? 
        <strong>Loading...</strong> : 
        <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
    }  
    </div>
  );
}

export default App;