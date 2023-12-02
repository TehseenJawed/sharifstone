import React from "react";
import "./GetAQuote.css";
import { ImCross } from "react-icons/im";

function GetAQuote({data}) {
    const {openQuote, setOpenQuote} = data
  return (
    <div className="quote-form-containerhidden">
      <div className="quote-form-contactus">
        <div onClick={() => setOpenQuote(false)} className="quote-cross-icon"><ImCross size={15} color={"black"}/></div>
        <div className="quote-label">GET A QUOTE</div>
        <div className="quote-field-row">
          <input type={"text"} placeholder={"First Name"} />
          <input type={"text"} placeholder={"Last Name"} />
        </div>
        <div className="quote-field-row">
          <input type={"text"} placeholder={"Email"} />
          <input type={"text"} placeholder={"Phone Number"} />
        </div>
        <select className="quote-select">
          <option>Select</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
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
