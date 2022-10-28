import React from 'react';
import instagram from '../../icons/insta.svg'
import facebook from '../../icons/Fb.svg'
import viber from '../../icons/Viber.svg'
import whatsApp from '../../icons/Whatsapp.svg'
import burger from '../../icons/Burger.svg'

const Header = () => {
    return (
        <>
            <div className='header1' >
                <div className='number' >
                    +(373) 22 83-87-87

                </div>
                <span className='line'> </span>
                <div className='icons'>
                    <img src={instagram} alt=""/>
                    <img src={facebook} alt=""/>
                    <img src={viber} alt=""/>
                    <img src={whatsApp} alt=""/>
                </div>

            </div>
            <div className='header2'>
                <img src={burger} alt=""/>
                <div className='text-logo' >
                    <span className='big-text'> YOUR LOGO </span>
                    <span className='little-text'> ADDITION TEXT </span>
                </div>
                <div><input type="search"/> </div>
            </div>
        </>
        
    );
};

export default Header;