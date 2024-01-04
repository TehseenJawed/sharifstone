import { useState, useEffect, useContext } from "react";
import "./ChooseColor.css";
import Logo from "../../../assets/images/logo_footer.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import APIContext from "../../../Store/apiContext";

const ChooseColor = ({ apiData, colorArray, updateColorArray, layoutData }) => {
  const [selectedColor, setSelectedColor] = useState(colorArray[0]);
  const [inputText, setInputText] = useState("");
  const [currentSide, setCurrentSide] = useState(false);
  const [selectedPicker, setSelectedPicker] = useState("Countertop");
  const [ambient, setAmbient] = useState('one')
  const [activeFloor, setActiveFloor] = useState(
    "url(images/color_collections/kitchen_visualizer/stones/lime_delight.jpg)"
  );
  const [activcounterTop, setActiveCounterTop] = useState();
  const {apiStore, setAPIStore} = useContext(APIContext)
  const navigate = useNavigate()
  const params = useParams()
  console.log('555',params?.color);
  const onColorSelect = (value) => {
    console.log('4444',value);
    if (selectedPicker === "Floor") {
      setActiveFloor(value);
    } else {
      console.log('New work....');
      setActiveCounterTop(value);
    }
    setSelectedColor(value);
    navigate(`/kitchen-visualizer/${value?.color_url}`, { replace: true });
  };

  useEffect(() => {
    const newArray = colorArray.filter((v, i) => v?.color_name === inputText);
    if (newArray.length >= 1) {
      updateColorArray(newArray);
    } else {
      updateColorArray(apiData);
    }
  }, [inputText]);
  useEffect(() => {
    if(apiStore?.visualizers){
      setActiveCounterTop(apiStore?.visualizers[0])
      setSelectedColor(apiStore?.visualizers[0])
    }
  }, [apiStore]);
  useEffect(() => {
    console.log('GOOO ',apiStore?.visualizers, apiStore?.visualizers);
    if(apiStore?.visualizers){
      if(params?.color === "kitchen-visualizer") {
        navigate(`/kitchen-visualizer/${apiStore?.visualizers[0]?.color_url}`, { replace: true });
      }
    }
  }, []);
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
                        style={{ backgroundImage: `url(${v.image})` }}
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
                      backgroundImage: `url(${activcounterTop?.color_image})`,
                      border:
                        selectedPicker === "Countertop"
                          ? "3px solid #EE2A2E"
                          : "none",
                    }}
                  >
                  </div>
                  <b>{activcounterTop?.color_name}</b>
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
                {apiStore?.visualizers?.map((v, i) => (
                  <div
                    className="choosecolor-palate"
                    onClick={() => onColorSelect(v)}
                  >
                    <div
                      className="choosecolor-palete-container"
                      style={{ backgroundImage: `url(${v.color_image})` }}
                    >
                      {
                        activcounterTop?.color_name === v?.color_name && <FaCheck color="#fff" style={{width: 30, height: 30}}/>
                      }
                    </div>
                    <div className="choosecolor-palate-b">{v?.color_name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </span>
      </div>
      <div
        style={{ backgroundImage: `url(${selectedColor?.ambient_one})` }}
        className="choosecolor-innercontainer2"
      ></div>
      <div
        // style={{ backgroundImage: `url(${apiStore?.visualizers[0]?.ambient_one})` }}
        className="choosecolor-innercontainer3"
      />
    </div>
  );
};

export default ChooseColor;
