'use client';
import { useState, useEffect } from "react";
import { useToast } from "@/components/use-toast";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";
import { Toaster } from "@/components/toaster";
import { Toaster as Sonner } from "@/components/sonner";

const articles = [
  {
    title: "The Rise of Quantum Computing",
    preview: "Discover how quantum computers are revolutionizing cryptography and data security in the digital age.",
    date: "2024-02-15"
  },
  {
    title: "Neural Networks: The Next Frontier",
    preview: "Exploring the latest breakthroughs in artificial intelligence and their impact on society.",
    date: "2024-02-14"
  },
  {
    title: "Cybersecurity in 2024",
    preview: "Stay ahead of emerging threats with our comprehensive analysis of current cybersecurity trends.",
    date: "2024-02-13"
  },
  {
    title: "The Future of Digital Currency",
    preview: "Understanding the evolution of cryptocurrency and its role in shaping the future of finance.",
    date: "2024-02-12"
  }
];

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

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
      .then((data) => {
        console.log("Subscription successful:", data);
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
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 pt-40">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 tracking-wider text-white">
              CyberpunkCapital
            </h1>

            <form onSubmit={handleSubmit} className="w-full max-w-md mb-16">
              <div className="relative">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-lg bg-black/50 border border-white/30 text-white text-lg placeholder:text-white/50 focus:border-white/70 transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={!isEmailValid()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 rounded-md
                         border border-white/30 bg-black/50 text-white hover:bg-white
                         hover:text-black hover:disabled:text-white hover:disabled:bg-black transition-colors duration-300"
                >
                  Join
                </button>
              </div>
            </form>

            <div className="w-full max-w-7xl px-4 mb-16">
              <h2 className="text-2xl font-bold mb-8 text-white">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {articles.map((article, index) => (
                  <Card key={index} className="bg-black/50 border-white/30 hover:scale-105 transition-transform duration-300">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 mb-4">{article.preview}</p>
                      <p className="text-white/60 text-sm">{article.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media Links moved to bottom */}
          <footer className="flex flex-wrap justify-center mt-auto bottom-30 items-center gap-8 pb-8">
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