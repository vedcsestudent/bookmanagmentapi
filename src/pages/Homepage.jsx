import DefaultLayout from "../layout/default";
import {useState,useEffect} from 'react'
import Slider from 'react-slick';
//importing the component
import Entertainment from "../component/entertainment"
import HeroCarosel from "../component/herocarosel"
import Poster from "../component/posterslider";
import Axios from "axios";
//states

const Homepage=()=>{
  const [premierMovies,setpremierMovies]=useState([]);
const [onlineStreamEvent, setOnlineStreamEvent]=useState([]);
const [recommendedMovies ,setRecommendedMovies]=useState([]);
useEffect(()=>{
  const getPopularMovies=async ()=>{
    const popularMovies =await Axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e7ba515c696583089b138f6de4c26a82&language=en-US&page=1")
    console.log(popularMovies.data.results)
    setpremierMovies(popularMovies.data.results);
  }
  getPopularMovies();
},[])

useEffect(()=>{
  const getOnlineEvent=async ()=>{
    const onlineMovies =await Axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=e7ba515c696583089b138f6de4c26a82&language=en-US&page=1")
    console.log(onlineMovies.data.results)
   setOnlineStreamEvent(onlineMovies.data.results);
  }
  getOnlineEvent();
},[])

useEffect(()=>{
  const getRecommended=async ()=>{
    const RecommendedMovies =await Axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=e7ba515c696583089b138f6de4c26a82&language=en-US&page=1")
    console.log(RecommendedMovies.data.results)
   setRecommendedMovies(RecommendedMovies.data.results);
  }
  getRecommended();
},[])
    return(
        <>
      <HeroCarosel></HeroCarosel>
      <div className="container  my-8    ">
        <h1 className="text-2xl font-bold text-gray-800  ml-20 my-3"> The best of Entertainment </h1>
        <Entertainment></Entertainment>
      </div>

      <div className="container ">
      <Poster title="Recommended Movies"
      subject="List of recommended movies"
      posters={recommendedMovies}
      isDark={false}></Poster>
      </div>
     

      <div className="container   ">
        <Poster title="Premier " subject="list of Premier movies" posters={premierMovies} isDark={true} ></Poster>
      </div>
      <div className="container  ">
        <Poster title="OnlineStreamEvent  " subject="list of Online streaming event" posters={onlineStreamEvent} isDark={false} ></Poster>
      </div>
        </>
    );
}
export default DefaultLayout(Homepage);