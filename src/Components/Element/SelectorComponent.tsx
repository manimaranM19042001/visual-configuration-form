import { Flex } from '@tremor/react'
import React from 'react'
import { FC, ReactElement, useState } from 'react'
import '../Styles/SelectorComponent.css'
import { FormContext } from '../../Contexts/FormContext'
import { useContext } from 'react'
interface IOptions {
    key: string,
    text: string
}
interface ISelector {
    options: IOptions[],
    title: string,
    id: number,
}
const SelectorComponent = ({ options, title, id }: ISelector) => {
    const { handleChange } = useContext<any>(FormContext)

    return (
        <Flex>
            <h5>{title}</h5>
            <select onChange={event => handleChange(id, event)}>
                {options.length > 0 && options.map((option: any, i: number) =>
                    <option value={option.key} key={i}>
                        {option.text}
                    </option>
                )}
            </select>
        </Flex>

    )
}


export default SelectorComponent