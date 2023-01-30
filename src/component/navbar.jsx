import { BiSearch ,BiMenu,BiChevronRight} from "react-icons/bi";
import {RxTriangleDown} from 'react-icons/rx'
const Navbar=()=>{
    return (<> <NavbarSm/>
    <div className=" hidden lg:block w-full  bg-[rgb(46,49,71)]">
      <div className="container   flex-nowrap w-full h-16" style={{width:"100vw", display:"flex", justifyContent:"space-between"}}>
        <div className="left flex gap-10 ml-10">
      
          <img src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png" alt="book my show logo" className="w-44 "/>
          <div className="bg-white rounded h-10  flex my-3 text-gray-800 w-[500px]">  <BiSearch className="m-3 text-lg"/>  <input type="text" className=" rounded w-[500px] px-2 h-10 outline-none" placeholder="Search for Movies, Events,Plays, Sports,Activities"/>
        </div>
        </div>
        
        <div className="right flex gap-8 text-white  py-4 px-3 h-16">
          <div className="flex gap-1">
            Jabalpur
            <RxTriangleDown className="text-md"/>
          </div>
          <button className="rounded w-20 h-8 bg-red-600 hover:bg-white hover:text-red-600">Sign in</button>
          <BiMenu className="text-xl"/>
        </div>
       
      </div>
      </div>
      </>
      

    )

}
const NavbarSm=()=>{
  return(
    <div className="lg:hidden sm:block w-screen bg-[rgb(46,49,71)] text-white" >
    <div className="container py-2  gap-0 flex-nowrap w-[100vw] h-16" style={{ display:"flex",  justifyContent:"space-between"}}>
      <div className="left  px-5 flex no-wrap flex-col"><h1>It All Starts Here!</h1>
      <div className="flex no-wrap gap-1">Jabalpur<BiChevronRight className="mt-1"/></div></div>
      <div className="right mt-1 flex no-wrap gap-4"><button className="bg-red-500 text-white rounded w-24 h-8">Use App</button><BiSearch className="mt-1 text-xl"/></div>
    </div>
    </div>
  )

}
export default Navbar;