import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { BASE_URL } from "../../constants/url"
import { goToPlaylistTrack } from "../../router/cortinator"
import { Container, ContainerPlaylist } from "./styled"

import { FiDelete } from "react-icons/fi"
import GlobalContext from "../../global/GlobalContext"

import { toast } from 'react-toastify';

export const Playlist = () => {

    const { state, requests} = useContext(GlobalContext)

    const history = useHistory()

    useEffect(() => {

        requests.getPlaylist()

    }, [requests.getPlaylist])

    const onClickPlayListTrack = (id) => {
        goToPlaylistTrack(history, id)
    }

    
    const deletePlaylist = (id) => {
        axios.delete(`${BASE_URL}/playlists/${id}`, {

            headers: {
                Authorization: "guilherme-amaral-marzo"
            }
        })
            .then((res) => {
                toast.success("Playlist excluida", {
                    theme: "colored"
                })        
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (

        <Container>
            <h1>Playlists</h1>

            <ContainerPlaylist>
                {state.playlist.map(playlist => {
                    return (
                        <div key={playlist.id}>
                            <button onClick={() => onClickPlayListTrack(playlist.id)}>{playlist.name}</button>
                            <button
                                className="ButtonDelete"
                                onClick={() => deletePlaylist(playlist.id)}
                            >
                                <p><FiDelete /></p>
                            </button>
                        </div>
                    )
                })}
            </ContainerPlaylist>
        </Container>
    )
}

export default Playlist