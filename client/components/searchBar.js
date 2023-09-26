import React, { useEffect, useState } from "react";

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('')

    const submitForm = (e) => {
        e.preventDefault();
        props.searchTable(searchValue);
    }

    return (
    <div>
        <form onSubmit={submitForm}>
            <input
              type='text'
              placeholder='Search...'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
        </form>

    </div>
    )
}

export default SearchBar