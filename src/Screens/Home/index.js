import React, {useState} from "react";
import "./home.css";
import CoverImage from "../../assets/images/homeImage/landingcover.png";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import bgDesign from '../../assets/images/bg_S_white.png'
import DiscoverCollection from "./Components/DiscoverCollection";
import AboutUS from "./Components/AboutUS";
import QuartzAdvantage from "./Components/QuartzAdvantage";
import Gallery from "./Components/Gallery";

function HomeScreen() {
    const [activeColor, setActiveColor] = useState(0)
    const colorCarousel = ["url(images/color_1.png)", "url(images/color_2.png)", "url(images/color_3.png)"]

    const changeColor = (isNext) => {
        if(isNext) {
            if(activeColor === 2){
                setActiveColor(0)
            } else {
                setActiveColor(activeColor + 1)
            }
        } else {
            if(activeColor === 0){
                setActiveColor(2)
            } else {
                setActiveColor(activeColor - 1)
            }
        }
    }
  return (
    <div>
      <div className="home-container">
        <img className="home-coverimage" src={CoverImage} alt="" />
        <div className="home-covercard">
          <div className="covercard-headertext">
            Building Memories, One Stone at a Time
          </div>

          <div className="covercard-subcontainer">
            <div className="homecard-color-carousel">
                <HiArrowLongLeft onClick={() => changeColor(false)} size={40} color={'#fff'}/>
                {
                    colorCarousel.map((v,i) => <div onClick={() => setActiveColor(i)} className="homecard-color-card"  style={{ backgroundImage: v , border: activeColor === i ? '3px solid black' : ''}}></div>)
                }
                <HiArrowLongRight onClick={() => changeColor(true)} size={40} color={'#fff'}/>
            </div>

            <div className="covercard-bottomcontainer">
                <div className="covercard-bottomtext">
                  Beauty and quality beyond imagination. Service beyond what's expected.
                </div>
                <div className="covercard-collectionbtn">View Collection</div>
                <img className="covercar-image" src={bgDesign} />
            </div>
          </div>
        </div>
      </div>

      <DiscoverCollection />
      <AboutUS />
      <QuartzAdvantage />
      <Gallery />
    </div>
  );
}

export default HomeScreen;
