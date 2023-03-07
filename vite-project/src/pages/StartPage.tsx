import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import '../styles/StartPage.scss';

function StartPage () {
    return (
        <>
            <Navbar />
            <div className="contain">
                <div className="startpage">
                    <div className="startpage_w">
                        <div className="startpage_start">Start Playing</div>
                        <div className="startpage_middle">Before playing we strongly recommend read <a>server rules</a>.</div>
                        <ol className="startpage_list">
                            <div>1. To start game, register on official minecraft site.</div>
                            <div>2. Download official <a href="https://minecraft.net">minecraft launcher</a></div>
                            <div>3. After starting launcher log in your account.</div>
                            <div>4. Choose our server [<a>ip</a>] and click 'Play now'</div>
                        </ol>
                        <div className="startpage_middle">Enjoy the game!</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default StartPage;