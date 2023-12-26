import Header from "../components/Header"
import Destination from "./Destination"
import { Link } from 'react-router-dom';
export default function Home() {
    return(
        <>
            <Header />
            <section className="home">
                <div className="overlay">
                    <article>
                        <h1 className="text-home-h1">SO, YOU WANT TO TRAVEL TO </h1>
                        <h1><span className="text-home-space">SPACE</span></h1>
                        <br />
                        <span className="paragraf">
                            Let’s face it; if you want to go to space, you might as well <br /> genuinely go to outer space and not hover kind of on the <br /> edge of it. Well sit back, and relax because we’ll give you a <br /> truly out of this world experience!
                        </span>                
                    </article>

                    <article>
                        <button className="exp-btn">
                            <Link to='/destination'className="exp-btn-text">EXPLORE</Link>
                        </button>
                    </article>
                </div>

            </section>
        </>
       
    )
}
export {Destination}