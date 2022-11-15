import { FormContext } from '../Contexts/FormContext'
import Accordion from '../Accodian/Accordion'
import { ISourceData , IOptionProps } from '../EnumsInterfacesTypes/EnumsInterfacesTypes';
import './Main.css'
interface IFields {
    value?: number | string | boolean;
    id: number;
    type?: string;
    isChecked?: boolean
}
interface IMainElement{
    sourceData:ISourceData,
    setElements:Function,
    Element : ISourceData[]
}

const Main = ({ sourceData, setElements, Element }: IMainElement) => {


    const { fields, title } = sourceData ?? {}
    const handleChange = (ide: number, event: any) => {
        const newElement:any = { ...sourceData }
        newElement.fields.forEach((field: IFields) => {
            const { id, type } = field;
            if (ide === id) {
                switch (type) {
                    case 'toggle':
                        field['isChecked'] = !field.value;
                        break
                    default:
                        field['value'] = event.target.value
                        break
                }
            }
        });
        setElements({ ...Element })
    }

    return (
        <FormContext.Provider value={{ handleChange }}>
            <div className='division'>
                <Accordion title={title} content={fields} />
            </div>
        </FormContext.Provider>
    )
}

export default Main
