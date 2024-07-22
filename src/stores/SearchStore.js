import {defineStore} from "pinia";
import {useMovieStore} from "./MovieStore.js";
import {ref} from "vue";

const url =
    'https:api.themoviedb.org/3/search/movie?api_key=02708c4929ad93aa5e68f8ee7bfa4445&query=';

export const useSearchStore =
    defineStore('searchStore', ()=>{
        const loader = ref(false);
        const movies = ref([]);

        const getMovies = async (search)=>{
            loader.value = true;
            const res = await fetch(`${url}${search}`);
            const data = await res.json();
            movies.value = data.results;
            loader.value = false;
        }

        const addToUserMovies = (object)=>{
            const moviesStore = useMovieStore();
            moviesStore.movies.push({...object, isWatched: false});
        }

        return{
            loader, movies, getMovies, addToUserMovies
        }
})