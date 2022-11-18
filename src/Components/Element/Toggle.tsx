import * as React from 'react';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { Flex } from "@tremor/react";
import '../Styles/ToggleCss.css'
import { FormContext } from '../../Contexts/FormContext'
import { useContext, ReactElement, FC } from 'react'
const stackTokens: IStackTokens = { childrenGap: 1 };

interface IToggle {
    isChecked: boolean,
    id: number,
    title: string
}

export const ToggleBasicExample: FC<IToggle> = ({ isChecked, id, title }): ReactElement => {
    const { handleChange } = useContext<any>(FormContext)
    return (
        <Flex>
            <h5>{title}</h5>
            <Toggle defaultChecked={isChecked} className='classToggle' onChange={event => handleChange(id, event)} />
        </Flex>
    );
};

