import styled from '@emotion/styled'
const ResponseDiv = styled.div`
    color: #fff;
    font-family:'Lato',sans-serif;
    display:flex;
    align-items:center;
    gap:1.5rem;
    margin-top: 30px;
`
const Image = styled.img`
    display:block;
    width:120px;
`

const Text = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`
const MainText = styled.p`
    font-size: 30px;
    span{
        font-weight: 700;
    }
`
const Result = ({resultData}) => {
    const{PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = resultData
    return (
        <ResponseDiv>
            <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Image Crypto" />
            <div>
                <MainText>Current price is <span>{PRICE}</span></MainText>
                <Text>Highest price of the day is <span>{HIGHDAY}</span></Text>
                <Text>Lowest price of the day is <span>{LOWDAY}</span></Text>
                <Text>Last 24 hours fluctuation <span>{CHANGEPCT24HOUR}</span></Text>
                <Text>Last Update <span>{LASTUPDATE}</span></Text>
            </div>
            </ResponseDiv>
    )
}

export default Result
