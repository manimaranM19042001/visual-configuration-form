import { FC, ReactElement, useState } from 'react';
import '../Styles/colorPicker.css'
import { Flex } from "@tremor/react";

export const ColorPickerComponent: FC<any> = (props: any): ReactElement => {
    const [color, setColor] = useState<string>(props.Color)
    return (
        <Flex>
            <h3>{props.Title}</h3>
            <div className='colorPicker'>
                <div className='inputField'>
                    <input type="color" className='color' value={color} onChange={(event) => setColor(event.target.value)} />
                </div>
                <div className='hexaCode'>{color}</div>
            </div>
        </Flex>
    )
}



// css



