import React from 'react';

function Stats() {
    return (  
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-4'>The StackBull Universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                </div>
                <div className='col-6'>
                    <img src='media/images/ecosystem.png' style={{width: "90%"}}/>
                    <div className='text-center'>
                        <a href='' className='mx-5'style={{textDecoration:"none" }}>Explore our products →</a>
                        <a href=''style={{textDecoration: "none"}}>Try Kite demo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;