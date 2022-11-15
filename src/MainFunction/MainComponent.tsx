import { Card } from '@tremor/react'
import { useState, useEffect } from 'react'
import { ContextValue } from '../Contexts/ContextValue'
import formJSON from '../SourceData/dataJson.json'
import Main from './Main'
const MainComponent = () => {
    const [element, setElements] = useState<any>({})
    useEffect(() => {
        setElements(formJSON)
    }, [])
    function download(content: any, fileName: string, contentType: any) {
        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    function createFun(ele: any) {
        let newObj: any = {}
        ele.forEach((element: { fields: any; title: string | number; type: string; value: any, isChecked: any }) => {
            if (element.fields) {
                let newValue = createObject([element])
                newObj[element.title] = newValue[element.title]
            }
            else {
                if (element.type === "number" || element.type === "slider") {
                    newObj[element.title] = Number(element.value)
                }
                else {
                    newObj[element.title] = element.value
                    newObj[element.title] = element.isChecked
                }
            }
        });
        return newObj
    }
    function createObject(object: any) {
        let obj: any = {}
        for (let i of object) {
            obj[i.title] = createFun(i.fields)
        }
        return obj
    }
    function onDownload() {
        let elementValue = []
        for (let i in element) {
            elementValue.push(element[i])
        }
        download(JSON.stringify(createObject(elementValue)), "Group-A-Theme-configuraition.json", "text/plain");
    }
    return (
        <ContextValue.Provider value={[element, setElements]}>
            <Card maxWidth="max-w-3xl" >
                {
                    formJSON.map((value, index) => (
                        <Main sourceData={value} key={index} setElements={setElements} Element={element} />
                    ))
                }
                <button onClick={onDownload}> <h3>Download theme</h3></button>
            </Card>
        </ContextValue.Provider>
    )
}

export default MainComponent
