import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, MessageSquare, ShieldCheck } from 'lucide-react';

interface ConsultModalProps {
  courseTitle: string;
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export default function ConsultModal({ courseTitle, isOpen, onClose, onShowToast }: ConsultModalProps) {
  const wechatId = 'ruankao51cto2026';

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(wechatId);
        onShowToast("复制成功！快去添加助教微信吧！✨");
      } else {
        // Fallback for older browsers
        const tempInput = document.createElement("input");
        tempInput.value = wechatId;
        document.body.appendChild(tempInput);
        tempInput.select();
        tempInput.setSelectionRange(0, 99999);
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        onShowToast("复制成功！快去添加助教微信吧！✨");
      }
    } catch (err) {
      onShowToast("复制失败，请手动长按复制微信号");
    }
  };

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
            id="consult-overlay"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="bg-white rounded-3xl w-full max-w-xs p-6 shadow-2xl relative z-10 text-center"
            id="consult-modal-container"
          >
            {/* Close button */}
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Bubble Deco */}
            <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold font-sans">
              <MessageSquare className="w-6 h-6 text-amber-500" />
            </div>

            <h3 className="text-base font-extrabold text-slate-900 mb-1 leading-snug" id="consultTitle">
              咨询 {courseTitle || '软考高分精讲'} 课程
            </h3>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              扫码添加官方助理老师，领免费试听课及专属学习大纲
            </p>

            {/* 炫酷的拟真矢量 SVG 二维码 */}
            <div className="bg-slate-50 p-4 rounded-2xl inline-block border border-slate-100 mb-4 shadow-sm">
              <svg className="w-32 h-32 mx-auto text-slate-900" viewBox="0 0 100 100">
                {/* QR Finder patterns */}
                <rect x="5" y="5" width="22" height="22" rx="2" fill="none" stroke="currentColor" strokeWidth="4" />
                <rect x="9" y="9" width="14" height="14" rx="1" fill="currentColor" />
                
                <rect x="73" y="5" width="22" height="22" rx="2" fill="none" stroke="currentColor" strokeWidth="4" />
                <rect x="77" y="9" width="14" height="14" rx="1" fill="currentColor" />
                
                <rect x="5" y="73" width="22" height="22" rx="2" fill="none" stroke="currentColor" strokeWidth="4" />
                <rect x="9" y="77" width="14" height="14" rx="1" fill="currentColor" />
                
                {/* Random QR pixels and paths */}
                <rect x="36" y="10" width="8" height="8" rx="1" fill="currentColor" />
                <rect x="52" y="5" width="8" height="16" rx="1" fill="currentColor" />
                <rect x="42" y="25" width="16" height="8" rx="1" fill="currentColor" />
                
                <rect x="78" y="45" width="12" height="12" rx="1" fill="currentColor" />
                <rect x="10" y="45" width="12" height="8" rx="1" fill="currentColor" />
                <rect x="45" y="45" width="18" height="18" rx="2" fill="currentColor" />
                
                <rect x="73" y="73" width="8" height="8" rx="1" fill="currentColor" />
                <rect x="85" y="81" width="10" height="10" rx="1" fill="currentColor" />
                <rect x="45" y="77" width="15" height="8" rx="1" fill="currentColor" />

                {/* Center active circular badge */}
                <circle cx="50" cy="50" r="10" fill="white" />
                <circle cx="50" cy="50" r="6" fill="#1D4ED8" />
              </svg>
              <span className="text-[10px] text-slate-400 mt-2.5 block font-bold leading-none">
                长按识别二维码 · 微信扫码添加
              </span>
            </div>

            {/* 微信号复制工具栏 */}
            <div className="bg-slate-50 rounded-xl p-2.5 mb-4 flex items-center justify-between border border-dashed border-slate-200">
              <div className="text-left pl-1">
                <p className="text-[10px] text-slate-400 font-bold">微信号</p>
                <p className="text-xs font-black text-slate-800 tracking-wide select-all" id="wechatId">
                  {wechatId}
                </p>
              </div>
              <button 
                onClick={handleCopy}
                className="text-[11px] font-bold text-blue-600 bg-white hover:bg-slate-50 transition active:scale-95 shadow-sm border border-slate-100 rounded-lg px-2.5 py-1.5 flex items-center space-x-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>复制微信号</span>
              </button>
            </div>

            {/* 友情备注 */}
            <div className="text-[11px] text-slate-400 leading-relaxed flex items-center justify-center space-x-1 bg-slate-50 py-2 px-3 rounded-lg border border-slate-100">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>
                添加请备注：<strong className="text-rose-500 font-extrabold">"软考咨询"</strong> 极速通过
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
