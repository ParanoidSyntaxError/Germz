import React from 'react';
import { CSSProperties } from 'react';
import Button from './button';
import Grid from '@mui/material/Unstable_Grid2';

function NavigationBar() {
    const root: CSSProperties = {
        textAlign: 'center',
        padding: '0 1rem'
    }

    return (
        <div style={root}>
            <Grid container columnSpacing={6} justifyContent="center">
                <Grid>
                    {Button("HOME", undefined, 1.2)}
                </Grid>
                <Grid>
                    {Button("VISIT", undefined, 1.2)}               
                </Grid>
                <Grid>
                    {Button("ABOUT", undefined, 1.2)}             
                </Grid>
            </Grid>
        </div>
    );
}

export default NavigationBar;