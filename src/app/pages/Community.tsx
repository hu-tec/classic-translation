import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { 
  Megaphone, 
  MessageSquare, 
  HelpCircle, 
  Headphones, 
  Handshake, 
  ChevronRight, 
  Search,
  Bell,
  MessageCircle,
  FileText,
  Users
} from "lucide-react";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Reference images
import imgInstitutions from "figma:asset/8a4d1e487df7c6272f95081f8d6e601d9c83ba83.png";

const institutions = {
  gov: [
    { name: "한국고전번역원", trait: "조선 문집·철학 번역 · 고전번역 총괄기관", business: "고전번역 종합 사업", link: "https://www.itkc.or.kr" },
    { name: "국사편찬위원회", trait: "역사 사료 번역", business: "조선왕조실록, 승정원일기", link: "https://history.go.kr" },
    { name: "한국학중앙연구원", trait: "한국학 연구", business: "장서각 고문헌 번역", link: "https://www.aks.ac.kr" },
    { name: "서울대 규장각", trait: "왕실 기록 보존", business: "승정원일기 디지털화", link: "https://kyujanggak.snu.ac.kr" },
    { name: "국립중앙도서관", trait: "고문헌 디지털화", business: "고문헌 번역 OCR", link: "https://www.nl.go.kr" },
  ],
  academic: [
    { name: "Harvard Korea Institute", trait: "한국학 연구", business: "실록 번역 참여" },
    { name: "UC Berkeley IEAS", trait: "동아시아 연구", business: "징비록 번역" },
    { name: "Columbia University", trait: "한국 고전 연구", business: "Sources of Korean Tradition" },
    { name: "SOAS London", trait: "한국학 연구", business: "한국 고전 연구" },
  ],
  private: [
    { name: "민족문화추진회", trait: "현재 고전번역원 전신" },
    { name: "동북아역사재단", trait: "역사 연구 및 번역 지원" },
    { name: "개인 학자 번역 프로젝트", trait: "전문가 중심 소규모 프로젝트" },
    { name: "해외 대학 출판사", trait: "글로벌 유통 및 출판 협력" },
  ]
};

const notices = [
  { date: "2026.03.10", title: "온고지신 AI 고전 번역 고도화 엔진 업데이트 안내", category: "공지" },
  { date: "2026.03.05", title: "신규 번역 전문가 모집 마감 임박 (3/15)", category: "모집" },
  { date: "2026.02.28", title: "한국고전번역원과의 기술 협력 MOU 체결 소식", category: "뉴스" },
];

const faqs = [
  { q: "AI 번역의 정확도는 어느 수준인가요?", a: "AI가 초벌 번역을 생성하고, 고전 번역 전문가가 검토·교정합니다. 인간 전문가의 최종 검수를 거치므로 높은 정확도를 보장합니다." },
  { q: "번역 비용은 어떻게 책정되나요?", a: "프로젝트 분량, 언어 수, 전문성 수준에 따라 맞춤 견적을 제공합니다. 비용 페이지에서 자세한 단가를 확인하실 수 있습니다." },
  { q: "어떤 고전 문헌을 번역할 수 있나요?", a: "조선왕조실록, 승정원일기, 의궤, 문집 등 한문 고전 문헌 전반을 처리합니다." },
];
import { useState } from "react";

const tabs = [
  { id: "notices", name: "공지사항", icon: <Bell className="w-4 h-4" /> },
  { id: "faq", name: "자주 묻는 질문 (FAQ)", icon: <HelpCircle className="w-4 h-4" /> },
  { id: "qna", name: "1:1 문의 (Q&A)", icon: <MessageSquare className="w-4 h-4" /> },
  { id: "reviews", name: "이용 후기", icon: <Users className="w-4 h-4" /> },
  { id: "business", name: "사업제휴/협력", icon: <Handshake className="w-4 h-4" /> },
];

const categories = [
  { id: "all", name: "전체보기" },
  { id: "common", name: "공통" },
  { id: "ai-trans", name: "AI번역" },
  { id: "academic", name: "학술연구" },
  { id: "specialist", name: "전문가협력" },
];

const tags = [
  "고전번역", "AI번역", "AI프롬프트", "AI윤리", "초서해독", "고문헌", "전문가네트워크", "학술DB"
];

export function Community() {
  const [activeTab, setActiveTab] = useState("notices");
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFCF8]">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Community"
          title="소통과 협력의 장"
          description="고전 번역의 발전을 위해 다양한 소통 채널을 운영하고 있습니다. 궁금하신 점이나 제안 사항을 남겨주세요."
        />

        {/* Tab Navigation (Image inspired style) */}
        <div className="flex flex-wrap justify-center gap-0 mb-12 border-b border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-10 py-6 font-bold text-sm tracking-widest transition-all relative ${
                activeTab === tab.id
                  ? "text-[#8C2323]"
                  : "text-gray-400 hover:text-[#8C2323]"
              }`}
            >
              {tab.name}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#8C2323]" 
                />
              )}
            </button>
          ))}
        </div>

        {/* Categories & Tags (Image inspired) */}
        <div className="max-w-5xl mx-auto mb-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#8C2323] text-white"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                className="px-4 py-1.5 border border-gray-100 rounded-sm text-[11px] font-bold text-gray-400 hover:border-[#8C2323] hover:text-[#8C2323] transition-all bg-white uppercase tracking-wider"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 relative">
          <input
            type="text"
            placeholder="궁금하신 내용을 검색해보세요"
            className="w-full bg-white border border-gray-100 py-5 px-14 rounded-none shadow-sm focus:border-[#8C2323] outline-none transition-all font-serif"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
        </div>

        {/* Content Area */}
        <div className="bg-white border border-[#8C2323]/5 p-8 md:p-12 shadow-sm min-h-[400px]">
          {activeTab === "notices" && (
            <div className="space-y-4">
              {notices.map((notice, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-gray-50 hover:bg-gray-50/50 transition-colors px-4 group">
                  <div className="flex items-center gap-4 mb-2 md:mb-0">
                    <span className="bg-[#8C2323]/5 text-[#8C2323] text-[10px] font-bold px-3 py-1 uppercase tracking-widest">{notice.category}</span>
                    <h4 className="text-lg font-serif font-bold group-hover:text-[#8C2323] transition-colors">{notice.title}</h4>
                  </div>
                  <span className="text-sm text-gray-400 font-light">{notice.date}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "faq" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, i) => (
                <div key={i} className="p-8 bg-[#FDFCF8] border border-gray-50 group hover:border-[#8C2323]/30 transition-all">
                  <h4 className="text-lg font-serif font-bold mb-4 flex gap-3 text-[#1A1A1A]">
                    <span className="text-[#8C2323]">Q.</span> {faq.q}
                  </h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed pl-7 border-l border-gray-100">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "qna" && (
            <div className="max-w-3xl mx-auto py-10">
              <h4 className="text-2xl font-serif font-bold mb-8 text-center">1:1 문의 / Q&A</h4>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <input type="text" placeholder="이름/기관명" className="w-full bg-gray-50 border-none p-4 focus:bg-white focus:ring-1 focus:ring-[#8C2323] outline-none font-serif" />
                  <input type="email" placeholder="이메일" className="w-full bg-gray-50 border-none p-4 focus:bg-white focus:ring-1 focus:ring-[#8C2323] outline-none font-serif" />
                </div>
                <input type="text" placeholder="제목" className="w-full bg-gray-50 border-none p-4 focus:bg-white focus:ring-1 focus:ring-[#8C2323] outline-none font-serif" />
                <textarea rows={6} placeholder="상세 내용을 입력해주세요" className="w-full bg-gray-50 border-none p-4 focus:bg-white focus:ring-1 focus:ring-[#8C2323] outline-none resize-none font-serif"></textarea>
                <button type="button" className="w-full bg-[#1A1A1A] text-white py-5 font-bold tracking-widest hover:bg-[#8C2323] transition-all uppercase">문의 제출하기</button>
              </form>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-8 bg-white border border-gray-100 shadow-sm">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden grayscale">
                         <img src={`https://i.pravatar.cc/150?u=${i+20}`} alt="User" />
                      </div>
                      <div>
                         <h5 className="font-bold text-sm">김*현 연구원</h5>
                         <p className="text-[10px] text-gray-400 uppercase tracking-wider">서울대학교 국사학과</p>
                      </div>
                   </div>
                   <p className="text-gray-500 text-sm leading-relaxed font-light italic">"기존에 직접 해독하던 시간을 80% 이상 단축했습니다. 특히 초벌 번역의 정확도가 놀라울 정도로 높아서 후속 연구에 큰 도움이 됩니다."</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "business" && (
            <div className="max-w-5xl mx-auto py-10">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                 {/* Left: Institution List (Image 3 Reference) */}
                 <div className="flex-1 space-y-12">
                    <div className="p-8 bg-gray-50 border-l-4 border-[#8C2323]">
                       <h4 className="text-xl font-serif font-bold mb-6 flex items-center gap-2">
                          <ImageWithFallback src={imgInstitutions} className="w-8 h-8 rounded-full" />
                          한국 고전 번역 기관 현황
                       </h4>
                       
                       <div className="space-y-10">
                          {/* Government */}
                          <div>
                             <h5 className="text-[10px] font-bold text-[#8C2323] uppercase tracking-[0.2em] mb-4">01. 정부기관</h5>
                             <div className="space-y-3">
                                {institutions.gov.map((inst, i) => (
                                   <div key={i} className="flex justify-between items-center text-sm border-b border-gray-200 pb-2">
                                      <span className="font-bold text-[#1A1A1A]">{inst.name}</span>
                                      <span className="text-gray-400 text-xs font-light">{inst.trait}</span>
                                   </div>
                                ))}
                             </div>
                          </div>
                          
                          {/* Academic */}
                          <div>
                             <h5 className="text-[10px] font-bold text-[#8C2323] uppercase tracking-[0.2em] mb-4">02. 대학 연구소 / 해외 기관</h5>
                             <div className="space-y-3">
                                {institutions.academic.map((inst, i) => (
                                   <div key={i} className="flex justify-between items-center text-sm border-b border-gray-200 pb-2">
                                      <span className="font-bold text-[#1A1A1A]">{inst.name}</span>
                                      <span className="text-gray-400 text-xs font-light">{inst.business}</span>
                                   </div>
                                ))}
                             </div>
                          </div>

                          {/* Private */}
                          <div>
                             <h5 className="text-[10px] font-bold text-[#8C2323] uppercase tracking-[0.2em] mb-4">03. 사설 / 민간 번역 프로젝트</h5>
                             <div className="space-y-3">
                                {institutions.private.map((inst, i) => (
                                   <div key={i} className="flex justify-between items-center text-sm border-b border-gray-200 pb-2">
                                      <span className="font-bold text-[#1A1A1A]">{inst.name}</span>
                                      <span className="text-gray-400 text-xs font-light">{inst.trait}</span>
                                   </div>
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Right: Partnership Form */}
                 <div className="flex-1">
                    <h4 className="text-2xl font-serif font-bold mb-8">비즈니스 및 기술 제휴 문의</h4>
                    <p className="text-gray-400 text-sm mb-8 font-light">
                       온고지신 AI는 국가기관, 학계, 민간 기업과의 적극적인 협업을 지향합니다. <br />
                       함께 고전의 가치를 전파할 파트너를 기다립니다.
                    </p>
                    <form className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <input type="text" placeholder="기관/기업명" className="w-full bg-gray-50 border-none p-4 focus:bg-white focus:ring-1 focus:ring-[#8C2323] outline-none font-serif" />
                        <input type="text" placeholder="담당자 성함" className="w-full bg-gray-50 border-none p-4 focus:bg-white focus:ring-1 focus:ring-[#8C2323] outline-none font-serif" />
                      </div>
                      <input type="email" placeholder="이메일" className="w-full bg-gray-50 border-none p-4 focus:bg-white focus:ring-1 focus:ring-[#8C2323] outline-none font-serif" />
                      <textarea rows={6} placeholder="제휴 제안 상세 내용을 입력해주세요" className="w-full bg-gray-50 border-none p-4 focus:bg-white focus:ring-1 focus:ring-[#8C2323] outline-none resize-none font-serif"></textarea>
                      <button type="button" className="w-full bg-[#8C2323] text-white py-5 font-bold tracking-widest hover:bg-[#6D1B1B] transition-all uppercase">제안서 제출하기</button>
                    </form>
                 </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-10 bg-[#1A1A1A] text-white flex flex-col justify-between group">
              <div>
                <MessageCircle className="w-10 h-10 text-[#8C2323] mb-8" />
                <h4 className="text-xl font-serif font-bold mb-4">카카오톡 채널 상담</h4>
                <p className="text-white/40 text-sm font-light leading-relaxed">평일 오전 10시 ~ 오후 6시 사이 실시간 답변을 받으실 수 있습니다.</p>
              </div>
              <button className="mt-10 flex items-center gap-2 text-[#8C2323] font-bold group-hover:translate-x-2 transition-transform">상담 시작 <ChevronRight className="w-4 h-4" /></button>
           </div>
           <div className="p-10 bg-[#8C2323] text-white flex flex-col justify-between group">
              <div>
                <Handshake className="w-10 h-10 text-white/40 mb-8" />
                <h4 className="text-xl font-serif font-bold mb-4">제휴 제안서 다운로드</h4>
                <p className="text-white/60 text-sm font-light leading-relaxed">기관 및 기업 협력을 위한 온고지신 AI의 공식 제안서를 확인하세요.</p>
              </div>
              <button className="mt-10 flex items-center gap-2 text-white font-bold group-hover:translate-x-2 transition-transform">다운로드 <ChevronRight className="w-4 h-4" /></button>
           </div>
           <div className="p-10 bg-white border border-[#8C2323]/10 flex flex-col justify-between group">
              <div>
                <FileText className="w-10 h-10 text-[#8C2323] mb-8" />
                <h4 className="text-xl font-serif font-bold mb-4">뉴스레터 구독</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">최신 고전 번역 소식과 AI 기술 업데이트를 정기적으로 받아보세요.</p>
              </div>
              <div className="mt-10 flex gap-2">
                 <input type="email" placeholder="이메일 입력" className="flex-grow bg-gray-50 border-none px-4 text-xs outline-none" />
                 <button className="bg-[#1A1A1A] text-white px-4 py-3 text-xs font-bold">구독</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
