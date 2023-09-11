import React, { useEffect, useState } from 'react';
import { CSSProperties } from 'react';
import '../fonts/fonts.css';

function MapPreview(germId: number, color: string) {
    const root: CSSProperties = {

    }

    const previewRoot: CSSProperties = {
        width: '2rem',
        height: '3rem',
        border: '0.2rem solid black'
    }

    return (
        <div style={root}>
            <div style={previewRoot}>
                
            </div>
        </div>
    );
}

export default MapPreview;