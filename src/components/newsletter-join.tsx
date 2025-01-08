import { FC, useState } from 'react';
import { useToast } from './use-toast';

const NewsletterJoin: FC = () => {
    const { toast } = useToast();

    const [email, setEmail] = useState("");
    const isEmailValid = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Newsletter subscription for:", email);
        fetch("/api/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(() => {
                if (email) {
                    toast({
                        title: "Successfully subscribed!",
                        description: "Welcome to CyberpunkCapital",
                        className: "bg-black border-white text-white",
                    });
                    setEmail("");
                }
            })
            .catch((error) => {
                console.error("There was a problem with the subscription request:", error);
            });
    };

    return (
        <div className="flex flex-col items-center md:pt-[126px] pt-[80px] px-[16px] md:px-[0px]">
            <div className="flex md:flex-row flex-col justify-between md:gap-[60px] gap-[40px]">
                <div className="flex flex-col items-center gap-[20px]">
                    <p className="text-center md:text-xxl text-xl font-nebula">
                        aboneaza-te la <span className="text-green">newsletter</span>
                    </p>
                    <p className="flex md:max-w-[720px] text-white/60 md:text-m text:sm font-sans text-left">
                        Primesti informatii de la experti cu privire la tendinte din piata si strategii direct in inbox-ul tau.
                    </p>
                </div>

                <div className="flex md:flex-row flex-col items-center">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-row items-center justify-between border md:gap-[140px] gap-[40px] border-[#06E55F] bg-[#06E55F]/10 rounded-[45px] py-2 px-4">
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Introduceți e-mailul dvs."
                                className="text-[14px] bg-transparent text-white/60 font-sans outline-none"
                                required
                            />
                            <button
                                type="submit"
                                disabled={!isEmailValid()}
                                className={`rounded-[45px] md:text-m text-sm font-sans text-center py-[11px] px-[16px] flex ${isEmailValid() ? 'bg-green text-black' : 'bg-[#06E55F]/10 text-gray-300 cursor-not-allowed'
                                    }`}>
                                Aboneaza-te
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsletterJoin;