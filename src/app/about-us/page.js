import React from 'react';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

const AboutUs = () => {
    return (
        <div className="min-h-[100vh] flex flex-col justify-between bg-white text-black">
            <Header />
            <main className="flex flex-col items-center justify-center p-8">
                <section className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">
                        À propos de l'agence200
                    </h1>
                    <p className="text-lg max-w-[600px]">
                        L'agence200 est une agence web dédiée à enseigner aux
                        jeunes entrepreneurs comment protéger leurs données en
                        ligne et mettre en avant leur image professionnelle.
                        Nous sommes une équipe passionnée de faire la
                        différence.
                    </p>
                </section>
                <h2 className="text-4xl font-bold mb-4">Notre équipe</h2>
                <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    <div className="flex flex-col items-center">
                        <img
                            src="images/team/photo1.jpg"
                            alt="Membre de l'équipe 1"
                            className="w-32 h-32 rounded-full mb-2"
                        />
                        <p className="text-lg">Armand - dev</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="images/team/photo2.jpg"
                            alt="Membre de l'équipe 1"
                            className="w-32 h-32 rounded-full mb-2"
                        />
                        <p className="text-lg">Adam - dev</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="images/team/photo3.jpg"
                            alt="Membre de l'équipe 1"
                            className="w-32 h-32 rounded-full mb-2"
                        />
                        <p className="text-lg">Romain - dev</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="images/team/photo4.jpg"
                            alt="Membre de l'équipe 1"
                            className="w-32 h-32 rounded-full mb-2"
                        />
                        <p className="text-lg">Jeremy - com</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="images/team/photo5.jpg"
                            alt="Membre de l'équipe 1"
                            className="w-32 h-32 rounded-full mb-2"
                        />
                        <p className="text-lg">Nathan - com</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="images/team/photo6.jpg"
                            alt="Membre de l'équipe 1"
                            className="w-32 h-32 rounded-full mb-2"
                        />
                        <p className="text-lg">Ambre - com</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="images/team/photo7.jpg"
                            alt="Membre de l'équipe 1"
                            className="w-32 h-32 rounded-full mb-2"
                        />
                        <p className="text-lg">Wissem - com</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;
