import { Course } from './types';

export const COURSES: Course[] = [
  {
    id: 'system_architect',
    level: 'high',
    title: '软考高级系统架构设计师一课通（2026版）',
    tags: ['全考点覆盖', '论文通关包'],
    lessons: 419,
    duration: '72.5小时',
    students: '18.5万',
    rating: 5.0,
    highlight: '架构知识精讲 + 选择/案例/论文全题型拆解，深度覆盖考试全考点。',
    originalPrice: 229,
    price: '206.1',
    priceLabel: '起',
    recommendStars: 5
  },
  {
    id: 'system_planner',
    level: 'high',
    title: '系统规划与管理师视频课程套餐',
    tags: ['真题全透析', '命题深度解构'],
    lessons: 215,
    duration: '35.2小时',
    students: '18.75万',
    rating: 5.0,
    highlight: '基础核心精讲 + 2017–2025历年真题逐题深度解析，带你精准吃透命题规律。',
    originalPrice: 746,
    price: '559.50',
    priceLabel: '特惠',
    recommendStars: 5
  },
  {
    id: 'network_engineer',
    level: 'mid',
    title: '软考网络工程师精讲视频课程',
    tags: ['实战配置讲解', '零基础精讲', '第6版新教材全面覆盖升级'],
    lessons: 105,
    duration: '41.3小时',
    students: '9.0万',
    rating: 5.0,
    highlight: '分模块解构重难点，第6版新教材全面覆盖，独创配套习题及实操配置思路，零基础无忧学。',
    price: '398',
    priceLabel: '现售价',
    recommendStars: 5
  },
  {
    id: 'software_designer',
    level: 'mid',
    title: '软考中级软件设计师一课通（2026版）',
    tags: ['提分见效快', '考前极速突破'],
    lessons: 356,
    duration: '50.5小时',
    students: '12.7万',
    rating: 5.0,
    highlight: '考点精讲 + 通关技巧总结 + 新教材完美同步，循序渐进，帮你快速拔高。',
    originalPrice: 199,
    price: '159.2',
    priceLabel: '折扣价',
    recommendStars: 5
  }
];

export const SYLLABUS_DATA: Record<string, { title: string; sections: { sectionTitle: string; items: string[] }[] }> = {
  'system_architect': {
    title: '系统架构设计师 课程大纲',
    sections: [
      {
        sectionTitle: '第一部分：系统架构基础与设计方法（高级）',
        items: [
          '第1章：计算机系统、网络与数据库知识',
          '第2章：系统开发基础、软件架构工程',
          '第3章：系统建模、面向对象分析与设计',
          '第4章：软件架构评估与设计模式（高频考点）'
        ]
      },
      {
        sectionTitle: '第二部分：选择题真题全覆盖剖析',
        items: [
          '15套历年真题多维度精解，强化计算题算法',
          '新版大纲新增知识点（敏捷开发、边缘计算）核心梳理'
        ]
      },
      {
        sectionTitle: '第三部分：案例分析与论文专项（硬核突破）',
        items: [
          '5大经典架构案例场景精讲',
          '独创论文写作模板框架，覆盖微服务、可靠性等核心题型'
        ]
      }
    ]
  },
  'system_planner': {
    title: '系统规划与管理师 课程大纲',
    sections: [
      {
        sectionTitle: '第一部分：IT服务管理知识与规划设计',
        items: [
          '第1章：信息系统与ITIL服务管理体系',
          '第2章：IT服务规划设计（服务目录、服务级别协议）',
          '第3章：IT服务部署与过渡、运营管理'
        ]
      },
      {
        sectionTitle: '第二部分：高阶考试真题解析套包（2017-2025）',
        items: [
          '解析近10年系规真题选择、案例及论文设计规律'
        ]
      },
      {
        sectionTitle: '第三部分：服务报告与体系改进设计',
        items: [
          '服务改进设计标准写法与案例模版拆解'
        ]
      }
    ]
  },
  'network_engineer': {
    title: '网络工程师（第6版） 课程大纲',
    sections: [
      {
        sectionTitle: '第一部分：网络基础与硬件技术（中级第6版教材）',
        items: [
          '第1章：数据通信基础、物理层与链路层技术',
          '第2章：局域网、城域网与广域网标准',
          '第3章：TCP/IP协议族、子网划分、路由算法精讲'
        ]
      },
      {
        sectionTitle: '第二部分：企业网络设计、规划与网络配置实操',
        items: [
          '第4章：华为/思科交换机与路由器核心CLI配置',
          '第5章：VLAN、STP、静态路由、OSPF配置深度剖析'
        ]
      },
      {
        sectionTitle: '第三部分：网络安全与真题带练',
        items: [
          '第6章：第6版最新真题练习 + 网络安全防范与VPN部署方案'
        ]
      }
    ]
  },
  'software_designer': {
    title: '软件设计师 课程大纲',
    sections: [
      {
        sectionTitle: '第一部分：软件工程与结构化分析',
        items: [
          '第1章：编译原理、数据结构与算法专项',
          '第2章：软件工程管理与生命周期、需求工程'
        ]
      },
      {
        sectionTitle: '第二部分：面向对象设计与UML建模（关键考点）',
        items: [
          '第3章：UML图（类图、状态图、时序图）精讲',
          '第4章：设计模式应用与C++/Java考题答题提速技巧'
        ]
      },
      {
        sectionTitle: '第三部分：极速考前押题与套卷讲解',
        items: [
          '历年真题快速解题技巧、同步题库精讲精练'
        ]
      }
    ]
  }
};
