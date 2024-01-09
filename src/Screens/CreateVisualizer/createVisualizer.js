import React, { useState } from "react";
import DropImage from "../../components/dropzone";
import { IoIosArrowDown } from "react-icons/io";
import './createVisualizer.css';
import axios from 'axios';

const CreateVisualizer = () => {
  const [formData, setFormData] = useState({});
  const handleCreateVisualizer = async () => {
    const newObj = {
      ...formData,
      color_url: formData.color_name.replace(' ', '-')
    }
    console.log('DATA ---> ',newObj);
    await axios.post('https://sharifstone-server-3sm424vfs-tehseenjawed.vercel.app/api/visualizer', newObj)
    .then((response) => {
      alert('Visualizer Created')
      setFormData({})
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
          onChange={(e) => setFormData({ ...formData, color_name: e.target.value })}
          value={formData?.color_name}
          placeholder="Color Name"
        />
        <div className="select-container">
          <select className="form-select" value={formData?.room} onChange={(e) => setFormData({ ...formData, room: e.target.value })}>
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
            setFormData({ ...formData, color_image: e.target.value })
          }
          value={formData.color_image}
          placeholder="Color Image URL"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, ambient_one: e.target.value })
          }
          value={formData.ambient_one}
          placeholder="Ambient Image URL 1"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, ambient_two: e.target.value })
          }
          value={formData.ambient_two}
          placeholder="Ambient Image URL 2"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, ambient_three: e.target.value })
          }
          value={formData.ambient_three}
          placeholder="Ambient Image URL 3"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, ambient_four: e.target.value })
          }
          value={formData.ambient_four}
          placeholder="Ambient Image URL 4"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, ambient_five: e.target.value })
          }
          value={formData.ambient_five}
          placeholder="Ambient Image URL 5"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, ambient_six: e.target.value })
          }
          value={formData.ambient_six}
          placeholder="Ambient Image URL 6"
        />
        <button onClick={handleCreateVisualizer} className="login-btn">
          Create Visualizer
        </button>
      </div>
    </div>
  );
};

export default CreateVisualizer;
