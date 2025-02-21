import React from "react";

function Footer() {
  return (
    <div className="container border-top">
      <div className="row mt-5">
        <div className="col mt-5">
          <img src="media/images/logo.svg" style={{ width: "40%" }} />
          <p>All rights reserved</p>
        </div>
        <div className="col">
          <p>Company</p>
          <br />
          <a href="" style={{textDecoration: 'none'}}>Products</a>
          <br />
          <a href="" style={{textDecoration: 'none'}}> Pricing</a>
          <br />
          <a href="" style={{textDecoration: 'none'}}>Referral programme</a>
          <br />
          <a href="" style={{textDecoration: 'none'}}>Careers</a>
          <br />
          <a href="" style={{textDecoration: 'none'}}>Press & media</a>
          <br />
          <a href="" style={{textDecoration: 'none'}}>Open source</a>
          <br />
        </div>
        <div className="col">
          <p>Support</p>
          <a href="" style={{textDecoration: 'none'}}>Contact us</a>
          <br />
          <a href="" style={{textDecoration: 'none'}}> Support portal</a>
          <br />
          <a href="" style={{textDecoration: 'none'}}>List of charges</a>
          <br />
          <a href="" style={{textDecoration: 'none'}}>Videos</a>
          <br />
          <a href="" style={{textDecoration: 'none'}}>Market overview</a>
          <br />
          <a href="" style={{textDecoration: 'none'}}>Status of your complaints</a>
          <br />
        </div>
        <div className="col">
          <p>Account</p>
          <a href="" style={{textDecoration: 'none'}}>Open an account</a>
          <br />
          <a href="" style={{textDecoration: 'none'}}>Fund transfer</a>
          <br />
        </div>
      </div>
      <div className="mt-5 text-small text-muted">
        <p>
          Stock brokers can accept securities as margins from clients only by
          way of pledge in the depository system w.e.f September 01, 2020. 2)
          Update your e-mail and phone number with your stock broker /
          depository participant and receive OTP directly from depository on
          your e-mail and/or mobile number to create pledge. 3) Check your
          securities / MF / bonds in the consolidated account statement issued
          by NSDL/CDSL every month. "Prevent unauthorised transactions in your
          account. Update your mobile numbers/email IDs with your stock brokers.
          Receive information of your transactions directly from Exchange on
          your mobile/email at the end of the day. Issued in the interest of
          investors. KYC is one time exercise while dealing in securities
          markets - once KYC is done through a SEBI registered intermediary
          (broker, DP, Mutual Fund etc.), you need not undergo the same process
          again when you approach another intermediary." Dear Investor, if you
          are subscribing to an IPO, there is no need to issue a cheque. Please
          write the Bank account number and sign the IPO application form to
          authorize your bank to make payment in case of allotment. In case of
          non allotment the funds will remain in your bank account. As a
          business we don't give stock tips, and have not authorized anyone to
          trade on behalf of others. If you find anyone claiming to be part of
          Zerodha and offering such services, please create a ticket here.
        </p>
      </div>
    </div>
  );
}

export default Footer;
