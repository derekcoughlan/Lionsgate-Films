import React, { useEffect, useState } from 'react';
import AllFilms from '../components/all-films';
import SavedFilms from '../components/saved-films';

const Tables = () => {

  const [films, getFilms] = useState([]);
  const [savedFilms, getSavedFilms] = useState([]);
  const [update, setUpdate] = useState('false');

  useEffect(() => {
    fetch('/home')
      .then(res => res.json())
      .then(data => {
        getFilms(data)
      })
      .catch(err => {console.log('failed to retrieve all films')})
  }, [])

  useEffect(() => {
    fetch('/home/savedFilms')
      .then(res => res.json())
      .then(data => {
        getSavedFilms(data)
      })
      .catch(err => {console.log('failed to retrieve saved films')})
  }, [])
    
    function handleClick1(filmId){
        fetch('/home/addSaved', {
          method: 'POST',
          body: JSON.stringify({id: filmId}),
          headers: { 'Content-Type': 'application/json'}
        }).then(() => {
            fetch('/home/savedFilms')
              .then(res => res.json())
              .then(data => {
                getSavedFilms(data)
                })
              .catch(err => {console.log('failed to render list after adding saved films')})
                })
          .catch(err => console.log('failed to add saved film'))
      }

      function handleClick2(filmId){
        fetch('/home/removeSaved', {
          method: 'DELETE',
          body: JSON.stringify({id: filmId}),
          headers: { 'Content-Type': 'application/json'}
        }).then(() => {
            fetch('/home/savedFilms')
              .then(res => res.json())
              .then(data => {
                getSavedFilms(data)
                })
              .catch(err => {console.log('failed to render list after deletion of saved films')})
                })
          .catch(err => console.log('failed to add saved film'))
      }

    return (
        <div>
            <AllFilms films={films} handleClick={handleClick1} update={update} />
            <SavedFilms savedFilms={savedFilms} handleClick={handleClick2} update={update}/>
        </div>
    )
}

export default Tables;