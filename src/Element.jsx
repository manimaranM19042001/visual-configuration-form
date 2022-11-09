import React from 'react'
import { FC, ReactElement, useState } from 'react'
import { ColorPickerComponent } from './Components/Element/ColorPicker'
import { NumberComponent } from './Components/Element/NumberComponent'
import SelectorComponent from './Components/Element/SelectorComponent'
import { RangeComponent } from './Components/Element/SliderRange'
import { TextBoxComponent } from './Components/Element/TextBoxComponent'
import { ToggleBasicExample } from './Components/Element/Toggle'

const Element = ({ field: { type , title , value , options} }) => {
  switch (type) {
    case 'number':
      return (<NumberComponent Title={title} />)
    case 'text' :
      return (<TextBoxComponent Title={title}/>)
    case 'toggle':
      return (<ToggleBasicExample Title={title}/>)
    case 'slider':
      return (<RangeComponent Title={title} defaultValue={value}/>)
    case 'color':
      return (<ColorPickerComponent Title={title} Color={value}/>)
    case 'selector':
      return (<SelectorComponent Title={title} options={options}/>)
    default:
      return null
  }

}


export default Element

