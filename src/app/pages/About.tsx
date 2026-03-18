import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { History, Eye, Target, Quote } from "lucide-react";

export function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="About Us"
          title="과거와 미래를 잇는 지식의 다리"
          description="우리는 AI 기술을 통해 잊혀가는 고전의 가치를 현대의 언어로 재해석하고 전 세계에 알립니다."
        />

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0cmFkaXRpb25hbCUyMGtvcmVhbiUyMGxpYnJhcnklMjBib29rc3xlbnwwfHx8fDE3NzMzODA4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              className="w-full h-[600px] object-cover rounded-[60px] shadow-2xl"
              alt="Classic Library"
            />
            <div className="absolute -bottom-10 -right-10 bg-[#8C2323] text-white p-12 rounded-[50px] shadow-2xl hidden md:block max-w-xs">
              <Quote className="w-10 h-10 mb-6 text-white/30" />
              <p className="text-xl font-serif leading-relaxed italic mb-4">
                "천년의 잠을 깨우는 것은 하나의 문장으로부터 시작됩니다."
              </p>
              <span className="text-xs uppercase tracking-widest font-bold opacity-60">- 온고지신 AI 철학</span>
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#8C2323]/10 rounded-2xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#8C2323]" />
                </div>
                <h3 className="text-2xl font-bold font-serif">우리의 비전 (Vision)</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                우리의 목표는 단순히 텍스트를 옮기는 것을 넘어, 세계의 모든 고전을 세계의 언어로 번역하는 것입니다. 
                언어의 장벽에 가로막혔던 과거의 지혜가 인류 모두의 상식이 되는 세상을 꿈꿉니다.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#8C2323]/10 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#8C2323]" />
                </div>
                <h3 className="text-2xl font-bold font-serif">우리의 미션 (Mission)</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                AI 번역 기술과 고전 전문가의 지식을 유기적으로 결합하여 번역의 정확성, 속도, 확장성을 극대화합니다. 
                이를 통해 국가적 기록 유산을 보존하고 글로벌 콘텐츠로서의 가치를 창출합니다.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#8C2323]/10 rounded-2xl flex items-center justify-center">
                  <History className="w-6 h-6 text-[#8C2323]" />
                </div>
                <h3 className="text-2xl font-bold font-serif">번역 철학</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-3xl">
                  <h5 className="font-bold mb-2">정확성</h5>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">역사적 고증과 맥락을 완벽히 파악</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-3xl">
                  <h5 className="font-bold mb-2">속도</h5>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">AI 기술로 번역 기한의 혁신적 단축</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-3xl">
                  <h5 className="font-bold mb-2">확장성</h5>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">전 세계 109개 언어로 글로벌 전파</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="py-24 bg-[#1A1A1A] text-white rounded-[60px] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold mb-12 font-serif leading-tight">
              과거를 아는 것은<br />미래를 만드는 힘입니다
            </h3>
            <div className="space-y-8 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                우리는 수많은 고전이 빛을 보지 못하고 박물관 서고에 머물러 있는 현실에 주목했습니다. 
                한 학자가 평생을 바쳐도 실록 한 권을 번역하기 힘든 속도로는, 우리의 위대한 역사가 잊혀질지도 모른다는 위기감을 느꼈습니다.
              </p>
              <p>
                그 해결책으로 우리는 AI를 선택했습니다. 하지만 AI가 인간의 영혼과 역사의 무게를 담을 수는 없기에, 
                우리는 번역 전문가와 AI가 가장 아름답게 협업할 수 있는 시스템 '온고지신 AI'를 탄생시켰습니다.
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <ImageWithFallback 
              src="https://images.unsplash.com/photo-1723479128748-8cac9c3282d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGtvcmVhbiUyMGNhbGxpZ3JhcGh5JTIwcGFwZXIlMjBzY3JvbGwlMjBpbmt8ZW58MXx8fHwxNzczMzgwNDk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              className="w-full h-full object-cover"
              alt="Calligraphy"
             />
          </div>
        </div>
      </div>
    </div>
  );
}
