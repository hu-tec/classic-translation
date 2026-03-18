import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { BookOpen, Languages, Film, FileText, CheckCircle, Search, Globe, Quote } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const serviceCategories = [
  {
    title: "고전 번역 (Classical)",
    description: "수천 년의 지혜가 담긴 한문 고전을 현대의 언어로 재해석합니다.",
    items: [
      { name: "고어 → 한국어", desc: "해독하기 어려운 고전 한문을 명확한 현대 한국어로 번역" },
      { name: "한국어 → 영어", desc: "글로벌 연구자들을 위한 수준 높은 학술 번역" },
      { name: "다국어 확장", desc: "세계 109개 언어로 고전의 가치 전파" },
    ],
    icon: <BookOpen className="w-10 h-10 text-[#8C2323]" />,
    image: "https://images.unsplash.com/photo-1573916866715-51b0c3d68c28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB0cmFkaXRpb25hbCUyMGhpc3RvcnklMjBib29rcyUyMGxpYnJhcnklMjBvbGQlMjBkb2N1bWVudHxlbnwxfHx8fDE3NzMzODA1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "콘텐츠 번역 (Creative)",
    description: "역사 기반의 창의적 콘텐츠를 위한 맞춤형 번역 서비스를 제공합니다.",
    items: [
      { name: "드라마/영화", desc: "사극 특유의 어투와 시대적 배경을 완벽히 반영한 자막/대본 번역" },
      { name: "웹툰/소설", desc: "글로벌 독자들이 몰입할 수 있는 현지화(Localization) 작업" },
      { name: "다큐멘터리", desc: "역사적 사실 관계 검증을 포함한 신뢰도 높은 자막 번역" },
    ],
    icon: <Film className="w-10 h-10 text-[#8C2323]" />,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmaWxtJTIwbWFraW5nfGVufDB8fHx8MTc3MzM4MjA5OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "문서 및 연구 (Professional)",
    description: "학술적 가치가 높은 전문 기록물을 위한 정밀 번역입니다.",
    items: [
      { name: "고문서/족보", desc: "가문의 역사와 개인 소장 고문서 해독 및 현대어 번역" },
      { name: "연구 자료", desc: "역사학 및 인문학 연구를 위한 1차 사료의 정밀 번역" },
      { name: "기관 기록물", desc: "정부 및 공공기관 보유 역사 기록물의 디지털 라이징" },
    ],
    icon: <FileText className="w-10 h-10 text-[#8C2323]" />,
    image: "https://images.unsplash.com/photo-1503551723145-6c040742065b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxvbGQlMjBwYXBlcnxlbnwwfHx8fDE3NzMzODIwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Services"
          title="고전에서 미래까지, 모든 것을 번역합니다"
          description="온고지신 AI는 방대한 고전 데이터를 기반으로 가장 정확하고 신뢰할 수 있는 번역 경험을 선사합니다."
        />

        <div className="space-y-32 mt-20">
          {serviceCategories.map((category, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <div className="mb-8">{category.icon}</div>
                <h3 className="text-3xl font-bold mb-6 font-serif">{category.title}</h3>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                  {category.description}
                </p>
                <div className="space-y-6">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#8C2323]/10 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-[#8C2323]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1A1A1A]">{item.name}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={category.image}
                    className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                    alt={category.title}
                  />
                  <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#FDFCF8] border border-gray-100 rounded-2xl shadow-xl p-6 hidden md:flex flex-col justify-center">
                    <Quote className="w-8 h-8 text-[#8C2323] mb-3 opacity-20" />
                    <p className="text-xs text-gray-400 font-serif leading-relaxed italic">
                      "기록은 죽지 않으며, 번역을 통해 새로운 생명을 얻습니다."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Global Languages Section */}
        <div className="mt-32 p-12 bg-[#FDFCF8] border border-gray-100 rounded-3xl text-center">
          <Globe className="w-16 h-16 text-[#8C2323] mx-auto mb-8 opacity-20" />
          <h3 className="text-3xl font-bold mb-6 font-serif">109개 언어로의 무한한 확장</h3>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed font-light mb-12 text-lg">
            우리의 AI 모델은 단순히 한국어와 영어를 넘어, 전 세계 109개 이상의 언어를 지원합니다. 
            한국의 고전이 세계의 고전이 되는 길, 온고지신 AI가 함께합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['English', '中文', '日本語', 'Français', 'Deutsch', 'Español', 'Tiếng Việt', 'ไทย', 'Русский', '...and 100 more'].map((lang, i) => (
              <span key={i} className="px-6 py-2 bg-white border border-gray-100 rounded-full text-sm font-medium text-gray-500 shadow-sm">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
