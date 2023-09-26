import React, { useEffect, useState } from 'react';
import SearchBar from './searchBar';

const AllFilms = (props) => {
  const allFilms = props.films

  const filmList = allFilms.map((movie) => {
    return <tr key={movie.id}>
      <td>{movie.title}</td>
      <td>{movie.release}</td>
      <td>{movie.rating}</td>
      <td>{movie.director}</td>
      <td>{movie.genre}</td>
      <td><button onClick={() => {props.handleClick(movie.id)}}>Save</button></td>
    </tr>
  })

    return (
        <div>
            <h2>All Films</h2>
            <SearchBar searchTable={props.searchTable}/>
            <table>
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
            </table>
        </div>
    )
}

export default AllFilms;