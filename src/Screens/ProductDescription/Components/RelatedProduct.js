import React from "react";
import "./RelatedProduct.css";
import Product1 from "../../../assets/images/product/gk07cepp0-1.png";
import Product2 from "../../../assets/images/product/gk07cepp0-2.png";
import Product3 from "../../../assets/images/product/gk07cepp0-3.png";
import ExpandImage from '../../../assets/images/product/gk07cepp0-expand.png';
function RelatedProduct({relatedImages}) {
  const relatedProductObj = [
    {
      name: "MAORI",
      image: Product1,
    },
    {
      name: "MAORI",
      image: Product2,
    },
    {
      name: "MAORI",
      image: Product3,
    },
  ];
  return (
    <div className="related-container">
      <div className="productrelated-heading">RELATED PRODUCTS</div>
      <div className="productrelated-container">
        <div className="productrelated-innercontainer">
          {relatedImages?.map((v, i) => (
            <div className="productrelated-colorcontainer">
              <div className="productrelated-colorcontainer_img" style={{backgroundImage: v?.color_image}}/>
              <div className="productrelated-name">{v?.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="productexpand-container">
        <img src={ExpandImage} />
        <div className="productexpand-btncontainer">
            <div className="productexpand-wheretobuy" style={{backgroundColor:'#221F1F'}}>Where To Buy</div>
            <div className="productexpand-wheretobuy" style={{backgroundColor:'#EE2A2E', margin: '0px 20px'}}>Where To Buy</div>
            <div className="productexpand-productcatalog">Where To Buy</div>
        </div>
      </div>
    </div>
  );
}

export default RelatedProduct;
