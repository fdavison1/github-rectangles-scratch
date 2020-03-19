import React from 'react';

export const Rectangles = () => {

    const rectangles = () => {
        const box = [];
        for (let i = 0; i < 30; i++) {
            box.push(i + 1)
        }
        return box
    }

    const april = 30;
    
    return (
        <div>
            <div className='container'>
                <div className="box white"></div>
                <div className="box white"></div>
                {rectangles().map(rectangle => {
                    return (
                    <div className="box">{rectangle}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Rectangles;