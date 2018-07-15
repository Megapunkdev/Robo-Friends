import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', borderTop: '1px solid black', borderBottom: '1px solid black', height: '70vh', backgroundColor: 'rgba(255,255,255,.5)' }}>
            {props.children}
        </div>
    );
}

export default Scroll;
