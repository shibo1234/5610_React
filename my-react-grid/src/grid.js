
import React, { useState } from 'react';
import Cell from './cell';


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
        <div style={{ textAlign: "center" }}>
        <h2>Count: {count}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 100px)", gap: "1px" }}>
          {cells.map((isOn, index) => (
            <Cell key={index} isOn={isOn} toggleCell={() => toggleCell(index)} />
          ))}
        </div>
      </div>
    );
}

export default Grid;