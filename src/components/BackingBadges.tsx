import { GraduationCap, ClipboardCheck, Library, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export default function BackingBadges() {
  const badges = [
    {
      title: '名师精讲',
      icon: GraduationCap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: '真题带练',
      icon: ClipboardCheck,
      color: 'text-sky-600',
      bgColor: 'bg-sky-50',
    },
    {
      title: '配套题库',
      icon: Library,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      title: '高效提分',
      icon: Rocket,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-4 gap-2 mb-8 text-center"
    >
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-3 rounded-2xl shadow-sm border border-blue-50/50 flex flex-col items-center justify-center transition-all duration-300"
            id={`badge-item-${index}`}
          >
            <div className={`w-10 h-10 rounded-full ${badge.bgColor} flex items-center justify-center mb-2 shrink-0`}>
              <Icon className={`w-5 h-5 ${badge.color}`} />
            </div>
            <span className="text-xs font-black text-slate-700">{badge.title}</span>
          </motion.div>
        );
      })}
    </motion.section>
  );
}
