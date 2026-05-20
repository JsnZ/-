import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronRight, FileText } from 'lucide-react';
import { COURSES } from '../data';
import { Course } from '../types';

interface CourseListProps {
  onOpenSyllabus: (courseId: string) => void;
  onOpenConsult: (courseTitle: string) => void;
}

export default function CourseList({ onOpenSyllabus, onOpenConsult }: CourseListProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'high' | 'mid'>('all');

  const filteredCourses = COURSES.filter((course) => {
    if (activeTab === 'all') return true;
    return course.level === activeTab;
  });

  return (
    <section className="mb-8">
      {/* Module Title */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
          <h2 className="text-lg font-black text-slate-900">核心高分课推荐</h2>
        </div>
      </div>

      {/* Tabs Layout */}
      <div className="flex space-x-1.5 mb-5 bg-slate-100 p-1 rounded-xl">
        <button
          onClick={() => setActiveTab('all')}
          className={`flex-1 text-center py-2.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
            activeTab === 'all'
              ? 'bg-white text-slate-950 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          全部科目
        </button>
        <button
          onClick={() => setActiveTab('high')}
          className={`flex-1 text-center py-2.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
            activeTab === 'high'
              ? 'bg-white text-slate-950 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          高级科目
        </button>
        <button
          onClick={() => setActiveTab('mid')}
          className={`flex-1 text-center py-2.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
            activeTab === 'mid'
              ? 'bg-white text-slate-950 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          中级科目
        </button>
      </div>

      {/* Cards List with motion stagger */}
      <div className="space-y-6" id="courses-container">
        <AnimatePresence mode="popLayout">
          {filteredCourses.map((course) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              key={course.id}
              className="course-card bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-100 overflow-hidden transition-all duration-300"
              data-level={course.level}
            >
              {/* Header Badge & Level */}
              <div className="bg-gradient-to-r from-blue-800 to-indigo-700 px-4 py-3 flex justify-between items-center text-white">
                <span className="text-[11px] font-extrabold tracking-wider bg-white/20 px-2.5 py-1 rounded-md uppercase">
                  {course.level === 'high' ? '软考高级' : '软考中级'}
                </span>
                <div className="flex items-center text-amber-300 space-x-0.5 text-xs">
                  <span className="text-white/80 font-bold mr-1 scale-90">推荐指数:</span>
                  {[...Array(course.recommendStars)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current text-amber-300" />
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <h3 className="text-base font-extrabold text-slate-900 mb-2.5 leading-snug">
                  {course.title}
                </h3>

                {/* Tag list */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] bg-blue-50/50 text-blue-600 font-bold px-2 py-0.5 rounded-md border border-blue-100/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-2 bg-slate-50 rounded-xl p-3 mb-4 text-center">
                  <div>
                    <p className="text-xs font-black text-slate-900">{course.lessons}课时</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-bold">总课时数</p>
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-900">{course.duration}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-bold">视频时长</p>
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-900">{course.students}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-bold">学习人数</p>
                  </div>
                  <div>
                    <p className="text-xs font-black text-emerald-600">{course.rating.toFixed(1)}分</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-bold">课程评分</p>
                  </div>
                </div>

                {/* Highlights Summary Box */}
                <p className="text-xs text-slate-600 mb-4 leading-relaxed bg-blue-50/40 p-3 rounded-xl border-l-4 border-blue-500">
                  <strong className="text-blue-950 font-extrabold">核心内容：</strong>
                  {course.highlight}
                </p>

                {/* Pricing & Call to Action (Buttons) */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex flex-col">
                    {course.originalPrice && (
                      <span className="text-[10px] text-slate-400 line-through">
                        原价: ¥{course.originalPrice}
                      </span>
                    )}
                    <span className="text-lg font-black text-rose-500 flex items-baseline leading-none mt-0.5">
                      <span className="text-xs mr-0.5">¥</span>
                      {course.price}
                      <span className="text-[10px] font-bold text-slate-400 ml-1">
                        {course.priceLabel}
                      </span>
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    {/* Syllabus Trigger */}
                    <button
                      onClick={() => onOpenSyllabus(course.id)}
                      className="text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100/80 active:scale-95 transition px-3 py-2.5 rounded-xl flex items-center space-x-1 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>大纲</span>
                    </button>

                    {/* Chat Advisory Trigger */}
                    <button
                      onClick={() => onOpenConsult(course.title)}
                      className="text-xs font-black text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 active:scale-95 transition-all px-4 py-2.5 rounded-xl shadow-md shadow-orange-500/10 flex items-center space-x-1 cursor-pointer"
                    >
                      <span>立即咨询</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
