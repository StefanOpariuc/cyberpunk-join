import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col items-center md:pt-[126px] pt-[80px] justify-center p-4 ">
            <div className="text-center text-white text-xl font-nebula mb-[20px]">
                Cyberpunk<br />Capital
            </div>
            <footer className="flex flex-wrap justify-center items-center gap-[42px]">
                <a
                    href="https://patreon.com/cyberpunkcap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/50"
                >
                    <img className="w-[24px] h-[24px]" src="/images/patreon.svg" />
                </a>
                <a
                    href="https://twitter.com/cyberpunkcap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-black/50"
                >
                    <img className="w-[24px] h-[24px]" src="x.png" />
                </a>

                <a
                    href="https://discord.gg/cyberpunkcap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-black/50"
                >
                    <img className="w-[24px] h-[24px]" src="discord.png" />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-black/50"
                >
                    <img className="w-[24px] h-[24px]" src="instagram.png" />
                </a>
                <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-black/50"
                >
                    <img className="w-[24px] h-[24px]" src="tiktok.png" />
                </a>
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-black/50"
                >
                    <img className="w-[24px] h-[24px]" src="youtube.png" />
                </a>


            </footer>
            <p className='flex mt-[40px] mb-[40px] text-white/60 md:text-m text:sm font-sans text-left'>
                © 2024 Cyberpunk Capital. Jassy. Toate drepturile rezervate.
            </p>
        </div>
    );
};

export default Footer;