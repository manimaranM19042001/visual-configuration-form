import { Flex } from '@tremor/react'
import React from 'react'
import { FC, ReactElement, useState } from 'react'
import '../Styles/SelectorComponent.css'

const SelectorComponent = ({ options, Title }) => {

    return (
        <Flex>
            <h3>{Title}</h3>
            <select >
                <option>Open the option</option>
                {options.length > 0 && options.map((option, i) =>
                    <option value={option.option_value} key={i}>
                        {option.option_value}
                    </option>
                )}
            </select>
        </Flex>

    )
}


export default SelectorComponent