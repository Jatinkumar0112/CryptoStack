import { createContext, useLayoutEffect, useState } from "react";



// create context object
export const CryptoContext = createContext({});

//create the provider component
export const CryptoProvider = ({children}) => {
    const [cryptoData, setCryptoData] = useState();
    const [searchData, setsearchData] = useState();
    const [coinSearch, setCoinSearch] = useState("");
// eslint-disable-next-line
    const [currency, setCurrency] = useState("usd")

    // eslint-disable-next-line
    // const getCoinData = async()=>{
    //     try{
    //         const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinSearch}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`).then(res =>res.json()).then(json => json)
    //         // console.log(data)
    //         setCryptoData(data)

    //     }catch(error){
    //         console.console.log(error);
    //     }
    // }
    const getCryptoData = async()=>{
        try{
            console.log(currency)
            const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`).then(res =>res.json()).then(json => json)
            // console.log(data)
            setCryptoData(data)

        }catch(error){
            console.console.log(error);
        }
    }
    
    const getSearchResult = async(query)=>{
        try{
            const data = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`).then(res =>res.json()).then(json => json)
            console.log(data)
            setsearchData(data.coins)
            

        }catch(error){
            console.console.log(error);
        }
    }
    
    useLayoutEffect(() =>{
        getCryptoData()
        // eslint-disable-next-line
    },[coinSearch,currency])
    return(
        <CryptoContext.Provider value={{cryptoData,searchData,getSearchResult,setCoinSearch,setCurrency, currency}}>
            {children}
        </CryptoContext.Provider>
    )
}