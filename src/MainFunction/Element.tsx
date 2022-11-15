import { useContext } from 'react'
import { ColorPickerComponent } from '../Components/Element/ColorPicker'
import { NumberComponent } from '../Components/Element/NumberComponent'
import SelectorComponent from '../Components/Element/SelectorComponent'
import { RangeComponent } from '../Components/Element/SliderRange'
import { TextBoxComponent } from '../Components/Element/TextBoxComponent'
import { ToggleBasicExample } from '../Components/Element/Toggle'
import Main from './Main'
import { ContextValue } from '../Contexts/ContextValue'
interface IOptions {
  key: string,
  text: string
}
interface IElement {
  type: string,
  title: string,
  value: number | string,
  options: IOptions[],
  id: number,
  minValue: number,
  maxValue: number,
  fields: any
}

const Element = ({ field: { type, title, value, options, id, minValue, maxValue, fields, step,isChecked } }: any) => {
  const [element, setElements] = useContext<any>(ContextValue)
  switch (type) {
    case 'accordian':
      return (<Main sourceData={{ title, fields }} setElements={setElements} Element={element} />)
    case 'number':
      return (<NumberComponent title={title} value={value} id={id} />)
    case 'text':
      return (<TextBoxComponent title={title} value={value} id={id} />)
    case 'toggle':
      return (<ToggleBasicExample title={title} id={id} isChecked={isChecked} />)
    case 'slider':
      return (<RangeComponent title={title} value={value} minValue={minValue} maxValue={maxValue} id={id} step={step} />)
    case 'color':
      return (<ColorPickerComponent title={title} value={value} id={id} />)
    case 'dropDown':
      return (<SelectorComponent title={title} options={options} id={id} />)
    default:
      return null
  }

}


export default Element

