import { Flex } from '@tremor/react'
import { FC, ReactElement, useState } from 'react'
import '../Styles/NumberComponent.css'
import { FormContext } from '../../FormContext'
import { useContext } from 'react'

export const NumberComponent: FC<any> = ({ title, id, value }): ReactElement => {
    const { handleChange } = useContext<any>(FormContext)
    return (
        <Flex>
            <h5>{title}</h5>
            <input type="number" value={value} placeholder='Enter your value' onChange={event => handleChange(id, event)} />
        </Flex>
    )
}

// CSS



