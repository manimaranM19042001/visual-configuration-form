import { ReactElement, FC, useState, useEffect } from "react"
import '@tremor/react/dist/esm/tremor.css';
import jsonData from './jsonData.json'

// import './App.css'
import { RecursionComponent } from "./component";


const NewApp: FC= ():ReactElement=> {
  
  const  arrOfObject:any = jsonData

  return (
    <>
    <RecursionComponent arrOfObject = {arrOfObject}/>
    </>
  )
}

export default NewApp;