import LoveUSCover from '../../../assets/images/homeImage/love_us_cover.png'
import './loveus.css'
// import 

const LoveUS = () => {
    return (
        <div className='home-loveus-container'>
            <div className='home-loveus-innercontainer'>
                <img src={LoveUSCover} />
            </div>
            <div className='home-loveus-innercontainer2'>
                <div className='home-loveus-heading'>WHY DESIGNERS LOVE US</div>
                <div className='home-loveus-desc'>
                    Our diverse range of designs and products allows us to cater to a wide spectrum of design preferences, ensuring that our offerings seamlessly complement various interior styles. <br /><br />
                    The durability and practicality of our designs provide not just aesthetic value but also functional excellence, making us a top choice for designers seeking both style and substance.
                </div>
                <div className='home-loveus-progress'><div className='home-loveus-progressfill' /></div>
            </div>
        </div>
    )
}

export default LoveUS;