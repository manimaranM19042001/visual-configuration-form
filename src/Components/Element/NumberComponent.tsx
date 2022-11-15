import { Flex } from '@tremor/react'
import { FC, ReactElement, useState } from 'react'
import '../Styles/NumberComponent.css'
import { FormContext } from '../../Contexts/FormContext'
import { useContext } from 'react'
interface INumber{
    title : string,
    value : number,
    id : number
}
export const NumberComponent: FC<INumber> = ({ title, id, value }): ReactElement => {
    const { handleChange } = useContext<any>(FormContext)
    return (
        <Flex>
            <h5>{title}</h5>
            <input type="number" value={value} placeholder='Enter your value' onChange={event => handleChange(id, event)} />
        </Flex>
    )
}

// CSS



