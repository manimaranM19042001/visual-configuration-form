import * as React from 'react';
import { Slider, IStackTokens, Stack, IStackStyles } from '@fluentui/react';
import { Flex } from "@tremor/react";
const stackStyles: Partial<IStackStyles> = { root: { maxWidth: 300 } };
const stackTokens: IStackTokens = { childrenGap: 20 };
const sliderAriaValueText = (value: number) => `${value} percent`;
const sliderValueFormat = (value: number) => `${value}%`;

export const SliderBasicExample: React.FunctionComponent<any> = (props :any) => {
    const [sliderValue, setSliderValue] = React.useState(0);
    const sliderOnChange = (value: number) => setSliderValue(value);
    return (
        <Flex>
            <h3>{props.Title}</h3>
            <Slider label={props.label} min={props.minValue} max={props.maxValue} step={props.stepValue} defaultValue={props.defaultValue} showValue snapToStep />
        </Flex>
    );
};
