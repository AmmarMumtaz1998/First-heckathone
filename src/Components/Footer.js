import React from 'react';
// import Foot from '../Assets/foot.png';

const Footer = () => {
    return (
        <div className="container-fluid" style={{backgroundColor:"#2988CB", color:"white"}}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <h6 className="pb-3">Improve this page | Report a problem</h6>
                        {/* <img src={Foot} alt="" style={{height:30, width:100}} /> */}
                        <p className="pt-3" style={{fontSize:14}}>The content driving this site is licensed under the Creative Commons Attribution-ShareAlike 4.0 license.</p>
                    </div>

                    <div className="col-md-2 col-sm-12"style={{listStyle:"none"}} ><hr color="white"/>
                        <h5>Resources</h5>
                            <div style={{fontSize:14}}>
                                <li>Downloads</li>
                                <li>Blog</li>
                                <li>Documentation</li>
                                <li>Security</li>
                                <li>Contributing</li>
                            </div>
                    </div>

                    <div className="col-md-2 col-sm-12"style={{listStyle:"none"}} ><hr color="white"/>
                        <h5>Sponsers</h5>
                            <div style={{fontSize:14}}>
                                <li>Ammar Companies Ltd</li>
                                <li>MCdonalds</li>
                                <li>KFC</li>
                                <li>Domino's</li>
                                <li>Saylani</li>
                            </div>
                    </div>
                    
                    <div className="col-md-2 col-sm-12"style={{listStyle:"none"}} ><hr color="white"/>
                        <h5>Community</h5>
                            <div style={{fontSize:14}}>
                                <li>Events</li>
                                <li>Mailing Lists</li>
                                <li>Chats</li>
                                <li>Special Interesting Groups</li>
                                <li>Twitter</li>
                                <li>Reddit</li>
                            </div>
                    </div>
                    
                    <div className="col-md-2 col-sm-12"style={{listStyle:"none"}} ><hr color="white"/>
                        <h5>Other</h5>
                            <div style={{fontSize:14}}>
                                <li>Code of Conduct</li>
                                <li>Press Information</li>
                                <li>Merchandise</li>
                                <li>Artwork</li>
                                <li>Awards</li>
                            </div>
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default Footer;
