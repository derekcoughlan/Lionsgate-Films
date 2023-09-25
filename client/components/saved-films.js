import React, { useEffect, useState } from 'react';

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
          <td><button onClick={() => {props.handleClick(movie.id)}}>Remove</button></td>
        </tr>
    })

    return (
        <div>
          <h2>Saved Films</h2>
          <table>
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
          </table>
        </div>
    )
}

export default SavedFilms;