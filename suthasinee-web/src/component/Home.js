import React from 'react';
import Madam from '../img/madamdum-event.jpg';
import Madam1 from '../img/madamdum-event1.jpg';
import HairPro from '../img/hair-body.jpg';
import Golden from '../img/IMG-20210104-WA0004.jpg'
import Shimy from '../img/IMG-20210104-WA0003.jpg'

function Home (){
    return (
        <div className="home">
            <div className="whatwedo">
                <h1>What we do and sell</h1>
                <div className="first-whatwedo">
                    <img className="madam" src={Madam} alt="madam"/>
                    <div className="file-text"><h1>Text</h1></div>  
                </div>
                <div className="second-whatwedo">
                    <img className="madam" src={Madam1} />
                    <div className="file-text"><h1>Text</h1></div>
                </div>
            </div>
            <div className="whatwesell">
                <div className="sell">
                    <img src={HairPro} alt="hair" width="350" height="450"/>
                    <img src={Golden} width="350" height="450"/>
                    <img src={Shimy} width="350" height="450"/>
                </div>
            </div>
            
        </div>
    )
}
export default Home;