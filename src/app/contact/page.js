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
        console.log(formData);
        // Here you would typically send the form data to a server
    };

    return (
        <section className="min-h-[100vh] bg-white text-black">
            <Header />
            <section className="flex flex-col justify-center pb-16">
                <div className="flex flex-col justify-center py-16 gap-4">
                    <h2 className="text-center text-3xl">Nous contacter</h2>
                    <p className="text-center">
                        Rentrez en contact avec nous ! Nous sommes pret à vous
                        aider et trouver les meilleurs solutions cybersécurités
                    </p>
                </div>
                <section className="flex flex-row px-32">
                    <form className="w-1/2 px-32 flex flex-col justify-around">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Votre Nom et prénom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border-2 rounded-full border-black px-4 py-2"
                                placeholder="Nom complet"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Votre Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border-2 rounded-full border-black px-4 py-2"
                                placeholder="emaivotrel@exemple.com"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject">Votre sujet</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="border-2 rounded-full border-black px-4 py-2"
                                placeholder="Dites nous en plus sur vos besoins"
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
                                placeholder="Ecrivez votre message ici"
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="bg-black text-white px-4 py-2 rounded-full"
                        >
                            Envoyer un message
                        </button>
                    </form>
                    <div className="w-1/2 flex justify-end px-32">
                        <img src="images/map_temp.JPG" />
                    </div>
                </section>
                <div className="flex flex-row justify-around px-6 mx-64 my-32 py-32 bg-[#f0f0f0]">
                    <div>
                        <h3 className="text-3xl">Appelez nous</h3>
                        <p>+33 7 82 58 81 24</p>
                    </div>
                    <div>
                        <h3 className="text-3xl">Email</h3>
                        <p>agence200@gmail.com</p>
                        <p>agence200@gmail.com</p>
                    </div>
                    <div>
                        <h3 className="text-3xl">Nous visiter</h3>
                        <p>200 Agency</p>
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    );
};

export default ContactForm;
