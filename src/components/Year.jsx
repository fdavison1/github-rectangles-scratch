import React from 'react';
import { April, May, June, July, August, September, October, December, November } from './Months'

export const Year = () => {
    const marchDays = () => {
        const box = [];
        for (let i = 19; i < 31; i++) {
            box.push(i + 1)
        }
        return box
    }
    return (
        <div className='display'>
            <div>
                March
            <div className='container'>
                    <div className="box white"></div>
                    <div className="box white"></div>
                    <div className="box" id='eighteen'>18</div>
                    <div className="box" id='nineteen'>19</div>
                    {marchDays().map(rectangle => {
                        return (
                            <div className="box">{rectangle}</div>
                        )
                    })}
                </div>
            </div>
            <April />
            <May />
            <June />
            <July />
            <August />
            <September />
            <October />
            <November />
            <December />
        </div>
    )
}

export default Year;