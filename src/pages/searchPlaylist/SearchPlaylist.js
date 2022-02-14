import axios from "axios"
import { Container, ContainerInputButton, ContainerPlaylist } from "./styled"

import { BASE_URL } from '../../constants/url'
import { useState } from "react"

import { goToPlaylistTrack } from "../../router/cortinator"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

import { toast } from 'react-toastify'

export const SearchPlaylist = () => {

    const [search, setSearch] = useState("")
    const [resultSearch, setResultSearch] = useState([])

    const searchPlaylist = () => {

        axios.get(`${BASE_URL}/playlists/search?name=${search}`, {

            headers: {
                Authorization: "guilherme-amaral-marzo"
            }
        })
            .then((res) => {
                console.log(res.data.result.playlist)
                setResultSearch(res.data.result.playlist)
                setSearch("")
            })
            .catch((err) => {
                toast.warn("playlist não encontrada", {
                    theme: "colored"
                })
            })
    }

    console.log('funcionou', search)

    const history = useHistory()

    const onClickPlayListTrack = (id) => {
        goToPlaylistTrack(history, id)
    }

    return (
        <Container>
            <h1>Buscar</h1>

            <ContainerInputButton>
                <input
                    placeholder="Buscar"
                    onChange={(event) => setSearch(event.target.value)}
                    value={search}
                />
                <button onClick={searchPlaylist}>Buscar</button>
            </ContainerInputButton>

                <ContainerPlaylist>
                    {resultSearch.map(result => {
                        return (
                            <div>
                                <button onClick={() => onClickPlayListTrack(result.id)}>{result.name}</button>
                            </div>
                        )
                    })}
                </ContainerPlaylist> 
        </Container>
    )
}

export default SearchPlaylist