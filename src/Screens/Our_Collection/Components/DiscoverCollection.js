import { useState, useContext } from "react";
import "./DiscoverCollection.css";
import { GoArrowUpRight } from "react-icons/go";
import Context from "../../../Store/contextStore";
import { useNavigate } from 'react-router-dom';

const DiscoverCollection = () => {
  const [collection, setCollection] = useState("none");
  const [onMouseOver, setOnMouseOver] = useState("");
  const {store, setStore} = useContext(Context)
  const navigate = useNavigate();
  console.log('SRORE',store,setStore);
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
      name: "ES Arctic White",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/essential_collection/ES_Arctic_White.jpg",
    },
    {
      name: "ES Ash Grey",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/essential_collection/ES_Ash_Grey.jpg)",
    },
    {
      name: "ES Dolce",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/essential_collection/ES_Dolce.jpg)",
    },
    {
      name: "ES Florida White",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/essential_collection/ES_Florida_White.jpg)",
    },
    {
      name: "ES Ice White",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/essential_collection/ES_Ice_White.jpg)",
    },
    {
      name: "ES Majestic Waters",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/essential_collection/ES_Majestic_Waters.jpg)",
    },
    {
      name: "ES Sparkle Gray",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/essential_collection/ES_Sparkle_Gray.jpg)",
    },
    {
      name: "ES Sparkle White",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/essential_collection/ES_Sparkle_White.jpg)",
    },
    {
      name: "ES Tropical Rain",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/essential_collection/ES_Tropical_Rain.jpg)",
    },
  ];
  const indulgeCollection = [
    {
      name: "ID Affogato",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Affogato.jpg",
    },
    {
      name: "ID Blue Wave",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Blue_Wave.jpg)",
    },
    {
      name: "ID Chai Latte",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Chai_Latte.jpg)",
    },
    {
      name: "ID Earl Grey",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Earl_Grey.jpg)",
    },
    {
      name: "ID Cinnamon Dolce",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Cinnamon_Dolce.jpg)",
    },
    {
      name: "ID Vanilla Bean",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Vanilla_Bean.jpg)",
    },
    {
      name: "ID Tiramisu",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Tiramisu.jpg)",
    },
    {
      name: "ID Rock Sugar",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Rock_Sugar.jpg)",
    },
    {
      name: "ID Kopi Crema",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Kopi_Crema.jpg)",
    },
    {
      name: "ID_Honey_Brulee",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Honey_Brulee.jpg)",
    },
    {
      name: "ID Pistachio",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Pistachio.jpg)",
    },
    {
      name: "ID Golden Amber",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Golden_Amber.jpg)",
    },
    {
      name: "ID Espresso Martini",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Espresso_Martini.jpg)",
    },
    {
      name: "ID Espresso Martini",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Espresso_Martini.jpg)",
    },
    {
      name: "ID Espresso Martini",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/indulge/ID_Espresso_Martini.jpg)",
    },
  ];
  const internationalCollection = [
    {
      name: "INT Abu Dhabi",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Abu_Dhabi.jpg",
    },
    {
      name: "INT Antartica Blue",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Antartica_Blue.jpg",
    },
    {
      name: "INT Australia",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Australia.jpg",
    },
    {
      name: "INT Austria",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Austria.jpg",
    },
    {
      name: "INT Boston",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Boston.jpg",
    },
    {
      name: "INT Cairo",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Cairo.jpg",
    },
    {
      name: "INT Clearwater",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Clearwater.jpg",
    },
    {
      name: "INT Colombia",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Colombia.jpg",
    },
    {
      name: "INT Croatia",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Croatia.jpg",
    },
    {
      name: "INT Dubai",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Dubai.jpg",
    },
    {
      name: "INT Colombia",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Colombia.jpg",
    },
    {
      name: "INT Fiji",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Fiji.jpg",
    },
    {
      name: "INT Finland",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Finland.jpg",
    },
    {
      name: "INT Fontana Di Trevi",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Fontana_Di_Trevi.jpg",
    },
    {
      name: "INT Hamburg",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Hamburg.jpg",
    },
    {
      name: "INT Colombia",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Colombia.jpg",
    },
    {
      name: "INT West Coast",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_West_Coast.jpg",
    },
    {
      name: "INT Viena",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Viena.jpg",
    },
    {
      name: "INT Vermont",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Vermont.jpg",
    },
    {
      name: "INT Tokyo",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Tokyo.jpg",
    },
    {
      name: "INT Sweden",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Sweden.jpg",
    },
    {
      name: "INT Sidney",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Sidney.jpg",
    },
    {
      name: "INT Sicily",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Sicily.jpg",
    },
    {
      name: "INT Sao Paulo",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Sao_Paulo.jpg",
    },
    {
      name: "INT Safari",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Safari.jpg",
    },
    {
      name: "INT Rome",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Rome.jpg",
    },
    {
      name: "INT Rio De Janeiro",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Rio_De_Janeiro.jpg",
    },
    {
      name: "INT Pisa",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Pisa.jpg",
    },
    {
      name: "INT Oslo",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Oslo.jpg",
    },
    {
      name: "INT Montreal",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Montreal.jpg",
    },
    {
      name: "INT Milan",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Milan.jpg",
    },
    {
      name: "INT Malta",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Malta.jpg",
    },
    {
      name: "INT_Jamaica",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Jamaica.jpg",
    },
    {
      name: "INT Iceburg",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Iceburg.jpg",
    },
    {
      name: "INT Ibiza",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/international/INT_Ibiza.jpg",
    },
  ];
  const mythology = [
    {
      name: "MT Achilles",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Achilles.jpg",
    },
    {
      name: "MT Aphrodite",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Aphrodite.jpg",
    },
    {
      name: "MT Artemis",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Artemis.jpg",
    },
    {
      name: "MT Apollo",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Apollo.jpg",
    },
    {
      name: "MT_Aurora",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Aurora.jpg",
    },
    {
      name: "MT Cemento (Leathered)",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Cemento_.jpg",
    },
    {
      name: "MT Demeter",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Demeter.jpg",
    },
    {
      name: "MT Diana",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Diana.jpg",
    },
    {
      name: "MT Dionysus",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Dionysus.jpg",
    },
    {
      name: "MT Eros",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Eros.jpg",
    },
    {
      name: "MT Hades",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Hades.jpg",
    },
    {
      name: "MT Hera",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Hera.jpg",
    },
    {
      name: "MT Hercules",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Hercules.jpg",
    },
    {
      name: "MT Eros",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Eros.jpg",
    },
    {
      name: "MT_Hermes",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Hermes.jpg",
    },
    {
      name: "MT Hespera",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Hespera.jpg",
    },
    {
      name: "MT Medusa",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Medusa.jpg",
    },
    {
      name: "MT Kronos",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Kronos.jpg",
    },
    {
      name: "MT Odin",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Odin.jpg",
    },
    {
      name: "MT Persephone",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Persephone.jpg",
    },
    {
      name: "MT Poseidon",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Poseidon.jpg",
    },
    {
      name: "MT Rhea",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Rhea.jpg",
    },
    {
      name: "MT Vesta",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Vesta.jpg",
    },
    {
      name: "MT Vulcan",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Vulcan.jpg",
    },
    {
      name: "MT Zeus",
      desc: "Sensa - Sensa Premium",
      image: "url(images/quartz_collection/mythology/MT_Zeus.jpg",
    },
  ]

  const content = {
    none: [
      "DISCOVER OUR NEW COLLECTION",
      "For over three decades, we’ve been crafting the most trusted countertops by blending exquisite design with top durability. Join us on a journey of partnership and creativity, to fulfill your dream with the countertop that brings it to life.",
    ],
    "ESSENTIALS COLLECTION": [
      "ESSENTIALS COLLECTION",
      "Thoughtfully curated range of classic colors that serve as the perfect base for any design. This collection is all about giving your space an effortlessly elegant and adaptable look that never goes out of style.",
    ],
    "INDULGE COLLECTION": [
      "DISCOVER OUR NEW COLLECTION",
      "Inspired by the tempting world of desserts and comfort food. This collection brings a cozy and inviting vibe to your living spaces, adding a touch of sweet luxury to your everyday life.",
    ],
    "INTERNATIONAL COLLECTION": [
      "DISCOVER OUR NEW COLLECTION",
      "This collection takes you on a global journey, with each piece named after iconic cities around the world. These beautiful veined stones bring the essence of these locations into your home, infusing an international vibe that transports you across continents without leaving your space",
    ],
    "MYTHOLOGY COLLECTION": [
      "DISCOVER OUR NEW COLLECTION",
      "This collection is all about infusing your surfaces with a sense of Greek mythology. The intricate patterns pay homage to the tales of the Greek Gods and Goddesses, with delicate veining that adds depth and a touch of ancient charm.",
    ],
    "MY COLLECTION": [
      "DISCOVER OUR NEW COLLECTION",
      "For over three decades, we’ve been crafting the most trusted countertops by blending exquisite design with top durability. Join us on a journey of partnership and creativity, to fulfill your dream with the countertop that brings it to life.",
    ],
  };

  const gotoNextScreen = (i) => {
    switch (true) {
      case collection === "ESSENTIALS COLLECTION":
        var newArray;
        if(i < 3) {
          newArray = [
            essentialsCollection[i],
            essentialsCollection[i+1],
            essentialsCollection[i+2],
            essentialsCollection[i+3],
          ]} else if(i > essentialsCollection.length-4) {
            newArray = [
              essentialsCollection[i],
              essentialsCollection[i-1],
              essentialsCollection[i-2],
              essentialsCollection[i-3],
            ]
          } else {
            newArray = [
              essentialsCollection[i],
              essentialsCollection[i-1],
              essentialsCollection[i+2],
              essentialsCollection[i-3],
            ]
        }
        setStore(newArray)
        navigate('/product-description', { replace: true });
        break;
        case collection === "INDULGE COLLECTION":
          var newArray;
          if(i < 3) {
            newArray = [
              indulgeCollection[i],
              indulgeCollection[i+1],
              indulgeCollection[i+2],
              indulgeCollection[i+3],
            ]} else if(i > indulgeCollection.length-4) {
              newArray = [
                indulgeCollection[i],
                indulgeCollection[i-1],
                indulgeCollection[i-2],
                indulgeCollection[i-3],
              ]
            } else {
              newArray = [
                indulgeCollection[i],
                indulgeCollection[i-1],
                indulgeCollection[i+2],
                indulgeCollection[i-3],
              ]
          }
          setStore(newArray)
          navigate('/product-description', { replace: true });
          break;
          case collection === "INTERNATIONAL COLLECTION":
            var newArray;
            if(i < 3) {
              newArray = [
                internationalCollection[i],
                internationalCollection[i+1],
                internationalCollection[i+2],
                internationalCollection[i+3],
              ]} else if(i > internationalCollection.length-4) {
                newArray = [
                  internationalCollection[i],
                  internationalCollection[i-1],
                  internationalCollection[i-2],
                  internationalCollection[i-3],
                ]
              } else {
                newArray = [
                  internationalCollection[i],
                  internationalCollection[i-1],
                  internationalCollection[i+2],
                  internationalCollection[i-3],
                ]
            }
            setStore(newArray)
            navigate('/product-description', { replace: true });
            break;
            case collection === "MY COLLECTION":
              var newArray;
              if(i < 3) {
                newArray = [
                  mythology[i],
                  mythology[i+1],
                  mythology[i+2],
                  mythology[i+3],
                ]} else if(i > mythology.length-4) {
                  newArray = [
                    mythology[i],
                    mythology[i-1],
                    mythology[i-2],
                    mythology[i-3],
                  ]
                } else {
                  newArray = [
                    mythology[i],
                    mythology[i-1],
                    mythology[i+2],
                    mythology[i-3],
                  ]
              }
              setStore(newArray)
              navigate('/product-description', { replace: true });
              break;
    }
  }

  const collectionJSX = (v, i, islable = false, isBack = false) => {
    return (
      <div className="discover-collection">
        <div
          onMouseOver={() => setOnMouseOver(i)}
          className="discover-collectionimage"
          style={{
            backgroundImage: v.image,
          }}
        >
          {i === onMouseOver && (
            <div
              onClick={isBack ? () => gotoNextScreen(i) : () => setCollection(v.name)}
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
                {/* <div className="discover-collectionlabel2">{v.desc}</div> */}
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
        {collection === "INDULGE COLLECTION" &&
          indulgeCollection.map((v, i) => collectionJSX(v, i, true, true))}
        {collection === "INTERNATIONAL COLLECTION" &&
          internationalCollection.map((v, i) => collectionJSX(v, i, true, true))}
        {collection === "MY COLLECTION" &&
          mythology.map((v, i) => collectionJSX(v, i, true, true))}
      </div>
    </div>
  );
};

export default DiscoverCollection;
