import React, { CSSProperties } from 'react';
import Button from './button';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
    const root: CSSProperties = {
        textAlign: 'center',
        padding: '0 1rem'
    }

    const navigate = useNavigate(); 

    return (
        <div style={root}>
            <Grid container columnSpacing={6} justifyContent="center">
                <Grid>
                    {Button("HOME", () => {navigate("/")}, 1.2)}
                </Grid>
                <Grid>
                    {Button("VISIT", () => {navigate("/visit")}, 1.2)}               
                </Grid>
                <Grid>
                    {Button("ABOUT", () => {navigate("/about")}, 1.2)}             
                </Grid>
            </Grid>
        </div>
    );
}

export default NavigationBar;