import React from 'react';

const TopSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center pt-[80px] gap-2">
            <p className="text-center text-green md:text-m text-sm font-sans uppercase">
                Locul în care cunoștințele tale despre crypto se transformă în profit
            </p>
            <div className="flex flex-col items-center">
                <p className="text-center md:text-6xl text-4xl font-nebula bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Portalul tau catre
                </p>
                <p className="text-center md:text-6xl text-4xl font-nebula bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Independenta
                </p>
                <p className="text-center md:text-6xl text-4xl font-nebula bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    financiara
                </p>
            </div>
            <p className="text-white/60 md:text-m text:sm font-sans text-center">
                Comunitatea în care traderii învață, accesează cele mai bune strategii și câștigă împreună.
            </p>
            <button className="mt-6 w-fit bg-green rounded-[45px] font-sans md:text-m text-sm text-black justify-center items-center py-[10px] px-[20px] flex">
                Join the Cyberpunk Army
            </button>
        </div>
    );
};

export default TopSection;
