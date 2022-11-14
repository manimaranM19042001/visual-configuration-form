import { FC, ReactElement, useState } from 'react';
import '../Styles/colorPicker.css'
import { Flex } from "@tremor/react";
import { FormContext } from '../../FormContext'
import { useContext } from 'react'

export const ColorPickerComponent: FC<any> = ({ title, value, id }): ReactElement => {
    const { handleChange } = useContext<any>(FormContext)

    return (
        <Flex>
            <h5>{title}</h5>
            <div className='colorPicker'>
                <div className='inputField'>
                    <input type="color" className='color' value={value} onChange={(event) => handleChange(id, event)} />
                </div>
                <div className='hexaCode'>{value}</div>
            </div>
        </Flex>
    )
}



// css



