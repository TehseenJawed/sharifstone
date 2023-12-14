import React from "react";
import "./GetAQuote.css";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";

function GetAQuote({ data }) {
  const { openQuote, setOpenQuote } = data;
  return (
    <div className="quote-form-containerhidden">
      <div className="quote-form-contactus">
        <div onClick={() => setOpenQuote(false)} className="quote-cross-icon">
          <ImCross size={15} color={"black"} />
        </div>
        <div className="quote-label">GET A QUOTE</div>
        <div className="quote-field-row">
          <input type={"text"} placeholder={"First Name"} />
          <input type={"text"} placeholder={"Last Name"} />
        </div>
        <div className="quote-field-row">
          <input type={"text"} placeholder={"Email"} />
          <input type={"text"} placeholder={"Phone Number"} />
        </div>
        <div className="select-container">
          <select className="quote-select">
            <option>Select</option>
            <option value="To know the price of a specific stone">To know the price of a specific stone</option>
            <option value='Find a fabricator and get a quote from them'>Find a fabricator and get a quote from them</option>
          </select>
          <IoIosArrowDown className="select-container-icon" />
        </div>
        <textarea
          id="w3review"
          placeholder="Message"
          className="quote-message"
          rows="6"
          cols="50"
        ></textarea>
        <div className="quote-submit">Submit</div>
      </div>
    </div>
  );
}

export default GetAQuote;
