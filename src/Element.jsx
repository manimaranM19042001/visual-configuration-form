import React from 'react'
import { FC, ReactElement, useState, useContext } from 'react'
import Accordion from './Accodian/Accordion'
import { ColorPickerComponent } from './Components/Element/ColorPicker'
import { NumberComponent } from './Components/Element/NumberComponent'
import SelectorComponent from './Components/Element/SelectorComponent'
import { RangeComponent } from './Components/Element/SliderRange'
import { TextBoxComponent } from './Components/Element/TextBoxComponent'
import { ToggleBasicExample } from './Components/Element/Toggle'
import Main from './Main'
import MainComponent from './MainComponent'
import { ContextValue } from './ContextValue'


const Element = ({ field: { type, title, value, options, id, minValue, maxValue, Fields, Title} }) => {
  const [element, setElements] = useContext(ContextValue)
  switch (type) {
    case 'Accordian':
      return (<Main sourceData={{ Title, Fields }}  setElements={setElements} Element={element}/>)
    case 'number':
      return (<NumberComponent title={title} value={value} id={id} />)
    case 'text':
      return (<TextBoxComponent title={title} value={value} id={id} />)
    case 'toggle':
      return (<ToggleBasicExample title={title} id={id} value={value} />)
    case 'slider':
      return (<RangeComponent title={title} value={value} minValue={minValue} maxValue={maxValue} id={id} />)
    case 'color':
      return (<ColorPickerComponent title={title} value={value} id={id} />)
    case 'selector':
      return (<SelectorComponent title={title} options={options} value={value} id={id} />)
    default:
      return null
  }

}


export default Element

