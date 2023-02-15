import {useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

import Footer from './componets/Footer';
import Layout from './componets/Layout';
import Navbar from './componets/Navbar';
import CryptoRow from './componets/CryptoRow';
//import data from './data.js';
import CryptoVegas from './componets/CryptoVegas';
import RowView from './componets/RowView';
import CardView from './componets/CardView';


function App() {

  const [ compact, setCompact]= useState(null);
  const [ data, setData]= useState(null);

  const cryptoUrl= "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";

  
 

  useEffect( () => {

    function handleResize() {
      let width=window.innerWidth;
        if (width <768) {
          setCompact(true);
      } else {
        setCompact(false);
      }
    }
      console.log(compact)

      const getPrices= async () =>{
        const response= await axios.get(cryptoUrl);
        setData(response.data)
      };
    
      getPrices();
    

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [compact] );



if(!data) {
    return(
      <div>
        <p>We are currently experiencing delays, thank you for your patients. </p>
      </div>
    );
}

  return (
          <Layout>
            <Navbar/>
            <div className='cr-container'>
            
            { compact ? (<CardView  coins={data}/>) : (<RowView coins={data}/>) }
            
            </div>
            
            <Footer/>
          </Layout>
  );
}

export default App;
