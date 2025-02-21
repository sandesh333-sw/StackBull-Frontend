import React from 'react';
function RightSection({
  imageUrl,
  productName, 
  productDescription,
  learnMore

}) {
    return (
      <div className='container'>
      <div className='row align-items-center'> 
          <div className='col-md-6'>
              <h1>{productName}</h1>
              <p>{productDescription}</p>
              <a href={learnMore} className="btn btn-secondary m-2">Learn More</a>
          </div>
          <div className='col-md-6 p-3'>
              <img src={imageUrl} className="img-fluid" alt="Product" />
          </div>
      </div>
  </div>
      );
}

export default RightSection;