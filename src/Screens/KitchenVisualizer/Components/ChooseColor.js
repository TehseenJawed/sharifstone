import { useState, useEffect } from 'react';
import './ChooseColor.css'
import Logo from '../../../assets/images/logo_footer.png';
import { Link } from 'react-router-dom';

const ChooseColor = ({apiData ,colorArray, updateColorArray}) => {
    const [selectedColor, setSelectedColor] = useState(colorArray[0])
    const [inputText, setInputText] = useState("")
    const [currentSide, setCurrentSide] = useState(false)

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
                    <Link to="/"><img src={Logo} /></Link>
                    <div className='choosecolor-bgncontainer'>
                        <div onClick={() => setCurrentSide(false)} className={currentSide ? 'choosecolor-btn' : 'choosecolor-btn-active'}>Colors</div>
                        <div onClick={() => setCurrentSide(true)} className={!currentSide ? 'choosecolor-btn' : 'choosecolor-btn-active'}>Ambients</div>
                    </div>

                    <div className='choosecolor-topcontainer'>
                        <div className='choosecolor-palate-top'>
                          <b>Floor</b>
                          <div className='choosecolor-palete-container' style={{ backgroundImage: 'url(images/Tk05.png)' }}></div>
                          <b>Tk05 Sabbia</b>
                        </div>
                        <div className='choosecolor-palate-top'>
                          <b>Countertop</b>
                          <div className='choosecolor-palete-container' style={{ backgroundImage: 'url(images/parisien.png)', border: '3px solid #EE2A2E', }}></div>
                          <b>Parisien Bleu</b>
                        </div>
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
                                    <div className='choosecolor-palate-b'>{v.name}</div>
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