import * as React from "react";
import { FC } from "react";
import { MyData } from "../App";

const CoinModal: FC<MyData> = (props) => {
  const {
    name,
    price,
    icon,
    symbol,
    priceChange1d,
    priceChange1h,
    priceChange1w,
    marketCap,
    rank,
    volume,
    updateModalState
  } = props;
  return (
    <section>
      <small onClick={() => updateModalState('')}>x</small>
      <div className="modal-header">
        <img src={icon} alt="No icon" width="130px" />
        <div className="p-infos">
          <h1>
            {name}({symbol})
          </h1>
          <h3>Price: ${price}</h3>
        </div>
      </div>
      <ul>
        <li>
          <span>Rank</span>: {rank}
        </li>
        <li>
          <span>Volume</span>: {volume}
        </li>
        <li>
          <span>Market</span> Cap: {marketCap}{" "}
        </li>
        <li>
          <span>Price chnage 1 Hour</span>: <span style={{color: priceChange1h > 0 ? 'green' : 'red'}}>{priceChange1h}%</span>
        </li>
        <li>
          <span>Price chnage 1 Day</span>: <span style={{color: priceChange1d > 0 ? 'green' : 'red'}}>{priceChange1d}%</span>
        </li>
        <li>
          <span>Price chnage 1 Week</span>: <span style={{color: priceChange1w > 0 ? 'green' : 'red'}}>{priceChange1w}%</span>
        </li>
      </ul>
    </section>
  );
};

export default CoinModal;
