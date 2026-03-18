import { Outlet, useLocation } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { motion } from "motion/react";

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCF8] text-[#1A1A1A] font-sans relative overflow-x-hidden">
      {/* Enhanced Traditional Background Layers - Global Immersion */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base Hanji Texture - multi-layered & pronounced */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]"></div>
        <div className="absolute inset-0 opacity-[0.1] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        
        {/* Subtle global gradient wash to reduce "stark whiteness" */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FDFCF8_0%,#F8F6F0_100%)] opacity-40"></div>
        
        {/* Global Landscape Silhouette */}
        <div className="absolute bottom-0 right-0 w-full h-[600px] opacity-[0.03] pointer-events-none overflow-hidden">
           <img 
             src="https://images.unsplash.com/photo-1768141919912-d20b8f4119fe?auto=format&fit=crop&q=80&w=1080" 
             className="w-full h-full object-contain object-right-bottom grayscale"
             alt=""
           />
        </div>

        {/* Global Architecture Accents */}
        <div className="absolute top-[5%] left-[-5%] w-1/3 h-64 opacity-[0.03] pointer-events-none rotate-[-5deg]">
           <img 
             src="https://images.unsplash.com/photo-1733647800114-5c79adcc1ee0?auto=format&fit=crop&q=80&w=1080" 
             className="w-full h-full object-cover grayscale"
             alt=""
           />
        </div>

        {/* Traditional Red Seals (Stamps) - Discrete subjects */}
        <div className="absolute top-[20%] left-[8%] w-14 h-14 opacity-[0.12] transition-opacity duration-1000 group">
           <div className="w-full h-full border-[1.5px] border-[#8C2323] flex items-center justify-center font-serif text-[11px] text-[#8C2323] font-bold p-1 leading-none text-center mix-blend-multiply">
             温故<br/>知新
           </div>
        </div>
        <div className="absolute bottom-[10%] left-[5%] w-20 h-20 opacity-[0.07] rotate-[-8deg]">
           <img 
             src="https://images.unsplash.com/photo-1578531500970-6326bbc991bf?auto=format&fit=crop&q=80&w=1080" 
             className="w-full h-full object-contain grayscale brightness-125"
             alt=""
           />
        </div>
      </div>

      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
