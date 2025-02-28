import React from 'react';

const cell = ({ isOn, toggleCell }) => {
    return (
        <div
            onClick={toggleCell}
            style={
                {
                    width: "100px",
                    height: "100px",
                    border: "1px solid grey",
                    backgroundColor: isOn ? "black" : "white",
                    cursor: "pointer",
                }
            }
        />
    );
}

export default cell;