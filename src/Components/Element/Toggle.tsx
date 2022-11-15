import * as React from 'react';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { Flex } from "@tremor/react";
import '../Styles/ToggleCss.css'
import { FormContext } from '../../Contexts/FormContext'
import { useContext } from 'react'
const stackTokens: IStackTokens = { childrenGap: 1 };

interface IToggle{
    isChecked : boolean,
    id : number,
    title : string
}

export const ToggleBasicExample: React.FunctionComponent<IToggle> = ({ isChecked, id, title }) => {
    const { handleChange } = useContext<any>(FormContext)
    return (
        <Flex>
            <h5>{title}</h5>
            <div className='toggleDiv'>
                <Toggle defaultChecked={isChecked} onText='ON' offText='Off' className='classToggle' onChange={event => handleChange(id, event)} />
            </div>
        </Flex>
    );
};

