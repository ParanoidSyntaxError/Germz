import { CSSProperties } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Button from './button';
import Text from './text';

function Mint() {
    const root: CSSProperties = {
    }

    const imageRoot: CSSProperties = {
        maxWidth: '20rem',
        width: '90vw',
    }

    const image: CSSProperties = {
        border: 'thick solid black',
    }

    const textRoot: CSSProperties = {
        paddingBottom: '0.8rem'
    }

    const buttonRoot: CSSProperties = {
        paddingLeft: '1rem',
        width: '10rem'
    };

    return (
        <div style={root}>
            <Grid container columnSpacing={2} rowSpacing={2} justifyContent='center'>
                <Grid>
                    <div style={imageRoot}>
                        <img style={image} src='./metadata/svgs/0.svg'></img>
                    </div>
                </Grid>
                <Grid>
                    <div style={textRoot}>
                        {Text("GERM #00", '3rem')}
                    </div>
                    <div style={textRoot}>
                        {Text("COORDINATES", '1rem')}
                    </div>
                    <div style={textRoot}>
                        {Text("SPECIES", '1rem')}
                    </div>
                    <div style={textRoot}>
                        {Text("NAME", '1rem')}
                    </div>
                    <div style={buttonRoot}>
                        {Button("MINT", undefined, 1.25, 0.2, 'lightgreen')}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Mint;