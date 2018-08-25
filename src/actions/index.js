import axios from 'axios';

export const FETCH_SONGS = 'fetch_songs';
export const SAVE_SONG = 'save_song';
export const FETCH_SONG = 'fetch_song';
export const DELETE_SONG = 'delete_song';

const ROOT_URL = 'http://themeo-api.herokuapp.com';
const API_KEY = '?Key=PAPERCLIP1234';

export function fetchSongs() {
    const request = axios.get(`${ROOT_URL}/songs`);

    return {
      type: FETCH_SONGS,
      payload: request
    };
}

export function saveSong(values, callback) {

    const headers = {'Content-Type': 'application/json'};
    const request = axios.post(`${ROOT_URL}/songs`,values,headers)
        .then(() => callback());

    return {
        type: SAVE_SONG,
        payload: request
    };
}

export function fetchSong(id){
    const request = axios.get(`${ROOT_URL}/songs/${id}`);

    return{
        type:FETCH_SONG,
        payload:request
    };
}

export function deleteSong(id,callback){
    const request = axios.delete(`${ROOT_URL}/songs/${id}`)
            .then( () => callback());

    return{
        type:DELETE_SONG,
        payload: id
    };
}