import { BrowserRouter, Route, Switch } from "react-router-dom"
import GetPlayList from '../pages/getPlaylist/getPlaylists'
import CreatePlayLists from '../pages/createPlaylist/CreatePlaylist'

import SlideBar from "../components/slideBar/SlideBar"
import PlayListTrack from "../pages/playListTrack/PlayListTrack"
import SearchPlaylist from "../pages/searchPlaylist/SearchPlaylist"

export const Router = () => {

    return (

        <BrowserRouter>
            <SlideBar />
            <Switch>
                <Route exact path="/">
                    <GetPlayList />
                </Route>

                <Route exact path="/create">
                    <CreatePlayLists />
                </Route>

                <Route exact path="/playlist/:id">
                   <PlayListTrack /> 
                </Route>

                <Route exact path="/search">
                    <SearchPlaylist />
                </Route>
            </Switch>
        </BrowserRouter>

    )
}

export default Router