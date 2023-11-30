import { useState } from 'react';
import './ChooseColor.css'
import Logo from '../../../assets/images/logo_footer.png';

const ChooseColor = () => {
    const [selectedColor, setSelectedColor] = useState(
        {
            name: 'Bohemian Flam',
            image: 'url(images/color_collections/kitchen_visualizer/stones/bohemian_flam.jpg)',
            relatedImage: 'url(images/color_collections/kitchen_visualizer/bohemian_flam.png)'
        }
    )
    const colorArray = [
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
                            <input type="text" placeholder="Search" />
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