import React from "react";
import VideoImage from '../../../assets/images/homeImage/video_image.png'
import "./AboutUS.css";
import InspireIdeas from '../../../assets/images/homeImage/inspire_ideas.png'
import VisualizeSpace from '../../../assets/images/homeImage/visualize_space.png'
import ViewColor from '../../../assets/images/homeImage/view_color.png'
import WhereToBuy from '../../../assets/images/homeImage/wheretobuy.png'
import YouTube from 'react-youtube';
import { Link } from "react-router-dom";

function AboutUS({data}) {
  const opts = {
    height: '500',
    width: '750',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const opts2 = {
    height: '550',
    width: '550',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const opts1024 = {
    height: '550',
    width: '470',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const opts1300 = {
    height: '550',
    width: '500',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const opts1400 = {
    height: '550',
    width: '500',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const opts_mobile = {
    height: '400',
    width: '560',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const opts_mobile2 = {
    height: '370',
    width: '330',
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
            image: InspireIdeas,
            href:"/",
          },
          {
            name: 'VISUALIZE YOUR SPACE',
            image: VisualizeSpace,
            href:"/kitchen-visualizer",
        },
        {
            name: 'VIEW COLORS CATALOG',
            image: ViewColor,
            href:"/quartz-collection",
        },
        {
            name: 'WHERE TO BUY',
            image: WhereToBuy,
            href:"/where-to-buy",
        }
    ]
    const {openQuote, setOpenQuote} = data
  return (
    <div className="home-aboutconatiner">
      <div className="home-aboutinnercontainer">
        <div className="home-aboutheading">ABOUT US</div>

        <hr style={{ margin: "20px 0px", border: '0.5px solid #D9D9D9', opacity: 0.9}} />
        <div className="home-aboutsubcontainer">
          <div className="home-about-sections specififc-video">
            <YouTube iframeClassName="youtube-iframe" videoId="Zv11L-ZfrSg" opts={window.outerWidth <= 768 ? window.outerWidth <= 425 ? opts_mobile2 : opts_mobile : window.outerWidth > 1024 ? window.outerWidth <= 1150 ? opts1024 : window.outerWidth <= 1300 ? opts1300 : window.outerWidth <= 1660 ? opts1400 : opts : opts} onReady={_onReady} />
          </div>
          <div className="home-about-sections">
            <span>
              Sharifstone is a renowned company in the United States
              specializing in stones, marble, granite, and quartz. With over 30
              years of experience, we take pride in providing our customers with
              top-quality products at the best prices. Our extensive selection
              and commitment to exceeding customer expectations makes us stand
              out in the industry. <br /> <br />  At Sharifstone, we have a dedicated team that
              guides the customers through the entire process, offering tailored
              solutions for residential, commercial, and architectural projects. 
              With our unwavering dedication to professionalism and customer
              satisfaction, Sharifstone has established lasting relationships
              with clients nationwide. <br /> <br />  Discover the perfect stones for your
              project with Sharifstone!
            </span>
            <div className="home-discover-container"><div onClick={() => setOpenQuote(true)} className="home-discovercollection-button">Get a Quote</div></div>
          </div>
        </div>
        <div className="home-aboutcard">
            {
                aboutIdeas.map((v,i) => (
                    <Link to={v.href} className="home-aboutcards" style={{textDecoration: 'none'}}>
                        <img src={v.image} />
                        <div>{v.name}</div>
                    </Link>
                ))
            }
            
        </div>
      </div>
    </div>
  )
}

export default AboutUS;
