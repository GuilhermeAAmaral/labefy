import React, { useState } from 'react'
import GlobalContext from './GlobalContext'

import axios from 'axios'
import { BASE_URL } from '../constants/url'


const GlobalState = (props) => {

    const [playlist, setPlayList] = useState([])

    const getPlaylist = () => {
        axios.get(`${BASE_URL}/playlists`, {

            headers: {
                Authorization: "guilherme-amaral-marzo"
            }
        })
        .then((res) => {
            setPlayList(res.data.result.list)     
        })
        .catch((err) => {
            console.log(err)
        })
    } 

    const state = {playlist, setPlayList}
    const setters = {}
    const requests = {getPlaylist}

    return (

        <GlobalContext.Provider value={{state, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState