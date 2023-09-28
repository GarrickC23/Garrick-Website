import React, {useState} from "react";
import axios from 'axios';
import "./Contact.css";

function Contact() {
    const initialFormData = {
        name: '',
        email: '',
        subject: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/sendEmail', formData);
            setFormData(initialFormData);
        } catch (error) {
            console.error("Error sending email", error);
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <contact className="contact">
            <div className="contactbox">
                <div className="contactlist">
                    <div className="pingme">
                        <div className="ping"><h1>Ping me</h1></div>
                        <div className="contactinfo">
                            <p>garrickchiu0723@gmail.com</p>
                            <p>(626)-731-8109</p>
                        </div>
                        <div classname="otherinfo">
                            <p>Los Angeles</p>
                            <p>UCR Computer Science + Mathematics Minor</p>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label>
                            <p>Name</p>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </label>
                        <label>
                            <p>Email</p>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </label>
                        <label>
                            <p>Subject</p>
                            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                        </label>
                        <label>
                            <p>Message</p>
                            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                        </label>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </contact>
    )
}

export default Contact