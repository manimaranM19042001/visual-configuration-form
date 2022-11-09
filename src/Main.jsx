import { Card } from '@tremor/react'
import React from 'react'
import { useState, useEffect } from 'react'
import formJSON from './dataJson.json'
import Element from './Element'


const Main = () => {
    const [element, setElements] = useState(null)
    useEffect(() => {
        setElements(formJSON[0])
    }, [])
    const { Fields, Title } = element ?? {}
    return (
        <Card maxWidth='max-w-3xl' >
            <div style={{ backgroundColor: 'powderblue', padding: '2rem', borderRadius: '0.7em' }}>
                <h2 style={{textAlign : 'center'}}>{Title}</h2>
                {Fields ? Fields.map((field, i) => <Element key={i} field={field} />) : null}
            </div>
        </Card>
    )
}

export default Main
