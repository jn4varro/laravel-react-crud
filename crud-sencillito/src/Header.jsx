import React from 'react';
import laravelLogo  from './assets/laravel.svg'
import  reactLogo  from './assets/react.svg'


function Header(){
    return (
        <>
            <div className='appLogos'>
                <a href="https://laravel.com" target="_blank">
                <img src={laravelLogo} className="logo" alt="Laravel logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Laravel + React</h1>
            <h3 className='subtitle'>CRUD SENCILLITO</h3>
            <p className="read-the-docs">
                Click on the Laravel and React logos to learn more
            </p>
        </>
    );
}

export default Header;