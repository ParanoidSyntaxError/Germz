import React, { useEffect, useState } from 'react';
import { CSSProperties } from 'react';
import '../fonts/fonts.css';
import MapPoint from './map-point';

function Map() {
    const root: CSSProperties = {
        textAlign: 'center',
        justifyContent: 'center',
        maxWidth: '75rem',
        position: 'relative',
        margin: '0 auto'
    }

    const image: CSSProperties = {
    }

    return (
        <div style={root}>
            <img src='./maps/melbourne.svg' style={image}></img>
            {MapPoint(50, 50, 'red')}
        </div>
    );
}

export default Map;