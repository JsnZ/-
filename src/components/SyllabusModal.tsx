import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, BookOpen } from 'lucide-react';
import { SYLLABUS_DATA } from '../data';

interface SyllabusModalProps {
  courseId: string | null;
  isOpen: boolean;
  onClose: () => void;
  onConsult: (courseTitle: string) => void;
}

export default function SyllabusModal({ courseId, isOpen, onClose, onConsult }: SyllabusModalProps) {
  if (!courseId) return null;
  
  const data = SYLLABUS_DATA[courseId];
  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            id="syllabus-overlay"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="bg-white rounded-3xl w-full max-w-sm max-h-[80vh] overflow-hidden flex flex-col shadow-2xl relative z-10"
            id="syllabus-modal-container"
          >
            {/* Header */}
            <div className="bg-indigo-900 text-white p-5 flex justify-between items-center shrink-0">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
                <h3 className="text-base font-extrabold tracking-tight" id="syllabusTitle">
                  {data.title}
                </h3>
              </div>
              <button 
                onClick={onClose} 
                className="text-indigo-200 hover:text-white transition-colors p-1"
                aria-label="关闭"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content list */}
            <div className="p-5 overflow-y-auto space-y-5 text-[13px] leading-relaxed text-slate-600 flex-grow" id="syllabusContent">
              {data.sections.map((section, index) => (
                <div key={index} className="space-y-2 pb-3 border-b border-dashed border-slate-100 last:border-b-0">
                  <p className="font-extrabold text-slate-900 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 shrink-0" />
                    {section.sectionTitle}
                  </p>
                  <ul className="list-none space-y-1.5 pl-3 text-[13px] text-slate-600">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-1.5 select-none font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end shrink-0">
              <button
                onClick={() => {
                  onClose();
                  // wait a brief moment for transition smoothness
                  setTimeout(() => {
                    onConsult(data.title.replace('课程大纲', ''));
                  }, 120);
                }}
                className="text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 rounded-xl active:scale-95 transition-all flex items-center space-x-1.5 shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 cursor-pointer"
              >
                <span>咨询课程试听</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
