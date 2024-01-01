import React, { useState } from "react";
import "./wheretobuy.css";
import { IoLocationSharp } from "react-icons/io5";
import GoogleMapReact from "google-map-react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const WhereToBuy = () => {
  const [address, setAddress] = useState()
  const [mapState, setMapState] = useState({
    lat: 10.99835602,
    lng: 77.01502627,
  });
  
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Get location is not here...");
    }
  }
  function showPosition(position) {
    const newObj = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setMapState(newObj);
  }
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 15,
  };
  const handleAddress = (e)=>{
    geocodeByAddress('Qrt 224 Area 37/b landhi 1')
   .then(results => getLatLng(results[0]))
  .then((data) =>
    setMapState(data)
  );
  }
  return (
    <div className="where-container">
      <div className="where-innercontainer1">
        <div
          style={{ backgroundImage: "url(/images/cover/wheretobuy.png)" }}
          className="where-innercontainer"
        >
          WHERE <br /> TO BUY
        </div>
        <div className="where-container-new">
          <div className="where-seperator"></div>
          <div className="where-seperator2">
            <div className="where-heading">ENTER YOUR LOCATION</div>
            <input
              className="where-search-field"
              placeholder="Search by zip, city, or storename"
              type="text"
              alt=""
            />
            {/* <GooglePlacesAutocomplete
              apiKey={"AIzaSyBMGnG8DmtiCc7yCgwTyS35iRyLV89qrtY"}
              selectProps={{
                placeholder: "Address *",
                name: "address",
                inputValue: address,
                onInputChange: (e) => {
                  setAddress(e);
                  handleAddress();
                },
                onChange: (place) => {
                  handleAddress(place.label);
                  // setErrorAddress(false);
                  console.log('Place sss... ',place);
                },
              }}
            /> */}
            <div className="current-location" onClick={getLocation}>
              <IoLocationSharp color="#EE2A2" size={20} />
              Use my current location
            </div>
            <div className="current-desc">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>
          </div>
        </div>
      </div>
      <div className="where-innercontainer2">
        {mapState.lat !== undefined && (
          <div
            className="map-div"
            style={{ height: "600px", width: "97%", borderRadius: 20 }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyBMGnG8DmtiCc7yCgwTyS35iRyLV89qrtY",
              }}
              defaultCenter={defaultProps.center}
              center={mapState}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={mapState.lat}
                lng={mapState.lng}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhereToBuy;
