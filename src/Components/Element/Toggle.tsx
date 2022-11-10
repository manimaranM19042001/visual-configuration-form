import * as React from 'react';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { Flex } from "@tremor/react";
import '../Styles/ToggleCss.css'
import { FormContext } from '../../FormContext'
import { useContext } from 'react'
const stackTokens: IStackTokens = { childrenGap: 1 };
type IToggle = {
    Title: string,
    onTextValue: string,
    offTextValue: string,
    isChecked: boolean,
    changeFunction: Function
}
export const ToggleBasicExample: React.FunctionComponent<any> = ({ value, id, title }) => {
    const { handleChange } = useContext<any>(FormContext)
    return (
        <Flex>
            <h3>{title}</h3>
            <div className='toggleDiv'>
                <Toggle defaultChecked={value} onText='ON' offText='Off' className='classToggle' onChange={event => handleChange(id, event)} />
            </div>
        </Flex>
    );
};

