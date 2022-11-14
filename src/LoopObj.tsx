import { ReactElement, FC, useState, useEffect } from "react"
import '@tremor/react/dist/esm/tremor.css';
import jsonData from './inputData.json'
import { Component } from "./Component";

import './App.css'


const ComponentBox: FC = (): ReactElement => {

    const arrOfObject: any = jsonData

    return (
        <>
            <Component arrOfObject={arrOfObject} />
        </>
    )
}

export default ComponentBox;