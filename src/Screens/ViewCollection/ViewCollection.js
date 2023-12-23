import React, {useContext} from 'react'
import './ViewCollection.css'
import axios from 'axios';
import APIContext from '../../Store/apiContext';

const ViewCollection = () => {
  const {apiStore, setAPIStore} = useContext(APIContext) 
  console.log('Working...',apiStore);
  return (
    <div className="login-container">
      
    </div>
  )
}

export default ViewCollection
