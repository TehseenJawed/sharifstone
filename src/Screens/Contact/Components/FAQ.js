import React, { useState } from "react";
import "./FAQ.css";
import { FiMinus, FiPlus } from "react-icons/fi";

function FAQ() {
  const [faq, setFaq] = useState(-1);
  const faqArray = [
    {
      question: "Cleaning for Honed, Concrete and Rough Finishes",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      question: "What’s the best way to contact Caesarstone?",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      question: "Which cleaning products are good for quartz?",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      question: "How many designs can I choose from?",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      question: "Where is engineered quartz made?",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      question: "Are quartz surfaces hygienic?",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
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
                onClick={() => setFaq(i)}
              >
                <div className="faq-questionrow">
                  Cleaning for Honed, Concrete and Rough Finishes
                  {faq === i ? <FiMinus size={30} /> : <FiPlus size={30} />}
                </div>
                {faq === i && (
                  <div className="faq-answer">
                    {v.message}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
