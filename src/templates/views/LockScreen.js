import React, { useState } from "react";

import { Link } from "react-router-dom";
import LoginForm from "../components/login";
import Wallpaper from "../components/wallpaper";
import wallpaperImage from "./../../resources/assets/images/wallpaper2.jpg";
import UserPage from "./UserPage";


export default function LockScreen(props){
    
    return (
        <div className="p-lockScreen">
            <Wallpaper wallpaperImage={wallpaperImage}/>
            <LoginForm setIsAuth={props.setIsAuth}/>
        </div>
    );
}