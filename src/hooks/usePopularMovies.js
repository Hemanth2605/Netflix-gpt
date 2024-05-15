import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularList = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const response = await data.json();
        dispatch(addPopularMovies(response.results));
        }
      
        useEffect(() =>{
          getPopularList();
        },[]);
}

export default usePopularMovies;