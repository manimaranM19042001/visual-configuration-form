import React from 'react'
import * as Icons from '../../../node_modules/heroicons-react/build/index'
import './Import.css'
const Import = () => {
    return (
        <div>
            <div className="image-upload">
                <button >Import</button>
                <input id="file-input" type="file" />
            </div>
        </div>
    )
}

export default Import