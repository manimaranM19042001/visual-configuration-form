import { Flex } from '@tremor/react';
import { FC, ReactElement, useState } from 'react';
import '../Styles/TextBoxComponents.css'
import { FormContext } from '../../FormContext'
import { useContext } from 'react'
const defaultValueFromJson: string = 'auto'
export const TextBoxComponent: FC<any> = ({ title, id, value }): ReactElement => {
    const [soterState, setStoreState] = useState<string>('')
    const { handleChange } = useContext<any>(FormContext)

    return (
        <Flex>
            <h3>{title}</h3>
            <input type="text" minLength={2} maxLength={8} value={value} onChange={(event) => handleChange(id, event)} />
        </Flex>

    )
}

// CSS


