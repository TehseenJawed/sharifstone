import { useState, useEffect } from "react";
import "./ChooseColor.css";
import Logo from "../../../assets/images/logo_footer.png";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";

const ChooseColor = ({ apiData, colorArray, updateColorArray, layoutData }) => {
  const [selectedColor, setSelectedColor] = useState(colorArray[0]);
  const [inputText, setInputText] = useState("");
  const [currentSide, setCurrentSide] = useState(false);
  const [selectedPicker, setSelectedPicker] = useState("Countertop");
  const [activeFloor, setActiveFloor] = useState(
    "url(images/color_collections/kitchen_visualizer/stones/lime_delight.jpg)"
  );
  const [activcounterTop, setActiveCounterTop] = useState(
    {
        name: 'Bohemian Flam',
        image: 'url(images/color_collections/kitchen_visualizer/stones/bohemian_flam.jpg)',
        relatedImage: 'url(images/color_collections/kitchen_visualizer/bohemian_flam.png)'
    },
  );

  const onColorSelect = (value) => {
    if (selectedPicker === "Floor") {
      setActiveFloor(value);
    } else {
      setActiveCounterTop(value);
    }
    setSelectedColor(value);
  };

  useEffect(() => {
    const newArray = colorArray.filter((v, i) => v.name === inputText);
    if (newArray.length >= 1) {
      updateColorArray(newArray);
    } else {
      updateColorArray(apiData);
    }
  }, [inputText]);
  return (
    <div className="choosecolor-container">
      <div className="choosecolor-innercontainer">
        <span className="choosecolor-cover">
          <Link to="/">
            <img src={Logo} />
          </Link>
          <div className="choosecolor-bgncontainer">
            <div
              onClick={() => setCurrentSide(false)}
              className={
                currentSide ? "choosecolor-btn" : "choosecolor-btn-active"
              }
            >
              Colors
            </div>
            <div
              onClick={() => setCurrentSide(true)}
              className={
                !currentSide ? "choosecolor-btn" : "choosecolor-btn-active"
              }
            >
              Ambients
            </div>
          </div>

          {currentSide ? (
            <div>
                <div className="choosecolor-amb-container">
                    {
                        layoutData.map((v,i) => <div
                        className="choosecolor-ambients-container"
                        style={{ backgroundImage: v.image }}
                      ></div>)
                    }
                    
                </div>
            </div>
          ) : (
            <div>
              <div className="choosecolor-topcontainer">
                <div className="choosecolor-palate-top">
                  <b>Floor</b>
                  <div
                    className="choosecolor-palete-container"
                    // onClick={() => setSelectedPicker("Floor")}
                    style={{
                      backgroundImage: activeFloor,
                      border:
                        selectedPicker === "Floor"
                          ? "3px solid #EE2A2E"
                          : "none",
                    }}
                  ></div>
                  <b>Tk05 Sabbia</b>
                </div>
                <div className="choosecolor-palate-top">
                  <b>Countertop</b>
                  <div
                    className="choosecolor-palete-container"
                    onClick={() => setSelectedPicker("Countertop")}
                    style={{
                      backgroundImage: activcounterTop.image,
                      border:
                        selectedPicker === "Countertop"
                          ? "3px solid #EE2A2E"
                          : "none",
                    }}
                  >
                  </div>
                  <b>{activcounterTop.name}</b>
                </div>
              </div>
              <div className="choosecolor-sel-container">
                <div className="choosecolor-selectcontainer">
                  <div>Select Color</div>
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Search"
                  />
                </div>
                {colorArray.map((v, i) => (
                  <div
                    className="choosecolor-palate"
                    onClick={() => onColorSelect(v)}
                  >
                    <div
                      className="choosecolor-palete-container"
                      style={{ backgroundImage: v.image }}
                    >
                      {
                        activcounterTop.name === v.name && <FaCheck color="#fff" style={{width: 30, height: 30}}/>
                      }
                    </div>
                    <div className="choosecolor-palate-b">{v.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </span>
      </div>
      <div
        style={{ backgroundImage: selectedColor.relatedImage }}
        className="choosecolor-innercontainer2"
      ></div>
    </div>
  );
};

export default ChooseColor;
