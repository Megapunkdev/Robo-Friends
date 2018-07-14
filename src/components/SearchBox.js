import React from 'react';

const SearchBox = ({ searchChange}) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--black bg-light-green' type='search' placeholder='Chercher un robot ...' onChange={searchChange} />
        </div>
    );
}

export default SearchBox;