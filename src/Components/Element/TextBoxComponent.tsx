// Text Area input

import { Flex } from '@tremor/react';
import { FC, ReactElement, useState } from 'react';
import '../Styles/TextBoxComponents.css'
const defaultValueFromJson: string = 'auto'
export const TextBoxComponent: FC<any> = (props: any): ReactElement => {
    const [soterState, setStoreState] = useState<string>('')
    return (
        <Flex>
            <h3>{props.Title}</h3>
            <input type="text" minLength={2} maxLength={8} defaultValue={props.DefaultValue} onChange={(event) => setStoreState(event?.target.value)} />
        </Flex>

    )
}

// CSS


