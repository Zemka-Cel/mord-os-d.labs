import React from "react";
import Taskbar from "../components/taskbar";
import Wallpaper from "../components/wallpaper";
import wallpaperImage from "./../../resources/assets/images/wallpaper.jpg";
import userImg from "./../../resources/assets/images/user.png";
import DesktopIcons from "./DesktopIcons";

export default function UserPage(props) {
    return (
        <>
            <div className="p-desktop">
                <Wallpaper wallpaperImage={wallpaperImage}/>
                <DesktopIcons />
                <Taskbar userImg={userImg} setIsAuth={props.setIsAuth}/>
            </div>
        </>
    );
}