import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
    margin-bottom: 20px;
`

const useSelectCurrency = (text,types) => {
    const [state,setState] = useState('');
    const SelectCurrency = () =>(
        <div>
            <Label >{text}</Label>
            <Select
                value={state}
                onChange={e=>setState(e.target.value)}
            >
                <option value="">Select...</option>
            {types.map(type=>(
                <option key={type.id} value={type.id}>{type.name}</option>
            ))}
            </Select>
        </div>
    )
    return [state,SelectCurrency]
}

export default useSelectCurrency
