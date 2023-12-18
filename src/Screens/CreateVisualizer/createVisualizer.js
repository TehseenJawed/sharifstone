import React, { useState } from "react";
import DropImage from "../../components/dropzone";
import { IoIosArrowDown } from "react-icons/io";
import './createVisualizer.css'

const CreateVisualizer = () => {
  const [formData, setFormData] = useState({});
  const color_image = useState("");
  const display_image = useState("");
  const createCollection = () => {};
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
          value={formData.category}
          placeholder="Category"
        />
        <DropImage states={color_image} text={"Select Color Image"} />
        <DropImage
          states={display_image}
          customStyle={{ backgroundColor: "#a4a7ff" }}
          text={"Select Present Image"}
        />
        <button onClick={createCollection} className="login-btn">
          Create Collection
        </button>
      </div>
    </div>
  );
};

export default CreateVisualizer;
