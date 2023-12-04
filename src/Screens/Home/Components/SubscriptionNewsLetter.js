import "./SubscriptionNewsLetter.css";
import BG from "../../../assets/images/homeImage/subscript_bg.png";
import { IoIosSend } from "react-icons/io";

const SubscriptionNewsLetter = () => {
  return (
    <div className="home-subscribe">
      <div className="home-subscription-container">
        <div className="home-subscription-header">
          SUBSCRIBE TO OUR NEWSLETTER TO GET UPDATES ON NEW PROMOTIONS AND
          PRODUCTS
        </div>
        <div style={{ display: "flex", marginBottom: 30, zIndex: 1 }}>
          <input
            className="home-subscript-input"
            placeholder="Enter Your Email"
            type="text"
          />
          <div className="home-subscription-btn">
            {window.outerWidth <= 768 ? (
              <IoIosSend size={30} color={"white"} />
            ) : (
              "Subscribe"
            )}
          </div>
        </div>
        <img className="home-subscrion-bg" src={BG} />
      </div>
    </div>
  );
};

export default SubscriptionNewsLetter;
