import { useState } from "react";
import "./DiscoverCollection.css";
import { GoArrowUpRight } from "react-icons/go";

const DiscoverCollection = () => {
  const [collection, setCollection] = useState("none");
  const collections = [
    {
      name: "ESSENTIALS COLLECTION",
      image: "url(images/collections/essentials.png)",
    },
    {
      name: "INDULGE COLLECTION",
      image: "url(images/collections/indulge.png)",
    },
    {
      name: "INTERNATIONAL COLLECTION",
      image: "url(images/collections/international.png)",
    },
    {
      name: "MY COLLECTION",
      image: "url(images/collections/mythology.png)",
    },
  ];
  const essentialsCollection = [
    {
      name: "MAORI",
      desc: "Sensa - Sensa Premium",
      image: "url(images/collections/essential_collection/e_collection1.png",
    },
    {
      name: "MAORI",
      desc: "Sensa - Sensa Premium",
      image: "url(images/collections/essential_collection/e_collection2.png)",
    },
    {
      name: "MAORI",
      desc: "Sensa - Sensa Premium",
      image: "url(images/collections/essential_collection/e_collection3.png)",
    },
    {
      name: "MAORI",
      desc: "Sensa - Sensa Premium",
      image: "url(images/collections/essential_collection/e_collection4.png)",
    },
    {
      name: "MAORI",
      desc: "Sensa - Sensa Premium",
      image: "url(images/collections/essential_collection/e_collection5.png)",
    },
    {
      name: "MAORI",
      desc: "Sensa - Sensa Premium",
      image: "url(images/collections/essential_collection/e_collection6.png)",
    },
    {
      name: "MAORI",
      desc: "Sensa - Sensa Premium",
      image: "url(images/collections/essential_collection/e_collection7.png)",
    },
    {
      name: "MAORI",
      desc: "Sensa - Sensa Premium",
      image: "url(images/collections/essential_collection/e_collection8.png)",
    },
    {
      name: "MAORI",
      desc: "Sensa - Sensa Premium",
      image: "url(images/collections/essential_collection/e_collection9.png)",
    },
    {
      name: "MAORI",
      desc: "Sensa - Sensa Premium",
      image: "url(images/collections/essential_collection/e_collection10.png)",
    },
    {
      name: "MAORI",
      desc: "Sensa - Sensa Premium",
      image: "url(images/collections/essential_collection/e_collection11.png)",
    },
    {
        name: "MAORI",
        desc: "Sensa - Sensa Premium",
        image: "url(images/collections/essential_collection/e_collection12.png)",
      },
  ];
  const content = {
    none: [
      "DISCOVER OUR NEW COLLECTION",
      "For over three decades, we’ve been crafting the most trusted countertops by blending exquisite design with top durability. Join us on a journey of partnership and creativity, to fulfill your dream with the countertop that brings it to life.",
    ],
    "ESSENTIALS COLLECTION": [
      "ESSENTIALS COLLECTION",
      "For over three decades, we’ve been crafting the most trusted countertops by blending exquisite design with top durability. Join us on a journey of partnership and creativity, to fulfill your dream with the countertop that brings it to life.",
    ],
    "INDULGE COLLECTION": [
      "DISCOVER OUR NEW COLLECTION",
      "For over three decades, we’ve been crafting the most trusted countertops by blending exquisite design with top durability. Join us on a journey of partnership and creativity, to fulfill your dream with the countertop that brings it to life.",
    ],
    "INTERNATIONAL COLLECTION": [
      "DISCOVER OUR NEW COLLECTION",
      "For over three decades, we’ve been crafting the most trusted countertops by blending exquisite design with top durability. Join us on a journey of partnership and creativity, to fulfill your dream with the countertop that brings it to life.",
    ],
    "MY COLLECTION": [
      "DISCOVER OUR NEW COLLECTION",
      "For over three decades, we’ve been crafting the most trusted countertops by blending exquisite design with top durability. Join us on a journey of partnership and creativity, to fulfill your dream with the countertop that brings it to life.",
    ],
  };

  const collectionJSX = (v, i, islable = false, isBack = false) => {
    return (
      <div className="discover-collection">
        <div
          className="discover-collectionimage"
          style={{
            backgroundImage: v.image,
          }}
        >
          {i === 0 && (
            <div
              onClick={isBack ? () => setCollection('none') : () => setCollection(v.name)}
              className="discover-collectionexpand"
            >
              <GoArrowUpRight size={35} color="white" />
            </div>
          )}
        </div>
        {
            islable ? (
            <div className="discover-collectionlabel">
                <div className="discover-collectionlabel1">{v.name}</div>
                <div className="discover-collectionlabel2">{v.desc}</div>
            </div>
            ) 
            : (<div className="discover-collectiontext">{v.name}</div>)
        }
      </div>
    );
  };
  return (
    <div className="discover-collection-component">
      <div className="discover-collection-heading">
        {content[collection][0]}
      </div>
      <div className="discover-collection-desc">{content[collection][1]}</div>
      <div className="discover-collection-collections">
        {collection === "none" &&
          collections.map((v, i) => collectionJSX(v, i))}
        {collection === "ESSENTIALS COLLECTION" &&
          essentialsCollection.map((v, i) => collectionJSX(v, i, true, true))}
      </div>
    </div>
  );
};

export default DiscoverCollection;
