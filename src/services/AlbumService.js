import Config from '../config/Config'

export function getAlbumList() {
    return getData(Config.ALBUM_URL);
}

export function getData(url) {
    return fetch(Config.API_BASE_URL + url, {
        method: "GET"
    });
}