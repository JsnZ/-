import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string;
  isOpen: boolean;
}

export default function Toast({ message, isOpen }: ToastProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -20, x: '-50%' }}
          transition={{ type: 'spring', stiffness: 450, damping: 25 }}
          className="fixed top-12 left-1/2 z-50 bg-slate-900/90 backdrop-blur-md text-white text-xs px-4 py-2.5 rounded-full shadow-lg flex items-center space-x-2 border border-slate-700/50"
          id="global-toast"
        >
          <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
            <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
          </div>
          <span className="font-bold tracking-wide">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
