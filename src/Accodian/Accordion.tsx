import React, { useState } from 'react';
import Element from '../Element';

const Accordion = ({ title, content }: any) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div className='click'>{isActive ? '🔼' : '🔽'}</div>
            </div>
            {isActive && <div className="accordion-content">{
                content ? content.map((field: any, i: number) => <Element key={i} field={field} />) : null
            }</div>}
        </div>
    );
};

export default Accordion;