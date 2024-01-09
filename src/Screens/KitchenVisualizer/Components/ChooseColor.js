import { useState, useEffect, useContext } from "react";
import "./ChooseColor.css";
import Logo from "../../../assets/images/logo_footer.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import APIContext from "../../../Store/apiContext";
import FloorColor from "../../../assets/images/lime_delight.jpg";

const ChooseColor = ({
  apiData,
  colorArray,
  updateColorArray,
  layoutData,
  ambient,
}) => {
  const [selectedColor, setSelectedColor] = useState(colorArray[0]);
  const [inputText, setInputText] = useState("");
  const [currentSide, setCurrentSide] = useState(false);
  const [selectedPicker, setSelectedPicker] = useState("Countertop");
  const [activeFloor, setActiveFloor] = useState(
    "url(images/color_collections/kitchen_visualizer/stones/lime_delight.jpg)"
  );
  const [activcounterTop, setActiveCounterTop] = useState();
  const { apiStore, setAPIStore } = useContext(APIContext);
  const [selectedAPIStore, setSelectedAPIStore] = useState(apiStore?.visualizers);
  const navigate = useNavigate();
  const params = useParams();
  const { currentAmbient, setCurrentAmbient } = ambient;
  const onColorSelect = (value) => {
    if (selectedPicker === "Floor") {
      setActiveFloor(value);
    } else {
      setActiveCounterTop(value);
    }
    setSelectedColor(value);
    navigate(`/kitchen-visualizer/${value?.color_url}`, { replace: true });
  };
  const selectAmbient = ({ value }) => {
    setCurrentAmbient(value);
    setCurrentSide(false);
  };
  useEffect(() => {
    const newArray = apiStore?.visualizers?.filter(
      (v, i) => v?.color_name === inputText
    );
    if (newArray.length >= 1) {
      console.log('NewArray 222');
      setSelectedAPIStore(newArray);
    } 
  }, [inputText]);
  useEffect(() => {
    if (apiStore?.visualizers) {
      setActiveCounterTop(apiStore?.visualizers[0]);
      setSelectedColor(apiStore?.visualizers[0]);
      if (params?.color !== "kitchen-visualizer") {
        const selectedColor = apiStore?.visualizers?.find(
          (value) => value.color_url === params?.color
        );
        if (!!selectedColor) {
          setActiveCounterTop(selectedColor);
          setSelectedColor(selectedColor);
        }
      }
    }
  }, [apiStore]);
  useEffect(() => {
    if (apiStore?.visualizers) {
      if (params?.color === "kitchen-visualizer") {
        navigate(`/kitchen-visualizer/${apiStore?.visualizers[0]?.color_url}`, {
          replace: true,
        });
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
                {layoutData.map((v, i) => (
                  <img
                    onClick={() => selectAmbient(v)}
                    className="choosecolor-ambients-container"
                    src={v?.image}
                    alt="ALT"
                  />
                ))}
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
                      backgroundImage: `url(${FloorColor})`,
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
                  ></div>
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
                {inputText !== "" ? (
                  <>
                    {selectedAPIStore?.map((v, i) => (
                      <div
                        className="choosecolor-palate"
                        onClick={() => onColorSelect(v)}
                      >
                        <div
                          className="choosecolor-palete-container"
                          style={{ backgroundImage: `url(${v.color_image})` }}
                        >
                          {activcounterTop?.color_name === v?.color_name && (
                            <FaCheck
                              color="#fff"
                              style={{ width: 30, height: 30 }}
                            />
                          )}
                        </div>
                        <div className="choosecolor-palate-b">
                          {v?.color_name}
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {apiStore?.visualizers?.map((v, i) => (
                      <div
                        className="choosecolor-palate"
                        onClick={() => onColorSelect(v)}
                      >
                        <div
                          className="choosecolor-palete-container"
                          style={{ backgroundImage: `url(${v.color_image})` }}
                        >
                          {activcounterTop?.color_name === v?.color_name && (
                            <FaCheck
                              color="#fff"
                              style={{ width: 30, height: 30 }}
                            />
                          )}
                        </div>
                        <div className="choosecolor-palate-b">
                          {v?.color_name}
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}
        </span>
      </div>
      <div
        style={{
          backgroundImage: `url(${selectedColor[`ambient_${currentAmbient}`]})`,
        }}
        className="choosecolor-innercontainer2"
      ></div>
      <div
        style={{
          backgroundImage: `url(https://lh3.googleusercontent.com/drive-viewer/AEYmBYT1VVIUvYS1lxIcraPDwHOhoY84lkp-LcDAf1UWc9h4RIK7Zje0s_UuTAbeJyDhXhcjR1NZKUUPYI9n3F3Ejv2Jk_G5=w1920-h929)`,
        }}
        className="choosecolor-innercontainer3"
      />
    </div>
  );
};

export default ChooseColor;
