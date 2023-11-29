import React from "react";
import "./InsideStore.css";
import InsideStoreImage1 from '../../../assets/images/homeImage/insidestore1.png'
import InsideStoreImage2 from '../../../assets/images/homeImage/insidestore2.png'
import InsideStoreImage3 from '../../../assets/images/homeImage/insidestore3.png'
import InsideStoreImage4 from '../../../assets/images/homeImage/insidestore4.png'

function InsideStore() {
  const imageArray = [InsideStoreImage1, InsideStoreImage2, InsideStoreImage3, InsideStoreImage4]
  const catalog = [
    {
      name: 'Color Catalog',
      image: 'url(images/inside_icon1.png)'
    },
    {
      name: 'Digital Brochure',
      image: 'url(images/inside_icon2.png)'
    },
    {
      name: 'Where To Buy',
      image: 'url(images/inside_icon3.png)'
    },
  ]
  return (
    <div className="home-advantagecontainer">
      <div className="home-advantageinnercontainer">
        <div style={{width: '90%', margin: '50px 0px'}}>
          <div className="home-insidestore-container">
            <div className="home-insidestore-heading">STEP INSIDE OUR STORE</div>
            <div className="homebrand-button">View Full Catalogue</div>
          </div>
          <div className="home-insidestore-imagecontainer">
            {
              imageArray.map((v, i) => <img src={v} />)
            }
          </div>
          <div className="home-insidestore-container">
            <div className="home-insidestore-subheading">DISCOVER OUR TOP-QUALITY STONE OPTIONS TO PERFECTLY MATCH YOUR DESIRED SPACE!</div>
            <div className="homebrand-button">Get Directions</div>
          </div>
          <div className="home-insidestore-imagecontainer">
            {
              catalog.map((v, i) => (
                <div className="homeinsider-offercard">
                  <div style={{ backgroundImage: v.image}} className="homeinsider-offercard-image" />
                  <div className="homeinsider-offercard-text">{v.name}</div>
                </div>
                ))
            }
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default InsideStore;
