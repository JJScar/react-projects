import profile from "./images/profile.jpg"
import email from "./images/email.png"
import linkedin from "./images/linkedin.png"
import footerIcons from "./images/footerIcons.png"
import index from "./index.css"

export default function InfoPart() {
    return (
        <div>
            <img src={profile} alt="profile--pic" className="profile--pic" />
            <div className="intro-info--container">
                <h4 className="intro--name">Jordan J. Solomon</h4>
                <h4 className="job--role">Blockchain Developer</h4>
                <div className="button--container">
                    <button className="email--btn"><img src={email} alt="email" className="email--logo" />Email</button>
                    <button className="linkedin--btn"><img src={linkedin} alt="linkedin" className="linkedin--logo" />LinkedIn</button>
                </div>
                <h5 className="about-interests--titles">About</h5>
                <p>I am a blockchain engineer who believes the public should have ownership over their data and identity. I try to keep up with latest security issues and best practices.</p>
                <h5 className="about-interests--titles">Interests</h5>
                <ul>
                    <li>Blockchain & Crypto</li>
                    <li>Indoor Skydiving</li>
                    <li>Hiking</li>
                </ul>
                <footer className="footer">
                    <img src={footerIcons} alt="footer-icons" className="footer--icons" />
                </footer>
            </div>
        </div>
    )
}

