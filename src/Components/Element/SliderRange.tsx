import { Card, Flex, Text } from '@tremor/react';
import { FC, ReactElement, useState } from 'react';
import '../Styles/RangeCss.css'


export const RangeComponent: FC<any> = (props:any): ReactElement => {
    const [fontHeight, setFontHeight] = useState<number>(props.defaultValue)
    return (
        <>
                <Flex>
                    <h3>{props.Title}</h3>
                    <div className='container'>
                        <div ><input type="range" min={props.minValue} max={props.maxValue} value={fontHeight} className='slider' onChange={(event) => setFontHeight(Number(event.target.value))} step={props.stepValue}/>
                        </div>
                        <div className='numerBox'>{fontHeight}</div>
                    </div>
                </Flex>
        </>
    )
}






// component css




