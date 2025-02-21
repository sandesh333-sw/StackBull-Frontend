import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 text-center'>
            <div className='row'>
                <img src='media/images/homeHero.png' alt='Hero-image' className='mb-5'/>
            </div>
            <h1 className='mt-5'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='p-3 btn btn-primary' style={{width:"30%"}}>Sign Up</button>

        </div>
     );
}

export default Hero;
