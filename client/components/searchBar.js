import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const SearchBar = ({ searchTable }) => {
    const [searchValue, setSearchValue] = useState('')

    const submitForm = (e) => {
        e.preventDefault();
        searchTable(searchValue);
    }

    return (
    <div>
        <Form className='border rounded' onChange={submitForm}>
            <InputGroup>
              <Form.Control
                type='text'
                placeholder='Search Film...'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              /> 
            </InputGroup>
        </Form>

    </div>
    )
}

export default SearchBar