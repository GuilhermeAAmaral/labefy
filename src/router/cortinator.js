export const goToPlaylist = (history) => {
    history.push ('/')
}

export const goToCreatePlaylist = (history) => {
    history.push ('/create')
}

export const goToPlaylistTrack = (history, id) => {
    history.push (`/playlist/${id}`)
}

export const searchPlaylist = (history) => {
    history.push ("/search")
}

