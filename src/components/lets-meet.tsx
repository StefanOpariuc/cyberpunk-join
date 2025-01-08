import { FC } from 'react';
import CheckText from './check-text'; // Assuming CheckText component exists

const LetsMeet: FC = () => {
    return (
        <div className="flex flex-col items-center md:pt-[126px] pt-[80px] md:gap-[60px] gap-[40px]">
            <div className="flex flex-col items-center">
                <p className="text-center md:text-4xl text-xl font-nebula">
                    <span className="text-green">acceleram succesul</span> startup-urilor din
                </p>
                <p className="text-center md:text-4xl text-xl font-nebula">
                    industria blockchain
                </p>
            </div>

            <div className="flex flex-col items-center gap-[30px]">
                <div className="flex md:flex-row flex-col md:gap-[40px] gap-[25px] pl-[16px]">
                    <div className="flex flex-col md:gap-[40px] gap-[25px]">
                        <CheckText>
                            Strategii de marketing personalizate
                        </CheckText>
                        <CheckText>
                            Lansari si cresterea vizibilitatii
                        </CheckText>
                    </div>
                    <div className="flex flex-col md:gap-[40px] gap-[25px]">
                        <CheckText>
                            Creare de continut premium
                        </CheckText>
                        <CheckText>
                            Cresterea comunitatilor
                        </CheckText>
                    </div>
                </div>
                <div className='flex flex-col md:gap-[40px] gap-[25px] pl-[16px]'>
                    <CheckText>
                        Networking cu parteneri relevanti din industrie
                    </CheckText>
                </div>
            </div>
            <button className="w-fit bg-green rounded-[45px] font-sans text-center text-black justify-center items-center py-[10px] px-[20px] flex">
                Programeaze o intalnire
            </button>
        </div>
    );
};

export default LetsMeet;