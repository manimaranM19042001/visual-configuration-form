import React from 'react'
import Accordion from '../Components/Accordion'
import { ToggleBasicExample } from '../Components/Toggle'
import AllVisualProperty from '../Property Components/AllVisualProperty'
import myJson from '../Axis.json'


const General = () => {
  console.log(myJson)
  return (
    <div>
      <h1>This is General</h1>
      <AllVisualProperty />
    </div>
  )
}

export default General
