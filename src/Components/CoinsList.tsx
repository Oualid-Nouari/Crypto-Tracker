import React, {FC} from 'react';
import { MyData } from '../App';


export const CoinList: FC<MyData> = (props) => {
    const {name, price, icon, symbol, priceChange1d, marketCap, updateModalState} = props
  return (
    <tr title={name} className='coin'>
        <div className='img-cnt'>
            <img src={icon} alt="Coin hasn't an icon" width="30px" />
        </div>
        <td>{symbol}</td>
        <td>${price.toFixed(2)}</td>
        <td style={{color: priceChange1d > 0 ? 'green' : 'red'}}>{priceChange1d}%</td>
        <td>${marketCap.toFixed(2)}</td>
        <button onClick={() => updateModalState(name)}>Explore more</button>
    </tr>
  );
}
