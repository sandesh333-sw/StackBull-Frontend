import React from 'react';

function LeftSection({
    imageUrl, 
    productName, 
    productDescription, 
    tryDemo, 
    learnMore, 
    googlePlay, 
    appStore,
}) {
    return ( 
        <div className='container'>
            <div className='row align-items-center'> 
                <div className='col-md-6 p-3'>
                    <img src={imageUrl} className="img-fluid" alt="Product" />
                </div>
                <div className='col-md-6'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={tryDemo} className="btn btn-primary m-2">Try Demo</a>
                    <a href={learnMore} className="btn btn-secondary m-2">Learn More</a>
                    <div className="mt-3">
                        <a href={googlePlay} className="me-2"><img src='media/images/googlePlayBadge.svg' alt="Google Play" /></a>
                        <a href={appStore}><img src='media/images/appstoreBadge.svg' alt="App Store" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;
