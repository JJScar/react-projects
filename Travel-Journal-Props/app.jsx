import Header from "./components/header.jsx"
import Entry from "./components/entry.jsx"
import londonImage from "./images/london.webp"
import telavivImage from "./images/tel-aviv-israel.webp"
import buenosImage from "./images/city.webp"
import targetImage from "./images/marker-02.png"

export default function App() {
    return (<div>
        <Header />
        <Entry
            img={londonImage}
            target={targetImage}
            country="United Kingdom"
            city="London"
            time="Aug 2023 - Currently"
            info="I live in the biggest metropolis in the world. Where the home of finance lives, extensive night life, and of course fish and chips!"
            mapsLink="https://www.google.com/maps/place/London,+UK" />
        <Entry
            img={telavivImage}
            target={targetImage}
            country="Israel"
            city="Tel Aviv"
            time="Sep 2022 - Aug 2023"
            info="I really miss Israel. Tel Aviv has some great beers, markets, my friends and especially the beach! Man I miss the beach..."
            mapsLink="https://www.google.com/maps/place/Tel-Aviv,+Israel" />
        <Entry
            img={buenosImage}
            target={targetImage}
            country="Argentina"
            city="Buenos Aires"
            time="May 2022 - Sep 2022"
            info="Honestly loved this city. Also known as the Europe of South America. This place is so unique from it’s people to the food."
            mapsLink="https://www.google.com/maps/place/Buenos+Aires,+Argentina" />
    </div>
    )
}