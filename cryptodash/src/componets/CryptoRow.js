import './CryptoRow.css';

const CryptoRow= (props) => {

    let onehrstyle, tfstyle, sdstyle;
    if(props.oneHour < 0) onehrstyle= {color:'red'}; else onehrstyle = {color: 'black'};
    if(props.twentyFourHour < 0) tfstyle= {color:'red'}; else tfstyle = {color: 'black'};
    if(props.sevenDay < 0) sdstyle= {color:'red'}; else sdstyle = {color: 'black'};
    return(

    <div className='cr-container'>
         
        <div className='crypto-row'>
                <div className='cr-rank'>{props.rank}</div>
                <img className='row-img' src={props.image} alt={props.name}/>
                <div className='cr-name'>{props.name}  {props.symbol}</div>
                <div className='cr-price'> $ {props.price}</div>
                <div className='cr-1hour'style={onehrstyle}> {Math.round(props.oneHour * 100) /100 } %</div>
                <div className='cr-24hour' style={tfstyle}> {Math.round(props.twentyFourHour * 100) /100 } %</div>
                <div className='cr-7day' style={sdstyle}> {Math.round(props.sevenDay * 100) / 100} %</div>
                <div className='cr-24volume'> $ {props.twentyFourVolume}</div>
                <div className='cr-market'> $ {props.market}</div>
        </div>
    </div>
    );
}

export default CryptoRow;