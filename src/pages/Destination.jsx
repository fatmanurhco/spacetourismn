import { useState } from "react"
import destinations from "../components/Data.jsx"
import Header from "../components/Header.jsx"

export default function Destination(){
    const [planet] = useState(destinations)
    const [value,setvalue] = useState(0)
    const {name, images, description, distance, travel} = planet[value]

    return(
        <>
            <Header/>
            <section className="container-destination">
                <h1><span>01</span>  Pick your destinaton</h1>
                <div className="des-all">
                    <article>
                        <img src={images} className="des-img" />
                    </article>

                    <article className="des-planets">

                        {planet.map((item, index) => (
                            <button key={index} onClick={() => 
                            setvalue(index)} className={`planet-btn${index === value ? ' active' : ''}`}>
                                {item.name}
                            </button>
                        ))}

                        <h2 className="des-planet-name">{name}</h2>
                        <p className="des-paragraf">{description}</p>
                        <ul className="des-information">
                            <li>Avg. Distance <span>{distance}</span></li>
                            <li>Est. Travel Time <span>{travel}</span></li>
                        </ul>
                    </article>
                </div>
            </section>
        </>
    )
}