import React, {useState} from 'react'
import DropImage from '../../components/dropzone'
import './createCollection.css'

const CreateCollection = () => {
  const [formData, setFormData] = useState({})
  const color_image = useState("")
  const display_image = useState("")
  const createCollection = () => {}
  console.log('444',color_image);
  return (
    <div className="login-container">
      <div className="login-innercontainer">
        <div className="login-header">Create Collection</div>
        <input
          className="login-input"
          type="text"
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          value={formData.name}
          placeholder="Color Name"
        />
        <input
          className="login-input"
          type="text"
          onChange={(e) => setFormData({...formData, category: e.target.value})}
          value={formData.category}
          placeholder="Category"
        />
        <DropImage states={color_image} text={"Select Color Image"}/>
        <DropImage states={display_image} customStyle={{backgroundColor: '#a4a7ff'}} text={"Select Present Image"}/>
        <button onClick={createCollection} className="login-btn">Create Collection</button>
      </div>
    </div>
  )
}

export default CreateCollection
