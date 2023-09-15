import { CSSProperties } from 'react';
import NavigationBar from '../components/navigation-bar';
import Text from '../components/text';

function Soon() {
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
        marginBottom: '15vh'
    }

    return (
        <div style={root}>
            <div>
                <NavigationBar/>
            </div>
            <div style={titleRoot}>
                {Text("Coming Soon", '14vw', '7rem')}
            </div>
        </div>
    );
}

export default Soon;