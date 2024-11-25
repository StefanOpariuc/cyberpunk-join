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
              <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {posts?.map((article, index) => (
                  <Card key={index} className="flex flex-col bg-black/50 border-white/30 hover:scale-105  cursor-pointer transition-transform duration-300">
                    <a href={article.web_url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <CardHeader className="flex ">
                        <CardTitle className="text-white text-xl">{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col justify-between">
                        <div className="flex mb-4">
                          <img src={article.thumbnail_url} />
                        </div>
                        <p className="text-white/80 mb-4">{new Date(article.publish_date * 1000).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}</p>
                      </CardContent>
                    </a>
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