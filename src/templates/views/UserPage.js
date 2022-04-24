import React, {useState} from "react";
import Taskbar from "../components/taskbar";
import Wallpaper from "../components/wallpaper";
import wallpaperImage from "./../../resources/assets/images/wallpaper.jpg";
import userImg from "./../../resources/assets/images/user.png";
import DesktopIcons from "./DesktopIcons";
import Window from "./Window";

export const windowContext = React.createContext(null);

export default function UserPage(props) {

    const [windowShown, setIsWindowShown] = useState({state: false, type: '', name: ''});
    const windowState = { state: { windowShown }, actions: { setIsWindowShown } };

    return (
        <>
            <div className="v-desktop">
                <windowContext.Provider value={windowState}>
                    <Wallpaper wallpaperImage={wallpaperImage}/>
                    <DesktopIcons />
                    <Window />
                    <Taskbar userImg={userImg} setIsAuth={props.setIsAuth}/>
                </windowContext.Provider>
            </div>
        </>
    );
}