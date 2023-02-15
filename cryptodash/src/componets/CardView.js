import './CardView.css'
import CryptoVegas from './CryptoVegas'

const CardView= (props) => {
    return(
        <>
        {
            props.coins.map((coin) => {
              return(
                <CryptoVegas 
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
}

export default CardView;