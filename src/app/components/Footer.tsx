import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#8C2323]"></div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#8C2323] flex items-center justify-center rounded-sm rotate-45 shadow-lg shadow-[#8C2323]/20">
                <span className="text-white font-serif text-xl -rotate-45">古</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-serif">온고지신 AI</span>
                <span className="text-[10px] uppercase tracking-widest text-[#8C2323] font-semibold -mt-1">Classic Translation</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              AI 기술과 고전 번역 전문가의 협업을 통해 인류의 지적 유산인 고전 문헌을 현대 언어로 깨우고 세계와 연결합니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#8C2323] transition-all transform hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#8C2323] transition-all transform hover:scale-110">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#8C2323] transition-all transform hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-8 text-[#8C2323] uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="flex flex-col gap-5 text-sm text-gray-400 font-light">
              <li><Link to="/status" className="hover:text-[#8C2323] transition-colors">고전 번역 현황</Link></li>
              <li><Link to="/services" className="hover:text-[#8C2323] transition-colors">서비스</Link></li>
              <li><Link to="/technology" className="hover:text-[#8C2323] transition-colors">기술</Link></li>
              <li><Link to="/network" className="hover:text-[#8C2323] transition-colors">번역가,협력</Link></li>
              <li><Link to="/business" className="hover:text-[#8C2323] transition-colors">사업 협업</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-8 text-[#8C2323] uppercase tracking-[0.2em]">Contact Us</h4>
            <ul className="flex flex-col gap-6 text-sm text-gray-400 font-light">
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-3 h-3 text-[#8C2323]" />
                </div>
                <span>contact@classical-ai.kr</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-3 h-3 text-[#8C2323]" />
                </div>
                <span>02-0000-0000</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-3 h-3 text-[#8C2323]" />
                </div>
                <span className="leading-relaxed">서울특별시</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-8 text-[#8C2323] uppercase tracking-[0.2em]">Newsletter</h4>
            <p className="text-xs text-gray-500 mb-6 font-light leading-relaxed">새로운 고전 번역 소식과 프로젝트 현황을 받아보세요.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm flex-grow focus:outline-none focus:border-[#8C2323] transition-colors"
              />
              <button className="bg-[#8C2323] text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-[#6D1B1B] transition-all shadow-lg shadow-[#8C2323]/20">
                구독
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
          <p>© 2025 古典 AI Translation Platform. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">쿠키정책</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
