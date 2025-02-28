
import React, { useState } from 'react';
import Cell from './cell';
import './Grid.css';


const Grid = () => {
    const [cells, setCells] = useState([false, false, false, false]);
    const [count, setCount] = useState(0);

    const toggleCell = (index) => {
        const newCells = [...cells];
        newCells[index] = !newCells[index];
        setCells(newCells);

        const newCount = newCells.filter(Boolean).length;
        setCount(newCount);
    }

    return (
        <div className="grid-container">
            <h2 className="count">Count: {count}</h2>
            <div className="grid">
                {cells.map((isOn, index) => (
                    <Cell key={index} isOn={isOn} toggleCell={() => toggleCell(index)} />
                ))}
            </div>
        </div>
    );
}

export default Grid;