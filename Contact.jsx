// Student ID: 25011322

import React from "react";
import "./TourismInfo25011322.css";
import Footer from "./Footer";

function Contact() {
  return (
    <main>
      <h4>Contact Us</h4>

      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" required />
        <br /><br />

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" required />
        <br /><br />

        <label htmlFor="message">Message: </label>
        <textarea id="message" name="message" rows="5" required></textarea>
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <div className="contact_detail">
        <h3>Contact Details</h3>
        <p>Email: info@kiwitrails.co.nz</p>
        <p>Phone: +64 21 123 4567</p>
        <p>Address: 123 Kiwi Street, Wellington, New Zealand</p>
      </div>

      <div className="maparea">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.373376315844!2d174.77623667650323!3d-41.29236317130933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afcf8b09a0fb%3A0xf00ef62249ee690!2sWellington%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1700000000000!5m2!1sen!2snz"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>

    <footer> 

      Created By: Pivithura Guruge 
      Student ID : 25011322

    </footer>


    </main>
  );
}

export default Contact;
