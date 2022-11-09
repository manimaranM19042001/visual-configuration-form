import * as React from 'react';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { Flex } from "@tremor/react";
import '../Styles/ToggleCss.css'
const stackTokens: IStackTokens = { childrenGap: 1 };
type IToggle={
    Title :string,
    onTextValue : string,
    offTextValue : string,
    isChecked:boolean,
    changeFunction:Function
}
export const ToggleBasicExample: React.FunctionComponent<any> = (props:any) => {
    // function _onChange(ev: React.MouseEvent<HTMLElement>, checked?: boolean) {
    //     console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
    //     return checked
    // }
    return (
        <Flex>
            <h3>{props.Title}</h3>
            <div className='toggleDiv'>
            <Toggle  defaultChecked={props.Checking} onText={props.onTextValue} offText={props.offTextValue} className='classToggle' onChange={props.changeFunction} />
            </div>
        </Flex>
    );
};

