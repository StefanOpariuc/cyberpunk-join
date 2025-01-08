
import { ReactNode } from 'react';

interface CheckTextProps {
    children?: ReactNode;
}

const CheckText = ({ children }: CheckTextProps) => {
    return (
        <>
            <div className="flex flex-row items-center gap-[27px]">
                <img src="images/verified.svg" width="48px" height="48px" alt="verified icon" />
                <p className="text-white/60 md:text-m text:sm font-sans text-left">
                    {children}
                </p>
            </div>

        </>
    );
};

export default CheckText;