import React, {useContext} from 'react'
import './viewVisualizer.css'
import axios from 'axios';
import APIContext from '../../Store/apiContext';

const ViewVisualizer = () => {
  const {apiStore, setAPIStore} = useContext(APIContext) 
  console.log('Working...',apiStore);
  return (
    <div className="login-container">
      
    </div>
  )
}

export default ViewVisualizer
