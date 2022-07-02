import { useState,useEffect } from 'react'
import styled from '@emotion/styled'
import Forms from './components/forms'
import Result from './components/Result'
import Spinner from './components/spinner'

import imgCrypto from './img/imagen-criptos.png'


const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color:#fff;
  text-align:center;
  font-weight:700;
  margin-top:100px;
  margin-bottom: 50px;
  font-size:34px;
  &::after{
    content:'';
    width: 100px;
    height: 6px;
    background-color: #fff;
    display: block;
    margin: 10px auto 0 auto;
  }
`
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gag: 2rem;
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto;
  display: block;
  ;
  @media (max-width: 992px) {
    display: none;
    
  }
`

function App() {
  const [data,setData] = useState({})
  const [resultData, setResultData] =useState({})
  const [loading, setLoading] =useState(false)


  useEffect(() => {
    if(Object.keys(data).length > 0)
    {
      const getInformation = async() =>{
        setLoading(true)
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${data.cryptoCurrency}&tsyms=${data.currency}`
        const response = await fetch(url)
        const jsonResponse = await response.json()
        setResultData(jsonResponse.DISPLAY[data.cryptoCurrency][data.currency])
        setLoading(false)
      }
      getInformation()
    }
    
  }, [data])
  return (
    <Container>
        <Image src={imgCrypto}
          alt="images cryptos"
        /> 
        <div>
          <Heading>Crypto Currency Analyzer</Heading>
          <Forms setData={setData}/>
          {loading && <Spinner/>}
          {!loading && Object.keys(resultData).length > 0 &&
            <Result resultData={resultData}/>
          }
        </div>

    </Container>
    
  )
}

export default App
