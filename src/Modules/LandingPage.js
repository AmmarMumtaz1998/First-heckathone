import React from "react";
import Navbars from "../Components/Navbar";
import Homepic from "../Assets/HomePic.jpg";
import Cards from '../Components/Cards'
// import Isl from '../Assets/Islamabad.jpg'

export default function LandingPage() {
  return (
    <>
      {/* <Navbars /> */}
      <div>
        <img src={Homepic} style={{ width: "100%", height: 520 }} />
        <p style={{position: 'absolute', left:'70%', top: '60%', color:'whitesmoke', fontSize: 30, fontStyle: 'italic'}}>
          <u>Order food of your love</u></p>
      </div>
      
      <div className='container-fluid' style={{backgroundColor:'#DCDFE8', padding: 20}}>
            <div className='row m-5'>
                <div className='col-md-3 ' >
                    <Cards />
                </div>
                <div className='col-md-3' >
                    <Cards />
                </div>
                <div className='col-md-3' >
                    <Cards />
                </div>
                <div className='col-md-3' >
                    <Cards />
                </div>
            </div>
      </div>
    </>
  );
}
