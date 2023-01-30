import React,{useState} from "react";
import Slider from "react-slick"
const Entertainment=()=>{
    const [entertainment, setEntertainment]=useState(["https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NDArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png",
"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/stay-fit-collection-202211140440.png","https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png",
" https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png",
"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/music-shows-collection-202211140440.png",
"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png",
"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/upskill-collection-202211140440.png",
"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/interactive-games-collection-202211140440.png","https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/arts-crafts-collection-202211140440.png",
"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/theatre-shows-collection-202211140440.png","https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/dance-classes-collection-202211140440.png"



]);
    const settings={
        dots:true,
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
    return (<>
  
    <Slider {...settings}>
        {
            entertainment.map((item,index)=>{
               return <div className="container h-48 sm:justify-center" key={index}>
                    <img src={item} alt="image of entertainment card" className="h-full sm:mx-auto"/>
                </div>

            })
        }
    </Slider>

    </>)
}
export default Entertainment;