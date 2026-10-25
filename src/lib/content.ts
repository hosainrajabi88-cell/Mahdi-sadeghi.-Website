import ompCertificate from "@/assets/omp-certificate.png.asset.json";

export type Lang = "fa" | "en" | "ar";

export const langMeta: Record<Lang, { label: string; dir: "rtl" | "ltr" }> = {
  fa: { label: "فارسی", dir: "rtl" },
  en: { label: "English", dir: "ltr" },
  ar: { label: "العربية", dir: "rtl" },
};

export const sectionIds = ["home", "about", "skills", "journey", "projects", "services", "news", "certificates", "contact"] as const;

type Content = {
  nav: string[];
  hero: { hello: string; name: string; tagline: string; role: string; buttons: [string, string, string] };
  about: { title: string; subtitle: string; role: string; paragraphs: string[] };
  journey: { title: string; items: { time: string; text: string }[] };
  skills: { title: string; intro: string; items: string[] };
  projects: { title: string; intro: string; name: string; desc: string; button: string };
  services: { title: string; intro: string; items: { title: string; desc: string }[] };
  news: { title: string; text: string; badge: string };
  certificates: { title: string; intro: string; viewBtn: string; items: { desc: string }[] };
  contact: { title: string; text: string; telegramLabel: string; phoneLabel: string; telegramBtn: string; callBtn: string };
  footer: { name: string; role: string; rights: string; links: string[] };
};

export const certificateFiles = [
  {
    id: "aiolearn",
    title: "AIOLearn Certificate",
    image: "https://aiolearn.app/cs/f5d8db2811382.jpg",
    url: "https://aiolearn.app/cs/f5d8db2811382.jpg",
  },
  {
    id: "omp",
    title: "One Million Prompters — Certificate of Completion",
    image: ompCertificate.url,
    url: "https://omp.dub.ai/certificate/45SjvclVCCzg",
  },
] as const;

export const content: Record<Lang, Content> = {
  fa: {
    nav: ["خانه", "درباره من", "مهارت‌ها", "مسیر من", "پروژه‌ها", "خدمات", "اخبار", "مدارک", "ارتباط با من"],
    hero: {
      hello: "سلام، من مهدی صادقی هستم",
      name: "Mahdi Sadeghi",
      role: "برنامه‌نویس · علاقه‌مند به هوش مصنوعی · طراح وب",
      tagline: "از علاقه به کامپیوتر تا ساختن ایده‌های دیجیتال؛ در مسیر کشف قدرت برنامه‌نویسی و هوش مصنوعی.",
      buttons: ["درباره من", "مشاهده پروژه‌ها", "ارتباط با من"],
    },
    about: {
      title: "درباره من",
      subtitle: "مهدی صادقی",
      role: "برنامه‌نویس، علاقه‌مند به هوش مصنوعی و خالق ایده‌های دیجیتال",
      paragraphs: [
        "من مهدی صادقی هستم؛ دانش‌آموز رشته کامپیوتر، علاقه‌مند به فناوری‌های نوین و فعال در مسیر یادگیری برنامه‌نویسی، هوش مصنوعی و طراحی وب. از سنین پایین به دنیای کامپیوتر و نرم‌افزار علاقه‌مند شدم و این علاقه به‌تدریج به مسیری برای یادگیری، تجربه و ساخت پروژه‌های دیجیتال تبدیل شده است.",
        "از سال ۱۴۰۰ در دوره‌ها و کلاس‌های مختلف مرتبط با برنامه‌نویسی، هوش مصنوعی و نرم‌افزار شرکت کرده‌ام و در سال ۱۴۰۳ با ورود به رشته کامپیوتر در مدرسه حکمت، مسیر آموزشی خود را به‌صورت تخصصی‌تر ادامه داده‌ام.",
        "تمرکز من بر یادگیری مستمر، توسعه مهارت‌های فنی و استفاده از فناوری برای حل مسائل واقعی است. به حوزه‌هایی مانند طراحی و توسعه وب‌سایت، برنامه‌نویسی، ابزارهای هوش مصنوعی و تولید محتوای دیجیتال علاقه دارم و تلاش می‌کنم ایده‌ها را به تجربه‌هایی کاربردی و قابل ارائه تبدیل کنم.",
        "همچنین آماده همکاری در پروژه‌های مرتبط با طراحی وب، تولید محتوای دیجیتال و خدمات فناوری هستم. هدف من تنها یادگیری ابزارها نیست؛ بلکه می‌خواهم با خلاقیت، پشتکار و دانش فنی، راهکارهایی مفید برای افراد و کسب‌وکارها خلق کنم.",
      ],
    },
    journey: {
      title: "مسیر من تا امروز",
      items: [
        { time: "۹ سالگی", text: "شروع علاقه‌مندی به برنامه‌نویسی، کامپیوتر و هوش مصنوعی" },
        { time: "سال ۱۴۰۰", text: "شروع شرکت در دوره‌ها و کلاس‌های مختلف برنامه‌نویسی، هوش مصنوعی و نرم‌افزار" },
        { time: "سال ۱۴۰۳", text: "ورود به رشته کامپیوتر در مدرسه حکمت و ادامه مسیر آموزشی به‌صورت تخصصی‌تر" },
        { time: "امروز", text: "ادامه یادگیری، تقویت مهارت‌های فنی و ساخت پروژه‌های دیجیتال" },
      ],
    },
    skills: {
      title: "مهارت‌های من",
      intro: "در مسیر یادگیری و فعالیت در حوزه فناوری، روی مهارت‌های مختلفی تمرکز کرده‌ام.",
      items: ["برنامه‌نویسی", "طراحی وب", "HTML", "هوش مصنوعی", "ابزارهای هوش مصنوعی", "تولید محتوای دیجیتال", "طراحی و ساخت تصاویر", "ساخت ویدیو", "فناوری کامپیوتر", "نرم‌افزار"],
    },
    projects: {
      title: "پروژه‌های من",
      intro: "در این بخش پروژه‌هایی که در مسیر یادگیری و فعالیت خود انجام داده‌ام نمایش داده می‌شوند.",
      name: "طراحی وب‌سایت برای تعمیرات پکیج قهرمانی",
      desc: "طراحی یک وب‌سایت برای معرفی خدمات تعمیرات پکیج قهرمانی، ارائه اطلاعات موردنیاز مشتریان و ایجاد راهی ساده برای ارتباط با مجموعه.",
      button: "مشاهده پروژه",
    },
    services: {
      title: "خدمات برای شما",
      intro: "در زمینه‌های مختلف فناوری و خدمات دیجیتال می‌توانم در انجام پروژه‌ها و ارائه راهکارهای مناسب به شما کمک کنم.",
      items: [
        { title: "طراحی وب‌سایت", desc: "طراحی وب‌سایت‌های مدرن، کاربردی و متناسب با نیاز افراد و کسب‌وکارها." },
        { title: "بازیابی و بازگردانی حساب‌های کاربری", desc: "کمک به بازیابی حساب‌های کاربری از طریق روش‌های رسمی، قانونی و امن." },
        { title: "هوش مصنوعی", desc: "استفاده از ابزارها و راهکارهای هوش مصنوعی برای انجام بهتر و خلاقانه‌تر کارهای دیجیتال." },
        { title: "برنامه‌نویسی", desc: "ارائه خدمات و انجام پروژه‌های برنامه‌نویسی و نرم‌افزاری." },
        { title: "مدیریت اینستاگرام", desc: "کمک در مدیریت، برنامه‌ریزی و تولید محتوای صفحات اینستاگرام." },
        { title: "ساخت و طراحی تصاویر", desc: "طراحی و تولید تصاویر دیجیتال برای استفاده در پروژه‌ها و شبکه‌های اجتماعی." },
        { title: "ساخت ویدیو", desc: "ساخت و ویرایش محتوای ویدیویی و دیجیتال." },
        { title: "سایر خدمات فناوری", desc: "ارائه راهکارهای مختلف در زمینه فناوری و خدمات دیجیتال." },
      ],
    },
    news: { title: "اخبار", text: "این بخش به‌زودی با اخبار، آموزش‌ها و مطالب جدید حوزه فناوری به‌روزرسانی خواهد شد.", badge: "به‌زودی" },
    certificates: {
      title: "مدارک و گواهینامه‌ها",
      intro: "مدارک کسب‌شده از دوره‌ها و برنامه‌های آموزشی.",
      viewBtn: "مشاهده مدرک اصلی",
      items: [{ desc: "مدرک حضور در AIOLearn" }, { desc: "مدرک حضور در One Million Prompters" }],
    },
    contact: {
      title: "ارتباط با من",
      text: "اگر برای طراحی وب، خدمات فناوری، تولید محتوای دیجیتال یا همکاری در یک پروژه نیاز به ارتباط دارید، می‌توانید از راه‌های زیر با من در تماس باشید.",
      telegramLabel: "تلگرام",
      phoneLabel: "تلفن",
      telegramBtn: "ارتباط در تلگرام",
      callBtn: "تماس با من",
    },
    footer: {
      name: "مهدی صادقی",
      role: "برنامه‌نویس، علاقه‌مند به هوش مصنوعی و فناوری",
      rights: "تمامی حقوق محفوظ است.",
      links: ["درباره من", "مهارت‌ها", "پروژه‌ها", "خدمات", "ارتباط با من"],
    },
  },
  en: {
    nav: ["Home", "About Me", "Skills", "My Journey", "Projects", "Services", "News", "Certificates", "Contact Me"],
    hero: {
      hello: "Hi, I'm Mahdi Sadeghi.",
      name: "Mahdi Sadeghi",
      role: "Programmer · AI Enthusiast · Web Designer",
      tagline: "From a passion for computers to creating digital ideas — exploring the power of programming and artificial intelligence.",
      buttons: ["About Me", "View Projects", "Contact Me"],
    },
    about: {
      title: "About Me",
      subtitle: "Mahdi Sadeghi",
      role: "Programmer, AI enthusiast, and creator of digital ideas",
      paragraphs: [
        "I'm Mahdi Sadeghi — a computer student, passionate about emerging technologies and actively learning programming, artificial intelligence, and web design. I became interested in the world of computers and software at a young age, and that interest has gradually grown into a path of learning, experience, and building digital projects.",
        "Since 2021 (1400 in the Persian calendar), I have taken part in various courses and classes related to programming, artificial intelligence, and software. In 2024 (1403), I entered the computer track at Hekmat School and have continued my education in a more specialized way.",
        "My focus is on continuous learning, developing technical skills, and using technology to solve real problems. I'm interested in areas such as website design and development, programming, AI tools, and digital content creation, and I try to turn ideas into practical, presentable experiences.",
        "I'm also open to collaborating on projects related to web design, digital content creation, and technology services. My goal is not just to learn tools — I want to use creativity, perseverance, and technical knowledge to create useful solutions for people and businesses.",
      ],
    },
    journey: {
      title: "My Journey So Far",
      items: [
        { time: "Age 9", text: "The beginning of my interest in programming, computers, and artificial intelligence" },
        { time: "2021 (1400)", text: "Started attending various courses and classes in programming, artificial intelligence, and software" },
        { time: "2024 (1403)", text: "Entered the computer track at Hekmat School and continued my education in a more specialized way" },
        { time: "Today", text: "Continuing to learn, strengthening my technical skills, and building digital projects" },
      ],
    },
    skills: {
      title: "My Skills",
      intro: "Along my path of learning and working in technology, I have focused on a range of skills.",
      items: ["Programming", "Web Design", "HTML", "Artificial Intelligence", "AI Tools", "Digital Content Creation", "Image Design & Creation", "Video Production", "Computer Technology", "Software"],
    },
    projects: {
      title: "My Projects",
      intro: "This section showcases projects I have completed along my path of learning and work.",
      name: "Website Design for Ghahremani Boiler Repairs",
      desc: "Designing a website to introduce Ghahremani's boiler repair services, provide the information customers need, and create a simple way to get in touch with the business.",
      button: "View Project",
    },
    services: {
      title: "Services for You",
      intro: "I can help you with projects and suitable solutions across various areas of technology and digital services.",
      items: [
        { title: "Website Design", desc: "Designing modern, functional websites tailored to the needs of individuals and businesses." },
        { title: "Account Recovery & Restoration", desc: "Helping recover user accounts through official, legal, and secure methods." },
        { title: "Artificial Intelligence", desc: "Using AI tools and solutions to do digital work better and more creatively." },
        { title: "Programming", desc: "Providing services and delivering programming and software projects." },
        { title: "Instagram Management", desc: "Helping with management, planning, and content creation for Instagram pages." },
        { title: "Image Creation & Design", desc: "Designing and producing digital images for projects and social media." },
        { title: "Video Production", desc: "Creating and editing video and digital content." },
        { title: "Other Tech Services", desc: "Providing various solutions in technology and digital services." },
      ],
    },
    news: { title: "News", text: "This section will be updated soon with news, tutorials, and technology updates.", badge: "Coming soon" },
    certificates: {
      title: "Certificates & Documents",
      intro: "Certificates earned from courses and training programs.",
      viewBtn: "View original certificate",
      items: [{ desc: "Certificate of Participation in AIOLearn" }, { desc: "Certificate of Participation in One Million Prompters" }],
    },
    contact: {
      title: "Contact Me",
      text: "If you'd like to get in touch about web design, technology services, digital content creation, or collaborating on a project, you can reach me through the options below.",
      telegramLabel: "Telegram",
      phoneLabel: "Phone",
      telegramBtn: "Contact me on Telegram",
      callBtn: "Call me",
    },
    footer: {
      name: "Mahdi Sadeghi",
      role: "Programmer, passionate about AI and technology",
      rights: "All rights reserved.",
      links: ["About Me", "Skills", "Projects", "Services", "Contact Me"],
    },
  },
  ar: {
    nav: ["الرئيسية", "من أنا", "المهارات", "مسيرتي", "المشاريع", "الخدمات", "الأخبار", "الشهادات", "تواصل معي"],
    hero: {
      hello: "مرحباً، أنا مهدي صادقي",
      name: "Mahdi Sadeghi",
      role: "مبرمج · شغوف بالذكاء الاصطناعي · مصمم مواقع",
      tagline: "من شغفٍ بالحاسوب إلى صناعة أفكار رقمية؛ في رحلة لاكتشاف قوة البرمجة والذكاء الاصطناعي.",
      buttons: ["من أنا", "عرض المشاريع", "تواصل معي"],
    },
    about: {
      title: "من أنا",
      subtitle: "مهدي صادقي",
      role: "مبرمج، شغوف بالذكاء الاصطناعي وصانع أفكار رقمية",
      paragraphs: [
        "أنا مهدي صادقي؛ طالب في تخصص الحاسوب، شغوف بالتقنيات الحديثة وأسير في طريق تعلّم البرمجة والذكاء الاصطناعي وتصميم المواقع. بدأ اهتمامي بعالم الحاسوب والبرمجيات منذ سنّ مبكرة، وتحوّل هذا الاهتمام تدريجياً إلى مسار للتعلّم والتجربة وبناء المشاريع الرقمية.",
        "منذ عام ١٤٠٠ هـ.ش (2021م) شاركتُ في دورات وصفوف مختلفة في مجالات البرمجة والذكاء الاصطناعي والبرمجيات، وفي عام ١٤٠٣ هـ.ش (2024م) التحقتُ بتخصص الحاسوب في مدرسة حكمت، وواصلتُ مسيرتي التعليمية بشكل أكثر تخصصاً.",
        "يتركّز اهتمامي على التعلّم المستمر وتطوير المهارات التقنية واستخدام التكنولوجيا لحلّ مشكلات حقيقية. أهتم بمجالات مثل تصميم المواقع وتطويرها، والبرمجة، وأدوات الذكاء الاصطناعي، وصناعة المحتوى الرقمي، وأسعى إلى تحويل الأفكار إلى تجارب عملية قابلة للتقديم.",
        "كما أنني مستعد للتعاون في المشاريع المتعلقة بتصميم المواقع وصناعة المحتوى الرقمي والخدمات التقنية. هدفي ليس تعلّم الأدوات فحسب، بل أريد أن أبتكر بالإبداع والمثابرة والمعرفة التقنية حلولاً مفيدة للأفراد والشركات.",
      ],
    },
    journey: {
      title: "مسيرتي حتى اليوم",
      items: [
        { time: "في التاسعة", text: "بداية الاهتمام بالبرمجة والحاسوب والذكاء الاصطناعي" },
        { time: "عام ١٤٠٠", text: "بداية المشاركة في دورات وصفوف مختلفة في البرمجة والذكاء الاصطناعي والبرمجيات" },
        { time: "عام ١٤٠٣", text: "الالتحاق بتخصص الحاسوب في مدرسة حكمت ومواصلة المسيرة التعليمية بشكل أكثر تخصصاً" },
        { time: "اليوم", text: "مواصلة التعلّم وتعزيز المهارات التقنية وبناء المشاريع الرقمية" },
      ],
    },
    skills: {
      title: "مهاراتي",
      intro: "خلال مسيرتي في التعلّم والعمل في مجال التكنولوجيا، ركّزتُ على مجموعة من المهارات المختلفة.",
      items: ["البرمجة", "تصميم المواقع", "HTML", "الذكاء الاصطناعي", "أدوات الذكاء الاصطناعي", "صناعة المحتوى الرقمي", "تصميم وإنشاء الصور", "صناعة الفيديو", "تقنية الحاسوب", "البرمجيات"],
    },
    projects: {
      title: "مشاريعي",
      intro: "يعرض هذا القسم المشاريع التي أنجزتها خلال مسيرتي في التعلّم والعمل.",
      name: "تصميم موقع لخدمات صيانة سخانات قهرماني",
      desc: "تصميم موقع إلكتروني للتعريف بخدمات صيانة السخانات لدى قهرماني، وتقديم المعلومات التي يحتاجها العملاء، وتوفير طريقة سهلة للتواصل مع المؤسسة.",
      button: "عرض المشروع",
    },
    services: {
      title: "خدمات لك",
      intro: "يمكنني مساعدتك في تنفيذ المشاريع وتقديم الحلول المناسبة في مجالات التكنولوجيا والخدمات الرقمية المختلفة.",
      items: [
        { title: "تصميم المواقع", desc: "تصميم مواقع حديثة وعملية تناسب احتياجات الأفراد والشركات." },
        { title: "استعادة الحسابات واسترجاعها", desc: "المساعدة في استعادة حسابات المستخدمين عبر طرق رسمية وقانونية وآمنة." },
        { title: "الذكاء الاصطناعي", desc: "استخدام أدوات وحلول الذكاء الاصطناعي لإنجاز الأعمال الرقمية بشكل أفضل وأكثر إبداعاً." },
        { title: "البرمجة", desc: "تقديم خدمات البرمجة وتنفيذ المشاريع البرمجية." },
        { title: "إدارة إنستغرام", desc: "المساعدة في إدارة صفحات إنستغرام والتخطيط لها وصناعة محتواها." },
        { title: "تصميم وإنشاء الصور", desc: "تصميم وإنتاج صور رقمية للاستخدام في المشاريع وشبكات التواصل الاجتماعي." },
        { title: "صناعة الفيديو", desc: "إنتاج وتحرير المحتوى المرئي والرقمي." },
        { title: "خدمات تقنية أخرى", desc: "تقديم حلول متنوعة في مجال التكنولوجيا والخدمات الرقمية." },
      ],
    },
    news: { title: "الأخبار", text: "سيتم تحديث هذا القسم قريباً بالأخبار والدروس وأحدث المستجدات في عالم التكنولوجيا.", badge: "قريباً" },
    certificates: {
      title: "الشهادات والوثائق",
      intro: "شهادات حاصلة من دورات وبرامج تدريبية.",
      viewBtn: "عرض الشهادة الأصلية",
      items: [{ desc: "شهادة حضور في AIOLearn" }, { desc: "شهادة حضور في One Million Prompters" }],
    },
    contact: {
      title: "تواصل معي",
      text: "إذا كنت بحاجة إلى التواصل بخصوص تصميم المواقع أو الخدمات التقنية أو صناعة المحتوى الرقمي أو التعاون في مشروع ما، يمكنك التواصل معي عبر الطرق التالية.",
      telegramLabel: "تيليغرام",
      phoneLabel: "الهاتف",
      telegramBtn: "تواصل عبر تيليغرام",
      callBtn: "اتصل بي",
    },
    footer: {
      name: "مهدي صادقي",
      role: "مبرمج، شغوف بالذكاء الاصطناعي والتكنولوجيا",
      rights: "جميع الحقوق محفوظة.",
      links: ["من أنا", "المهارات", "المشاريع", "الخدمات", "تواصل معي"],
    },
  },
};
