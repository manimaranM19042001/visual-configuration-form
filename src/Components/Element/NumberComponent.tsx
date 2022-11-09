import { Flex } from '@tremor/react'
import { FC, ReactElement, useState } from 'react'
import '../Styles/NumberComponent.css'


export const NumberComponent: FC<any> = (props:any): ReactElement => {
    const [number, setNumber] = useState<number>(0)
    return (
        <Flex>
            <h3>{props.Title}</h3>
            <input type="number" defaultValue={props.DefaultValue} min={props.minValue} max={props.maxValue} placeholder='Enter your value' onChange={(event) => setNumber(Number(event.target.value))} />
        </Flex>
    )
}

// CSS



