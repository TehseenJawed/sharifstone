import axios from 'axios';
import { useContext } from 'react';
import APIContext from "../Store/contextStore";
const apiEndpoint = 'http://localhost:3005/api/'

const getCollection = async () => {

// const {store, setStore} = useContext(APIContext)
    return await axios.get(`${apiEndpoint}collection`)
    .then((response) => {
        // console.log('RESPONSE .... ',response?.data?.result)
        return response?.data?.result
    })
    .catch((err) => alert(err.response.data.message))
}


export {
    getCollection
};