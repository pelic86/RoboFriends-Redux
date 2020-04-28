import React from 'react';


// just make a Scroll into a Component which wrap with the CardList component

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px' }}> 
            {props.children}
        </div>
    )
}

export default Scroll;