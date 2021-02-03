import React, { Fragment }  from 'react'

const Search = () => {
    return (
        <Fragment>
            <p className='large'>Search</p>
            <input type="submit" className="btn btn-primary" value="Milton"/>
            <input type="submit" className="btn btn-primary" value="Newstead"/>
            <input type="submit" className="btn btn-primary" value="West End"/>
        </Fragment>
    )
}

export default Search
