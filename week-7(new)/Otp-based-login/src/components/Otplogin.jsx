import React from 'react'
import myImage from '../assets/mobile-security.png';

export const Otplogin = () => {
  return (
    <div>
        <div className="number_container">
            <div className="num_header">
                <img src={myImage} alt="Mobile image" />
                <h2 className='wlc'>WELCOME</h2>
                <p> Enter number to continue</p>
        </div>
        <div class="phone-input-container">
            <label for="countryCode">Country Code</label>
            <select id="countryCode" name="countryCode">
             <option value="+1">+1 (USA)</option>
             <option value="+91">+91 (India)</option>
            </select>

                  <label for="phoneNumber">Phone Number</label>
                  <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number"/>

    <button onclick="submitPhoneNumber()">Submit</button>
  </div>

       

        </div>
    </div>
  )
}
