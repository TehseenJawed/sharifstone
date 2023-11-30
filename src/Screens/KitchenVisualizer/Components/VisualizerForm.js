import { useState } from 'react';
import './VisualizerForm.css';
import Logo from '../../../assets/images/logo_footer.png';
import { GoArrowUpRight } from "react-icons/go";

const VisualizerForm = ({data}) => {
    const [layout, setLayout] = useState('Kitchen')
    const [changeImageLayout, setChangeImageLayout] = useState("Kitchen")
    const {currentScreen, setCurrentScreen} = data
    const kitchenLayout = [
        {
            image: 'url(images/layout/kitchen_1.png)',
        },
        {
            image: 'url(images/layout/kitchen_2.png)',
        },
        {
            image: 'url(images/layout/kitchen_3.png)',
        },
        {
            image: 'url(images/layout/kitchen_4.png)',
        },
        {
            image: 'url(images/layout/kitchen_5.png)',
        },
        {
            image: 'url(images/layout/kitchen_6.png)',
        },
    ]
    const bathroomLayout = [
        {
            image: 'url(images/layout/bathroom_1.png)',
        },
        {
            image: 'url(images/layout/bathroom_2.png)',
        },
        {
            image: 'url(images/layout/bathroom_3.png)',
        },
        {
            image: 'url(images/layout/bathroom_4.png)',
        },
        {
            image: 'url(images/layout/bathroom_5.png)',
        },
        {
            image: 'url(images/layout/bathroom_6.png)',
        },
    ]

    console.log('5555',layout, 'Kitchen')
    const LayoutJSX = (imageLayout = 'Kitchen', layoutArray = kitchenLayout) => (
        layout === imageLayout && (
            layoutArray.map((v, i) => (
                <div className='visualizerform-image' style={{ backgroundImage: v.image }}>
                    {i === 0 && (
                        <div
                            onClick={layout === 'Kitchen' ? () => setCurrentScreen('Pick Kitchen') : () => setCurrentScreen('Pick Bathroom')}
                            className="discover-collectionexpand"
                        >
                            <GoArrowUpRight size={35} color="white" />
                        </div>
                    )}
                </div>
            ))
        )
    )
    return (
        <div className="visualizerform-container" style={{ backgroundImage: 'url(images/cover/visualizer_form_bg.png)' }}>
            <img src={Logo} />
            <div className='visualizerform-heading'>SELECT KITCHEN LAYOUT</div>
            <div className='visualizerform-form'>
                <div className='visualizerform-itembtn'>
                    <div onClick={() => setLayout('Kitchen')} className={layout === 'Kitchen' ? 'visualizerform-btn1' : 'visualizerform-btn2'}>Kitchen</div>
                    <div onClick={() => setLayout('Bathroom')} className={layout === 'Bathroom' ? 'visualizerform-btn1' : 'visualizerform-btn2'}>Bathroom</div>
                </div>
                <div className='visualizerform-items'>
                    {
                        LayoutJSX('Kitchen', kitchenLayout)
                    }
                    {
                        LayoutJSX('Bathroom', bathroomLayout)
                    }
                </div>
            </div>
        </div>
    )
}

export default VisualizerForm