import { useState, useEffect } from 'react';
import './ChooseColor.css'
import Logo from '../../../assets/images/logo_footer.png';

const ChooseColor = ({apiData ,colorArray, updateColorArray}) => {
    const [selectedColor, setSelectedColor] = useState(colorArray[0])
    const [inputText, setInputText] = useState("")

    useEffect(() => {
        const newArray = colorArray.filter((v,i) => v.name === inputText);
        if(newArray.length >= 1) {
            updateColorArray(newArray)
        } else {
            updateColorArray(apiData)
        }

    },[inputText])
    return (
        <div className='choosecolor-container'>
            <div className='choosecolor-innercontainer'>
                <span className='choosecolor-cover'>
                    <img src={Logo} />
                    <div className='choosecolor-bgncontainer'>
                        <div className='choosecolor-btn-active'>Colors</div>
                        <div className='choosecolor-btn'>Ambients</div>
                    </div>
                    <div className='choosecolor-sel-container'>
                        <div className='choosecolor-selectcontainer'>
                            <div>Select Color</div>
                            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Search" />
                        </div>
                        {
                            colorArray.map((v, i) => (
                                <div className='choosecolor-palate' onClick={() => setSelectedColor(v)}>
                                    <div className='choosecolor-palete-container' style={{ backgroundImage: v.image }}></div>
                                    <b>{v.name}</b>
                                </div>
                            ))
                        }
                    </div>
                </span>
            </div>
            <div style={{ backgroundImage: selectedColor.relatedImage }} className='choosecolor-innercontainer2'></div>

        </div>
    )
}

export default ChooseColor