import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { Mail, Phone, MapPin, Send, MessageCircle, HelpCircle, ChevronRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "AI 번역의 정확도는 어느 수준인가요?",
    a: "AI가 초벌 번역을 생성하고, 고전 번역 전문가가 검토·교정합니다. 인간 전문가의 최종 검수를 거치므로 높은 정확도를 보장합니다. 역사 맥락과 문체까지 반영한 품질을 제공합니다.",
  },
  {
    q: "번역 비용은 어떻게 책정되나요?",
    a: "프로젝트 분량, 언어 수, 전문성 수준에 따라 맞춤 견적을 제공합니다. 기관 단위 대형 프로젝트는 별도 협의가 가능합니다. 견적 문의 폼을 통해 상담 받으세요.",
  },
  {
    q: "번역 소요 기간은 얼마나 걸리나요?",
    a: "프로젝트 규모와 언어 조합에 따라 다릅니다. AI 초벌 번역은 수일 내 완료되며, 전문가 교정 일정에 따라 최종 납품 기간이 결정됩니다. 사전 협의 후 일정을 확정합니다.",
  },
  {
    q: "어떤 고전 문헌을 번역할 수 있나요?",
    a: "조선왕조실록, 승정원일기, 의궤, 문집 등 한문 고전 문헌 전반을 처리합니다. 필사체 원문도 OCR로 디지털화한 후 번역 가능합니다.",
  },
  {
    q: "109개 언어 번역이 모두 가능한가요?",
    a: "AI 번역 기술을 통해 109개 언어로 번역이 가능합니다. 다만 언어별 전문가 교정 지원 범위가 다를 수 있으며, 영어·중국어·일본어 등 주요 언어는 전문가 검수가 포함됩니다.",
  },
  {
    q: "번역가로 참여하려면 어떻게 하나요?",
    a: "한문 고전 번역, 역사 연구, AI 번역 에디팅 전문가를 상시 모집합니다. 아래 문의 폼에서 '번역가 지원'을 선택하거나 이메일로 이력서와 번역 샘플을 보내주세요.",
  },
];

export function Support() {
  const [formState, setFormState] = useState({ name: "", email: "", contact: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="자주 묻는 질문"
          title="FAQ"
          description="고전 번역 프로젝트에 대한 문의부터 전문가 지원까지, 정성을 다해 답변해 드립니다."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20">
          {/* Contact Info from HTML content */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[#1A1A1A] text-white p-10 rounded-[40px] relative overflow-hidden group shadow-2xl">
              <div className="relative z-10">
                <div className="text-[10px] font-bold text-[#8C2323] uppercase tracking-widest mb-4">Contact Details</div>
                <h3 className="text-3xl font-bold mb-10 font-serif leading-tight">번역 프로젝트를<br /><span className="text-[#8C2323]">함께 시작합시다</span></h3>
                
                <div className="space-y-10">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#8C2323] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#8C2323]/20">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">Email</p>
                      <p className="font-medium text-sm">contact@classical-ai.kr</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#8C2323] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#8C2323]/20">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">Phone</p>
                      <p className="font-medium text-sm">02-0000-0000</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#8C2323] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#8C2323]/20">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">Address</p>
                      <p className="font-medium text-sm leading-relaxed">서울특별시</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-white/10">
                  <button className="w-full flex items-center justify-center gap-2 bg-[#FEE500] text-[#3C1E1E] py-4 rounded-2xl font-bold text-sm shadow-xl shadow-black/20 transform hover:scale-105 transition-all">
                    <MessageCircle className="w-4 h-4" /> 카카오톡 실시간 상담
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8C2323]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>

          {/* Contact Form from HTML content */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 p-10 md:p-14 rounded-[40px] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1.5 bg-[#8C2323]"></div>
              
              {submitted ? (
                <div className="text-center py-24">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-10">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 font-serif">문의가 접수되었습니다</h3>
                  <p className="text-gray-500 max-w-sm mx-auto mb-12">
                    48시간 내에 담당자가 연락드리겠습니다. 소중한 문의 감사합니다.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[#8C2323] font-bold border-b-2 border-[#8C2323] pb-1 hover:text-[#6D1B1B] hover:border-[#6D1B1B] transition-all"
                  >
                    새로운 문의 작성하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">이름 / 기관명</label>
                      <input 
                        required
                        type="text" 
                        placeholder="홍길동 / 한국역사재단"
                        className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 focus:bg-white focus:border-[#8C2323] transition-all outline-none text-sm"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">연락처</label>
                      <input 
                        required
                        type="text" 
                        placeholder="010-0000-0000"
                        className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 focus:bg-white focus:border-[#8C2323] transition-all outline-none text-sm"
                        value={formState.contact}
                        onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">이메일 주소</label>
                    <input 
                      required
                      type="email" 
                      placeholder="example@email.com"
                      className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 focus:bg-white focus:border-[#8C2323] transition-all outline-none text-sm"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">문의 유형</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['고전 번역 프로젝트', '글로벌 번역', '콘텐츠 번역', '기타 문의'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormState({ ...formState, type })}
                          className={`py-3 rounded-xl text-xs font-bold transition-all border ${
                            formState.type === type 
                              ? "bg-[#8C2323] text-white border-[#8C2323] shadow-lg shadow-[#8C2323]/20" 
                              : "bg-gray-50 text-gray-400 border-transparent hover:border-gray-200"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">문의 내용</label>
                    <textarea 
                      required
                      rows={6}
                      placeholder="번역할 문헌, 분량, 목적 언어, 납기 등을 간략히 알려주세요."
                      className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-6 focus:bg-white focus:border-[#8C2323] transition-all outline-none resize-none text-sm"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-[#8C2323] text-white py-6 rounded-[20px] font-bold text-lg hover:bg-[#6D1B1B] transition-all shadow-2xl shadow-[#8C2323]/30 flex items-center justify-center gap-3 transform hover:scale-[1.02]"
                  >
                    문의 보내기 <ChevronRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQs from HTML content */}
        <div className="mt-32">
          <SectionHeader
            subtitle="FAQ"
            title="자주 묻는 질문"
            centered={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mt-12">
            {faqs.map((faq, index) => (
              <div key={index} className="p-10 bg-[#FDFCF8] border border-gray-100 rounded-[40px] group hover:bg-white hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#8C2323] group-hover:text-white transition-all text-[#8C2323]">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-6 font-serif text-[#1A1A1A] leading-tight group-hover:text-[#8C2323] transition-colors">{faq.q}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
