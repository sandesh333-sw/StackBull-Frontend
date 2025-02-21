import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-3'>
                    <img src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-6 p-3'>
                    <h1>Largest Broker in UK</h1>
                    <p>2+ million StackBull clients</p>
                    <ul>
                        <li><p>Futures and Options</p></li>
                        <li><p>Commodity derivatives</p></li>
                        <li><p>Direct mutual funds</p></li>
                        <li><p>Stocks and IPOs</p></li>
                    </ul>
                    <img src='media/images/pressLogos.png' style={{width: "85%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;