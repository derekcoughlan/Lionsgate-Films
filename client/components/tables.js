import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import AllFilms from './all-films';
import SavedFilms from './saved-films';

const Tables = () => {
  const navigate = useNavigate();

  const [films, getFilms] = useState([]);
  const [savedFilms, getSavedFilms] = useState([]);

  function getAllFilms(){
    fetch('/home')
      .then(res => res.json())
      .then(data => {
        console.log('data recieved: ', data)
        if (data.err){
          
        }
        getFilms(data)
      })
      .catch(err => {console.log('failed to retrieve all films')})
  }

  function getAllSavedFilms(){
    fetch('/home/savedFilms')
      .then(res => res.json())
      .then(data => {
        getSavedFilms(data)
      })
      .catch(err => {console.log('failed to retrieve saved films')})
  }

  useEffect(() => {
    getAllFilms();
    getAllSavedFilms();
  }, [])
    
    function addSavedFilm(filmId){
        fetch('/home/addSaved', {
          method: 'POST',
          body: JSON.stringify({id: filmId}),
          headers: { 'Content-Type': 'application/json'}
        }).then(() => {
            getAllSavedFilms();
                })
          .catch(err => console.log('failed to add saved film'))
      }

      function removeSavedFilm(filmId){
        fetch('/home/removeSaved', {
          method: 'DELETE',
          body: JSON.stringify({id: filmId}),
          headers: { 'Content-Type': 'application/json'}
        }).then(() => {
            getAllSavedFilms();
                })
          .catch(err => console.log('failed to add saved film'))
      }

      function searchTable(newSearchValue){
        if (newSearchValue !== ''){
            const filteredFilms = [];
            films.forEach(movie => {
                if (movie.title.startsWith(newSearchValue.toUpperCase())){
                    filteredFilms.push(movie);
                }
            })
            getFilms(filteredFilms);
        }
        else{
            getAllFilms();
        }
      }

    return (
        <div>
            <AllFilms films={films} addSavedFilm={addSavedFilm} searchTable={searchTable} />
            <SavedFilms savedFilms={savedFilms} removeSavedFilm={removeSavedFilm} />
        </div>
    )
}

export default Tables;