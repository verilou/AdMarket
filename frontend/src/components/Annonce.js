import React, { Component } from 'react'
import UserData from '../services/UserData';

const Annonce = ({annonce}) =>
    <div>
        <h2>Project List</h2>
        <ul>
            {alert(annonce)}
            <p>{UserData.user}</p>
            {/* {annonce.map((annonce, i) =>
            <li key={i}>Name: {annonce.name}
            </li>
            )} */}
        </ul>
    </div>
export default Annonce;