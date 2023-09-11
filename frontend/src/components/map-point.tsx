import React, { useEffect, useState } from 'react';
import { CSSProperties } from 'react';
import '../fonts/fonts.css';

function MapPoint(top: number, left: number, color: string) {
    const root: CSSProperties = {
        top: top + '%',
        left: left + '%',
        boxSizing: 'border-box',
        width: '1.3%',
        height: '1.9%',
        position: 'absolute'
    }

    const pointRoot: CSSProperties = {
        border: '0.15rem solid black',
        backgroundColor: color,
        width: '100%',
        height: '100%'
    }

    return (
        <div style={root}>
            <div style={pointRoot}></div>
        </div>
    );
}

export default MapPoint;