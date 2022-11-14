import { Card } from '@tremor/react'
import React from 'react'
import { useState, useEffect } from 'react'
import formJSON from './dataJson.json'
import Element from './Element'
import { FormContext } from './FormContext'
import Accordion from './Accodian/Accordion'
import './Main.css'
const Main = ({ sourceData, setElements, Element, indexValue }) => {


    const { Fields, Title  } = sourceData ?? {}
    const handleChange = (ide, event) => {
        const newElement = { ...sourceData }
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
        });
        setElements({ ...Element })
    }

    return (
        <FormContext.Provider value={{ handleChange }}>
            <div className='division'>
                <Accordion title={Title} content={Fields} />
            </div>
        </FormContext.Provider>
    )
}

export default Main
