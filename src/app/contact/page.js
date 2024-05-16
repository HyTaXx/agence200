'use client';
import React, { useState } from 'react';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error:', error));
    };

    return (
        <section className="min-h-[100vh] bg-white text-black">
            <Header />
            <section className="flex flex-col justify-center pb-16">
                <div className="flex flex-col justify-center py-16 gap-4">
                    <h2 className="text-center text-3xl">Nous contacter</h2>
                    <p className="text-center">
                        Countactez nous pour plus d'informations. Nous sommes
                        prêts à vous aider à trouver les meilleures solutions de
                        cybersécurité.
                    </p>
                </div>
                <section className="flex flex-row px-32">
                    <form
                        className="w-1/2 px-32 flex flex-col justify-around"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border-2 rounded-full border-black px-4 py-2"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border-2 rounded-full border-black px-4 py-2"
                                placeholder="youremail@example.com"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject">Objet</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="border-2 rounded-full border-black px-4 py-2"
                                placeholder="Telll us more about your needs"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="border-2 rounded-full border-black px-4 py-2"
                                placeholder="Write your message here"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-black text-white px-4 py-2 rounded-full my-4"
                        >
                            Envoyer message
                        </button>
                    </form>
                    <div className="w-1/2 flex justify-end px-32">
                        <img src="images/map_temp.jpg" />
                    </div>
                </section>
                <div className="flex flex-row justify-around px-6 mx-64 my-32 py-32 bg-[#f0f0f0]">
                    <div>
                        <h3 className="text-3xl">Telephone</h3>
                        <p>+33 00 00 00 00</p>
                    </div>
                    <div>
                        <h3 className="text-3xl">Email</h3>
                        <p>contactagence200@gmail.com</p>
                    </div>
                    <div>
                        <h3 className="text-3xl">Locaux</h3>
                        <p>200 Agency</p>
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    );
};

export default ContactForm;
