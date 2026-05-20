import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Zap, Shield, HelpCircle } from 'lucide-react';

interface HeaderBannerProps {
  onShowToast: (msg: string) => void;
}

export default function HeaderBanner({ onShowToast }: HeaderBannerProps) {
  const [imgUrl, setImgUrl] = useState('https://test-s2.51cto.com/images/202605/20/b04ce5698846ef6f2b4b3f2847b58e8b.png');
  const [showWebFallback, setShowWebFallback] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const handleError = () => {
    if (retryCount === 0) {
      setRetryCount(1);
      // Try alternative high quality host/extension
      setImgUrl('https://i.ibb.co/G43rrjsQ/image.jpg');
    } else {
      setShowWebFallback(true);
      onShowToast("网络加载图片有波动，已为您切换至本地高精矢量海报 ✨");
    }
  };

  return (
    <header className="w-full relative bg-[#F2F7FC]" id="banner-container">
      {!showWebFallback ? (
        <div className="w-full relative overflow-hidden bg-[#F2F7FC]">
          <img
            id="header-banner-img"
            src={imgUrl}
            alt="2026软考高分视频课重磅上线"
            className="w-full h-auto block align-top select-none"
            style={{
              imageRendering: '-webkit-optimize-contrast',
              display: 'block',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
            }}
            onError={handleError}
          />
          {/* 羽化渐变层：将图片底部与网页 bg-[#F2F7FC] 淡蓝背景进行丝滑交融 */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#F2F7FC] to-transparent pointer-events-none" />
        </div>
      ) : (
        /* 容灾：高精细本土矢量海报，利用 Modern Tailwind CSS 设计极其高逼格的视觉体验 */
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-900 text-white p-6 relative overflow-hidden flex flex-col justify-center items-start min-h-[190px]"
        >
          {/* 背景装饰光感 */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none" />

          {/* 标识和标语 */}
          <div className="flex items-center space-x-1.5 mb-2 relative z-10">
            <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-sm tracking-wider uppercase">
              51CTO 官方首发
            </span>
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
            <span className="text-blue-200 text-[10px] font-bold">2026 新大纲新教材</span>
          </div>

          <h1 className="text-xl md:text-2xl font-black tracking-tight leading-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-50 to-amber-200 drop-shadow-sm relative z-10">
            2026年软考高分视频课<br />
            <span className="text-lg text-amber-300 font-extrabold mt-1 inline-block">重 磅 上 线 !</span>
          </h1>

          <p className="text-xs text-blue-100 max-w-xs leading-relaxed opacity-95 mb-4 relative z-10">
            名师精讲 · 真题带练 · 配套题库 · 高效提分，支持极速开课，零基础助力一次通关。
          </p>

          <div className="flex space-x-3 text-[10px] font-semibold text-blue-200 relative z-10 border-t border-white/10 pt-3 w-full">
            <div className="flex items-center space-x-1">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>一站式备考</span>
            </div>
            <div className="flex items-center space-x-1">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>极速保障升级</span>
            </div>
            <div className="flex items-center space-x-1">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>5分好评推荐</span>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
