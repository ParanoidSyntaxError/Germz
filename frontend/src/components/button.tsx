import React from 'react';
import { CSSProperties } from 'react';
import Text from './text';
import './button.css';

function Button(label: string, onClick: React.MouseEventHandler | undefined = undefined, scale: number = 1, border: number = 0, backgroundColor: string = 'transparent') {
    const root: CSSProperties = {
        textAlign: 'center',
        transform: 'scale(' + scale.toString() + ')',
        cursor: 'pointer',
        padding: '0.2rem',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        userSelect: 'none'
    }

    const text: CSSProperties = {
        border: border + 'rem solid black',
        padding: '0.5rem',
        backgroundColor: backgroundColor
    }

    return (
        <div style={root} className='root' onClick={onClick}>
            <div style={text} className='text'>
                {Text(label, 1, 'pointer')}
            </div>
        </div>
    );
}

export default Button;