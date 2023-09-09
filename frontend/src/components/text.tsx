import React from 'react';
import { CSSProperties } from 'react';

function Text(text: string, size: number, cursor: string = 'default') {
    const root: CSSProperties = {
        fontFamily: 'Germz',
        fontSize: size + 'rem',
        filter: 'url(#crispify)',
        wordSpacing: '1rem',
        cursor: cursor
    }

    return (
        <div style={root}>
            {text}
        </div>
    );
}

export default Text;