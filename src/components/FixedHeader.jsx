import React, {useState, useEffect} from 'react';
import ThemeSwitch from './ThemeSwitch.jsx'
import '../styles/navbar.css'

const FixedHeader = () => {

    const [fixed, setFixed] = useState('');

    const handleScroll = (event) => {
        if(window.scrollY > 95){
            setFixed('fixed');
        }else{
            setFixed('');
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    


    return (
        <header className={`${fixed && 'fixed'}`}>
            <div className="container">
                <h1>Thiago</h1>
                <nav className="header__navigation">
                <ul className="menu">
                    <li className="menu-item"><a href="/">Inicio</a></li>
                    <li className="menu-item"><a href="/blog">Blog</a></li>
                    <li className="menu-item"><ThemeSwitch/></li>
                </ul>
                </nav>
            </div>
        </header>
    )
};

export default FixedHeader;
