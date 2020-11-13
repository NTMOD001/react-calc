import React, { Component } from 'react';

const Pad = ({ onPadClick, name }) => {

    let handleClick = () => { onPadClick(name) }
    return (
        
        <button className="button" onClick={handleClick}>{name}</button>

    )
}

export default Pad;