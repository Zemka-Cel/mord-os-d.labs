import React from "react";
import Taskbar from "../components/taskbar";
import Wallpaper from "../components/wallpaper";
import wallpaperImage from "./../../resources/assets/images/wallpaper.jpg";
import userImg from "./../../resources/assets/images/user.png";
import DesktopIcons from "./DesktopIcons";
import Window from "./Window";

export default function UserPage(props) {
    return (
        <>
            <div className="v-desktop">
                <Wallpaper wallpaperImage={wallpaperImage}/>
                <DesktopIcons />
                <Window />
                <Taskbar userImg={userImg} setIsAuth={props.setIsAuth}/>
            </div>
        </>
    );
}