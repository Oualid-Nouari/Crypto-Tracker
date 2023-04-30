import React, { ChangeEvent, FC, useEffect, useState, FormEvent } from "react";
import axios from "axios";
import "./App.css";
import CoinModal from "./Components/coinModal";
import { CoinList } from "./Components/CoinsList";
export interface MyData {
  name: string;
  price: number;
  icon: string;
  availableSupply: number;
  exp: Array<String>;
  marketCap: number;
  priceBtc: number;
  priceChange1d: number;
  priceChange1h: number;
  priceChange1w: number;
  rank: number;
  symbol: string;
  volume: number;
  website: string;
  modal: string | null;
  updateModalState: (coinName: string) => void;
}

const App: FC = () => {
  const [data, setData] = useState<MyData[]>([]);
  const [userInput, setUserInput] = useState<string | null>(null);
  const [modal, setModal] = useState<string | null>(null)
  const updateModalState = (coinName: string) => {
    setModal(coinName)
  }
  console.log(modal)
  useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((res) => setData(res.data.coins));
  }, []);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  return (
    <div className="App">
      <div className="container">
        <table cellPadding={0} cellSpacing={0}>
          <caption>
            <h1>Crypto Checker</h1>
            <form onSubmit={handleSubmit} className="search">
              <input
                onChange={handleChange}
                type="text"
                placeholder="Search a coin"
              />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </caption>
          <th>
            <td>Icon</td>
            <td>Symbol</td>
            <td>Price</td>
            <td>Changes / Day</td>
            <td>Market Cap</td>
            <td>Action</td>
          </th>
          {data.filter((coin) => {
            return userInput && userInput.trim() !== '' ? coin.name.toLowerCase().includes(userInput.toLowerCase()) : coin
          }).map((coin, index) => {
            return <CoinList key={index} {...coin} updateModalState={updateModalState} />;
          })}
        </table>
        {modal !== null ? data.map((coin, index) => modal === coin.name && <CoinModal key={index} {...coin} updateModalState={updateModalState} />) : ""}
      </div>
    </div>
  );
};
export default App;
