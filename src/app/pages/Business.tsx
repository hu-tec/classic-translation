import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { Handshake, Building2, Briefcase, FileText, Globe, CheckCircle, Radio, BookOpen, Quote, ChevronRight } from "lucide-react";
import { Link } from "react-router";

const bizModels = [
  {
    type: "정부·공공기관",
    title: "고전 국역 사업",
    list: ["미번역 고전 번역 프로젝트", "승정원일기·의궤 번역 지원", "고전 번역 DB 구축", "번역 인재 양성 프로그램"],
    icon: <Building2 className="w-10 h-10" />
  },
  {
    type: "방송·미디어",
    title: "콘텐츠 번역",
    list: ["사극·역사 드라마 번역", "역사 다큐멘터리 번역", "웹툰·영상 콘텐츠 번역", "109개 언어 자막 제작"],
    icon: <Radio className="w-10 h-10" />
  },
  {
    type: "출판·학술",
    title: "학술·출판 번역",
    list: ["고전 번역서 출판 협력", "학술 논문·연구자료 번역", "영어 번역 학술 출판", "해외 대학 교재 번역"],
    icon: <BookOpen className="w-10 h-10" />
  }
];

export function Business() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="사업 협업"
          title="기관·기업과 함께하는 번역 프로젝트"
          description="정부기관, 방송사, 출판사, 연구기관과 번역 프로젝트를 협력합니다. 프로젝트 규모에 맞는 맞춤형 솔루션을 제안합니다."
        />

        {/* Business Grid from HTML content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {bizModels.map((model, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8C2323]/[0.02] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#8C2323]/[0.05] transition-colors"></div>
              
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-10 text-[#8C2323] group-hover:bg-[#8C2323] group-hover:text-white transition-all shadow-sm">
                {model.icon}
              </div>
              <div className="text-[10px] font-bold text-[#8C2323] uppercase tracking-[0.2em] mb-4">{model.type}</div>
              <h3 className="text-2xl font-bold font-serif mb-8 text-[#1A1A1A]">{model.title}</h3>
              <ul className="space-y-4 mb-12 flex-grow">
                {model.list.map((item, j) => (
                  <li key={j} className="flex gap-4 items-center text-sm text-gray-500 font-light border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="w-1 h-1 bg-[#8C2323] rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/support" className="w-full py-5 bg-[#1A1A1A] text-white rounded-2xl font-bold text-sm shadow-xl shadow-black/10 hover:bg-[#8C2323] transition-colors text-center">
                제휴 문의하기
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Large Quote from HTML integrated into design */}
        <div className="mt-32">
          <div className="bg-[#1A1A1A] p-12 md:p-20 rounded-[60px] text-center text-white relative overflow-hidden group">
             <Quote className="w-16 h-16 text-[#8C2323] mx-auto mb-8 opacity-20" />
             <h2 className="text-xl md:text-3xl font-serif font-light leading-relaxed mb-12 max-w-4xl mx-auto">
               승정원일기 <strong className="text-[#8C2323] font-bold">3억 자</strong>를 인간 번역으로만 완역하려면 수백 년이 필요합니다.<br />
               AI 번역을 도입하면 이 기간을 <strong className="text-[#8C2323] font-bold">획기적으로 단축</strong>할 수 있습니다.
             </h2>
             <Link to="/support" className="inline-flex items-center gap-2 bg-[#8C2323] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#6D1B1B] transition-all shadow-xl shadow-[#8C2323]/30">
               프로젝트 협력 문의 <ChevronRight className="w-5 h-5" />
             </Link>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8C2323]/5 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
