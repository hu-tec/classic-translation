import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { GraduationCap, Award, Search, BookOpen, UserCheck, ShieldCheck, ChevronRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const requirements = [
  { icon: <GraduationCap className="w-5 h-5" />, title: "학위 및 전문성", desc: "한문학, 한국사, 동양철학 등 관련 분야 석사 이상의 학위 또는 그에 준하는 경력을 보유하신 분" },
  { icon: <Search className="w-5 h-5" />, title: "한문 해독 능력", desc: "초서, 행서 등 다양한 필사체 및 이두, 향찰 등 고문헌 해독에 능숙하신 분" },
  { icon: <BookOpen className="w-5 h-5" />, title: "번역 및 교정 경험", desc: "주요 고전 번역 사업 참여 경험 또는 학술적 번역 성과물을 3건 이상 보유하신 분" },
  { icon: <UserCheck className="w-5 h-5" />, title: "AI 도구 활용 의지", desc: "AI 초벌 번역 엔진을 도구로 활용하여 번역 효율을 높이는 하이브리드 프로세스에 개방적이신 분" },
];

export function SpecialistApply() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="pt-32 pb-24 bg-[#FDFCF8]">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Join Our Network"
          title="고전 번역 전문가 모집"
          description="온고지신 AI는 기술과 전통의 다리를 놓을 역량 있는 전문가를 기다립니다. 함께 잠든 기록을 깨워주세요."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-20">
          {/* Information Column */}
          <div className="space-y-12">
            <div>
              <h4 className="text-2xl font-serif font-bold mb-10 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#8C2323] text-white flex items-center justify-center rotate-45 rounded-xs shrink-0">
                  <ShieldCheck className="w-5 h-5 -rotate-45" />
                </div>
                지원 자격 및 요건
              </h4>
              <div className="grid grid-cols-1 gap-6">
                {requirements.map((req, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-white border border-[#8C2323]/5 group hover:border-[#8C2323]/30 transition-all">
                    <div className="w-12 h-12 bg-[#8C2323]/5 text-[#8C2323] flex items-center justify-center shrink-0 group-hover:bg-[#8C2323] group-hover:text-white transition-all">
                      {req.icon}
                    </div>
                    <div>
                      <h5 className="font-serif font-bold text-lg text-[#1A1A1A] mb-2">{req.title}</h5>
                      <p className="text-sm text-gray-500 font-light leading-relaxed">{req.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1A1A1A] text-white p-12 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#8C2323]/20 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
               <h4 className="text-2xl font-serif font-bold mb-6 text-[#8C2323]">전문가 혜택</h4>
               <ul className="space-y-4">
                 {['업계 최고 수준의 번역료 책정', 'AI 보조 툴을 통한 작업 효율성 300% 향상', '글로벌 번역 프로젝트 참여 기회 제공', '온·오프라인 전문가 커뮤니티 및 학술 세미나 지원'].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-white/70 font-light text-sm">
                     <Award className="w-4 h-4 text-[#8C2323] shrink-0 mt-0.5" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white border border-gray-100 p-12 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-2 bg-[#8C2323]"></div>
            
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-10">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-3xl font-serif font-bold mb-6">전문가 지원이 완료되었습니다</h4>
                <p className="text-gray-500 max-w-sm mx-auto mb-12 font-light">
                  제출해주신 이력서와 포트폴리오를 검토한 후, 7일 이내에 개별 연락드리겠습니다.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-[#1A1A1A] text-white px-10 py-5 font-bold tracking-widest hover:bg-[#8C2323] transition-all"
                >
                  홈으로 돌아가기
                </button>
              </div>
            ) : (
              <form onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                const form = e.currentTarget;
                const data = {
                  name: (form.elements.namedItem('name') as HTMLInputElement).value,
                  major: (form.elements.namedItem('major') as HTMLInputElement).value,
                  degreeAndCareer: (form.elements.namedItem('degreeAndCareer') as HTMLTextAreaElement).value,
                  contact: (form.elements.namedItem('contact') as HTMLInputElement).value,
                  portfolioUrl: (form.elements.namedItem('portfolioUrl') as HTMLInputElement).value,
                };
                try {
                  const res = await fetch(`${API_URL}/api/classic_specialist_apps`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });
                  if (!res.ok) throw new Error('서버 오류');
                  setSubmitted(true);
                } catch {
                  alert('신청 접수에 실패했습니다. 잠시 후 다시 시도해주세요.');
                } finally {
                  setSubmitting(false);
                }
              }} className="space-y-10">
                <div className="text-center mb-12">
                   <h4 className="text-3xl font-serif font-bold mb-4 text-[#1A1A1A]">전문가 신청서</h4>
                   <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Application Form</p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#8C2323]">성함</label>
                    <input name="name" required type="text" className="w-full bg-[#FDFCF8] border-none p-5 focus:ring-1 focus:ring-[#8C2323] outline-none transition-all font-serif" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#8C2323]">전공 분야</label>
                    <input name="major" required type="text" placeholder="예: 한국사학" className="w-full bg-[#FDFCF8] border-none p-5 focus:ring-1 focus:ring-[#8C2323] outline-none transition-all font-serif" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#8C2323]">최종 학위 및 경력</label>
                  <textarea name="degreeAndCareer" required rows={4} className="w-full bg-[#FDFCF8] border-none p-5 focus:ring-1 focus:ring-[#8C2323] outline-none transition-all font-serif resize-none"></textarea>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#8C2323]">연락처 (이메일 또는 전화번호)</label>
                  <input name="contact" required type="text" className="w-full bg-[#FDFCF8] border-none p-5 focus:ring-1 focus:ring-[#8C2323] outline-none transition-all font-serif" />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#8C2323]">포트폴리오 및 이력서 첨부 (URL)</label>
                  <input name="portfolioUrl" type="text" placeholder="구글 드라이브 또는 드롭박스 링크" className="w-full bg-[#FDFCF8] border-none p-5 focus:ring-1 focus:ring-[#8C2323] outline-none transition-all font-serif" />
                </div>

                <button type="submit" disabled={submitting} className="w-full bg-[#8C2323] text-white py-6 font-black tracking-[0.4em] hover:bg-[#6D1B1B] transition-all shadow-xl shadow-[#8C2323]/20 flex items-center justify-center gap-4 group uppercase disabled:opacity-50">
                  {submitting ? '접수 중...' : '제출하기'} {!submitting && <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
