import React, { useState, useEffect, useContext } from "react";
import CoverComponent from "../../components/coverComponent";
import "./productDescription.css";
import ProductImage from "../../assets/images/product/gk07cepp0.png";
import RelatedProduct from "./Components/RelatedProduct";
import Context from "../../Store/contextStore";
import { getCollectionByParam, getColorByParam } from "../../apiCall/apiCall";
import { useParams } from "react-router-dom";
import CoverImage from '../../assets/images/product_description.png'

function ProductDescription() {
  const [colorDetails, setColorDetails] = useState({});
  const [relatedColors, setRelatedColors] = useState([]);
  const { store } = useContext(Context);
  const params = useParams();
  
  useEffect(() => {
    if (params?.color !== undefined) {
      new Promise(async (resolve, reject) => {
        const data = await getColorByParam(params?.color);
        resolve(data[0]);
      }).then(async (result) => {
        setColorDetails(result);
        const relatedColors = await getCollectionByParam(
          result?.collection_url
        );
        setRelatedColors(relatedColors);
      });
    }
  }, [params?.collection]);
  return (
    <div>
      <CoverComponent
        image={`url(${CoverImage})`}
        label={["PRODUCT", "DESCRIPTION"]}
      />
      <div className="product-infocontainer">
        <div className="product-infosub">
          {/* <img src={ProductImage} /> */}
          <div
            className="product-innerimage"
            style={{ backgroundImage: `url(${colorDetails?.display_image})` }}
          />
        </div>
        <div className="product-infosub">
          <div className="product-profilename">{colorDetails?.color_name}</div>
          {/* <div className='product-profilesubtitle '>{store[0]?.name}</div> */}
          <div className="product-descriptionheading">Description</div>
          <div className="product-description">
            The distinctive blue-grey multiform structure of the Italian Ceppo
            di Gré stone inspires this unique color. Ideal for both indoors and
            outdoors, its timeless design makes it a perfect choice for a
            classic or modern look.
          </div>
          <div className="product-descriptionheading">Finishes Available</div>
          <div className="flex-row">
            <div className="finishes-details">
              <div>Grip +</div>
              <span>
                Cutting-edge and innovative treatment that ensures non-slip
                surfaces
              </span>
            </div>
            <div className="finishes-details">
              <div>Matte</div>
              <span>Solid and satin color</span>
            </div>
          </div>
          <div className="product-descriptionheading">Thicknesses</div>
          <span className="product-desc-span">
            -- 0.8 cm -- 1,2 cm -- 2,0 cm --0,4 cm
          </span>
        </div>
      </div>
      <RelatedProduct relatedImages={relatedColors} />
    </div>
  );
}

export default ProductDescription;
