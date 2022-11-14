import { Card } from '@tremor/react'
import { useState, useEffect } from 'react'
import formJSON from './dataJson.json'
import Main from './Main'
const MainComponent = () => {
    const [element, setElements] = useState(null)
    useEffect(() => {
        setElements(formJSON)
    }, [])
    function download(content, fileName, contentType) {
        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }

    function onDownload() {
        let elementValue = []
        for (let i in element) {
            elementValue.push(element[i])
        }
        download(JSON.stringify(elementValue), "Group-A-Theme-configuraition.json", "text/plain");
    }
    return (
        <Card maxWidth='max-w-3xl' >
            {
                formJSON.map((value, index) => (
                    <Main sourceData={value} key={index} indexValue={index} setElements={setElements} Element={element} />
                ))
            }
            <button onClick={onDownload}> <h3>Download theme</h3></button>
        </Card>
    )
}

export default MainComponent
