import React,{Component} from 'react';
import Navbar from '../component/navbar';
const MovieLayout=(Component)=>({...props})=>{
    return (<>
        <Navbar></Navbar>
        <Component {...props} className="w-[100vw]"></Component>
        <div> footer</div>
    </>) 
}
export default MovieLayout;