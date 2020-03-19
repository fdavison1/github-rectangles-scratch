import React from 'react';

export const Rectangles = () => {

    const rectangles = () => {
        const box = [];
        for (let i = 0; i < 30; i++) {
            box.push(i + 1)
        }
        return box
    }

    return (
        <div>
            <p>April</p>
            <div className='container'>
                <div className="box"></div>
                <div className="box"></div>
                {rectangles().map(rectangle => {
                    return (
                    <div className="box">{rectangle}</div>
                    )
                })}
            <div className="box">1</div>
            <div className="box">2</div>
            <div className="box">3</div>
            </div>
        </div>
    )
}

export default Rectangles;