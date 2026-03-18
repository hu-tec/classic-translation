import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { AlertCircle, CheckCircle2, FileText, Database, Info, MessageSquare, Quote, ChevronRight, Globe, ShieldCheck, Heart, Cpu, Languages } from "lucide-react";
import { Link } from "react-router";

const problems = [
  {
    title: "세계 학계 접근성",
    desc: "한국어를 모르는 해외 학자들이 연구에 활용할 수 있는 다국어 번역본이 절대적으로 부족합니다.",
    icon: <Globe className="w-5 h-5 text-[#8C2323]" />,
  },
  {
    title: "역사 해석권 보호",
    desc: "번역본이 부족하면 일본이나 중국 측의 해석에 의존하게 되어 우리 역사의 주도권을 잃을 수 있습니다.",
    icon: <ShieldCheck className="w-5 h-5 text-[#8C2323]" />,
  },
  {
    title: "AI 시대의 원천 데이터",
    desc: "고전 번역 텍스트는 한국형 LLM의 학술적 가치와 문화적 정체성을 결정짓는 핵심 학습 데이터입니다.",
    icon: <Cpu className="w-5 h-5 text-[#8C2323]" />,
  },
];

const stats = [
  { name: "삼강행실도", total: "성종 대 간행", status: "완료", color: "bg-green-100 text-green-700", progress: 100, institution: "국립중앙도서관", desc: "효·충·열 사례 모음" },
  { name: "경국대전", total: "성종 대 완성", status: "완료", color: "bg-green-100 text-green-700", progress: 100, institution: "한국고전번역원", desc: "조선 기본 법전" },
  { name: "동의보감", total: "허준 편찬", status: "완료", color: "bg-green-100 text-green-700", progress: 100, institution: "국립한의학연구원", desc: "의학 백과사전" },
  { name: "훈민정음 해례본", total: "세종/정인지", status: "완료", color: "bg-green-100 text-green-700", progress: 100, institution: "각종 해설/리미어 번역", desc: "한글 창제 원리" },
  { name: "조선왕조의궤", total: "왕실의궤", status: "부분 완료", color: "bg-amber-100 text-amber-700", progress: 65, institution: "한국학중앙연구원", desc: "국가의식 절차 기록" },
  { name: "승정원일기", total: "왕실 비서실", status: "미완 (번역 중)", color: "bg-[#8C2323]/10 text-[#8C2323]", progress: 3, institution: "국사편찬위/한글화 일부", desc: "방대한 기록(3억자)" },
  { name: "일성록", total: "정조 시작", status: "완료", color: "bg-green-100 text-green-700", progress: 100, institution: "한국학중앙연구원", desc: "국왕의 일기/보고" },
  { name: "비변사등록", total: "국방/외교", status: "미완", color: "bg-[#8C2323]/10 text-[#8C2323]", progress: 15, institution: "일부 학술 번역 진행", desc: "임진왜란 이후 기록" },
];

const multiLangStatus = [
  { name: "조선왕조실록", en: "일부 진행", zh: "거의 없음", jp: "일부 연구", note: "국가 프로젝트 진행 중 (2033 완역 목표)" },
  { name: "세종실록", en: "진행 중", zh: "없음", jp: "일부 연구", note: "영어 번역 집중화 프로젝트" },
  { name: "징비록", en: "있음", zh: "있음", jp: "있음", note: "임진왜란 기록의 글로벌 확산" },
  { name: "목민심서", en: "있음", zh: "있음", jp: "있음", note: "동아시아 행정 철학의 정수" },
  { name: "동의보감", en: "있음", zh: "있음", jp: "있음", note: "유네스코 등재 의학서" },
  { name: "훈민정음 해례본", en: "있음", zh: "있음", jp: "있음", note: "언어학 고전" },
  { name: "열하일기", en: "있음", zh: "있음", jp: "있음", note: "여행기의 백미" },
  { name: "삼국사기", en: "있음", zh: "있음", jp: "있음", note: "고려 역사서" },
  { name: "삼국유사", en: "있음", zh: "있음", jp: "있음", note: "불교 설화 및 고대사" },
];

const representativeTranslations = [
  {
    lang: "English (영어)",
    scholar: "최병현 (Choi Byonghyon) 교수",
    work: "징비록 (The Book of Corrections), 목민심서, 태조실록",
    desc: "미국 명문 대학에서 한국사 교재로 사용되는 독보적인 번역 사례들입니다."
  },
  {
    lang: "International 학자",
    scholar: "James B. Palais, Peter H. Lee, Burglind Jungmann",
    work: "경국대전 연구, 한국 고전 문학, 조선 문화사",
    desc: "해외 석학들에 의해 연구되고 번역된 한국 고전의 정수들입니다."
  }
];

const professionalInstitutions = [
  { name: "한국고전번역원 (ITKC)", desc: "조선 문집·철학 번역 · 고전번역 총괄기관", link: "https://www.itkc.or.kr" },
  { name: "국사편찬위원회", desc: "역사 사료 번역 · 조선왕조실록, 승정원일기 담당", link: "https://history.go.kr" },
  { name: "한국학중앙연구원", desc: "한국학 연구 · 장서각 고문헌 번역", link: "https://www.aks.ac.kr" },
  { name: "서울대 규장각", desc: "왕실 기록 보존 · 승정원일기 디지털화", link: "https://kyujanggak.snu.ac.kr" },
  { name: "국립중앙도서관", desc: "고문헌 디지털화 · 고문헌 번역 OCR", link: "https://www.nl.go.kr" }
];

const marketInsights = [
  { label: "국내 미번역 한문 고전", value: "90% 이상", detail: "약 200만 책 중 대부분이 현대어로 옮겨지지 못함" },
  { label: "연간 번역 인력 양성", value: "약 50명 내외", detail: "전문성을 갖춘 신진 인력 공급이 수요에 비해 턱없이 부족" },
  { label: "해외 한국학 거점 대학", value: "300여 개소", detail: "영어권 및 비한자권 연구자들의 번역본 수요 급증" },
  { label: "AI 도입 시 예상 효율", value: "1,200%", detail: "초벌 번역 단계에서의 획기적 시간 단축 효과" }
];

export function ClassicStatus() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="고전 번역 현황"
          title="왜 지금, AI 고전 번역인가"
          description="한국의 고전 문헌은 인류 지식의 중요한 자산입니다. 하지만 방대한 분량과 고난도 한문으로 인해 대부분이 번역되지 못한 채 잠들어 있습니다."
        />

        {/* Detailed Market Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {marketInsights.map((insight, idx) => (
            <div key={idx} className="bg-white border border-[#8C2323]/5 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#8C2323] font-serif text-3xl font-bold mb-2">{insight.value}</div>
              <div className="text-[13px] font-bold text-[#1A1A1A] mb-3 uppercase tracking-wider">{insight.label}</div>
              <div className="text-xs text-gray-500 font-light leading-relaxed">{insight.detail}</div>
            </div>
          ))}
        </div>

        {/* Highlight Section */}
        <div className="bg-[#1A1A1A] rounded-none p-12 md:p-20 text-white mb-32 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative shadow-2xl border-l-[8px] border-[#8C2323]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8C2323]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="md:w-2/3 relative z-10">
            <Quote className="w-12 h-12 text-[#8C2323] mb-8 opacity-40" />
            <h3 className="text-3xl md:text-5xl font-bold mb-8 font-serif leading-tight">
              "승정원일기 <span className="text-[#8C2323]">3억 자</span>를 인간 번역으로만 완역하려면 <span className="text-[#8C2323]">수백 년</span>이 필요합니다."
            </h3>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-2xl">
              조선왕조실록과 같은 대중적인 기록물 외에도 개인 문집, 지방 관아의 기록 등 수많은 사료들이 번역 전문가의 손길을 기다리고 있습니다. 
              우리는 이 거대한 역사의 공백을 AI로 채우고자 합니다.
            </p>
          </div>
          <div className="md:w-1/3 text-center relative z-10">
            <div className="text-9xl font-serif font-bold mb-4 text-[#8C2323]">97<span className="text-4xl">%</span></div>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">Unfinished Business</p>
          </div>
        </div>

        <div className="space-y-32">
          {/* Row 1: Status & Multilingual Grid */}
          <div id="status-main" className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h4 className="text-2xl font-bold mb-10 flex items-center gap-4 font-serif">
                <div className="w-10 h-10 bg-[#8C2323] text-white flex items-center justify-center rotate-45 rounded-xs">
                  <FileText className="w-5 h-5 -rotate-45" />
                </div>
                주요 고전 번역 현황
              </h4>
              <div className="space-y-10">
                {stats.map((stat, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <span className="text-lg font-bold block text-[#1A1A1A] font-serif group-hover:text-[#8C2323] transition-colors">{stat.name}</span>
                        <div className="flex gap-2 items-center mt-1">
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{stat.total}</span>
                          <span className="text-[10px] text-[#8C2323]/50 font-bold uppercase tracking-widest">| {stat.institution}</span>
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold px-3 py-1 border border-current uppercase tracking-tighter ${stat.color} shadow-sm`}>
                        {stat.status} ({stat.progress}%)
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mb-4 font-light">{stat.desc}</p>
                    <div className="w-full h-1 bg-gray-100 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-[#8C2323]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Multilingual Status Table */}
            <div id="multilingual">
              <h4 className="text-2xl font-bold mb-10 flex items-center gap-4 font-serif">
                <div className="w-10 h-10 bg-[#8C2323] text-white flex items-center justify-center rotate-45 rounded-xs">
                  <Languages className="w-5 h-5 -rotate-45" />
                </div>
                다국어 번역 현황 (영·중·일)
              </h4>
              <div className="overflow-x-auto bg-white border border-gray-100">
                <table className="w-full border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="py-4 px-4 text-left text-[11px] font-bold uppercase tracking-widest text-gray-400">고전명</th>
                      <th className="py-4 px-4 text-left text-[11px] font-bold uppercase tracking-widest text-gray-400">영어</th>
                      <th className="py-4 px-4 text-left text-[11px] font-bold uppercase tracking-widest text-gray-400">중국어</th>
                      <th className="py-4 px-4 text-left text-[11px] font-bold uppercase tracking-widest text-gray-400">일본어</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {multiLangStatus.map((item, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 text-sm font-serif font-bold text-[#1A1A1A]">{item.name}</td>
                        <td className="py-4 px-4 text-[11px] text-gray-500 font-medium">{item.en}</td>
                        <td className="py-4 px-4 text-[11px] text-gray-500 font-medium">{item.zh}</td>
                        <td className="py-4 px-4 text-[11px] text-gray-500 font-medium">{item.jp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-6 bg-[#8C2323]/5 border-l-2 border-[#8C2323]">
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  * 조선왕조실록 영어 번역 프로젝트는 2012년 시작되어 현재 진행 중이며, <strong className="text-[#8C2323]">2033년 완역</strong>을 목표로 하고 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Representatives & Problems */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Representative Translations Section */}
            <div id="representatives">
              <h4 className="text-2xl font-bold mb-10 flex items-center gap-4 font-serif">
                <div className="w-10 h-10 bg-[#8C2323] text-white flex items-center justify-center rotate-45 rounded-xs">
                  <Globe className="w-5 h-5 -rotate-45" />
                </div>
                다국어 번역 대표 사례
              </h4>
              <div className="space-y-6">
                {representativeTranslations.map((item, idx) => (
                  <div key={idx} className="p-8 border border-gray-100 bg-white hover:border-[#8C2323]/20 transition-all">
                    <div className="text-[11px] font-bold text-[#8C2323] uppercase tracking-[0.2em] mb-2">{item.lang}</div>
                    <div className="text-lg font-serif font-bold text-[#1A1A1A] mb-2">{item.work}</div>
                    <div className="text-sm text-gray-400 mb-4 font-medium">번역자: {item.scholar}</div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="challenges">
              <h4 className="text-2xl font-bold mb-10 flex items-center gap-4 font-serif">
                <div className="w-10 h-10 bg-[#8C2323] text-white flex items-center justify-center rotate-45 rounded-xs">
                  <AlertCircle className="w-5 h-5 -rotate-45" />
                </div>
                해결해야 할 도전 과제
              </h4>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="p-8 border border-gray-100 bg-white group hover:border-[#8C2323]/30 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-gray-50 flex items-center justify-center group-hover:bg-[#8C2323] group-hover:text-white transition-all">
                        {problem.icon}
                      </div>
                      <h5 className="text-lg font-bold font-serif text-[#1A1A1A]">{problem.title}</h5>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed font-light pl-14">
                      {problem.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Our Promise (Enhanced) */}
        <div className="mt-40 bg-[#FDFCF8] border border-[#8C2323]/10 p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#8C2323]/20"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#8C2323]/20"></div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <h3 className="text-4xl font-bold mb-10 font-serif">우리의 약속: 고전 번역의 디지털 르네상스</h3>
            <p className="text-gray-600 text-xl leading-relaxed font-light mb-16 italic">
              "온고지신 AI는 AI 기술을 통해 기존 번역 속도를 <strong className="text-[#8C2323]">10배 이상</strong> 단축하고, 비용을 <strong className="text-[#8C2323]">60% 이상</strong> 절감하여 
              대한민국의 모든 고전이 2035년까지 완역되는 것을 목표로 하고 있습니다."
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-white shadow-sm transform hover:-translate-y-2 transition-all">
                <span className="block text-5xl font-serif font-bold text-[#8C2323] mb-2">10x</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Speed Increase</span>
              </div>
              <div className="p-8 bg-white shadow-sm transform hover:-translate-y-2 transition-all">
                <span className="block text-5xl font-serif font-bold text-[#8C2323] mb-2">60%</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Cost Reduction</span>
              </div>
              <div className="p-8 bg-[#8C2323] shadow-xl shadow-[#8C2323]/20 transform hover:-translate-y-2 transition-all text-white">
                <span className="block text-5xl font-serif font-bold mb-2">109</span>
                <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Global Languages</span>
              </div>
              <div className="p-8 bg-white shadow-sm transform hover:-translate-y-2 transition-all">
                <span className="block text-5xl font-serif font-bold text-[#8C2323] mb-2">2035</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Target Year</span>
              </div>
            </div>
            <div className="mt-20">
               <Link to="/pricing" className="bg-[#8C2323] text-white px-10 py-5 rounded-none font-bold text-lg hover:bg-[#6D1B1B] transition-all shadow-xl shadow-[#8C2323]/30 uppercase tracking-widest">
                 번역 비용 산정 방식 보기
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
