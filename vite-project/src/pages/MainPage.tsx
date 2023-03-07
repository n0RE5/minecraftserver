import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import "../styles/MainPage.scss";
import { AUTH_PATH, START_PATH } from '../utils/RoutePaths';

function MainPage() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className='main'>
                <div className='main_container'>
                    <div className='main_banner'>We love our players</div>
                    <div className='main_card'><span>9999</span>+ players online</div>
                </div>
                <div className='main_media_container'>
                    <div className='main_media'>
                        <div className='main_media__welcome'>Welcome to MinecraftSerwer!</div>
                        <div className='main_media__description'>
                            Here are the best Minecraft servers with and without mods, on which everyone can play. Our team keeps order on the servers and adds new features every day. 
                            <br /> 
                            Our MiniGames have a unique player personalization system installed: you can install a hat, wings, or a pet.
                        </div>
                        <div className='main_media__links'><Link to={AUTH_PATH}>Login</Link> | <Link to={`${AUTH_PATH}?authType=register`}>Register</Link> | <a href='https://minecraft.net'>Download Launcher</a> </div>
                    </div>
                    <Link to={START_PATH} className='main_button'>Play Now</Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MainPage;