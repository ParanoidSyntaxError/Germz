import { CSSProperties } from 'react';
import Text from './text';

function Title(label: string) {
    const root: CSSProperties = {
        textAlign: 'center',
    }

    return (
        <div style={root}>
            {Text(label, '17vw', '7rem')}
        </div>
    );
}

export default Title;