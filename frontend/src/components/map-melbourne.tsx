import { CSSProperties } from 'react';
import Map from './map';
import Text from './text';

function MapMelbourne() {
    const root: CSSProperties = {
    }

    const labelRoot: CSSProperties = {
        textAlign: 'center'
    }

    return (
        <div style={root}>
            <div>
                {Map('./maps/melbourne.svg')}
            </div>
            <div style={labelRoot}>
                {Text("Melbourne", "7vw", "3rem")}
            </div>
        </div>
    );
}

export default MapMelbourne;