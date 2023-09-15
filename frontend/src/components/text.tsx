import { CSSProperties } from 'react';
import '../styles/fonts.css';

function Text(text: string, minSize: string, maxSize: string = minSize, color: string = 'black', cursor: string = 'default') {
    const root: CSSProperties = {
        fontFamily: 'Germz',
        fontSize: 'min(' + minSize + ',' + maxSize + ')',
        filter: 'url(#crispify)',
        wordSpacing: '1rem',
        cursor: cursor,
        color: color
    }

    return (
        <div style={root}>
            {text}
        </div>
    );
}

export default Text;