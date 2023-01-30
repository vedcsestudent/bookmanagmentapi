import React,{useState} from "react";
import HeroSlider from "react-slick";
const HeroCarosel=()=>{
  const [images, setImage]=useState(["https://assets-in.bmscdn.com/promotions/cms/creatives/1674124859329_viniviciindoreweb.jpg",
 " https://assets-in.bmscdn.com/promotions/cms/creatives/1672137034486_ritvizweb.jpg"
]);



const settings={
  dots:true,
  infinite:true,
  speed:500,
  slidesToShow:1,
  SlidesToScroll:1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  
 
}
  return (
<>
  <div className="hidden lg:block overflow-hidden bg-gray-100 my-2 pl-10 py-4">
  <HeroSlider {...settings}>
    {images.map((image,index)=>{  return <div key={index}  className= "container   w-screen">
      <img src={image} alt="image from herocarosal " className="w-full"/>
      
    </div>})}
  </HeroSlider>
  </div>
  <div className="block lg:hidden w-screen  overflow-hidden bg-gray-100">
  <HeroSlider {...settings} className="h-[50vh]">
    {images.map((image,index)=>{  return <div key={index}  className= "container   w-screen h-full  ">
      <img src={image} alt="image from herocarosal " className=" h-[50vh]  w-full "/>
      
    </div>})}
  </HeroSlider>
  </div>
</>
  )
}
export default HeroCarosel;