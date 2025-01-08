import { FC } from 'react';
import CheckText from './check-text'; // Assuming CheckText component exists

const WhyCyberpunk: FC = () => {
    return (
        <div className="flex flex-col items-center md:pt-[126px] pt-[80px] md:gap-[60px] gap-[40px]">
            <div className="flex flex-col items-center">
                <p className="text-center md:text-4xl text-xl font-nebula">
                    de ce sa faci parte din
                </p>
                <p className="text-center md:text-4xl text-xl font-nebula">
                    comunitatea <span className="text-green">cyberpunk capital</span>?
                </p>
            </div>

            <div className="flex flex-col items-center gap-[30px] pl-[16px]">
                <div className="flex md:flex-row flex-col md:gap-[40px] gap-[25px]">
                    <div className="flex flex-col md:gap-[40px] gap-[25px]">
                        <CheckText>
                            <span className="font-bold text-white">Analize fundamentale</span> complexe asupra proiectelor cu potential
                        </CheckText>
                        <CheckText>
                            <span className="font-bold text-white">Strategii de trading</span> testate si functionale
                        </CheckText>
                    </div>
                    <div className="flex flex-col md:gap-[40px] gap-[25px]">
                        <CheckText>
                            <span className="font-bold text-white">Resurse necesare</span> pentru research
                        </CheckText>
                        <CheckText>
                            <span className="font-bold text-white">Cursuri</span> de la nivel incepator pana la avansat
                        </CheckText>
                    </div>
                </div>
                <button className="w-fit bg-green rounded-[45px] font-sans text-center text-black justify-center items-center py-[10px] px-[20px] flex">
                    Intra în comunitate
                </button>
            </div>
        </div>
    );
};

export default WhyCyberpunk;