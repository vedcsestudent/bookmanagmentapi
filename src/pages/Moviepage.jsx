import MovieLayout from "../layout/movie"
import { useParams } from "react-router-dom";
import {AiFillStar} from "react-icons/ai"
import {RiMoneyEuroBoxFill} from "react-icons/ri"
import Axios from "axios"
import Slider from "react-slick";
import { useState,useEffect} from "react";
const MoviePage=()=>{
    const {id}=useParams();
    const [movie ,setMovie]=useState([]);
    const [credit,setCredit]=useState([]);
    const [similar,setSimilar]=useState([]);
    const [review, setReview]=useState([]);
    useEffect(()=>{
        const getSpecificMovie =async()=>{
            const specificMovie= await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e7ba515c696583089b138f6de4c26a82&language=en-US&page=1`);
            
       setMovie(specificMovie.data);
        }
        getSpecificMovie();
    },[])
    useEffect(()=>{
        const getSimilarMovies=async()=>{
            const similarMovies= await Axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=e7ba515c696583089b138f6de4c26a82&language=en-US&page=1`)
            setSimilar(similarMovies.data.results);
            console.log(similarMovies.data.results)
        }
        getSimilarMovies();
    },[id])
    const settings={
        
        infinite:true,
        speed:500,
        slidesToShow:4,
        SlidesToScroll:4,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
               
                autoplay:true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                infinite:true,
                
                autoplay:true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite:true,
                
                autoplay:true
              }
            }
          ]
    }
    useEffect(()=>{
        const getCredits= async ()=>{
           const  credits= await Axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=e7ba515c696583089b138f6de4c26a82&language=en-US`);
           setCredit(credits.data.cast);
        }
        getCredits();
    },[])
    useEffect(()=>{
        const getReview=async ()=>{
            const Review=await Axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=e7ba515c696583089b138f6de4c26a82&language=en-US&page=1`)
            console.log(Review.data.results);
        }
        getReview();
        
    },[])
    return (
    <>
     {<div className="container w-screen " >
     <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path} `} className="w-screen relative lg:h-[60vh] h-[100vh]  object-fit opacity-90 " style={{maxWidth:"100vw"}} alt="image of movie" />
     <div className="flex no-wrap gap-2 absolute top-[120px] left-32 z-10">
     <div><img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}  `} alt="image from single image viewer" className="h-80 w-44  rounded-xl"/> </div>
     <div className=" text-white  flex-col gap-4  mt-4 w-60 h-80 ">
     <h1 className="font-bold text-3xl ">{movie.original_title}</h1>
     <p className="text-lg">{movie.status}</p>
     <p className="text-lg">{movie.release_date}</p>
     <p className="text-lg">{movie.original_language}</p>
     <p className="flex gap-1 text-xl font-bold">{movie.vote_average}<AiFillStar className="mt-1"/></p>
     <div className="flex gap-3">
        <button className="bg-red-500 color-white text-lg p-1 px-3 rounded-2xl">Buy </button>
        <button className="bg-red-500 color-white text-lg p-1 px-3 rounded-2xl">Rent </button>
     </div>
    </div>
    </div>
     <div className="ml-10 my-3">
     <h1 className="text-black  font-bold text-2xl ">About the Movie</h1>
     <p> {movie.overview}</p>
    </div>
    <hr/>
    <div className="ml-10 my-3">
    <h1 className="text-black  font-bold text-2xl ">Applicable Offers</h1> 
    <div className="flex gap-56 mt-4">
        <div className=" bg-yellow-50 py-3 w-[30vw]  flex gap:2 px-2" style={{border:"2px dashed yellow"}}><img src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?26082021190202" alt=" image" className="w-6 h-6 mt-1"/> <div><div className="font-bold ">Every thing every where all at once</div> <p className="text-[#666666]  text-md">Watch online use code:SAVE50</p></div></div>

        <div className=" bg-yellow-50 py-3 w-[30vw]  flex gap:2 px-2" style={{border:"3px dashed yellow"}}> <RiMoneyEuroBoxFill className=" text-3xl  font-bold "/> <div className="">Watch Movie online for free</div><p>Limited Period Offer</p></div>
    </div>


    </div>
    <hr/>
    <div className="ml-10">
    <Slider {...settings} className="w-100">
        {
            credit.map((each, index)=>{
                return <div key={index} className={index>=5? "hidden":"block"}>
                    <img src={`https://image.tmdb.org/t/p/w500/${each.profile_path}`} alt=" crew  " className="w-20 h-20 rounded-[200px]"/>
                    <p>{each.original_name}</p>
                    <p>{each.known_for_department}</p>
                </div>
            })
        }
        </Slider>
    </div>
    <hr/>
    <div>
    <h1 className="text-2xl font-bold ml-10 my-4"> Similar Movies</h1>
    <Slider {...settings} className="ml-4 w-100">
        {
            similar.map((each, index)=>{
                return <div key={index} className={index>=5? "hidden":"block mx-3 w-32 h-72 border-none outline-none"}>
                    <img src={`https://image.tmdb.org/t/p/w500/${each.backdrop_path}`} alt=" similar  " className="w-32 h-72  outline-none rounded-xl"/>
                    <p>{each.original_title}</p>
                    <p>{each.original_language}</p>
                </div>
            })
        }
        </Slider>
        
    </div>
    
     </div>
}
</>

    
       
    );

}
 export default MovieLayout(MoviePage);