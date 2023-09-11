import React from 'react';
import { CSSProperties } from 'react';

function Text(text: string, minSize: string, maxSize: string = minSize, cursor: string = 'default') {
    const root: CSSProperties = {
        fontFamily: 'Germz',
        fontSize: 'min(' + minSize + ',' + maxSize + ')',
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