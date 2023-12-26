export const Hero = () => {
    return (
      <section className="flex flex-row text-black md:px-20 my-20">
        <div className="flex flex-col justify-around w-1/2 gap-8">
          <h3 className="text-xl">Commencez Dès Aujourd'hui</h3>
          <h1 className="text-6xl leading-normal">Apprenez A<br></br> 
            <div className="relative">
              <img src="./images/stain.png" alt="stain" className="absolute h-full"/>
              <span className="relative z-10">Protéger Votre</span>
            </div>
            Vie En Ligne
          </h1>
          <p className="text-xl">L'agence 200 vous apprendre comment, VOUS,<br></br> Jeunes entrepreneurs pouvez protéger vos données</p>
          <a href="#" className="bg-[#EB5E28] rounded-full py-3 w-[250px] text-white text-center">Nous contacter</a>
        </div>
        <div className="w-1/2">
          <img src="./images/hero.svg" alt="Hero"/>
        </div>
      </section>
    )
  }