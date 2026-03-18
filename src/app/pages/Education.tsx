import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { GraduationCap, Briefcase, BookOpen, Award, CheckCircle } from "lucide-react";

export function Education() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Education"
          title="AI 시대의 새로운 번역 전문가 양성"
          description="고전의 깊이와 최첨단 기술을 동시에 이해하는 미래형 번역 인재를 길러냅니다."
        />

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {[
            {
              title: "AI 고전 번역 입문 과정",
              desc: "AI 번역 툴의 기본 사용법과 고전 데이터 처리 프로세스를 학습합니다.",
              target: "예비 번역가, 사학 전공생",
              icon: <GraduationCap className="w-8 h-8" />
            },
            {
              title: "전문 번역가 심화 과정",
              desc: "고어 해석의 심화 및 AI 번역 결과물 정밀 교정(Post-Editing) 기술을 연마합니다.",
              target: "현직 번역가, 연구자",
              icon: <Award className="w-8 h-8" />
            },
            {
              title: "역사 콘텐츠 번역 전문가",
              desc: "드라마, 웹툰 등 미디어 콘텐츠 특화 고전 번역 및 현지화 스킬을 교육합니다.",
              target: "미디어 번역가 지망생",
              icon: <BookOpen className="w-8 h-8" />
            },
            {
              title: "AI 번역 에디터 자격 과정",
              desc: "온고지신 AI 전용 에디팅 툴의 최고 전문가를 인증하는 공식 자격증 과정입니다.",
              target: "고전문학 전공자 및 전문가",
              icon: <Briefcase className="w-8 h-8" />
            }
          ].map((course, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-xl transition-all flex flex-col gap-6"
            >
              <div className="w-14 h-14 bg-[#8C2323] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#8C2323]/20">
                {course.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 font-serif">{course.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed font-light">{course.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-[#8C2323] uppercase tracking-widest">
                  <span className="text-gray-400">Target:</span> {course.target}
                </div>
              </div>
              <button className="mt-4 w-full py-4 border border-gray-100 rounded-2xl text-sm font-bold hover:bg-gray-50 transition-colors">
                커리큘럼 상세 보기
              </button>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-32 p-12 bg-[#FDFCF8] rounded-[60px] border border-gray-100 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-8 font-serif">교육 수료 시 혜택</h3>
              <ul className="space-y-6">
                {[
                  "온고지신 AI 공식 번역 전문가 인증서 발급",
                  "플랫폼 내 유료 번역 프로젝트 우선 배정",
                  "고전 번역 에디팅 툴 무료 사용 권한 부여",
                  "주요 학술기관 및 콘텐츠 제작사 채용 연계 지원"
                ].map((benefit, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle className="w-6 h-6 text-[#8C2323] shrink-0" />
                    <p className="font-medium text-gray-700">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white rounded-3xl p-8 flex flex-col justify-center text-center shadow-sm">
                <span className="text-4xl font-serif font-bold text-[#8C2323] mb-2">500+</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">누적 교육생</span>
              </div>
              <div className="aspect-square bg-[#8C2323] rounded-3xl p-8 flex flex-col justify-center text-center shadow-xl shadow-[#8C2323]/20 text-white">
                <span className="text-4xl font-serif font-bold mb-2">92%</span>
                <span className="text-xs text-white/60 font-bold uppercase tracking-widest">실무 투입률</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
