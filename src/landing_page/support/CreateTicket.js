import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <h1> To create a ticket, select relevant topic</h1>
            <div className='row p5 mt-5 mb-5'>
                <div className='col-4'>
                    <h4 className=''>Account Opening</h4>
                    <a href='' style={{textDecoration: "none"}}>Online</a><br/>
                    <a href='' style={{textDecoration: "none"}}>Getting started</a><br/>
                    <a href='' style={{textDecoration: "none"}}>Offline</a><br/>
                    <a href='' style={{textDecoration: "none"}}>Charges</a><br/>
                </div>
                <div className='col-4'>
                <h4 className=''> Your Zerodha Account</h4>
                    <a href='' style={{textDecoration: "none"}}>Login credentials</a><br/>
                    <a href='' style={{textDecoration: "none"}}>Your Profile</a><br/>
                    <a href='' style={{textDecoration: "none"}}>Nomination</a><br/>
                    <a href='' style={{textDecoration: "none"}}>Transfer and conversion of shares</a><br/>
                </div>
                <div className='col-4'>
                <h4 className=''>Trading and Markets</h4>
                    <a href='' style={{textDecoration: "none"}}>Trading FAQs</a><br/>
                    <a href='' style={{textDecoration: "none"}}>Kite</a><br/>
                    <a href='' style={{textDecoration: "none"}}>Kite features</a><br/>
                    <a href='' style={{textDecoration: "none"}}>Product and order types</a><br/>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;