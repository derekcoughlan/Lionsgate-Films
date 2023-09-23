import React from 'react';

const AllFilms = () => {
    return (
        <div>
            <h2>All Films</h2>
            <table>
                <tr>
                    <th>Film</th>
                    <th>Release Year</th>
                    <th>Rating</th>
                    <th>Director</th>
                    <th>Genre</th>
                </tr>
                <tr>
                    <td>Step Brothers</td>
                    <td>2012</td>
                    <td>R</td>
                    <td>Adam McKay</td>
                    <td>Comedy</td>
                </tr>
            </table>
        </div>
    )
}

export default AllFilms;