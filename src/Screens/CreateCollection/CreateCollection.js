import React, {useState} from 'react'
import DropImage from '../../components/dropzone'
import './createCollection.css'
import axios from 'axios';

const CreateCollection = () => {
  const [formData, setFormData] = useState({})
  const color_image = useState("")
  const display_image = useState("")

  const handleCreateCollection = async () => {
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
    .catch(err => console.log('ERROR .. ',err.response.data.message))
  }
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
        <button onClick={handleCreateCollection} className="login-btn">Create Collection</button>
      </div>
    </div>
  )
}

export default CreateCollection
