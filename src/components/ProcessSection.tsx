import { UserPlus, MessageSquareCode, Laptop, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProcessSection() {
  const steps = [
    {
      step: 1,
      title: '扫码添加课程老师',
      icon: UserPlus,
      color: 'bg-blue-600/90 text-white',
      shadow: 'shadow-[0_2px_8px_rgba(30,144,255,0.03)]',
      border: 'border-blue-100/40',
      bgColor: 'bg-blue-50/20'
    },
    {
      step: 2,
      title: '咨询报名课程',
      icon: MessageSquareCode,
      color: 'bg-blue-600/90 text-white',
      shadow: 'shadow-[0_2px_8px_rgba(30,144,255,0.03)]',
      border: 'border-blue-100/40',
      bgColor: 'bg-blue-50/20'
    },
    {
      step: 3,
      title: '登录51CTO网站端/App',
      icon: Laptop,
      color: 'bg-blue-600/90 text-white',
      shadow: 'shadow-[0_2px_8px_rgba(30,144,255,0.03)]',
      border: 'border-blue-100/40',
      bgColor: 'bg-blue-50/20'
    },
    {
      step: 4,
      title: '高效开启备考冲刺',
      icon: CheckCircle2,
      color: 'bg-emerald-500 text-white',
      shadow: 'shadow-[0_2px_8px_rgba(16,185,129,0.03)]',
      border: 'border-emerald-100/60',
      bgColor: 'bg-emerald-50/50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-white rounded-2xl p-4 shadow-sm border border-blue-50/20 mb-8" id="process-section">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
        <h2 className="text-base font-extrabold text-slate-900">报名及上课流程</h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-4 gap-1.5 items-stretch"
      >
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`flex flex-col items-center text-center p-2 rounded-xl border ${item.bgColor} ${item.border} justify-start transition-all duration-300 ${item.shadow}`}
              id={`step-${item.step}`}
            >
              {/* Badge Icon */}
              <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center mb-2 shadow-sm shrink-0`}>
                <Icon className="w-4 h-4" />
              </div>
              
              <h4 className="text-[10px] font-black text-slate-800 leading-snug tracking-tighter">
                {item.title}
              </h4>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
