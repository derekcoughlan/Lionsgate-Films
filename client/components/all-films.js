import React, { useEffect, useState } from 'react';

const AllFilms = () => {

  const [films, getFilms] = useState([]);

  useEffect(() => {
    fetch('/home')
      .then(res => res.json())
      .then(data => {
        getFilms(data)
      })
      .catch(err => {console.log('failed to retrieve all films')})
  }, [])

//   function handleClick(){
//     fetch('', {

//     })
//   }

  const filmList = films.map((movie, index) => {
    return <tr key={index}>
      <td>{movie.title}</td>
      <td>{movie.release}</td>
      <td>{movie.rating}</td>
      <td>{movie.director}</td>
      <td>{movie.genre}</td>
      <td><button>Save</button></td>
    </tr>
  })

    return (
        <div>
            <h2>All Films</h2>
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