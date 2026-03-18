import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { Users, Handshake, Building2, GraduationCap, Award, Briefcase, Globe, Library, Microscope, Radio, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router";

const partners = [
  { name: "한국고전번역원 (ITKC)", role: "고전 번역 총괄 · 데이터 연계", icon: <Building2 className="w-6 h-6" /> },
  { name: "국사편찬위원회", role: "실록·승정원일기 번역 협력", icon: <Library className="w-6 h-6" /> },
  { name: "한국학중앙연구원", role: "한국학 연구 · 의궤 번역", icon: <Microscope className="w-6 h-6" /> },
  { name: "방송사 / 콘텐츠 제작사", role: "사극·다큐멘터리 콘텐츠 번역", icon: <Radio className="w-6 h-6" /> },
  { name: "해외 한국학 연구소", role: "Harvard · Columbia · SOAS 협력", icon: <Globe className="w-6 h-6" /> },
  { name: "출판사", role: "고전 번역서 출판 협력", icon: <BookOpen className="w-6 h-6" /> },
];

export function Network() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="번역가,협력"
          title="전문가와 기관이 함께하는 플랫폼"
          description="고전 번역 전문가, 역사 연구자, 정부기관, 해외 연구소가 하나의 플랫폼에서 협력합니다."
        />

        {/* Experts & Trust Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-1 bg-[#1A1A1A] border border-white/10 rounded-[40px] overflow-hidden p-1 shadow-2xl">
               {[
                 { label: "번역가 네트워크", value: "30만" },
                 { label: "지원 언어", value: "109" },
                 { label: "실록 권수", value: "1,893" },
                 { label: "미번역 분량", value: "3억자" }
               ].map((stat, idx) => (
                 <div key={idx} className="bg-white/5 p-10 text-center flex flex-col items-center justify-center">
                   <span className="text-4xl md:text-5xl font-serif font-bold text-[#8C2323] mb-2 block">{stat.value}</span>
                   <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</span>
                 </div>
               ))}
            </div>
            
            <div className="mt-8 bg-[#8C2323]/10 border border-[#8C2323]/25 p-10 rounded-[40px] relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4 font-serif text-[#8C2323]">🖊️ 고전 번역 전문가를 모집합니다</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  한문 고전 번역, 역사 연구, AI 번역 에디팅 분야의 전문가를 상시 모집합니다. 재택 근무 가능, 프리랜서 계약 방식으로 참여하실 수 있습니다.
                </p>
                <Link to="/specialist-apply" className="inline-flex items-center gap-2 bg-[#8C2323] text-white px-8 py-3 rounded-none text-sm font-bold hover:bg-[#6D1B1B] transition-all transform hover:scale-105 shadow-xl shadow-[#8C2323]/20 uppercase tracking-widest">
                  전문가 신청하기 <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="p-10 bg-[#FDFCF8] border border-gray-100 rounded-[60px] shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0cmFkaXRpb25hbCUyMGtvcmVhbiUyMGxpYnJhcnklMjBib29rc3xlbnwwfHx8fDE3NzMzODA4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover" alt="Library" />
              </div>
              <div className="grid grid-cols-3 gap-0 relative z-10 border border-gray-200">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="aspect-square bg-white overflow-hidden group/item relative">
                    <img 
                      src={`https://images.unsplash.com/photo-${[
                        '1507003211169-0a1dd7228f2d',
                        '1500648767791-00dcc994a43e',
                        '1472099645785-5658abf4ff4e',
                        '1544005313-94ddf0286df2',
                        '1552058544-f2b08422138a',
                        '1506794778202-cad84cf45f1d',
                        '1534528741775-53994a69daeb',
                        '1580489944761-15a19d654956',
                        '1438761681033-6461ffad8d80'
                      ][i]}?auto=format&fit=crop&q=80&w=400&h=400`} 
                      alt="Expert Portrait" 
                      className="w-full h-full object-cover grayscale brightness-90 group-hover/item:grayscale-0 group-hover/item:brightness-100 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-[#8C2323]/20 opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-2 left-2 z-20">
                      <div className="w-8 h-[1px] bg-white/50 mb-1"></div>
                      <div className="text-[8px] text-white font-bold tracking-widest uppercase">Expert_{i+1}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF8] via-transparent to-transparent z-20"></div>
            </div>
          </div>
        </div>

        {/* Partner Grid from HTML content */}
        <div className="py-24 border-t border-gray-100">
          <SectionHeader
            subtitle="협력 기관"
            title="신뢰할 수 있는 파트너십"
            description="정부 기관부터 글로벌 학술 네트워크까지, 다양한 파트너들과 함께 고전의 가치를 공유합니다."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, borderColor: "rgba(140, 35, 35, 0.2)" }}
                className="flex items-center gap-6 p-8 border border-gray-100 rounded-3xl bg-white hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#8C2323]">
                  {partner.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg font-serif mb-1">{partner.name}</h4>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">{partner.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
