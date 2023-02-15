import './CryptoVegas.css';

const CryptoVegas=(props) => {

      return(
    <div className='cv-main'>
              <div className='cv-left'>
              <div><p className='cv-names'>{props.name }</p></div>
               <div><p className='cv-names'>{props.rank}</p></div>
               <div><img className='cv-img' src={props.image} alt={props.name} /> </div>
               
              </div>
              <div className='cv-right-top'>
              <div className='cv-price'>
                <p className='cv-names'> PRICE: {props.price}</p>
              </div>

              <div className='cv-changes'>
               <div className='cv-little-changes'> <p className='cv-names'>1HR:</p><p> {Math.round(props.oneHour * 100) /100 }</p></div>
                <div className='cv-little-changes'><p className='cv-names'>24HR:</p> <p>{Math.round(props.twentyFourHour * 100) /100}</p></div>
                <div className='cv-little-chnges'><p className='cv-names'>7D:</p> <p>{Math.round(props.sevenDay * 100) / 100}</p></div>
              </div>
              </div>
              <div className='cv-right-bottom'>
                <p className='cv-names'>Volume:</p> 
                <p>{props.twentyFourVolume}</p>
                <p className='cv-names'>Market Cap:</p> 
                <p>{props.market}</p>
              </div>
            </div>
      );

};

export default CryptoVegas;