import React, {useContext} from 'react'
import CoverComponent from '../../components/coverComponent'
import './productDescription.css'
import ProductImage from '../../assets/images/product/gk07cepp0.png'
import RelatedProduct from './Components/RelatedProduct'
import Context from '../../Store/contextStore'

function ProductDescription() {
  const {store} = useContext(Context)
  console.log('444',store);
  return (
    <div>
      <CoverComponent image={'url(images/cover/product_description.png)'} label={['PRODUCT', 'DESCRIPTION']}/>
      <div className='product-infocontainer'>
        <div className='product-infosub'>
            {/* <img src={ProductImage} /> */}
            <div className='product-innerimage' style={{backgroundImage: store[0]?.image}}/>

        </div>
        <div className='product-infosub'>
            <div className='product-profilename'>Product Name</div>
            <div className='product-profilesubtitle '>{store[0]?.name}</div>
            <div className='product-descriptionheading'>Description</div>
            <div className='product-description'>
            The distinctive blue-grey multiform structure of the Italian Ceppo di Gré stone inspires this unique color. Ideal for both indoors and outdoors, its timeless design makes it a perfect choice for a classic or modern look.
            </div>
            <div className='product-descriptionheading'>Finishes Available</div>
            <div className='flex-row'>
                <div className='finishes-details'>
                    <div>Grip +</div>
                    <span>Cutting-edge and innovative treatment that ensures non-slip surfaces</span>
                </div>
                <div className='finishes-details'>
                    <div>Matte</div>
                    <span>Solid and satin color</span>
                </div>
            </div>
            <div className='product-descriptionheading'>Thicknesses</div>
            <span style={{fontSize: 23}}>-- 0.8 cm -- 1,2 cm -- 2,0 cm --0,4 cm</span>
        </div>
      </div>
      <RelatedProduct relatedImages={[store[1],store[2],store[3]]}/>
    </div>
  )
}

export default ProductDescription
