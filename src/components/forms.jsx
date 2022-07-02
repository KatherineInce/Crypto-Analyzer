import React,{useEffect,useState} from 'react'
import styled from '@emotion/styled'
import useSelectCurrency from '../hooks/useSelectCurrency'
import {currencies} from '../data/currencies'
import Error from '../components/Error'

const InputSubmit = styled.input`
    background-color: #03AC13;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover{
        background-color:#028A0F;
        cursor: pointer;
    }
`

const forms = ({setData}) => {
    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(false);

    const [currency,SelectCurrency] = useSelectCurrency('Select a Currency',currencies)
    const [cryptoCurrency,SelectCryptos] = useSelectCurrency('Select a Crypto Currency',cryptos)

   useEffect(() => {
       const getCryptos = async() =>{
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
        const response = await fetch(url)
        const jsonResponse = await response.json()
        const arrayCryptos = jsonResponse.Data.map(cripto =>(
                {
                    id: cripto.CoinInfo.Name,
                    name: cripto.CoinInfo.FullName
                }
            )
        )
        setCryptos(arrayCryptos)
    }
       getCryptos();
   }, [])

   const handleSubmit = e =>{
       e.preventDefault();
       if(currency.length != 0 && cryptoCurrency.length != 0)
       {
        
            setError(false)
            setData({
                currency,
                cryptoCurrency
            })
       }
       else{
            setError(true)
       }
       
   }
    return (
        <div>
            {
            error && <Error text="Error: All fields are required"/>
            }
            <form
                onSubmit={handleSubmit}
            >
                <SelectCurrency/>
                <SelectCryptos/>
                <InputSubmit type="submit" value="Analyze" />
            </form>
        </div>
        
    )
}

export default forms
