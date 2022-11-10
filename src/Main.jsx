import { Card } from '@tremor/react'
import React from 'react'
import { useState, useEffect } from 'react'
import formJSON from './dataJson.json'
import Element from './Element'
import { FormContext } from './FormContext'

const Main = () => {
    const [element, setElements] = useState(null)
    useEffect(() => {
        setElements(formJSON[0])
    }, [])
    const { Fields, Title } = element ?? {}
    const handleChange = (ide, event) => {
        const newElement = { ...element }
        newElement.Fields.forEach(field => {
            const { id, value, type } = field;
            if (ide === id) {
                switch (type) {
                    case 'toggle':
                        field['value'] = !field.value;
                        break
                    default:
                        field['value'] = event.target.value
                        break
                }
            }
            setElements(newElement)
        });
    }
    function download(content, fileName, contentType) {
        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }

    function onDownload() {
        download(JSON.stringify([element]), "Group-A-Theme-configuraition.json", "text/plain");
    }
    return (
        <FormContext.Provider value={{ handleChange }}>
            <Card maxWidth='max-w-3xl' >
                <div style={{ backgroundColor: 'powderblue', padding: '2rem', borderRadius: '0.7em' }}>
                    <h2 style={{ textAlign: 'center' }}>{Title}</h2>
                    {Fields ? Fields.map((field, i) => <Element key={i} field={field} />) : null}
                    <button onClick={onDownload}> <h3>Download theme</h3></button>
                </div>
            </Card>

        </FormContext.Provider>
    )
}

export default Main
