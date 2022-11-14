import { Card, Flex, Text } from '@tremor/react';
import { FC, ReactElement, useState } from 'react';
import '../Styles/RangeCss.css'
import { FormContext } from '../../FormContext'
import { useContext } from 'react'

export const RangeComponent: FC<any> = ({ title, id, value, minValue, maxValue, stepValue }): ReactElement => {
    // const [fontHeight, setFontHeight] = useState<number>(props.defaultValue)
    const { handleChange } = useContext<any>(FormContext)
    return (
        <>
            <Flex>
            <h5>{title}</h5>
                <div className='container'>
                    <div ><input type="range" min={minValue} max={maxValue} value={value} className='slider' onChange={(event) => handleChange(id, event)}/>
                    </div>
                    <div className='numerBox'>{value}</div>
                </div>
            </Flex>
        </>
    )
}






// component css




