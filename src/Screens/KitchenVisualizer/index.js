import { useState } from 'react'
import './KitchenVisualizer.css'
import Logo from '../../assets/images/logo_footer.png'
import VisualizerForm from './Components/VisualizerForm'
import ChooseColor from './Components/ChooseColor'

const KitchenVisualizer = () => {
    const [currentScreen, setCurrentScreen] = useState('start')
    // return(
    //     <ChooseColor />
    //     // <VisualizerForm />
    // )
    console.log('555555',currentScreen);
    return (
        <>
            {
                currentScreen === "start" && (
                    <div className='kitchen-visualizer-container' style={{ backgroundImage: 'url(images/cover/Visualizer_img.png)' }}>
                        <div className='kitchen-visualizer-logo'>
                            <img src={Logo} />
                        </div>
                        <div className='kitchen-visualizer-startform'>
                            <div className='kitchen-visualizer-section'>
                                <span>SHARIFSTONE ONLINE VISUALIZER</span>
                                <div>
                                    Our Kitchen and Bathroom Visualizer allows you to explore different colors, materials, and design options, helping you envision the perfect look for your space. With just a few clicks, you can select from a wide range of cabinets, countertops, and backsplashes. Experiment with various color schemes, textures, and finishes to create a personalized kitchen that reflects your style and taste.
                                </div>
                            </div>
                            <div className='kitchen-visualizer-section'>
                                <div onClick={() => setCurrentScreen("Visualizer Form")} className='kitchen-visualizer-startbtn'>Start</div>
                            </div>
                        </div>
                    </div>
                )
            }

            {
                currentScreen === "Visualizer Form" && (<VisualizerForm  data={{currentScreen, setCurrentScreen}}/>)
            }
            {
                currentScreen === "Pick Kitchen" && (<ChooseColor />)
            }
        </>
    )
}

export default KitchenVisualizer