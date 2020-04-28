import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--gray bg-lightest-gray' 
                type='search' 
                placeholder='search your robots...'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;