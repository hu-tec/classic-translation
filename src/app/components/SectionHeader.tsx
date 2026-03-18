import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, description, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : "text-left"} flex flex-col items-${centered ? "center" : "start"}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-8 h-8 ${light ? "bg-white text-[#8C2323]" : "bg-[#8C2323] text-white"} flex items-center justify-center rounded-xs rotate-45 shrink-0`}>
          <span className="text-sm font-serif -rotate-45">古</span>
        </div>
        {subtitle && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-white/80" : "text-[#8C2323]"} block border-b ${light ? "border-white/20" : "border-[#8C2323]/20"} pb-1`}
          >
            {subtitle}
          </motion.span>
        )}
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-5xl font-bold mb-8 ${light ? "text-white" : "text-[#1A1A1A]"} font-serif tracking-tight leading-[1.2]`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`max-w-2xl ${centered ? "mx-auto" : ""} text-xl leading-relaxed ${light ? "text-gray-300" : "text-gray-600"} font-light`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
