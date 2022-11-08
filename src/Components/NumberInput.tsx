import React from 'react'
import { Flex } from "@tremor/react";


const NumberInput = (props: any) => {
    return (
        <Flex>
            <h3>{props.Title}</h3>
            <input type="number" defaultValue={props.defaultValue} min={props.minValue} max={props.maxValue} step={props.stepValue} />
        </Flex>
    )
}

export default NumberInput
