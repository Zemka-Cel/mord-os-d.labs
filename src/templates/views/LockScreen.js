import React from "react";
import LoginForm from "../components/login";
import Wallpaper from "../components/wallpaper";
import wallpaperImage from "./../../resources/assets/images/wallpaper2.jpg";


export default function LockScreen(props){
    
    return (
        <div className="v-lockScreen">
            <Wallpaper wallpaperImage={wallpaperImage}/>
            <LoginForm setIsAuth={props.setIsAuth}/>
        </div>
    );
}