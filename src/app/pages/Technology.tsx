import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { 
  Cpu, 
  Zap, 
  Database, 
  Search, 
  ShieldCheck, 
  ChevronRight, 
  Terminal, 
  Upload, 
  UserCheck, 
  CheckCircle,
  FileText,
  ClipboardList,
  Target,
  Globe,
  RefreshCw,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router";

const steps = [
  {
    title: "원문 접수",
    desc: "고전 문헌 원본 또는 사진을 접수하고, 번역 범위와 용도를 상담합니다.",
    icon: <Upload className="w-6 h-6" />,
  },
  {
    title: "AI 초벌 번역",
    desc: "분야별 프롬프트를 활용한 AI 번역 엔진으로 빠르고 정확한 초벌 번역을 수행합니다.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "전문가 감수",
    desc: "한문학·역사학 전문가가 문맥, 시대 배경, 문화적 함의를 고려하여 정밀 감수합니다.",
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    title: "납품 및 검토",
    desc: "최종 번역본을 납품하고, 고객 피드백에 따라 수정 및 보완 작업을 진행합니다.",
    icon: <CheckCircle className="w-6 h-6" />,
  },
];

const qaSteps = [
  { icon: <ClipboardList />, label: "프로젝트 기획" },
  { icon: <Search />, label: "원문 분석" },
  { icon: <FileText />, label: "용어집 작성" },
  { icon: <Zap />, label: "1차 번역" },
  { icon: <UserCheck />, label: "전문가 감수" },
  { icon: <Globe />, label: "Native 감수" },
  { icon: <ShieldCheck />, label: "QA 검증" },
  { icon: <RefreshCw />, label: "피드백 반영" },
  { icon: <CheckCircle />, label: "최종 납품" },
];

const qualityItems = [
  "해당 국가의 표준어 사용",
  "전문 용어집 활용 및 일관성 유지",
  "용어 및 표제의 일관성 확보",
  "도량형 및 시대적 단위 현지화",
];

export function Technology() {
  return (
    <div className="pt-32 pb-24 bg-[#FDFCF8]">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="PROCESS"
          title="번역 진행 과정"
          description="AI 기술과 전문가의 협업으로 체계적인 번역 프로세스를 운영합니다."
        />

        {/* Pipeline Section (Image inspired) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#1A1A1A] p-12 text-white relative group overflow-hidden border-b-4 border-[#8C2323]">
               <div className="text-[#8C2323] font-serif text-3xl font-black mb-10 opacity-40">0{index + 1}</div>
               <div className="w-14 h-14 bg-[#8C2323] flex items-center justify-center mb-8 shadow-xl shadow-[#8C2323]/20 group-hover:scale-110 transition-transform">
                  {step.icon}
               </div>
               <h4 className="text-xl font-bold mb-4 font-serif">{step.title}</h4>
               <p className="text-gray-400 text-sm leading-relaxed font-light">
                 {step.desc}
               </p>
               {index < steps.length - 1 && (
                 <ArrowRight className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-[#8C2323] w-8 h-8 opacity-20" />
               )}
            </div>
          ))}
        </div>

        {/* 15-Step Quality System (Image inspired) */}
        <div className="mt-32 p-12 md:p-24 bg-[#1A1A1A] text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-[#8C2323]"></div>
           <div className="text-center mb-20 relative z-10">
              <span className="text-[10px] bg-[#8C2323] px-4 py-1.5 font-bold uppercase tracking-[0.3em] mb-6 inline-block">15단계 표준 공정</span>
              <h3 className="text-4xl font-serif font-bold mb-6">엄격한 품질 관리 체계</h3>
              <p className="text-white/40 max-w-2xl mx-auto font-light leading-relaxed text-sm">
                프로젝트 기획부터 용어집 작성, 3차에 걸친 감수(전문가, Native, QA) 및 피드백 반영을 거쳐 최종 납품됩니다.
              </p>
           </div>

           {/* Flow Diagram */}
           <div className="flex flex-wrap justify-center gap-y-12 gap-x-6 md:gap-x-12 relative z-10 mb-20">
              {qaSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-4 group">
                   <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#8C2323] group-hover:text-[#8C2323] transition-all">
                      {step.icon}
                   </div>
                   <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">{step.label}</span>
                   {i < qaSteps.length - 1 && (
                     <div className="hidden md:block absolute translate-x-16 translate-y-6 text-white/10">→</div>
                   )}
                </div>
              ))}
           </div>

           {/* Quality Items */}
           <div className="pt-20 border-t border-white/10 relative z-10">
              <div className="text-center mb-12">
                 <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.5em]">품질 준수 사항</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                 {qualityItems.map((item, i) => (
                   <div key={i} className="bg-white/5 border border-white/10 p-5 flex items-center gap-4 hover:bg-[#8C2323]/20 hover:border-[#8C2323] transition-all">
                      <CheckCircle className="w-4 h-4 text-[#8C2323]" />
                      <span className="text-xs font-bold text-white/70">{item}</span>
                   </div>
                 ))}
              </div>
              <div className="mt-12 text-center">
                 <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#8C2323] text-white font-bold text-sm tracking-widest uppercase shadow-2xl shadow-[#8C2323]/40">
                    <Target className="w-4 h-4" /> 3차에 걸친 전문가-Native-QA 감수
                 </div>
              </div>
           </div>
        </div>

        {/* Feature Blocks (Keep existing but refine) */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
           {[
             { title: "고전 데이터베이스", desc: "ITKC 한국고전종합DB, 조선왕조실록DB를 학습·연동하여 번역 정확도를 높입니다.", icon: <Database /> },
             { title: "번역 에디팅 툴", desc: "원문과 번역을 나란히 비교하며 교정할 수 있는 전문 에디팅 시스템을 제공합니다.", icon: <Terminal /> },
             { title: "AI 번역 모델", desc: "LLM 기반 고전 한문 특화 번역 시스템으로 일관성 있는 번역을 제공합니다.", icon: <Zap /> },
           ].map((block, i) => (
             <div key={i} className="p-12 border border-gray-100 bg-white hover:border-[#8C2323] transition-all group">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-[#8C2323] group-hover:text-white transition-all">
                   {block.icon}
                </div>
                <h4 className="text-xl font-serif font-bold mb-4">{block.title}</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{block.desc}</p>
             </div>
           ))}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center py-20 border-t border-gray-100">
           <h3 className="text-3xl font-serif font-bold mb-8">체계적인 프로세스로 고전의 가치를 되살립니다</h3>
           <Link to="/support" className="bg-[#8C2323] text-white px-12 py-5 font-bold tracking-[0.2em] hover:bg-[#6D1B1B] transition-all shadow-xl shadow-[#8C2323]/20 uppercase">
             번역 의뢰 및 상담 시작하기
           </Link>
        </div>
      </div>
    </div>
  );
}
