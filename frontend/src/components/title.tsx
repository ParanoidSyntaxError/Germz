import React from 'react';
import { CSSProperties } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Text from './text';

function Title() {
    const root: CSSProperties = {
        textAlign: 'center',
    }

    return (
        <div style={root}>
            {Text("GERMZ WORLD", '17vw', '7rem')}
        </div>
    );
}

export default Title;