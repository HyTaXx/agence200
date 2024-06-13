import Main_button from '../buttons/main_button';

export const Home_main = () => {
    return (
        <section className="flex flex-col gap-36 p-16">
            <section className="flex flex-row justify-around border px-16 py-32 shadow-2xl">
                <div className="flex flex-col text-black w-1/2 gap-8 justify-around">
                    <h2 className="text-5xl font-medium">
                        Coucou,
                        <br /> c'est Nous !
                    </h2>
                    <p className="max-w-[500px] leading-10">
                        Passionnés de tech et d'éducation, on est là pour te
                        guider. Ensemble, on va t'apprendre à protéger tes
                        données et à mettre en avant ton image pro en ligne.
                    </p>
                    <Main_button text="Nous découvrir" href="/about_us" />
                    {/* Need to add arrow toward button */}
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <img
                        src="images/icon_home_us.svg"
                        alt="computer image"
                        className="w-1/2"
                    />
                </div>
            </section>

            <section className="flex flex-row-reverse justify-around py-32">
                <div className="flex flex-col text-black w-1/2 gap-8 justify-around">
                    <p>Sécurisé intelligement</p>
                    <h2 className="text-5xl font-medium">
                        Tes Données ?<br /> c'est Sacré !
                    </h2>
                    <p className="max-w-[500px] leading-10">
                        Imagine que tes données sont comme ton journal intime.
                        Tu ne le laisserais pas traîner n'importe où, n'est-ce
                        pas ? On est là pour t'aider à les garder bien au chaud.
                    </p>
                    <Main_button text="Nous rejoindre" href="/contact" />
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <img
                        src="images/icon_home_join.svg"
                        alt="computer image"
                        className="w-1/2"
                    />
                </div>
            </section>

            <section className="flex flex-row justify-around border px-16 py-32 shadow-2xl">
                <div className="flex flex-col text-black w-[60%] gap-8 justify-around">
                    <img
                        src="images/icon_home_join2.svg"
                        className="max-w-[70%] my-16"
                    />
                    <h2 className="text-5xl font-medium">
                        Rejoins la famille !
                    </h2>
                    <p className="max-w-[500px] leading-10">
                        Envie d'échanger sur le digital en bonne compagnie ?
                        Viens, on t'attend !
                    </p>
                    <Main_button text="Nous découvrir" href="/about-us" />
                    {/* Need to add arrow toward button */}
                </div>
                <div className="w-[40%] flex text-black flex-col justify-center">
                    <div className="flex flex-col gap-4 py-12 ">
                        <div className="relative">
                            <img
                                src="./images/stain.png"
                                alt="stain"
                                className="absolute h-full"
                            />
                            <span className="relative z-10">Etape 1</span>
                        </div>
                        <p>
                            Tu nous contacte en nous présentant ton parcours, ta
                            personnnalité et ton projet
                        </p>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-4 py-12">
                        <div className="relative">
                            <img
                                src="./images/stain.png"
                                alt="stain"
                                className="absolute h-full"
                            />
                            <span className="relative z-10">Etape 2</span>
                        </div>
                        <p>
                            On te recontacte et on te propose des solutions à
                            ton problème
                        </p>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-4 py-12">
                        <div className="relative">
                            <img
                                src="./images/stain.png"
                                alt="stain"
                                className="absolute h-full"
                            />
                            <span className="relative z-10">Etape 3</span>
                        </div>
                        <p>On s’occupe de tout !</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-row justify-around border px-16 py-32 shadow-2xl bg-[#252422]">
                <div className="flex flex-col text-white w-1/2 justify-around">
                    <h2 className="text-5xl font-medium">
                        Commence à <br />
                        protéger Tes Données
                    </h2>
                    <p className="max-w-[500px] leading-10">
                        Sécurise tes doonnées et ta vie privée dès aujourd'hui
                    </p>
                    <Main_button text="Je me protège" href="/about_us" />
                    {/* Need to add arrow toward button */}
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <img
                        src="images/icon_home_contact.svg"
                        alt="computer image"
                        className="w-1/2"
                    />
                </div>
            </section>
        </section>
    );
};
