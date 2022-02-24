import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import '../../styles/contact-form.css'

const Contact = () => {

    const initialState = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    const [formData, setFormData] = useState(initialState)

    const { name, email, subject, message } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_fx8gvbi', 'template_iprqm4t', formData, 'user_0euzIhWvQIOyKDrETQwcd')
        .then(result => {
            console.log(result.text)
        })
            .catch(err => {
                console.log(err.text)
        })

        setFormData(initialState)
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="contact" id="contact">

            <h3 className="section-title">Contacto</h3>

            <form onSubmit={handleSubmit} className="contact__form">

                <label htmlFor="name" className="contact-label">Tu nombre</label>
                <input required type="text" name="name" placeholder="Thiago Granata" className="contact-input" onChange={handleInputChange} value={name}/>

                <label htmlFor="email" className="contact-label">Tu correo</label>
                <input required type="text" name="email" placeholder="correo@electronico.com" className="contact-input" onChange={handleInputChange} value={email}/>

                <label htmlFor="subject" className="contact-label">Asunto</label>
                <input required type="text" name="subject" placeholder="[OFERTA] Propuesta muy importante" className="contact-input" onChange={handleInputChange} value={subject}/>

                <label htmlFor="message" className="contact-label">Mensaje</label>
                <textarea required name="message" placeholder="Escribí tu mensaje acá..." className="contact-input contact-area" onChange={handleInputChange} value={message}/>

                <button type="submit" className="primary-button send">Enviar mensaje</button>
            </form>

        </section>
    )
}

export default Contact

