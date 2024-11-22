import globeIcon from "../images/globe-02.png";
import "../index.css"

export default function Header() {
    return (
        <div className="header--class">
            <img src={globeIcon} className="globe--icon" alt="globe icon" />
            <h1 className="header--title">My Travel Journal.</h1>
        </div>
    )
}