import React, {Component} from "react";
import Navbar from "../component/navbar"
const DefaultLayout=(Component)=>
({...props})=>{
    return (
        <div>
            <Navbar />
            <Component {...props} />
            <div>Footer</div>
        </div>
    )
}
export default DefaultLayout;