import React, { useEffect, useState } from 'react';
import SearchBar from './searchBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const AllFilms = (props) => {
  const allFilms = props.films

  const filmList = allFilms.map((movie) => {
    return <tr key={movie.id}>
      <td>{movie.title}</td>
      <td>{movie.release}</td>
      <td>{movie.rating}</td>
      <td>{movie.director}</td>
      <td>{movie.genre}</td>
      <td><Button variant="outline-secondary" onClick={() => {props.handleClick(movie.id)}}>Save</Button></td>
    </tr>
  })

    return (
      <>
        <Container>
          <Row>
            <Col>
              <h2 className='primary'>All Films</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <SearchBar searchTable={props.searchTable}/>
            </Col>
          </Row>
          <Row>
            <Col>
            <Table striped border hover className="shadow-lg text-center" variant="light">
                <thead>
                  <tr>
                      <th>Film</th>
                      <th>Release Year</th>
                      <th>Rating</th>
                      <th>Director</th>
                      <th>Genre</th>
                      <th>Save</th>
                  </tr>
                </thead>
                <tbody>
                  {filmList}
                </tbody>
            </Table>
            </Col>
          </Row>
            
        </Container>
      </>
    )
}

export default AllFilms;