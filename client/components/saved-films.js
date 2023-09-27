import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const SavedFilms = (props) => {
    const savedFilms = props.savedFilms;
    //console.log('savedFilms list: ', savedFilms)

    const savedFilmsList = savedFilms.map((movie, index) => {
        return <tr key={index}>
          <td>{movie.title}</td>
          <td>{movie.release}</td>
          <td>{movie.rating}</td>
          <td>{movie.director}</td>
          <td>{movie.genre}</td>
          <td><Button variant='outline-secondary' onClick={() => {props.handleClick(movie.id)}}>Remove</Button></td>
        </tr>
    })

    return (
        <Container>
          <Row>
            <Col className='my-3'>
              <h3>Saved Films</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped border hover className='text-center shadow'>
                <thead>
                    <tr>
                        <th>Film</th>
                        <th>Release Year</th>
                        <th>Rating</th>
                        <th>Director</th>
                        <th>Genre</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {savedFilmsList}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
    )
}

export default SavedFilms;