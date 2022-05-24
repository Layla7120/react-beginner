import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = event => {
    setMoney(event.target.value);
  };
  return (
    <div>
      <h1> The Coins! {loading ? "" : `(${coins.length})`} </h1>
      {/* <input onChange={onChange}>my money</input> */}
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map(coin => (
            <option>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
              {money}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
