import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="flex w-full flex-row justify-between pt-[50px] md:pl-[174px] md:pr-[174px] pl-[16px] pr-[16px]">
            <div className="text-center text-white text-xl font-nebula">
                Cyberpunk<br />Capital
            </div>
            <button className="w-fit bg-green rounded-[45px] md:text-m text-sm font-sans text-center text-black justify-center items-center py-[10px] px-[20px] flex">
                Join Now
            </button>
        </div>
    );
};

export default Header;