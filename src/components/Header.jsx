import logo from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';
export default function Header () {
    return(
        <>
            <header className='header'>
                <div>
                    <Link to='/'><img src={logo}/></Link>
                </div>

                {/* <nav className='line'></nav> */}

                <nav className='navbar'>
                    <ul>
                        <li className='list-item'>
                            <Link to="/"><span>00</span> Home</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/destination"><span>01</span> Destination</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/crew"><span>02</span> Crew</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/technology"><span>03</span> Technology</Link>
                        </li>
                    </ul>  
                </nav>
            </header>
          
        </>
    )
}