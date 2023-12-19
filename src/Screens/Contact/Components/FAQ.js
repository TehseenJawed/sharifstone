import React, { useState } from "react";
import "./FAQ.css";
import { FiMinus, FiPlus } from "react-icons/fi";

function FAQ() {
  const [faq, setFaq] = useState(-1);
  const faqArray = [
    {
      question: "1. How do I clean Quartz surfaces?",
      message:
        "Answer: Cleaning Quartz surfaces is simple. Use mild dish soap and warm water with a soft cloth or sponge to wipe away spills and messes. Avoid abrasive cleaners, scouring pads, and harsh chemicals, as these may damage the surface. For stubborn stains, a mixture of baking soda and water can be gently applied and wiped clean.",
    },
    {
      question: "2. Can you refer us to fabricators for installation services?",
      message:
        "Answer: While we solely focus on supplying high-quality stone slabs, we can recommend trusted fabricators within our network who specialize in stone installation. Please reach out to our team for more information and recommendations based on your location.",
    },
    {
      question:
        "3. What are the advantages of choosing stone slabs over other materials for remodeling projects?",
      message:
        "Answer: Stone slabs offer exceptional durability and a variety of design options that can improve the aesthetic appeal of any space. Additionally, their resistance to scratches, stains, and heat makes them a practical and long-lasting choice for various applications.",
    },
    {
      question:
        "4. What is the process for ordering and delivery of stone slabs?",
      message:
        "Answer: To place an order, simply reach out to our team with your specifications. We ensure a streamlined ordering process and efficient delivery, prioritizing timely and secure transportation to your designated location.",
    },
  ];
  return (
    <div className="faq-container">
      <div className="faq-innercontainer">
        <div className="faq-heading">FIND ANSWERS QUICKLY</div>
        <hr className="faq-sepeartor" />
        <div className="faq-formcontainer">
          {faqArray.map((v, i) => {
            return (
              <div
                className={
                  faq === i
                    ? "faq-questioncontaier-active"
                    : "faq-questioncontaier"
                }
                onClick={() => i === faq ?  setFaq(-1):setFaq(i)}
              >
                <div className="faq-questionrow">
                  {v.question}
                  <div>
                    {faq === i ? <FiMinus size={25} /> : <FiPlus size={25} />}
                  </div>
                </div>
                {faq === i && <div className="faq-answer">{v.message}dd</div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
