import { CSSProperties } from 'react';

function Map(image: string) {
    const root: CSSProperties = {
        textAlign: 'center',
        justifyContent: 'center',
        maxWidth: '75rem',
        position: 'relative',
        margin: '0 auto'
    }

    return (
        <div style={root}>
            <img src={image}></img>
        </div>
    );
}

export default Map;