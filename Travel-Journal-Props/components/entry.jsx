import londonImage from "../images/london.webp"
import targetImage from "../images/marker-02.png"

export default function Entry(props) {
    return (
        <div className="entry--container">
            <div className="main--image--container">
                <img src={props.img} className="city--image" alt="London" />
            </div>
            <div className="entry--content">
                <img src={props.target} className="marker--image" alt="Marker" />
                <h2 className="country--name">{props.country} </h2>
                <h1 className="city--name">{props.city}</h1>
                <h3 className="time--title">{props.time}</h3>
                <p className="info--block">{props.info}</p>
            </div>
            <a href={props.mapsLink} target="_blank" rel="noreferrer" className="google--maps">Visit on Google Maps</a>
        </div>
    )
}