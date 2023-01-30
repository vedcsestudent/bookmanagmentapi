import React from "react";
import Slider from "react-slick";
import {Link } from "react-router-dom";
const Poster=({...props})=>{
    const {title,subject,posters,isDark}=props;
    const settings={
        
        infinite:true,
        speed:500,
        slidesToShow:4,
        SlidesToScroll:4,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
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
                dots:true,
                autoplay:true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite:true,
                dots:true,
                autoplay:true
              }
            }
          ]
    }
    return (
        <>
        <div className="w-screen overflow-hidden">
        
           <div className={  isDark?"bg-[rgb(46,49,71)] w-[100vw] text-white ":"bg-white text-gray-800 " } >
          <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="play" className={isDark?"block ml-12":"hidden ml-12"}/>
           <h1 className="text-2xl font-bold  ml-20 py-3">{title}</h1>
           
           <Slider {...settings} className="overflow-hidden">
            {   
                posters.map((poster, index)=>{
                    return <div key={index} className=" ml-10  w-28 overflow-hidden flex-col gap-2 ">
                    <Link to={`/movie/${poster.id}`} >
                    <img src={`https://image.tmdb.org/t/p/w500${poster.backdrop_path}`} className= "h-72 w-48 rounded-2xl" alt="image"/>
                    
                    <div className={isDark?"text-white text-xl":"text-black text-xl"}>{poster.original_title}</div>
                    <div className={isDark?"text-white text-lg":"text-gray-800 text-lg"}>{poster.original_language}</div>
                    </Link>
                    </div>
                   
                })
              
            }
            
            </Slider>
           </div>
           </div>
        </>
    )
}
export default Poster;