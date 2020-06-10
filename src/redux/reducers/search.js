// import { get } from 'lodash';
import {
    SEARCH_MOVIE_START,
    SEARCH_MOVIE_ERROR,
    SEARCH_MOVIE_COMPLETE,
    SEARCH_MOVIE_BY_ID_START,
    SEARCH_MOVIE_BY_ID_COMPLETE,
    SEARCH_MOVIE_BY_ID_ERROR,
} from '../../consts/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE_START:
            console.log("SEARCH_MOVIE_START reducer/search");
            console.log(action);
            return { ...state, isLoading: true };
            break;
        case SEARCH_MOVIE_ERROR:
            console.log("SEARCH_MOVIE_ERROR reducer/search");
            console.log(action);
            return { ...state, isLoading: false, movieResults: null };
            break;
        case SEARCH_MOVIE_COMPLETE:
            console.log("SEARCH_MOVIE_COMPLETE reducer/search");
            console.log(action);
            return { ...state, isLoading: false, movieResults: action.results.data };
            break;
        case SEARCH_MOVIE_BY_ID_START:
            console.log("SEARCH_MOVIE_BY_ID_START reducer/search");
            console.log(action);
            return { ...state, isLoading: true, movieResult:null };
            break;
        case SEARCH_MOVIE_BY_ID_ERROR:
            console.log("SEARCH_MOVIE_BY_ID_ERROR reducer/search");
            console.log(action);
            return { ...state, isLoading: false, movieResult: null };
            break;
        case SEARCH_MOVIE_BY_ID_COMPLETE:
            console.log("SEARCH_MOVIE_BY_ID_COMPLETE reducer/search");
            console.log(action);
            return { ...state, isLoading: false, movieResult: action.movie.data };
            break;
        default:
            return { ...state }
    }
}
