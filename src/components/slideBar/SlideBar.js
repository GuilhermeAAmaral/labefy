import { useHistory } from "react-router-dom"
import { ContainerButton, Menu } from "./styled"

import { goToCreatePlaylist, goToPlaylist, back, searchPlaylist } from "../../router/cortinator"

export const SlideBar = () => {

    const history = useHistory()

    return (

        <Menu>
            <h1>Labefy.</h1>

            <ContainerButton>
                <button onClick={() => goToCreatePlaylist(history)}>Criar playlist</button>
                <button onClick={() => goToPlaylist(history)}>Acessar playlists</button>
            </ContainerButton>

            <button className="button" onClick={() => searchPlaylist(history)}>Buscar playlists</button>
        </Menu>
    )
}

export default SlideBar