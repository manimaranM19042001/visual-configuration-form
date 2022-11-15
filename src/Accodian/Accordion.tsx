import { useState } from 'react';
import Element from '../MainFunction/Element';
import './Accordian.css'
const Accordion = ({ title, content }:any) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <h4>{title}</h4>
                <div className='click'>{isActive ? '🔼' : '🔽'}</div>
            </div>
            {isActive && <div className="accordion-content">{
                content ? content.map((field:any, i:any) => <Element key={i} field={field} />) : null
            }</div>}
        </div>
    )
};

export default Accordion;