import { Flex } from '@tremor/react'
import React from 'react'
import { FC, ReactElement, useState } from 'react'
import '../Styles/SelectorComponent.css'
import { FormContext } from '../../FormContext'
import { useContext } from 'react'

const SelectorComponent = ({ options, title, id, value }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <Flex>
            <h3>{title}</h3>
            <select onChange={event => handleChange(id, event)}>
                {options.length > 0 && options.map((option, i) =>
                    <option  value={option.option_value} key={i}>
                        {option.option_value}
                    </option>
                )}
            </select>
        </Flex>

    )
}


export default SelectorComponent