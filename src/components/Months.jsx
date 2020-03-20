import React from 'react'

const thirty = () => {
    const box = [];
    for (let i = 0; i < 30; i++) {
        box.push(i + 1)
    }
    return box
}

const thirtyone = () => {
    const box = [];
    for (let i = 0; i < 31; i++) {
        box.push(i + 1)
    }
    return box
}

export const April = () => {
    return (
        <div>
            April
            <div className='container'>
                <div className="box white"></div>
                <div className="box white"></div>
                {thirty().map(rectangle => {
                    return (
                        <div className="box">{rectangle}</div>
                    )
                })}
            </div>
        </div>)
}

export const May = () => {
    return (
        <div>
            May
            <div className='container'>
                <div className="box white"></div>
                <div className="box white"></div>
                <div className="box white"></div>
                <div className="box white"></div>
                {thirtyone().map(rectangle => {
                    return (
                        <div className="box">{rectangle}</div>
                    )
                })}
            </div>
        </div>
    )
}