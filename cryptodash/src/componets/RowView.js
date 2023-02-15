import './RowView.css';
import CryptoRow from './CryptoRow';

const RowView=(props) => {

    return(
        <>
        <div className='crypto-row'>
        <div className='headingCell cr-rank'>RANK</div>
        <div className='headingCell row-img'>IMAGE</div>
        <div className='headingCell cr-name'>NAME</div>
        <div className='headingCell cr-price'>PRICE</div>
        <div className='headingCell cr-1hour'>1 HOUR</div>
        <div className='headingCell cr-24hour'>24 HOUR</div>
        <div className='headingCell cr-7day'>7 DAY</div>
        <div className='headingCell cr-24volume'>VOLUME</div>
        <div className='headingCell cr-market'>MARKET CAP</div>
</div>

{
  props.coins.map((coin) => {
    return(
      <CryptoRow 
      rank={coin.market_cap_rank}
      image={coin.image}
      name={coin.name}
      symbol={coin.symbol}
      price={coin.current_price}
      oneHour={coin.price_change_percentage_1h_in_currency}
      twentyFourHour={coin.price_change_percentage_24h_in_currency}
      sevenDay={coin.price_change_percentage_7d_in_currency}
      twentyFourVolume={coin.total_volume}
      market={coin.market_cap}
      />
    )
  })
}
</>
    );
};


export default RowView;