import { CSSProperties } from 'react';
import Text from './text';

function MapPreview(germId: number, status: string, color: string) {
    const root: CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        border: '0.2rem solid black',
        backgroundColor: 'white',
        textAlign: 'left',
    }

    const previewRoot: CSSProperties = {
        margin: '0.5rem',
        width: '10.5rem'
    }

    const labelRoot: CSSProperties = {
    }

    const imageRoot: CSSProperties = {
    }

    const image: CSSProperties = {
        width: '100%',
        height: '100%'
    }

    return (
        <div style={root}>
            <div style={previewRoot}>
                <div style={labelRoot}>
                    {Text('GERM #' + germId.toString(), '1.25rem')}
                </div>
                <div style={imageRoot}>
                    <img style={image} src={'metadata/images/' + germId.toString() + '.png'}></img>
                </div>
                <div>
                    {Text(status, '1.25rem', undefined, color)}
                </div>
            </div>
        </div>
    );
}

export default MapPreview;