import React from 'react'
import './ContactDetails.css'
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function ContactDetails() {
  return (
    <div className='contactdetails-container'>
      <div className='contactdetails-innercontainer'>
        <MdEmail size={25} color={'#EE2A2E'}/>
        <div>
            <div className='contactus-subheading'>Warranty & Service</div>
            <div className='contactus-subtext'>info@sharifstone.com</div>
        </div>
      </div>
      <div className='contactdetails-innercontainer'>
        <FaPhoneAlt size={25} color={'#EE2A2E'}/>
        <div>
            <div className='contactus-subheading'>Contact Us</div>
            <div className='contactus-subtext'>112 224 3364</div>
        </div>
      </div>
      <div className='contactdetails-innercontainer'>
        <MdLocationOn size={30} color={'#EE2A2E'}/>
        <div>
            <div className='contactus-subtext'>1401 W. Morehead St. Charlotte, NC 28208</div>
        </div>
      </div>
      <div className='contactdetails-innercontainer'>
        <MdEmail size={25} color={'#EE2A2E'}/>
        <div>
            <div className='contactus-subheading'>Media Relations</div>
            <div className='contactus-subtext'>info@sharifstone.com</div>
        </div>
      </div>
      <div className='contactdetails-innercontainer'>
        <MdEmail size={25} color={'#EE2A2E'}/>
        <div>
            <div className='contactus-subheading'>Sales</div>
            <div className='contactus-subtext'>Sales@sharifstone.com</div>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
