import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Globe, Languages } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "고전 번역 현황", path: "/status" },
  { name: "기술", path: "/technology" },
  { name: "비용 안내", path: "/pricing" },
  { name: "번역가", path: "/network" },
  { name: "커뮤니티", path: "/support" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#8C2323]/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#8C2323] flex items-center justify-center rounded-sm rotate-45 transition-transform group-hover:rotate-[135deg] duration-500">
            <span className="text-white font-serif text-xl -rotate-45 group-hover:rotate-[-135deg] transition-transform duration-500">古</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-[#1A1A1A] font-serif">온고지신 AI</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C2323] font-bold -mt-1">Classic Translation</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[13px] font-bold uppercase tracking-widest transition-all hover:text-[#8C2323] relative group ${
                location.pathname === item.path ? "text-[#8C2323]" : "text-[#1A1A1A]/70"
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#8C2323] transition-all duration-300 ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </Link>
          ))}
          <Link to="/support" className="flex items-center gap-2 bg-[#8C2323] text-white px-6 py-2.5 rounded-xs text-[13px] font-bold tracking-widest hover:bg-[#6D1B1B] transition-all shadow-lg shadow-[#8C2323]/20 uppercase">
            <Languages className="w-4 h-4" />
            번역 의뢰
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#1A1A1A]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-medium ${
                    location.pathname === item.path ? "text-[#8C2323]" : "text-[#1A1A1A]/70"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="flex items-center justify-center gap-2 bg-[#8C2323] text-white px-5 py-3 rounded-xl text-md font-medium">
                <Languages className="w-5 h-5" />
                번역 의뢰하기
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
