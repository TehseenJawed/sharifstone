import './SubscriptionNewsLetter.css';
import BG from '../../../assets/images/homeImage/subscript_bg.png'
const SubscriptionNewsLetter = () => {
    return(
        <div className='home-subscription-container'>
            <div className='home-subscription-header'>SUBSCRIBE TO OUR NEWSLETTER TO GET UPDATES ON NEW PROMOTIONS AND PRODUCTS</div>
            <div style={{display: 'flex', marginBottom: 30, zIndex: 1}}>
                <input className='home-subscript-input' placeholder="Enter Your Email" type="text" />
                <div className='home-subscription-btn'>Subscribe</div>
            </div>
            <img className='home-subscrion-bg' src={BG} />
        </div>
    )
}

export default SubscriptionNewsLetter;