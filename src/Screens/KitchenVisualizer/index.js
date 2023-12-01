import { useState, useEffect } from 'react'
import './KitchenVisualizer.css'
import Logo from '../../assets/images/logo_footer.png'
import VisualizerForm from './Components/VisualizerForm'
import ChooseColor from './Components/ChooseColor'

const KitchenVisualizer = () => {
    const [currentScreen, setCurrentScreen] = useState('start')
    const [kitchenData, setKitchData] = useState()
    const kitchenArray = [
        {
            name: 'Bohemian Flam',
            image: 'url(images/color_collections/kitchen_visualizer/stones/bohemian_flam.jpg)',
            relatedImage: 'url(images/color_collections/kitchen_visualizer/bohemian_flam.png)'
        },
        {
            name: 'Brass Relish',
            image: 'url(images/color_collections/kitchen_visualizer/stones/brass_relish.jpg)',
            relatedImage: 'url(images/color_collections/kitchen_visualizer/brass_relish.png)'
        },
        {
            name: 'Cinder Craze',
            image: 'url(images/color_collections/kitchen_visualizer/stones/cinder_craze.jpg)',
            relatedImage: 'url(images/color_collections/kitchen_visualizer/cinder_craze.png)'
        },
        {
            name: 'Concrete Pulse',
            image: 'url(images/color_collections/kitchen_visualizer/stones/concrete_pulse.jpg)',
            relatedImage: 'url(images/color_collections/kitchen_visualizer/concrete_pulse.png)'
        },
        {
            name: 'Electric Pearl',
            image: 'url(images/color_collections/kitchen_visualizer/stones/electric_pearl.png)',
            relatedImage: 'url(images/color_collections/kitchen_visualizer/electric_pearl.png)'
        },
        {
            name: 'Lime Delight',
            image: 'url(images/color_collections/kitchen_visualizer/stones/lime_delight.jpg)',
            relatedImage: 'url(images/color_collections/kitchen_visualizer/lime_delight.png)'
        },
        {
            name: 'Perisien Blue',
            image: 'url(images/color_collections/kitchen_visualizer/stones/perisien_blue.png)',
            relatedImage: 'url(images/color_collections/kitchen_visualizer/perisien_blue.png)'
        },
        {
            name: 'Romantic Ash',
            image: 'url(images/color_collections/kitchen_visualizer/stones/romantic_ash.jpg)',
            relatedImage: 'url(images/color_collections/kitchen_visualizer/romantic_ash.png)'
        },
        {
            name: 'Versailles Ivory',
            image: 'url(images/color_collections/kitchen_visualizer/stones/versailles_ivory.jpg)',
            relatedImage: 'url(images/color_collections/kitchen_visualizer/versailles_ivory.png)'
        },
        {
            name: 'Victorian Silver',
            image: 'url(images/color_collections/kitchen_visualizer/stones/victorian_silver.jpg)',
            relatedImage: 'url(images/color_collections/kitchen_visualizer/victorian_silver.png)'
        },
    ]
    const bathroomArray = [
        {
            name: 'Bohemian Flam',
            image: 'url(images/color_collections/bathroom_visualizer/stones/bohemian_flam.jpg)',
            relatedImage: 'url(images/color_collections/bathroom_visualizer/bohemian_flam.png)'
        },
        {
            name: 'Brass Relish',
            image: 'url(images/color_collections/bathroom_visualizer/stones/brass_relish.jpg)',
            relatedImage: 'url(images/color_collections/bathroom_visualizer/brass_relish.png)'
        },
        {
            name: 'Cinder Craze',
            image: 'url(images/color_collections/bathroom_visualizer/stones/cinder_craze.jpg)',
            relatedImage: 'url(images/color_collections/bathroom_visualizer/cinder_craze.png)'
        },
        {
            name: 'Concrete Pulse',
            image: 'url(images/color_collections/bathroom_visualizer/stones/concrete_pulse.jpg)',
            relatedImage: 'url(images/color_collections/bathroom_visualizer/concrete_pulse.png)'
        },
        {
            name: 'Electric Pearl',
            image: 'url(images/color_collections/bathroom_visualizer/stones/electric_pearl.png)',
            relatedImage: 'url(images/color_collections/bathroom_visualizer/electric_pearl.jpg)'
        },
        {
            name: 'Lime Delight',
            image: 'url(images/color_collections/bathroom_visualizer/stones/lime_delight.jpg)',
            relatedImage: 'url(images/color_collections/bathroom_visualizer/lime_delight.png)'
        },
        {
            name: 'Perisien Blue',
            image: 'url(images/color_collections/bathroom_visualizer/stones/perisien_blue.png)',
            relatedImage: 'url(images/color_collections/bathroom_visualizer/perisian_blue.jpg)'
        },
        {
            name: 'Romantic Ash',
            image: 'url(images/color_collections/bathroom_visualizer/stones/romantic_ash.jpg)',
            relatedImage: 'url(images/color_collections/bathroom_visualizer/romantic_ash.png)'
        },
        {
            name: 'Versailles Ivory',
            image: 'url(images/color_collections/bathroom_visualizer/stones/versailles_ivory.jpg)',
            relatedImage: 'url(images/color_collections/bathroom_visualizer/versailles_ivory.jpg)'
        },
        {
            name: 'Victorian Silver',
            image: 'url(images/color_collections/bathroom_visualizer/stones/victorian_silver.jpg)',
            relatedImage: 'url(images/color_collections/bathroom_visualizer/victorian_silver.png)'
        },
    ]

    useEffect(() => {
        setKitchData(kitchenArray)
    },[])
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
                currentScreen === "Pick Kitchen" && (<ChooseColor apiData={kitchenArray} colorArray={kitchenData} updateColorArray={setKitchData}/>)
            }
            {
                currentScreen === "Pick Bathroom" && (<ChooseColor colorArray={bathroomArray} updateColorArray={setKitchData}/>)
            }
        </>
    )
}

export default KitchenVisualizer