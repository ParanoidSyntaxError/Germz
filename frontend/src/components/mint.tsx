import React, { useEffect, useState } from 'react';
import { CSSProperties } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Button from './button';
import Text from './text';
import { ethers } from 'ethers';
import Map from './map';
import '../fonts/fonts.css';

function Mint() {
    const root: CSSProperties = {
    }

    const imageRoot: CSSProperties = {
        width: '17rem',
        height: '17rem',
        backgroundColor: 'black',
    }

    const image: CSSProperties = {
        padding: '0.5rem'
    }

    const textRoot: CSSProperties = {
        paddingBottom: '0.8rem'
    }

    const buttonRoot: CSSProperties = {
        paddingLeft: '1rem',
        width: '10rem'
    };

    const mapRoot: CSSProperties = {

    };

    return (
        <div style={root}>
            <Grid container columnSpacing={2} rowSpacing={2} justifyContent='center'>
                <Grid>
                    <div style={imageRoot}>
                        <img style={image} src='./images/germz/germ00.svg'></img>
                    </div>
                </Grid>
                <Grid>
                    <div style={textRoot}>
                        {Text("GERM #00", 3)}
                    </div>
                    <div style={textRoot}>
                        {Text("COORDINATES", 1)}
                    </div>
                    <div style={textRoot}>
                        {Text("SPECIES", 1)}
                    </div>
                    <div style={textRoot}>
                        {Text("NAME", 1)}
                    </div>
                    <div style={buttonRoot}>
                        {Button("MINT", undefined, 1.25, 0.2, 'lightgreen')}
                    </div>
                </Grid>
            </Grid>

            <div style={mapRoot}>
                {Map()}
            </div>
        </div>
    );
}

export default Mint;