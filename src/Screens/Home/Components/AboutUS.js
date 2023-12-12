import React from "react";
import VideoImage from '../../../assets/images/homeImage/video_image.png'
import "./AboutUS.css";
import InspireIdeas from '../../../assets/images/homeImage/inspire_ideas.png'
import VisualizeSpace from '../../../assets/images/homeImage/visualize_space.png'
import ViewColor from '../../../assets/images/homeImage/view_color.png'
import WhereToBuy from '../../../assets/images/homeImage/wheretobuy.png'
import YouTube from 'react-youtube';

function AboutUS({data}) {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const opts_mobile = {
    height: '390',
    width: '320',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

    const aboutIdeas = [
        {
            name: 'INSPIRATION IDEAS',
            image: InspireIdeas
        },
        {
            name: 'VISUALIZE YOUR SPACE',
            image: VisualizeSpace
        },
        {
            name: 'VIEW COLORS CATALOG',
            image: ViewColor
        },
        {
            name: 'WHERE TO BUY',
            image: WhereToBuy
        }
    ]
    const {openQuote, setOpenQuote} = data
  return (
    <div className="home-aboutconatiner">
      <div className="home-aboutinnercontainer">
        <div className="home-aboutheading">ABOUT US</div>
        <hr style={{ margin: "20px 0px" }} />
        <div className="home-aboutsubcontainer">
          <div className="home-about-sections specififc-video">
            <YouTube videoId="Zv11L-ZfrSg" opts={window.outerWidth <= 600 ? opts_mobile : opts} onReady={_onReady} />;
            {/* <img src={VideoImage} style={{width:'100%'}} /> */}
          </div>
          <div className="home-about-sections">
            <span>
              Sharifstone is a renowned company in the United States
              specializing in stones, marble, granite, and quartz. With over 30
              years of experience, we take pride in providing our customers with
              top-quality products at the best prices. Our extensive selection
              and commitment to exceeding customer expectations makes us stand
              out in the industry. <br /> <br /> At Sharifstone, we have a dedicated team that
              guides the customers through the entire process, offering tailored
              solutions for residential, commercial, and architectural projects.
              With our unwavering dedication to professionalism and customer
              satisfaction, Sharifstone has established lasting relationships
              with clients nationwide. <br /> <br /> Discover the perfect stones for your
              project with Sharifstone!
            </span>
            <div style={{display: 'flex'}}><div onClick={() => setOpenQuote(true)} className="home-discovercollection-button">Get a Quote</div></div>
          </div>
        </div>
        <div className="home-aboutcard">
            {
                aboutIdeas.map((v,i) => (
                    <div className="home-aboutcards">
                        <img src={v.image} />
                        <div>{v.name}</div>
                    </div>
                ))
            }
            
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
