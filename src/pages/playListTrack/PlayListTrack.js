import { Container, ContainerPlaylist, ContainerAddPlaylistTrack, NoMusic } from "./styled"
import { BASE_URL } from '../../constants/url'

import React, { useState, useEffect, useContext } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

import { FiDelete } from "react-icons/fi"

import Modal from 'react-modal'
import GlobalContext from "../../global/GlobalContext"

import { toast } from 'react-toastify'


export const PlayListTrack = () => {

    const { state } = useContext(GlobalContext)

    const [inputName, setInputName] = useState("")
    const [inputArtist, setInputArtist] = useState("")
    const [inputUrl, setInputUrl] = useState("")

    const [tracks, setTracks] = useState([])

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const params = useParams()

    const getPlaylistTrack = () => {

        const body = {
            name: inputName,
            artist: inputArtist,
            url: inputUrl
        }

        axios.post(`${BASE_URL}/playlists/${params.id}/tracks`, body, {

            headers: {
                Authorization: "guilherme-amaral-marzo"
            }
        })
            .then((res) => {
                toast.success("Música adicionada", {
                    theme: "colored"
                }) 
                setInputName("")
                setInputArtist("")
                setInputUrl("")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {

        const getTrackList = () => {
            axios.get(`${BASE_URL}/playlists/${params.id}/tracks`, {

                headers: {
                    Authorization: "guilherme-amaral-marzo"
                }
            })
                .then((res) => {
                    setTracks(res.data.result.tracks)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        getTrackList()

    }, [getPlaylistTrack])

    
    const deleteTrack = (id) => {

        axios.delete(`${BASE_URL}/playlists/${params.id}/tracks/${id}`, {

            headers: {
                Authorization: "guilherme-amaral-marzo"
            }
        })

            .then((res) => {
                toast.success('Música excluida', {
                    theme: "colored"
                }) 
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const namePlaylist = state.playlist.filter ((name) => {
        return name.id === params.id
    })

    return (

        <Container>
            <div>
                {namePlaylist.map (name => {
                    return <h1>{name.name}</h1>
                })}
                <button className="button-modal" onClick={handleOpenModal}>Adicionar +</button>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <button
                    onClick={handleCloseModal}
                    className="react-modal-close">
                    X
                </button>

                <ContainerAddPlaylistTrack>
                    <h1>Adicionar música</h1>
                    <input
                        placeholder="Nome"
                        value={inputName}
                        onChange={(event) => setInputName(event.target.value)}
                    />
                    <input
                        placeholder="Artista"
                        value={inputArtist}
                        onChange={(event) => setInputArtist(event.target.value)}
                    />
                    <input
                        placeholder="Url da música a ser tocada"
                        value={inputUrl}
                        onChange={(event) => setInputUrl(event.target.value)}
                    />
                    <button onClick={getPlaylistTrack}>Adicionar</button>
                </ContainerAddPlaylistTrack>

            </Modal>


            {tracks.length > 0 ?
                <ContainerPlaylist>
                    <table>
                        <thead>
                            <tr>
                                <th>Música</th>
                                <th>Artista</th>
                                <th>Tocar</th>
                                <th>Exluir</th>
                            </tr>
                        </thead>

                        {tracks.map((track => {
                            return (
                                <tbody key={track.id}>
                                    <td>{track.name}</td>
                                    <td>{track.artist}</td>
                                    <td><audio src={track.url} controls /></td>
                                    <td className="excluir"><button onClick={() => deleteTrack(track.id)}><FiDelete /></button></td>
                                </tbody>
                            )
                        }))}
                    </table>
                </ContainerPlaylist> :
                <NoMusic>
                    <h2> Ainda não há músicas, </h2>
                    <p>Clique em Adicionar + </p>
                </NoMusic>
            }

        </Container>
    )
}

export default PlayListTrack