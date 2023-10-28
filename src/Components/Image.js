import React from 'react'
import Images from "../Assets/Image/homeimage.png"; 
import './Image.css'
function Image() {
  return (
    <>
    <div className="homeImage">
      <img className='leftImage' src={Images} alt="Home_Page_Image" />
      <p>Discover new things on Superapp</p>
    </div>
    </>
  )
  };

export default Image;