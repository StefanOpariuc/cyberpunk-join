'use client';
import { Toaster } from "@/components/toaster";
import { Toaster as Sonner } from "@/components/sonner";
import Header from "@/components/header";
import TopSection from "@/components/top-section";
import WhyCyberpunk from "@/components/why-cyberpunk";
import Newsletter from "@/components/newsletter";
import NewsletterJoin from "@/components/newsletter-join";
import LetsMeet from "@/components/lets-meet";
import Footer from "@/components/footer";


const Index = () => {

  return (
    <>
      <Toaster />
      <Sonner />
      <div className="min-h-screen ">
        <Header />
        <TopSection />
        <WhyCyberpunk />
        <Newsletter />
        <NewsletterJoin />
        <LetsMeet />
        <Footer />
      </div >
    </>
  );
};

export default Index;