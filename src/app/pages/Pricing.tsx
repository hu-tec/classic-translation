import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { BookOpen, Globe, Film, CheckCircle, ArrowRight, Quote, Info, Search, Languages, Database } from "lucide-react";
import { Link } from "react-router";

const priceTiers = [
  {
    id: "standard",
    name: "표준 번역 (AI + 전문가)",
    desc: "AI 초벌 번역 후 고전 전공자가 정밀 교정합니다. 실록, 승정원일기 등 역사서에 적합합니다.",
    price: "자당 50~150원",
    features: ["AI 초벌 번역 엔진 적용", "해당 분야 석사급 전문가 교정", "인명·지명 색인 작업 포함", "표준 주석 생성"],
    color: "bg-white border-gray-100",
  },
  {
    id: "premium",
    name: "심화·학술 번역",
    desc: "난이도가 높은 필사체, 개인 문집 등 초서 해독이 필요한 고난도 텍스트 전문입니다.",
    price: "자당 200~450원",
    features: ["박사급 초서 전문가 배정", "심층 학술 주석 및 고증 포함", "디지털 영구 아카이빙 지원", "다양한 서체 OCR 처리 포함"],
    color: "bg-white border-[#8C2323] border-2 shadow-2xl scale-105 z-10",
    popular: true,
  },
  {
    id: "global",
    name: "글로벌 다국어 번역",
    desc: "한국어 고전을 영어, 중국어, 일본어 등 세계 109개 언어로 번역하여 해외에 보급합니다.",
    price: "협의 (언어별 상이)",
    features: ["원문-다국어 대조 번역", "현지인 언어 감수 포함", "글로벌 학술 포맷 지원", "메타데이터 다국어화"],
    color: "bg-[#1A1A1A] text-white border-none",
  },
];

const factors = [
  { icon: <Database className="w-5 h-5" />, title: "원문 상태", desc: "활자본, 필사체, 훼손 상태 등에 따른 해독 난이도" },
  { icon: <Search className="w-5 h-5" />, title: "전문성 수준", desc: "단순 현대어역, 심층 학술 주석 포함 여부" },
  { icon: <Languages className="w-5 h-5" />, title: "대상 언어", desc: "희귀 언어 또는 다국어 동시 번역 여부" },
  { icon: <BookOpen className="w-5 h-5" />, title: "프로젝트 규모", desc: "대량 번역 프로젝트 시 자당 단가 대폭 하향 조정 가능" },
];

export function Pricing() {
  return (
    <div className="pt-32 pb-24 bg-[#FDFCF8]">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Pricing & Costs"
          title="투명한 번역 비용 산정"
          description="온고지신 AI는 AI 기술을 통해 기존 시장가 대비 비용을 60% 이상 절감하면서도, 전문가의 손길로 최고의 품질을 유지합니다."
        />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24 mb-32 items-stretch">
          {priceTiers.map((tier) => (
            <div key={tier.id} className={`p-12 flex flex-col justify-between group relative overflow-hidden ${tier.color}`}>
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-[#8C2323] text-white text-[10px] font-bold px-4 py-1 uppercase tracking-widest">Most Requested</div>
              )}
              <div>
                <h4 className="text-2xl font-serif font-bold mb-6 group-hover:text-[#8C2323] transition-colors">{tier.name}</h4>
                <p className="text-sm font-light text-gray-500 mb-10 leading-relaxed">{tier.desc}</p>
                <div className="text-4xl font-serif font-black mb-12 text-[#8C2323]">{tier.price}</div>
                <div className="w-full h-[1px] bg-gray-100 mb-10 group-hover:bg-[#8C2323]/20 transition-all"></div>
                <ul className="space-y-4 mb-12">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-light">
                      <CheckCircle className={`w-4 h-4 ${tier.id === "global" ? "text-white/40" : "text-[#8C2323]"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/support" className={`w-full py-6 text-center font-bold tracking-[0.3em] transition-all border uppercase text-xs ${
                tier.id === "global" 
                  ? "bg-white text-[#1A1A1A] border-white hover:bg-[#8C2323] hover:text-white" 
                  : "bg-[#1A1A1A] text-white border-[#1A1A1A] hover:bg-[#8C2323]"
              }`}>
                번역 의뢰 및 상담
              </Link>
            </div>
          ))}
        </div>

        {/* Price Factors Section */}
        <div className="py-24 border-t border-[#8C2323]/10">
           <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3">
                 <h4 className="text-3xl font-serif font-bold mb-8 leading-tight">비용을 결정하는<br /><span className="text-[#8C2323]">핵심 요소들</span></h4>
                 <p className="text-gray-500 text-lg font-light leading-relaxed">온고지신 AI는 원문의 상태와 결과물의 목적을 면밀히 분석하여 가장 합리적인 견적을 산출합니다.</p>
                 <div className="mt-12 p-8 bg-white border-l-4 border-[#8C2323] shadow-sm">
                    <Info className="w-6 h-6 text-[#8C2323] mb-4" />
                    <p className="text-sm text-gray-400 leading-relaxed">공익 목적의 대규모 국가 기록물 프로젝트 또는 독립 연구자용 프로젝트는 별도의 할인 혜택을 제공합니다.</p>
                 </div>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                 {factors.map((factor, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-100 flex gap-6 items-start group hover:shadow-xl transition-all">
                      <div className="w-12 h-12 bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-[#8C2323] group-hover:text-white transition-all">
                         {factor.icon}
                      </div>
                      <div>
                         <h5 className="font-serif font-bold text-lg mb-2">{factor.title}</h5>
                         <p className="text-sm text-gray-500 font-light leading-relaxed">{factor.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* CTA Quote */}
        <div className="mt-20 p-16 bg-[#1A1A1A] text-white text-center relative overflow-hidden">
           <Quote className="w-16 h-16 text-[#8C2323] mx-auto mb-8 opacity-20" />
           <h3 className="text-3xl font-serif font-light leading-relaxed mb-12">
             "비용이 높아 번역을 미루고 계셨나요?<br />
             <strong className="text-[#8C2323]">온고지신 AI의 혁신적인 파이프라인</strong>이 가능성을 열어드립니다."
           </h3>
           <Link to="/support" className="inline-flex items-center gap-2 bg-[#8C2323] text-white px-10 py-5 rounded-none font-bold text-lg hover:bg-[#6D1B1B] transition-all">
             무료 샘플 번역 및 견적 상담 <ArrowRight className="w-5 h-5" />
           </Link>
        </div>
      </div>
    </div>
  );
}
