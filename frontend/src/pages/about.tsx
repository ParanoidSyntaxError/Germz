import { CSSProperties } from 'react';
import NavigationBar from '../components/navigation-bar';
import Text from '../components/text';

function About() {
    const root: CSSProperties = {
        position: 'fixed',
        width: '90vw',
        padding: '0 5vw',
        margin: '0',
        top: '0',
        left: '0',
        bottom: '0',
        overflowY: 'scroll',
        overflowX: 'hidden',
        paddingTop: '1rem',
        paddingBottom: '4rem'
    }

    const titleRoot: CSSProperties = {
        textAlign: 'center',
        marginTop: '7vh',
    }

    const bodyRoot: CSSProperties = {
        textAlign: 'center',
        marginTop: '5vh',
    }

    return (
        <div style={root}>
            <div>
                <NavigationBar/>
            </div>
            <div style={titleRoot}>
                {Text("Street Art NFT", '10vw', '4rem')}
            </div>
            <div style={bodyRoot}>
                {Text("Germz are onchain nfts which represent IRL street art", '4vw', '1.5rem')}
            </div>
        </div>
    );
}

export default About;