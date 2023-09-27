import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('')

    const submitForm = (e) => {
        e.preventDefault();
        props.searchTable(searchValue);
    }

    return (
    <div>
        <Form className='border rounded' onSubmit={submitForm}>
            <InputGroup>
              <Form.Control
                type='text'
                placeholder='Search...'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              /> 
            </InputGroup>
        </Form>

    </div>
    )
}

export default SearchBar