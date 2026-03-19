import { motion } from "motion/react";
import { ArrowRight, Languages, BookOpen, Film, FileText, CheckCircle, Database, Network, Search, AlertCircle, Quote, ChevronRight, Globe, ShieldCheck, Heart, Cpu, FileText as FileIcon, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SectionHeader } from "../components/SectionHeader";

// Classical text assets for background
import bgText1 from "figma:asset/6126ecf4667705e0fb29955d53a059ffe09e3cd0.png";
import bgText2 from "figma:asset/4a67adf9dc8d129393bca5f64bb7bb8132a62b56.png";
import bgText3 from "figma:asset/ce2d6f4800f83f2869618ccebefefe9d74267eee.png";

// New artistic reference assets
import refArt1 from "figma:asset/aca769e81ef20c270abaf9d07b821c9382a90b75.png";
import refArt2 from "figma:asset/eec3e812ace153cb54c165eab3955dc2b7b70182.png";
import refMunhyang from "figma:asset/6bb9492dbf7256d33df567525763871f294c9689.png";

// Reference images from prompt
import imgHeritageDetails from "figma:asset/ab2a088ebeb75530a7d1549e2fdec5c0d91fd960.png";
import imgScholarCases from "figma:asset/028700deb353cf72d4ae9927f091776671cb6df1.png";
import imgWhyImportant from "figma:asset/6e707165a4704e0053932b9351efd53723203c7e.png";

// Silok related images
import imgSilokBooks from "figma:asset/09236cf01d92df06b8b35e9ca31c08e0f0bc5ea8.png";
import imgSilokText from "figma:asset/002e5050b462acbb071675167add837db9470e7b.png";
import imgSilokIllust from "figma:asset/7059ed96cb5a3fe1353a3db32e899c0bafd90cf4.png";

// Seungjeongwon related images
import imgSeungCover from "figma:asset/80bab65bbb7b9e0c6a96e8cb1e011755f8c689fc.png";
import imgSeungInside from "figma:asset/8cd61a913c93065d3923bc7e6749e948c4bcc725.png";
import imgSeungBooks from "figma:asset/9d3201ad6411a900217a6b91597ce7a3e7e1b201.png";

const scholars = [
  {
    name: "최병현 (Choi Byonghyon)",
    works: [
      { title: "징비록 (Jingbirok)", enTitle: "The Book of Corrections", publisher: "UC Berkeley", feature: "임진왜란 회고록 영어 번역" },
      { title: "목민심서 (Mongmin Simseo)", enTitle: "Admonitions on Governing the People", publisher: "University of California", feature: "조선 행정 철학 소개" },
      { title: "태조실록 (Taejo Sillok)", enTitle: "The Annals of King Taejo", publisher: "Harvard University Press", feature: "조선 건국 기록 번역" }
    ],
    impact: "미국 대학에서 한국사 교재로 사용됨",
    highlight: true
  },
  {
    name: "James B. Palais",
    works: [{ title: "경국대전 관련 연구", enTitle: "Confucian Statecraft and Korean Institutions", publisher: "University of Washington", feature: "조선 법제 연구" }],
    impact: "조선 법제 연구의 권위자"
  },
  {
    name: "Peter H. Lee",
    works: [{ title: "한국 고전 문학", enTitle: "Sources of Korean Tradition", publisher: "Columbia University", feature: "한국 고전 텍스트 번역" }],
    impact: "한국 고전 텍스트 번역 및 소개"
  },
  {
    name: "Burglind Jungmann",
    works: [{ title: "조선 문화사", enTitle: "Various Papers", publisher: "Harvard", feature: "문화사 중심 번역" }],
    impact: "문화사 중심의 번역 및 연구"
  }
];

const importancePoints = [
  { 
    title: "세계 학계 접근성 확대", 
    desc: "한국어를 모르는 해외 학자들도 한국의 방대한 고전 지식과 사료에 직접 접근할 수 있게 됩니다. 이는 한국학 연구의 범위를 전 세계로 확장시키고, 글로벌 학술 네트워크에서 한국의 지적 자산이 정당하게 평가받는 토대가 됩니다.", 
    icon: <Globe className="w-6 h-6" /> 
  },
  { 
    title: "한국 역사 해석권의 주체적 확보", 
    desc: "고전 번역본이 부재할 경우, 해외 학계는 일본이나 중국 측의 왜곡된 연구 결과나 번역본에 의존하게 되는 위험이 큽니다. 우리 사료를 우리 손으로 직접 번역하여 보급함으로써 역사 해석의 주도권을 확고히 지킬 수 있습니다.", 
    icon: <ShieldCheck className="w-6 h-6" /> 
  },
  { 
    title: "K-Culture의 역사적 기반 강화", 
    desc: "현대 한류 열풍이 단순한 유행을 넘어 깊이 있는 문화 콘텐츠로 자리잡기 위해서는 그 뿌리가 되는 고전 콘텐츠의 개방이 필수적입니다. 번역된 고전은 전 세계 창작자들에게 무궁무진한 영감과 역사적 고증 데이터를 제공합니다.", 
    icon: <Heart className="w-6 h-6" /> 
  },
  { 
    title: "미래 AI 시대의 핵심 원천 데이터", 
    desc: "고전 번역 데이터는 최신 AI 언어 모델(LLM)이 한국의 역사, 철학, 문화를 정확하게 이해하고 학습하는 데 결정적인 역할을 합니다. 정제된 고전 텍스트는 대한민국만의 독자적인 AI 생태계를 구축하는 핵심 국가 전략 자산입니다.", 
    icon: <Cpu className="w-6 h-6" /> 
  }
];

const services = [
  {
    title: "고전 번역",
    description: "한문으로 기록된 고전 문헌을 현대 한국어로 정확하게 번역합니다. 실록, 승정원일기 등 국가 기록물부터 개인 문집까지 처리합니다.",
    icon: <BookOpen className="w-6 h-6 text-[#8C2323]" />,
    link: "/technology",
    color: "bg-[#F7F3E9]",
    tags: ["고어 → 한국어", "한문 해독", "역사 주석"]
  },
  {
    title: "글로벌 번역",
    description: "한국어 고전을 세계 연구자가 접근할 수 있도록 영어 및 109개 언어로 번역합니다. 해외 한국학 연구를 지원합니다.",
    icon: <Languages className="w-6 h-6 text-[#8C2323]" />,
    link: "/technology",
    color: "bg-[#F0F4F1]",
    tags: ["한국어 → 영어", "109개 언어", "학술 번역"]
  },
  {
    title: "콘텐츠 번역",
    description: "사극, 역사 드라마, 웹툰, 다큐멘터리 등 K-콘텐츠의 글로벌 확장을 지원하는 고품질 번역을 제공합니다.",
    icon: <Film className="w-6 h-6 text-[#8C2323]" />,
    link: "/technology",
    color: "bg-[#F3F0F7]",
    tags: ["드라마/영화", "웹툰", "영상 번역"]
  },
  {
    title: "비용 및 견적",
    description: "AI 도입으로 획기적으로 낮춘 번역 단가를 확인하세요. 프로젝트 규모와 난이도에 따른 투명한 견적을 제공합니다.",
    icon: <FileText className="w-6 h-6 text-[#8C2323]" />,
    link: "/pricing",
    color: "bg-[#FDF2F2]",
    tags: ["자당 단가", "합리적 견적", "품질 보증"]
  },
];

const statusData = [
  { name: "조선왕조실록 (5천만자)", status: "완역 완료", color: "bg-green-100 text-green-700", progress: 100 },
  { name: "승정원일기 (3억자)", status: "3% 미만", color: "bg-[#8C2323]/10 text-[#8C2323]", progress: 3 },
  { name: "비변사등록", status: "일부 번역", color: "bg-amber-100 text-amber-700", progress: 42 },
  { name: "조선왕조의궤", status: "일부 번역", color: "bg-amber-100 text-amber-700", progress: 28 },
  { name: "일성록", status: "진행 중", color: "bg-amber-100 text-amber-700", progress: 20 },
  { name: "주요 고전 → 영어", status: "극히 일부", color: "bg-[#8C2323]/10 text-[#8C2323]", progress: 5 },
];

export function Home() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      {/* Decorative Side Element (Vertical Text) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-10 pointer-events-none opacity-20 hover:opacity-100 transition-opacity duration-700">
        <div className="w-[1px] h-20 bg-[#8C2323]"></div>
        <span className="[writing-mode:vertical-rl] text-[#8C2323] font-serif text-sm tracking-[0.5em] font-bold uppercase">溫故知新 AI 플랫폼</span>
        <div className="w-[1px] h-20 bg-[#8C2323]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#FDFCF8]">
          <div className="absolute inset-0 opacity-[0.2] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
          <div className="absolute inset-0 flex opacity-[0.07] mix-blend-multiply select-none">
            <div className="flex-1 h-full rotate-[-2deg] scale-110">
              <ImageWithFallback src={bgText2} className="w-full h-full object-contain object-left" alt="" />
            </div>
            <div className="flex-1 h-full scale-x-[-1] translate-y-20 opacity-60">
              <ImageWithFallback src={bgText1} className="w-full h-full object-contain" alt="" />
            </div>
            <div className="flex-1 h-full rotate-[2deg] -translate-y-10">
              <ImageWithFallback src={bgText3} className="w-full h-full object-contain object-right" alt="" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full opacity-[0.12] mix-blend-multiply">
              <div className="absolute left-[-10%] top-[10%] w-1/2 h-1/2 rotate-[-15deg]">
                <ImageWithFallback src={refMunhyang} className="w-full h-full object-contain grayscale" alt="" />
              </div>
              <div className="absolute right-[-10%] bottom-[10%] w-1/2 h-1/2 rotate-[15deg] scale-x-[-1]">
                <ImageWithFallback src={refMunhyang} className="w-full h-full object-contain grayscale" alt="" />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8]/30 via-transparent to-[#FDFCF8]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8C2323]"></div>
              <span className="text-[#8C2323] text-xs font-bold tracking-widest uppercase">AI 고전 번역 플랫폼</span>
              <div className="w-8 h-[1px] bg-[#8C2323]"></div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-[#1A1A1A] font-serif">
              AI가 잠든<br />
              <span className="text-[#8C2323]">천년의 기록</span>을 깨워<br />
              세계의 언어로
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              수천 년의 동아시아 고전 문헌이 번역을 기다리고 있습니다. AI 번역 기술과 고전 전문가의 협업으로 그 문을 엽니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/technology" className="bg-[#8C2323] text-white px-12 py-5 rounded-none text-lg font-bold hover:bg-[#6D1B1B] transition-all transform hover:scale-105 shadow-xl shadow-[#8C2323]/20 flex items-center justify-center gap-3 uppercase tracking-widest">
                기술 및 프로세스 <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/support" className="bg-white text-[#1A1A1A] border border-gray-200 px-12 py-5 rounded-none text-lg font-bold hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center gap-3 uppercase tracking-widest">
                견적 및 의뢰 상담
              </Link>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <span className="text-4xl font-serif font-bold text-[#8C2323] block mb-1">109</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">지원 언어</span>
              </div>
              <div className="text-center">
                <span className="text-4xl font-serif font-bold text-[#8C2323] block mb-1">3억</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">번역 대기 글자</span>
              </div>
              <div className="text-center">
                <span className="text-4xl font-serif font-bold text-[#8C2323] block mb-1">30만</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">번역가 네트워크</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-32 px-6 bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#8C2323]/10 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]"></div>
        
        <div className="container mx-auto relative z-10">
          <SectionHeader
            subtitle="고전 번역 현황"
            title="왜 지금, AI 고전 번역인가"
            description="한국의 고전 문헌은 인류 지식의 중요한 자산입니다. 하지만 방대한 분량과 고난도 한문으로 인해 대부분이 번역되지 못한 채 잠들어 있습니다."
            light
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {importancePoints.map((point, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-[#8C2323] transition-all"
                 >
                    <div className="w-12 h-12 bg-[#8C2323]/20 flex items-center justify-center text-[#8C2323] mb-6 group-hover:bg-[#8C2323] group-hover:text-white transition-all">
                      {point.icon}
                    </div>
                    <h4 className="text-xl font-serif font-bold mb-4">{point.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed font-light">{point.desc}</p>
                 </motion.div>
               ))}
            </div>
            
            <div className="relative group">
               <div className="absolute -inset-4 bg-[#8C2323]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative bg-white/5 border border-white/10 p-4">
                  <div className="p-10 md:p-14 shadow-sm relative overflow-hidden group/card min-h-[500px] flex flex-col justify-center bg-transparent border-none">
                    <div className="absolute -top-10 -right-10 opacity-[0.05] select-none pointer-events-none">
                      <span className="text-[20rem] font-serif font-black text-[#8C2323]">重要</span>
                    </div>
                    
                    <div className="relative z-10">
                      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="mb-12">
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">왜 고전 번역이 중요한가</h3>
                        <p className="text-[#8C2323] text-lg font-medium">번역의 의미는 단순한 언어 문제가 아닙니다.</p>
                        <div className="w-16 h-1 bg-[#8C2323] mt-6"></div>
                      </motion.div>
                      
                      <div className="grid grid-cols-1 gap-8">
                        {importancePoints.map((item, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex items-start gap-6 group/item"
                          >
                            <span className="text-2xl text-[#8C2323] font-serif font-bold leading-none mt-1">{['①', '②', '③', '④'][i]}</span>
                            <div className="space-y-2">
                              <h4 className="text-xl font-bold text-white group-hover/item:text-[#8C2323] transition-colors">{item.title}</h4>
                              <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-32 px-6 bg-[#FDFCF8] relative">
         <div className="container mx-auto">
            <SectionHeader 
               subtitle="Documentary Heritage"
               title="기록의 나라, 조선의 위대한 유산"
               description="유네스코 세계기록유산에 등재된 조선의 기록물은 가장 객관적이고 생생한 역사의 증거입니다."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
               {/* Silok Card */}
               {/* Silok Card */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }} 
                 whileInView={{ opacity: 1, y: 0 }} 
                 className="group relative bg-[#8C2323] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 text-white overflow-hidden flex flex-col min-h-[600px]"
               >
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 p-4 opacity-15 group-hover:opacity-25 transition-opacity z-0 pointer-events-none">
                    <span className="text-[10rem] font-serif font-black text-white leading-none">實錄</span>
                  </div>
                  
                  <div className="relative z-10 flex-grow">
                    <div className="flex justify-between items-start mb-12">
                      <div className="text-7xl font-serif font-black text-white/10 leading-none">01</div>
                      <span className="text-xs px-3 py-1 bg-white/20 text-white rounded-sm font-bold tracking-tighter shadow-sm">완역 완료 (유네스코 세계기록유산)</span>
                    </div>
                    
                    <h4 className="text-4xl md:text-5xl font-serif font-bold mb-10">조선왕조실록</h4>
                    
                    <ul className="space-y-6 text-base text-white/80 font-light leading-relaxed mb-12">
                       <li className="flex gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0"></div>
                         <span>왕이 사망한 뒤 편찬하는 공식 국가 기록으로, 태조부터 철종까지 472년간의 역사를 보존합니다.</span>
                       </li>
                       <li className="flex gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0"></div>
                         <span>사관이 작성한 사초를 바탕으로 편찬되었으며, 국왕조차 열람할 수 없었던 고도의 객관성을 유지합니다.</span>
                       </li>
                       <li className="flex gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0"></div>
                         <span>정치, 외교, 군사뿐 아니라 사회 전반의 세세한 생활상까지 기록된 세계 최대 규모의 단일 왕조 기록입니다.</span>
                       </li>
                    </ul>

                    {/* Image Gallery - Integrated below text */}
                    <div className="grid grid-cols-5 gap-4 mt-auto">
                      <div className="col-span-3 h-32 overflow-hidden border border-white/10 rounded-xs group-hover:border-white/30 transition-colors">
                        <ImageWithFallback src={imgSilokBooks} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Silok Books" />
                      </div>
                      <div className="col-span-2 flex flex-col gap-3">
                        <div className="flex-1 overflow-hidden border border-white/10 rounded-xs">
                          <ImageWithFallback src={imgSilokIllust} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Scholars Illustration" />
                        </div>
                        <div className="flex-1 overflow-hidden border border-white/10 rounded-xs">
                          <ImageWithFallback src={imgSilokText} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Silok Text" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Credit */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center relative z-10">
                    <span className="text-[10px] text-white/30 font-medium tracking-widest uppercase">UNESCO World Heritage</span>
                    <span className="text-[10px] text-white/30 font-medium">ⓒ 한국학중앙연구원</span>
                  </div>
               </motion.div>

               {/* Seungjeongwon Card */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }} 
                 whileInView={{ opacity: 1, y: 0 }} 
                 transition={{ delay: 0.2 }}
                 className="group relative bg-[#8C2323] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 text-white overflow-hidden flex flex-col min-h-[600px]"
               >
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 p-4 opacity-15 group-hover:opacity-25 transition-opacity z-0 pointer-events-none">
                    <span className="text-[10rem] font-serif font-black text-white leading-none">日記</span>
                  </div>

                  <div className="relative z-10 flex-grow">
                    <div className="flex justify-between items-start mb-12">
                      <div className="text-7xl font-serif font-black text-white/10 leading-none">02</div>
                      <span className="text-xs px-3 py-1 bg-white/20 text-white rounded-sm font-bold tracking-tighter italic animate-pulse shadow-sm">번역 진행률 3% 미만</span>
                    </div>
                    
                    <h4 className="text-4xl md:text-5xl font-serif font-bold mb-10">승정원일기</h4>
                    
                    <ul className="space-y-6 text-base text-white/80 font-light leading-relaxed mb-12">
                       <li className="flex gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0"></div>
                         <span>왕의 비서기관인 승정원이 매일 작성한 업무 일지로, 실록보다 훨씬 방대한 3억 자의 기록을 담고 있습니다.</span>
                       </li>
                       <li className="flex gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0"></div>
                         <span>왕과 신하의 대화, 상소문, 처리 지시 사항 등이 실시간으로 생생하게 기록된 현장성 높은 사료입니다.</span>
                       </li>
                       <li className="flex gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0"></div>
                         <span>방대한 분량으로 인해 현대어 번역이 가장 시급한 과제이며, AI 번역 도입 시 가장 큰 효과가 기대되는 문헌입니다.</span>
                       </li>
                    </ul>

                    {/* Image Gallery - Integrated below text */}
                    <div className="grid grid-cols-5 gap-4 mt-auto">
                      <div className="col-span-2 flex flex-col gap-3">
                        <div className="flex-1 overflow-hidden border border-white/10 rounded-xs">
                          <ImageWithFallback src={imgSeungCover} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Seungjeongwon Cover" />
                        </div>
                        <div className="flex-1 overflow-hidden border border-white/10 rounded-xs">
                          <ImageWithFallback src={imgSeungInside} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Seungjeongwon Inside" />
                        </div>
                      </div>
                      <div className="col-span-3 h-32 overflow-hidden border border-white/10 rounded-xs group-hover:border-white/30 transition-colors">
                        <ImageWithFallback src={imgSeungBooks} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Seungjeongwon Multiple Books" />
                      </div>
                    </div>
                  </div>

                  {/* Subtle Credit */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center relative z-10">
                    <span className="text-[10px] text-white/30 font-medium tracking-widest uppercase">National Treasure of Korea</span>
                    <span className="text-[10px] text-white/30 font-medium">ⓒ 국사편찬위원회</span>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Scholars Section */}
      <section className="py-40 px-6 bg-[#1A1A1A] text-white relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.05] pointer-events-none">
            <ImageWithFallback src={imgScholarCases} className="w-full h-full object-cover" alt="Global Impact Background" />
         </div>
         <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-24">
               <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[#8C2323] font-black text-xs tracking-[0.4em] uppercase mb-6 block">Global Academic Impact</motion.span>
               <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">
                  한국 고전을 영어로 번역한<br />
                  <span className="text-[#8C2323]">대표 학자 및 성공 사례</span>
               </motion.h2>
               <div className="flex items-center justify-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#8C2323]">
                     <img src="https://i.pravatar.cc/150?u=choi" alt="Choi Byonghyon" className="w-full h-full object-cover grayscale brightness-110" />
                  </div>
                  <span className="text-xl font-serif font-bold text-white/90 underline decoration-[#8C2323] decoration-2 underline-offset-8">최병현 (Choi Byonghyon) 교수</span>
               </div>
               <p className="text-white/40 text-lg font-light leading-relaxed">
                  고전의 가치는 언어의 장벽을 넘을 때 비로소 완성됩니다. <br className="hidden md:block" />
                  글로벌 학술 교재로 활용되는 대표적인 고전 번역 사례를 소개합니다.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
               {scholars.filter(s => s.highlight).map((scholar, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="col-span-full bg-[#8C2323] p-12 md:p-16 relative overflow-hidden group shadow-[0_30px_60px_-12px_rgba(140,35,35,0.4)]"
                  >
                     <div className="relative z-10 flex flex-col xl:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-10">
                           <div className="flex items-center gap-5">
                              <div className="p-3 bg-white/10 backdrop-blur-md rounded-full">
                                 <Quote className="w-8 h-8 text-white" />
                              </div>
                              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">{scholar.name}</h3>
                           </div>
                           <p className="text-white/90 text-2xl leading-relaxed font-serif italic border-l-4 border-white/30 pl-8">
                              "고전의 현대화는 단순한 직역을 넘어 현대인과 세계인이 공감할 수 있는 문학적·철학적 감수성을 담아내는 과정입니다."
                           </p>
                           <div className="flex flex-wrap gap-4 pt-4">
                              <span className="px-4 py-2 bg-white/10 text-white text-xs font-bold tracking-widest uppercase border border-white/20">University Professor</span>
                              <span className="px-4 py-2 bg-white/10 text-white text-xs font-bold tracking-widest uppercase border border-white/20">Classical Translator</span>
                              <span className="px-4 py-2 bg-white/10 text-white text-xs font-bold tracking-widest uppercase border border-white/20">Harvard Press Scholar</span>
                           </div>
                        </div>
                        
                        <div className="w-full xl:w-2/3 bg-white/5 backdrop-blur-md border border-white/20 p-8 md:p-12">
                           <div className="flex items-center justify-between mb-8 border-b border-white/20 pb-4">
                              <h4 className="text-white font-bold text-xl uppercase tracking-widest font-serif">Representative Translations</h4>
                              <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.3em]">Data Source: Global Academic Database</span>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {scholar.works.map((work, widx) => (
                                 <motion.div 
                                    key={widx} 
                                    whileHover={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                                    className="bg-white/10 p-6 border-l-4 border-white/40 transition-all flex flex-col justify-between"
                                 >
                                    <div>
                                       <h5 className="text-white font-bold text-lg mb-2 font-serif">{work.title}</h5>
                                       <p className="text-[#FDFCF8]/90 text-sm italic mb-1">{work.enTitle}</p>
                                       <p className="text-white/30 text-[10px] uppercase tracking-widest mb-4">{work.publisher}</p>
                                    </div>
                                    <div className="pt-4 border-t border-white/10 mt-2">
                                       <p className="text-xs font-bold text-white/80 flex items-center gap-2">
                                          <CheckCircle2 className="w-3 h-3 text-white" /> {work.feature}
                                       </p>
                                    </div>
                                 </motion.div>
                              ))}
                              <div className="bg-white/10 p-6 border-l-4 border-white/20 opacity-50 flex flex-col justify-center items-center text-center">
                                 <BookOpen className="w-8 h-8 mb-3 opacity-20" />
                                 <p className="text-[10px] uppercase tracking-widest font-bold">More research coming soon...</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               ))}
               
               {scholars.filter(s => !s.highlight).map((scholar, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/5 border border-white/10 p-10 hover:border-[#8C2323]/50 transition-all group"
                  >
                     <h4 className="text-xl font-bold mb-6 font-serif group-hover:text-[#8C2323] transition-colors">{scholar.name}</h4>
                     <div className="space-y-4 mb-8">
                        {scholar.works.map((work, widx) => (
                           <div key={widx}>
                              <p className="text-sm font-medium text-white/80">{work.title}</p>
                              <p className="text-[10px] text-white/30 uppercase tracking-widest">{work.publisher}</p>
                           </div>
                        ))}
                     </div>
                     <p className="text-xs text-[#8C2323] font-bold tracking-widest uppercase">{scholar.impact}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]"></div>
        <div className="container mx-auto relative z-10">
          <SectionHeader
            subtitle="서비스"
            title="고전에서 세계 언어로, 모든 번역을 제공합니다"
            description="AI 번역과 전문가 교정의 결합으로 정확하고 빠른 번역 서비스를 제공합니다."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${service.color} p-10 border border-[#8C2323]/5 rounded-none shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#8C2323] opacity-0 group-hover:opacity-100 transition-opacity duration-500 [clip-path:polygon(100%_0,0_0,100%_100%)]"></div>
                <div className="mb-8 p-5 bg-white w-fit rounded-none border border-[#8C2323]/10 shadow-sm group-hover:bg-[#8C2323] transition-all">
                  <div className="group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A] font-serif group-hover:text-[#8C2323] transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-10 text-base leading-relaxed flex-grow font-light">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] px-3 py-1.5 bg-white/60 border border-[#8C2323]/5 font-bold text-[#8C2323]/70 uppercase">{tag}</span>
                  ))}
                </div>
                <Link to={service.link} className="flex items-center gap-3 text-[#8C2323] font-black text-sm group/btn uppercase tracking-[0.2em] border-b border-[#8C2323]/20 pb-1 w-fit">
                  자세히 보기 <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="bg-[#1A1A1A] p-12 md:p-20 rounded-[60px] text-center text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
               <ImageWithFallback src="https://images.unsplash.com/photo-1723479128748-8cac9c3282d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGtvcmVhbiUyMGNhbGxpZ3JhcGh5JTIwcGFwZXIlMjBzY3JvbGwlMjBpbmt8ZW58MXx8fHwxNzczMzgwNDk1fDA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover" alt="Calligraphy" />
             </div>
             <Quote className="w-16 h-16 text-[#8C2323] mx-auto mb-8 opacity-20" />
             <h2 className="text-2xl md:text-4xl font-serif font-light leading-relaxed mb-12">
               승정원일기 <strong className="text-[#8C2323] font-bold">3억 자</strong>를 인간 번역으로만 완역하려면 수백 년이 필요합니다.<br className="hidden md:block" />
               AI 번역을 도입하면 이 기간을 <strong className="text-[#8C2323] font-bold">획기적으로 단축</strong>할 수 있습니다.
             </h2>
             <Link to="/support" className="inline-flex items-center gap-3 bg-[#8C2323] text-white px-12 py-6 rounded-none font-bold text-lg hover:bg-[#6D1B1B] transition-all shadow-xl shadow-[#8C2323]/30 uppercase tracking-[0.2em]">
               프로젝트 의뢰 및 협력 문의 <ChevronRight className="w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
