import React from 'react';
import {April, May, June, July, August, September, October, December, November} from './Months'

export const Rectangles = () => {

    const rectangles = () => {
        const box = [];
        for (let i = 0; i < 30; i++) {
            box.push(i + 1)
        }
        return box
    }
    
    return (
        <div className='display'>

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

export default Rectangles;