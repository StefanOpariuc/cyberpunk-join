'use client';
import { useState, useEffect } from "react";
import { useToast } from "@/components/use-toast";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";
import { Toaster } from "@/components/toaster";
import { Toaster as Sonner } from "@/components/sonner";
import { Post } from "./api/posts/route";


const Index = () => {
  const [email, setEmail] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data.data);
        console.log("Fetched posts:", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch request:", error);
      });

  }, []);

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
    <>
      <Toaster />
      <Sonner />
      <div className="min-h-screen">
        <div className="flex w-full flex-row justify-between pt-[50px] md:pl-[174px] md:pr-[174px] pl-[16px] pr-[16px]">
          <div className="text-center text-white text-xl font-normal font-nebula leading-normal">Cyberpunk<br />Capital</div>
          <div className="px-5 py-2.5 bg-green rounded-[45px] justify-center items-center gap-2.5 flex">
            <div className="text-center text-[#022811] text-base font-semibold font-sans leading-snug">Join Now</div>
          </div>
        </div>


        <div className="flex flex-col items-center md:pt-[80px] gap-2">
          <p className="text-center text-green text-base uppercase items-stretch">
            Locul in care cunostintele tale despre crypto se transforma in profit
          </p>
          <div className="flex flex-col items-center">
            <p className="text-center text-6xl font-normal font-nebula bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Portalul tau catre
            </p>
            <p className="text-center text-6xl font-normal font-nebula bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Independenta
            </p>
            <p className="text-center text-6xl font-normal font-nebula bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              financiara
            </p>
          </div>
          <p className="text-white/60 text-base font-normal font-sans">
            Comunitatea in care traderii invata, acceseaza cele mai bune strategii si castiga impreuna.
          </p>

        </div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 pt-40">

          {/* Social Media Links moved to bottom */}
          <footer className="flex flex-wrap justify-center mt-auto items-center gap-[42px]">
            <a
              href="https://patreon.com/cyberpunkcap"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/30 bg-black/50 hover:bg-white/10 transition-colors"
            >
              <img className="w-18 h-6" src="patreon.png" />
            </a>
            <a
              href="https://twitter.com/cyberpunkcap"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/30 bg-black/50 hover:bg-white/10 transition-colors"
            >
              <img className="w-6 h-6" src="x.png" />
            </a>

            <a
              href="https://discord.gg/cyberpunkcap"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/30 bg-black/50 hover:bg-white/10 transition-colors"
            >
              <img className="w-6 h-6" src="discord.png" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/30 bg-black/50 hover:bg-white/10 transition-colors"
            >
              <img className="w-6 h-6" src="instagram.png" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/30 bg-black/50 hover:bg-white/10 transition-colors"
            >
              <img className="w-6 h-6" src="tiktok.png" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/30 bg-black/50 hover:bg-white/10 transition-colors"
            >
              <img className="h-6 w-6" src="youtube.png" />
            </a>


          </footer>
        </div>
      </div>
    </>
  );
};

export default Index;