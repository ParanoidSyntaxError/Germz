import React from 'react';
import { CSSProperties } from 'react';
import NavigationBar from './components/navigation-bar';
import Title from './components/title';
import Mint from './components/mint';

function Home(state: any) {
    const root: CSSProperties = {
        position: 'fixed',
        width: '90vw',
        padding: '0 5vw',
        margin: '0',
        top: '0',
        left: '0',
        bottom: '0',
        overflowY: 'scroll',
        overflowX: 'hidden'
    }

    const navigationBarRoot: CSSProperties = {
        marginTop: '1rem'
    }

    const titleRoot: CSSProperties = {
        marginTop: '7vh',
        marginBottom: '15vh'
    }

    console.log(state);

    return (
        <div style={root}>
            <div style={navigationBarRoot}>
                <NavigationBar/>
            </div>
            <div style={titleRoot}>
                <Title/>
            </div>
            <div>
                <Mint/>
            </div>
        </div>
    );
}

export default Home;