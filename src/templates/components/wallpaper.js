//import wallpaperImage from "./../assets/images/wallpaper2.jpg";

export default function Wallpaper(props) {
    return (
        <div className="c-wallpaper">
            <img src={props.wallpaperImage} alt="wallpaper" />
            <div className="c-wallpaper__overlay"></div>
        </div>
    );
}