import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-center py-6 text-slate-500 text-xs space-y-2 border-t border-blue-100/30">
      <p className="font-bold text-slate-600 flex items-center justify-center space-x-1">
        <Phone className="w-3 h-3 text-slate-400" />
        <span>北京无忧创想信息技术有限公司 联系我们：400-101-1651</span>
      </p>
      <p className="font-semibold text-slate-400">Copyright © 2005-2026 51CTO.com</p>
      <p className="opacity-90 font-black tracking-widest text-[10px] text-slate-400/90 uppercase">
        京ICP备09067568号-5
      </p>
    </footer>
  );
}
