import { useState } from 'react';
import { CSSProperties } from 'react';
import MapPreview from './map-preview';

function MapPoint(top: number, left: number, tokenId: number, status: string, color: string) {
    const root: CSSProperties = {
        top: top + '%',
        left: left + '%',
        boxSizing: 'border-box',
        width: '1.3%',
        height: '1.9%',
        position: 'absolute'
    }

    const pointRoot: CSSProperties = {
        border: '0.2rem solid black',
        backgroundColor: color,
        width: '100%',
        height: '100%',
    }

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };
  
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div style={root}>
            <div style={pointRoot} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
                { isHovering && (
                    MapPreview(tokenId, status, color)
                )}
            </div>
        </div>
    );
}

export default MapPoint;