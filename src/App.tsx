import { useState, useEffect } from 'react';
import HeaderBanner from './components/HeaderBanner';
import BackingBadges from './components/BackingBadges';
import CourseList from './components/CourseList';
import ProcessSection from './components/ProcessSection';
import SyllabusModal from './components/SyllabusModal';
import ConsultModal from './components/ConsultModal';
import Toast from './components/Toast';
import Footer from './components/Footer';
import { Sparkles, Play, ChevronRight, MessageSquareCode } from 'lucide-react';
import { motion, useAnimation } from 'motion/react';

export default function App() {
  const [syllabusCourseId, setSyllabusCourseId] = useState<string | null>(null);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [consultCourseTitle, setConsultCourseTitle] = useState('');
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  // Toast controls
  const [toastMessage, setToastMessage] = useState('');
  const [isToastOpen, setIsToastOpen] = useState(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastOpen(true);
  };

  useEffect(() => {
    if (isToastOpen) {
      const timer = setTimeout(() => {
        setIsToastOpen(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isToastOpen]);

  const handleOpenSyllabus = (courseId: string) => {
    setSyllabusCourseId(courseId);
    setIsSyllabusOpen(true);
  };

  const handleOpenConsult = (courseTitle: string) => {
    setConsultCourseTitle(courseTitle);
    setIsConsultOpen(true);
  };

  return (
    <div className="bg-[#E5EDF5] text-slate-800 antialiased min-h-screen flex flex-col justify-start items-center">
      {/* Absolute Toast */}
      <Toast message={toastMessage} isOpen={isToastOpen} />

      {/* 移动端版心限制主容器：全新浅浅冰蓝色背景 bg-[#F2F7FC] */}
      <div className="w-full max-w-md bg-[#F2F7FC] min-h-screen flex flex-col shadow-2xl relative pb-28 overflow-x-hidden">
        
        {/* Banner Area */}
        <HeaderBanner onShowToast={showToast} />

        {/* Main Content Area */}
        <main className="w-full px-4 mt-6 flex-grow">
          
          {/* 四大核心优势 */}
          <BackingBadges />

          {/* 重点课程推荐板块 (包含Tab过滤，大纲及咨询弹框激活) */}
          <CourseList 
            onOpenSyllabus={handleOpenSyllabus} 
            onOpenConsult={handleOpenConsult} 
          />

          {/* 报名及上课流程板块 */}
          <ProcessSection />

          {/* 页脚版权与无忧创想信息 */}
          <Footer />

        </main>

        {/* 底部固定吸底转化栏 */}
        <div 
          className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/95 backdrop-blur-md border-t border-slate-100 px-4 py-4 z-45 shadow-[0_-4px_25px_rgba(0,0,0,0.06)] pb-safe rounded-t-2xl"
          id="sticky-conversion-bar"
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold tracking-tight">
                名师答疑 · 真题题库 · 2026新大纲
              </span>
              <div className="flex items-center space-x-1.5 mt-0.5">
                <span className="text-rose-500 font-extrabold text-xs">特惠全覆盖</span>
                <span className="bg-red-50 text-red-700 text-[9px] px-2 py-0.5 rounded-sm font-black border border-red-100">
                  首发特价
                </span>
              </div>
            </div>
            
            {/* 激活微信咨询大按钮 */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleOpenConsult('全部课程试听')} 
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-black text-xs py-3 px-5 rounded-full shadow-lg shadow-orange-500/20 active:scale-95 transition-all flex items-center space-x-1 cursor-pointer"
            >
              <span>咨询课程试听</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              >
                <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Syllabus Modal Dialog */}
        <SyllabusModal 
          courseId={syllabusCourseId}
          isOpen={isSyllabusOpen}
          onClose={() => setIsSyllabusOpen(false)}
          onConsult={handleOpenConsult}
        />

        {/* Consult and Copy QR Dialog */}
        <ConsultModal 
          courseTitle={consultCourseTitle}
          isOpen={isConsultOpen}
          onClose={() => setIsConsultOpen(false)}
          onShowToast={showToast}
        />

      </div>
    </div>
  );
}
