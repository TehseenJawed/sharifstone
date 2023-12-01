import React, {useState} from "react";
import "./Gallery.css";
import DummyImage from '../../../assets/images/homeImage/gallery_dummy.png'

function Gallery() {
    const [currentImage,setCurrentImage] = useState('Kitchen')
    const galleryType = ['Kitchen', 'Bathroom', 'Living Rooms']
  return (
    <div className="home-aboutconatiner" style={{margin: '100px 0px'}}>
      <div className="home-aboutinnercontainer">
        <div className="home-aboutheading">GALLERY</div>
        <hr style={{ margin: "20px 0px" }} />

        <div className="home-gallerycontainer">
          <div className="home-gallerysub-container1">
            <div className="home-gallery-contain">
                {
                    galleryType.map((v,i) => <div onClick={() => setCurrentImage(v)} style={{color: currentImage === v ? '#EE2A2E' : ''}} className="homecontainer1-tabs">{v}</div>)
                }
            </div>
            <div className="homebrand-dowmloadcontainer">
              <div className="homebrand-button">
                View All Products
              </div>
            </div>
          </div>
          <div className="home-gallerysub-container2">
            <img src={DummyImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
