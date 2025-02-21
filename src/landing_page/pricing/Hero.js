import React from 'react';

function Hero() {
    return ( 
        <div className='row p-5 mt-5'>
            <div className='text-center p-4 border-bottom'>
                <h1>Charges</h1>
                <p>List of all charges and taxes</p>
            </div>
            <div className='col-4 p-5'>
                <img src='media/images/pricingEquity.svg'/>
                <h1>
                Free equity delivery
                </h1>
                <p>
                All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                </p>
            </div>
            <div className='col-4 p-5'>
            <img src='media/images/intradayTrades.svg'/>
                <h1>
                Intraday and F&O trades
                </h1>
                <p>
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.

                </p>
            </div>
            <div className='col-4 p-5'>
            <img src='media/images/pricingEquity.svg'/>
                <h1>
                Free direct MF
                </h1>
                <p>
                All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                </p>
            </div>
        </div>
     );
}

export default Hero;