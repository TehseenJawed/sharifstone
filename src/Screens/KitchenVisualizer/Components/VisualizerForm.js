import { useState } from "react";
import "./VisualizerForm.css";
import Logo from "../../../assets/images/logo_footer.png";
import { GoArrowUpRight } from "react-icons/go";
import Carousel from "react-multi-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button className="carousel-btn" onClick={() => onClick()}><FaChevronLeft size={15} color={'#fff'}/></button>;
};

const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className="carousel-btn" onClick={() => onClick()}><FaChevronRight size={15} color={'#fff'}/></button>;
  };

const VisualizerForm = ({ data }) => {
  const [layout, setLayout] = useState("Kitchen");
  const [changeImageLayout, setChangeImageLayout] = useState("Kitchen");
  const { currentScreen, setCurrentScreen } = data;
  const kitchenLayout = [
    {
      image: "url(images/layout/kitchen_1.png)",
    },
    {
      image: "url(images/layout/kitchen_2.png)",
    },
    {
      image: "url(images/layout/kitchen_3.png)",
    },
    {
      image: "url(images/layout/kitchen_4.png)",
    },
    {
      image: "url(images/layout/kitchen_5.png)",
    },
    {
      image: "url(images/layout/kitchen_6.png)",
    },
  ];
  const bathroomLayout = [
    {
      image: "url(images/layout/bathroom_1.png)",
    },
    {
      image: "url(images/layout/bathroom_2.png)",
    },
    {
      image: "url(images/layout/bathroom_3.png)",
    },
    {
      image: "url(images/layout/bathroom_4.png)",
    },
    {
      image: "url(images/layout/bathroom_5.png)",
    },
    {
      image: "url(images/layout/bathroom_6.png)",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  console.log("5555", layout, "Kitchen");
  const LayoutJSX = (imageLayout = 'Kitchen', layoutArray = kitchenLayout) => (
      layout === imageLayout && (
          layoutArray.map((v, i) => (
              <div className='visualizerform-image' style={{ backgroundImage: v.image }}>
                  {i === 0 && (
                      <div
                          onClick={layout === 'Kitchen' ? () => setCurrentScreen('Pick Kitchen') : () => setCurrentScreen('Pick Bathroom')}
                          className="discover-collectionexpand"
                      >
                          <GoArrowUpRight size={35} color="white" />
                      </div>
                  )}
              </div>
          ))
      )
  )
  const LayoutMobileJSX = (imageLayout = "Kitchen", layoutArray = kitchenLayout) =>
    layout === imageLayout && (
      <Carousel
        containerClass="carousel-container"
        draggable={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        responsive={responsive}
      >
        {layoutArray.map((v, i) => (
          <div
            className="visualizerform-image"
            style={{ backgroundImage: v.image }}
          >
            {i === 0 && (
              <div
                onClick={
                  layout === "Kitchen"
                    ? () => setCurrentScreen("Pick Kitchen")
                    : () => setCurrentScreen("Pick Bathroom")
                }
                className="discover-collectionexpand"
              >
                <GoArrowUpRight size={35} color="white" />
              </div>
            )}
          </div>
        ))}
      </Carousel>
    );
console.log('gggg',window.outerWidth <= 425);
  return (
    <div
      className="visualizerform-container"
      style={{ backgroundImage: "url(images/cover/visualizer_form_bg.png)" }}
    >
      <Link to="/"><img src={Logo} /></Link>
       <div className="visualizerform-heading">SELECT KITCHEN LAYOUT</div>
      <div className="visualizerform-form">
        <div className="visualizerform-itembtn">
          <div
            onClick={() => setLayout("Kitchen")}
            className={
              layout === "Kitchen"
                ? "visualizerform-btn1"
                : "visualizerform-btn2"
            }
          >
            Kitchen
          </div>
          <div
            onClick={() => setLayout("Bathroom")}
            className={
              layout === "Bathroom"
                ? "visualizerform-btn1"
                : "visualizerform-btn2"
            }
          >
            Bathroom
          </div>
        </div>
        <div className="visualizerform-items">
          {
            window.outerWidth <= 425 ? LayoutMobileJSX("Kitchen", kitchenLayout) : LayoutJSX("Kitchen", kitchenLayout)
          }
          {
            window.outerWidth <= 425 ? LayoutMobileJSX("Bathroom", bathroomLayout) : LayoutJSX("Bathroom", bathroomLayout)
          }
        </div>
      </div>
    </div>
  );
};

export default VisualizerForm;
