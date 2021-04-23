import React from 'react'
import "./contact.css"
const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me!</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.12936887765!2d-104.995196694213!3d39.7645186739618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1619121137706!5m2!1sen!2sus" 
            allowFullScreen=""
            title="googlemap"
            key="denver-map"
            >
            </iframe>
            <h4>Phone Number</h4>
            <p>303-000-0000</p>
            <h4>Email</h4>
            <p>diana.ryb214@gmail.com</p>
        </div>
    )
}

export default Contact
