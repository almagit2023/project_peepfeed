import React from 'react'
import './Contact.css'

function contact() {
    return (
        <div className="contactForm">
            <div class='formHeader'><h3>CONTACT US</h3></div>
            <form method="POST" action="/" >              
                <label>First Name</label><br/><input type="text" required/><br/>
                <label>Last Name</label><br/><input type="text"/><br/>
                <label>Email</label><br/><input type="Email" required/><br/>
                <label>Message</label><br/><br/>
                <textarea required></textarea>
                <input type="submit" value="SIBMIT" />
            </form>
        </div>    
    )
}

export default contact
