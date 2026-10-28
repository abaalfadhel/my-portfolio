export const locales = ['ar', 'en'] as const;
export type Locale = (typeof locales)[number];
export function isLocale(value: string): value is Locale { return locales.includes(value as Locale); }
export const copy = {
  ar: {
    nav: { home: 'الرئيسية', about: 'عنّي', projects: 'المشاريع', lab: 'المختبر', knowledge: 'المعرفة', contact: 'تواصل' },
    eyebrow: 'هندسة برمجيات · ذكاء اصطناعي · معرفة',
    heroTitle: 'أحوّل الأفكار إلى أثرٍ رقمي.',
    heroText: 'مساحة تجمع البرمجة والتجريب والبحث؛ أبني حلولًا عملية، وأوثّق ما أتعلمه، وأشارك المعرفة التي تستحق أن تُبنى عليها أفكار جديدة.',
    explore: 'استكشف الأعمال', contactMe: 'ابدأ محادثة', scroll: 'اكتشف ما وراء الفكرة',
    selected: 'أعمال مختارة', selectedText: 'مشاريع وتجارب تبدأ من مشكلة حقيقية وتنتهي بحل قابل للاستخدام.',
    viewAll: 'عرض كل المشاريع', domains: 'مسارات العمل', domainsText: 'ثلاثة مسارات تلتقي في نقطة واحدة: بناء شيء مفيد.',
    software: 'هندسة البرمجيات', softwareText: 'تطبيقات ويب وأدوات رقمية مصممة لتكون واضحة، قابلة للصيانة، وقابلة للتوسع.',
    ai: 'الذكاء الاصطناعي', aiText: 'تجارب عملية توظّف النماذج الذكية لحل مشكلات ملموسة، لا لمجرد إضافة كلمة رائجة.',
    research: 'البحث والمعرفة', researchText: 'مقالات ودراسات منظمة، مع مصادر واضحة وفصل بين المعلومة والتحليل والاستنتاج.',
    labTitle: 'منطقة التجريب', labText: 'أفكار أولية ونماذج وتجارب تقنية؛ بعضها يتحول إلى منتج، وبعضها يعلّمنا ما الذي لا ينبغي بناؤه.',
    openLab: 'ادخل المختبر', knowledgeTitle: 'ملاحظات تستحق البقاء', knowledgeText: 'مقالات تقنية ومعرفية توثّق التفكير خلف النتائج، لا النتائج وحدها.',
    readArticles: 'اقرأ المكتبة', ctaTitle: 'لديك فكرة تستحق البناء؟', ctaText: 'لنحوّلها إلى خطة واضحة، ثم إلى تجربة قابلة للاختبار.',
    contactCta: 'تواصل معي', footer: 'صُنع بعناية، وفكرة أن التقنية يجب أن تخدم الإنسان.',
    aboutTitle: 'أفكّر كمهندس، وأبني بعقلية الباحث.', aboutText: 'هذه مساحة شخصية للأعمال والتجارب والأفكار التي أعمل عليها. أؤمن أن أفضل الحلول تبدأ بفهم المشكلة، وتُختبر بصدق، وتُشرح بوضوح.',
    projectsTitle: 'المشاريع', projectsText: 'أعمال وتجارب تقنية مع توضيح الفكرة، ودوري، والتقنيات المستخدمة.',
    labPageTitle: 'المختبر الرقمي', labPageText: 'نماذج أولية وتجارب صغيرة لاختبار الأفكار قبل تحويلها إلى منتجات.',
    knowledgePageTitle: 'المكتبة المعرفية', knowledgePageText: 'مقالات وبحوث وملاحظات منظمة، مع الحرص على التوثيق والوضوح.',
    contactTitle: 'لنبنِ شيئًا مفيدًا.', contactText: 'أرسل تفاصيل فكرتك أو استفسارك. سيُفتح تطبيق البريد لديك برسالة جاهزة للإرسال.',
    name: 'الاسم', email: 'البريد الإلكتروني', message: 'تفاصيل الرسالة', send: 'إنشاء رسالة بريد', back: 'العودة', project: 'مشروع', article: 'مقال', status: 'تصوّر أولي', all: 'الكل', filter: 'تصفية', stack: 'التقنيات', role: 'الدور', problem: 'المشكلة', solution: 'الحل', note: 'ملاحظة', sampleNote: 'هذا محتوى تجريبي لتوضيح شكل الموقع. استبدله بمعلومات أعمالك الحقيقية قبل النشر.'
  },
  en: {
    nav: { home: 'Home', about: 'About', projects: 'Projects', lab: 'Lab', knowledge: 'Knowledge', contact: 'Contact' },
    eyebrow: 'SOFTWARE ENGINEERING · AI · KNOWLEDGE', heroTitle: 'Turning ideas into digital impact.',
    heroText: 'A space for engineering, experimentation, and research. I build practical tools, document what I learn, and share knowledge that helps new ideas take shape.',
    explore: 'Explore work', contactMe: 'Start a conversation', scroll: 'Discover what is behind the idea',
    selected: 'Selected work', selectedText: 'Projects and experiments that start with a real problem and aim for a useful solution.', viewAll: 'View all projects',
    domains: 'Areas of focus', domainsText: 'Three paths meeting at one point: building something useful.', software: 'Software engineering', softwareText: 'Web apps and digital tools designed to be clear, maintainable, and scalable.',
    ai: 'Artificial intelligence', aiText: 'Practical experiments applying intelligent models to real problems—not just adding a buzzword.', research: 'Research & knowledge', researchText: 'Structured writing and research with clear sources and a distinction between facts, analysis, and conclusions.',
    labTitle: 'The experiment zone', labText: 'Early ideas, prototypes, and technical experiments. Some become products; others teach us what not to build.', openLab: 'Enter the lab',
    knowledgeTitle: 'Notes worth keeping', knowledgeText: 'Technical and research notes that document the thinking behind results, not only the results.', readArticles: 'Read the library',
    ctaTitle: 'Have an idea worth building?', ctaText: 'Let’s turn it into a clear plan, then a testable experience.', contactCta: 'Get in touch', footer: 'Made with care, and the belief that technology should serve people.',
    aboutTitle: 'Thinking like an engineer. Building like a researcher.', aboutText: 'A personal space for work, experiments, and ideas in progress. Great solutions start by understanding the problem, are tested honestly, and explained clearly.',
    projectsTitle: 'Projects', projectsText: 'Selected work and experiments, with context on the idea, my role, and the technology used.', labPageTitle: 'Digital lab', labPageText: 'Small prototypes and experiments for testing ideas before turning them into products.',
    knowledgePageTitle: 'Knowledge library', knowledgePageText: 'Articles, research, and organized notes—with an emphasis on sourcing and clarity.', contactTitle: 'Let’s build something useful.', contactText: 'Send the outline of your idea or question. Your email app will open with a prepared message.',
    name: 'Name', email: 'Email', message: 'Message details', send: 'Create email', back: 'Back', project: 'Project', article: 'Article', status: 'Concept', all: 'All', filter: 'Filter', stack: 'Technology', role: 'Role', problem: 'Problem', solution: 'Solution', note: 'Note', sampleNote: 'This is sample content to demonstrate the site. Replace it with verified project details before publishing.'
  }
} as const;
export function getCopy(locale: Locale) { return copy[locale]; }
