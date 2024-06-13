export const Hero = () => {
    return (
        <section className="flex flex-row text-black md:px-20 my-20">
            <div className="flex flex-col justify-around w-1/2 gap-8">
                <h3 className="text-xl">Commencez dès aujourd'hui</h3>
                <h1 className="text-6xl leading-normal">
                    Apprenez a<br></br>
                    <div className="relative">
                        <img
                            src="./images/stain.png"
                            alt="stain"
                            className="absolute h-full"
                        />
                        <span className="relative z-10">protéger votre</span>
                    </div>
                    vie en ligne
                </h1>
                <p className="text-xl">
                    L'agence 200 vous apprendre comment, VOUS,<br></br> jeunes
                    entrepreneurs pouvez protéger vos données
                </p>
                <a
                    href="#"
                    className="bg-[#EB5E28] rounded-full py-3 w-[250px] text-white text-center"
                >
                    Nous contacter
                </a>
            </div>
            <div className="w-1/2">
                <img src="images/Hero.svg" alt="Hero" />
            </div>
        </section>
    );
};
