import { useState } from 'react';
import * as Icons from "../../node_modules/heroicons-react/build/index"
import Element from '../MainFunction/Element';
import './Accordian.css'

const Accordion = ({ title, content }: any) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="accordion-title" >
                <h4>{title}</h4>
                <div className='click' style={{ textDecoration: "bold" }} onClick={() => setIsActive(!isActive)}>{isActive ? <Icons.ChevronUp /> : <Icons.ChevronDown />}</div>
            </div>
            {isActive && <div className="accordion-content">{
                content ? content.map((field: any, i: any) => <Element key={i} field={field} />) : null
            }</div>}
        </>
    )
};
export default Accordion;