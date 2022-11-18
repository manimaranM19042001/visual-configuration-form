import { Flex } from '@tremor/react';
import { FC, ReactElement, useState } from 'react';
import '../Styles/TextBoxComponents.css'
import { FormContext } from '../../Contexts/FormContext'
import { useContext } from 'react'
interface ITextBox{
    title : string,
    id : number,
    value: string|number
}
export const TextBoxComponent: FC<ITextBox> = ({ title, id, value }): ReactElement => {
    const [soterState, setStoreState] = useState<string>('')
    const { handleChange } = useContext<any>(FormContext)

    return (
        <Flex justifyContent={"justify-evenly"}>
            <h5>{title}</h5>
            <input type="text" minLength={2} maxLength={8} value={value} onChange={(event) => handleChange(id, event)} />
        </Flex>

    )
}

// CSS


