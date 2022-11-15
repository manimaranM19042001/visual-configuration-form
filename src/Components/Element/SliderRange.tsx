import { Card, Flex, Text } from '@tremor/react';
import { FC, ReactElement, useState } from 'react';
import '../Styles/RangeCss.css'
import { FormContext } from '../../Contexts/FormContext'
import { useContext } from 'react'
interface IRange{
    title : string,
    id : number,
    value : number ,
    minValue:number,
    maxValue : number,
    step:number
}
export const RangeComponent: FC<IRange> = ({ title, id, value, minValue, maxValue, step}): ReactElement => {
    // const [fontHeight, setFontHeight] = useState<number>(props.defaultValue)
    const { handleChange } = useContext<any>(FormContext)
    return (
        <>
            <Flex>
            <h5>{title}</h5>
                <div className='container'>
                    <div ><input type="range" min={minValue} max={maxValue} value={value} className='slider' step={step} onChange={(event) => handleChange(id, event)}/>
                    </div>
                    <div className='numerBox'>{value}</div>
                </div>
            </Flex>
        </>
    )
}






// component css




