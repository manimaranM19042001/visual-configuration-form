import React from 'react'
import { Flex } from "@tremor/react";
import './stylesText.css'
const TextInput = (props:any) => {
  return (
    <div className='division'>
      <Flex>
            <h3>{props.Title}</h3>
            <input type="text" className='inputStyle' minLength={2} max={8}  />
        </Flex>
    </div>
  )
}

export default TextInput
