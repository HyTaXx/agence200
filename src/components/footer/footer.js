'use client';
export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="bg-[#252422] text-white p-4 mt-auto justify-around flex flex-row py-8">
            <div className="flex flex-col gap-4 justify-center">
                <img src="images/logo_footer.svg" />
                <p>Copyright 2024</p>
                <p>200 Agency all rights reserved</p>
            </div>
            <div className="flex flex-col gap-4 justify-center">
                <a href="/">Accueil</a>
                <a href="/about-us">Qui sommes-nous ?</a>
                <a href="/blog">Blog</a>
            </div>
            <div className="flex flex-col gap-4 justify-center">
                <a href="/contact">Contact</a>
                <a href="#">Mentions légales</a>
            </div>
            <div className="flex flex-col gap-4 justify-center">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Linkedin</a>
            </div>
            <button onClick={scrollToTop}>
                <img src="images/go_up.svg"></img>
            </button>
        </footer>
    );
};
