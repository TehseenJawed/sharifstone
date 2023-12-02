import React from "react";
import "./QuartzAdvantage.css";
import QuartzCover from "../../../assets/images/homeImage/quartz_advantages.png";
function QuartzAdvantage() {
  const advantages = [
    {
      name: "WIDE RANGE OF COLORS",
      url: "url(images/wide_range.png)",
    },
    {
      name: "PREMIUM QUALITY",
      url: "url(images/premium_quantity.png)",
    },
    {
      name: "LIFETIME WARRANTY",
      url: "url(images/lifetime_warranty.png)",
    },
    {
      name: "STAIN RESISTANT",
      url: "url(images/stain_resistant.png)",
    },
    {
      name: "SCRATCH RESISTANT",
      url: "url(images/scratch_resistant.png)",
    },
    {
      name: "IMPACT RESISTANT",
      url: "url(images/impact_resistant.png)",
    },
  ];
  return (
    <div className="home-advantagecontainer">
      <div className="home-advantageinnercontainer">
        <div className="home-advamtageheading">QUARTZ ADVANTAGES</div>
        <div className="home-advamtagedesc">
          Quartz surfaces are created through a blend of various components,
          with the use of advanced technology to guarantee both durability and
          sustainability, while also boasting an appealing aesthetic. This
          cutting-edge solution caters to a wide range of surface requirements
          for different interior settings.
        </div>
        <div
          className="home-advantagebg"
          style={{ backgroundImage: "url(images/quartz_advantages.png)" }}
        >
          <div className="homebrand-images">
            {advantages.map((v, i) => (
              <div className="homebrand-container">
                <div
                  className="homebrand-image"
                  style={{
                    backgroundImage: v.url,
                  }}
                />
                <div className="homebrand-text">{v.name}</div>
              </div>
            ))}
          </div>
        </div>
          <div className="homebrand-button">Download Slab Technical Chart</div>
        <div className="homebrand-dowmloadcontainer">
        </div>
      </div>
    </div>
  );
}

export default QuartzAdvantage;
