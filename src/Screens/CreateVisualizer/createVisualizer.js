import React, { useState } from "react";
import DropImage from "../../components/dropzone";
import { IoIosArrowDown } from "react-icons/io";
import './createVisualizer.css';
import axios from 'axios';

const CreateVisualizer = () => {
  const [formData, setFormData] = useState({});
  const color_image = useState("");
  const display_image = useState("");

  const handleCreateVisualizer = async () => {
    let newFormData = new FormData();
    const [colorImage, setColorImage] = color_image
    const [displayImage, setDisplayImage] = display_image
    newFormData.append("name", formData?.name)
    newFormData.append("images", colorImage[0])
    newFormData.append("images", displayImage[0])
    newFormData.append("category", formData.category)
    await axios.post('http://localhost:3005/api/collection', newFormData)
    .then((response) => {
      alert('Collection Created')
      setFormData({})
      setColorImage("")
      setDisplayImage("")
    })
    .catch(err => console.log('ERROR .. ',err?.response?.data?.message))
  }

  return (
    <div className="login-container">
      <div className="login-innercontainer">
        <div className="login-header">Create Visualizer</div>
        <input
          className="login-input"
          type="text"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
          placeholder="Color Name"
        />
        <div className="select-container">
          <select className="form-select">
            <option>Select</option>
            <option value="Kitchen">
              Kitchen
            </option>
            <option value="Bathroom">
              Bathroom
            </option>
          </select>
          <IoIosArrowDown className="select-form-icon" />
        </div>
        <input
          className="login-input"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          // value={formData.category}
          placeholder="Color Image URL"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          // value={formData.category}
          placeholder="Display Image URL"
        />
        {/* <DropImage states={color_image} text={"Select Color Image"} />
        <DropImage
          states={display_image}
          customStyle={{ backgroundColor: "#a4a7ff" }}
          text={"Select Present Image"}
        /> */}
        <button onClick={handleCreateVisualizer} className="login-btn">
          Create Visualizer
        </button>
      </div>
    </div>
  );
};

export default CreateVisualizer;
