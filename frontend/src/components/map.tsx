import React, { useEffect, useState } from 'react';
import { CSSProperties } from 'react';
import '../fonts/fonts.css';

function Map() {
    const root: CSSProperties = {
        textAlign: 'center',
        justifyContent: 'center'
    }

    const image: CSSProperties = {
        maxWidth: '75rem',
    }

    return (
        <div style={root}>
            <img src='./images/maps/melbourne.svg' style={image}></img>
        </div>
    );
}

export default Map;