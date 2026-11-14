import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Shield,
  BriefcaseBusiness,
  Globe,
  Mail,
  Phone,
  Award,
  LayoutDashboard,
  BarChart3,
  Code2,
  ShieldCheck,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";


// =========================================================
// Main Portfolio Component
// =========================================================
function App() {
  // -----------------------------
  // App State
  // -----------------------------
  const [lang, setLang] = useState("en");
  const [intro, setIntro] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [roleIndex, setRoleIndex] = useState(0);
  const isAr = lang === "ar";

  const navStyle = (sectionId) => ({
    ...styles.navLink,
    ...(activeSection === sectionId ? styles.navLinkActive : {}),
  });

  // -----------------------------
  // Intro timer + mouse glow + navbar scroll effect
  // -----------------------------
  useEffect(() => {
      const timer = setTimeout(() => setIntro(false), 2200);
    
      const handleMouseMove = (e) => {
        setMouse({ x: e.clientX, y: e.clientY });
      };
    
      const handleScroll = () => {
        setScrolled(window.scrollY > 60);

        const sectionIds = [
          "about",
          "skills",
          "experience",
          "certifications",
          "project",
          "contact",
        ];

        const currentSection = sectionIds.find((id) => {
          const section = document.getElementById(id);
          if (!section) return false;
          const rect = section.getBoundingClientRect();
          return rect.top <= 180 && rect.bottom >= 180;
        });

        if (currentSection) {
          setActiveSection(currentSection);
        }
      };

      handleScroll();
    
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        clearTimeout(timer);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  // -----------------------------
  // Browser title + favicon
  // -----------------------------
  useEffect(() => {
    document.title = "Ziyad Alfaifi | Systems Development & Security Portfolio";

    const setMeta = (selector, attrs) => {
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        document.head.appendChild(tag);
      }

      Object.entries(attrs).forEach(([key, value]) => {
        tag.setAttribute(key, value);
      });
    };

    setMeta('meta[name="author"]', {
      name: "author",
      content: "Ziyad Alfaifi",
    });

    setMeta('meta[name="description"]', {
      name: "description",
      content:
        "Portfolio of Ziyad Alfaifi, an Information Technology graduate focused on systems development, security, and modern digital solutions.",
    });

    setMeta('meta[name="keywords"]', {
      name: "keywords",
      content:
        "Ziyad Alfaifi, Systems Development, Security, Digital Solutions, Portfolio",
    });

    setMeta('meta[property="og:title"]', {
      property: "og:title",
      content: "Ziyad Alfaifi Portfolio",
    });

    setMeta('meta[property="og:description"]', {
      property: "og:description",
      content:
        "Systems Development & Security Portfolio.",
    });

    setMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });

    setMeta('meta[property="og:image"]', {
      property: "og:image",
      content: "/zh-logo.png",
    });

    setMeta('meta[name="theme-color"]', {
      name: "theme-color",
      content: "#050816",
    });

    let favicon = document.querySelector("link[rel='icon']");
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }

    favicon.type = "image/png";
    favicon.href = "/zh-logo.png";
  }, []);

  // -----------------------------
  // Reusable scroll animations
  // -----------------------------
  const revealUp = {
    hidden: { y: 45, opacity: 0, filter: "blur(6px)" },
    show: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const revealSide = {
    hidden: { x: isAr ? 55 : -55, opacity: 0, filter: "blur(6px)" },
    show: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // -----------------------------
  // Website text for English / Arabic
  // -----------------------------
  const t = {
    en: {
      name: "ZIYAD",
      title: "Hi, I'm Ziyad",
      role: "Systems Development & Security",
      desc: "IT graduate focused on systems development, security, and building modern digital solutions with practical impact.",
      about: "About Me",
      skills: "Skills",
      experience: "Experience",
      experienceTitle:"Data Analysis Training",
      experienceText:
"Completed summer training in data analysis, which involved data analysis, reporting, dashboard creation, and extracting insights to support decision-making.",
      certifications: "Certifications",
      certTitle: "Professional Certificates",
      certText:
        "A dedicated section to showcase my certifications, achievements, and completed learning paths.",
      project: "Projects",
      projectTitle: "Smart City Services Platform",
      projectText:
      "A smart city management platform designed for supervisors and administrators, featuring interactive dashboards, reports management, alerts, and digital maps, while citizens use a separate dedicated services application.",
      contact: "Let's Connect",
      view: "View Project",
      talk: "Contact Me",
    },
    ar: {
      name: "ZIAD",
      title: "أهلًا، أنا زياد",
      role: "تقنية معلومات | أمن معلومات",
      desc: "حديث تخرج في تقنية المعلومات، مسار أمن المعلومات. مهتم بالأمن السيبراني وبناء الأنظمة الآمنة والتجارب الرقمية الحديثة ذات التأثير الواقعي.",
      about: "نبذة عني",
      skills: "المهارات",
      experience: "الخبرات",
      experienceTitle: "تدريب تحليل البيانات",
      experienceText:
        "أنهيت تدريبًا صيفيًا في تحليل البيانات، مع التركيز على تنظيف البيانات، استخراج المؤشرات، بناء التقارير المرئية، وعرض النتائج بوضوح باستخدام أدوات التحليل.",
      certifications: "الشهادات",
      certTitle: "الشهادات المهنية",
      certText:
        "قسم مخصص لعرض الشهادات والإنجازات والمسارات التعليمية التي تم إنجازها.",
      project: "المشاريع",
      projectTitle: "منصة خدمات المدينة الذكية",
      projectText:
      "منصة إشرافية للمدينة الذكية مخصصة للمشرفين والإداريين، تضم لوحات تحكم تفاعلية وإدارة البلاغات والتنبيهات والخرائط الرقمية، بينما يمتلك المواطنون تطبيقًا منفصلًا للخدمات.",
      contact: "خلّنا نتواصل",
      view: "عرض المشروع",
      talk: "تواصل معي",
    },
  }[lang];

  // -----------------------------
  // Hero rotating role text
  // -----------------------------
  
  const rotatingRoles = isAr
    ? ["الأمن السيبراني", "تطوير المواقع", "الحلول التقنية"]
    : ["Systems Development", "Security", "Digital Solutions"];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) =>
        prev === rotatingRoles.length - 1 ? 0 : prev + 1
      );
    }, 2200);

    return () => clearInterval(roleInterval);
  }, [rotatingRoles.length]);

  // -----------------------------
  // About cards data
  // -----------------------------
  const aboutCards = [
    {
      icon: <GraduationCap size={42} strokeWidth={2.2} />,
    
      title: isAr ? "التعليم" : "Education",
    
      content: (
        <>
          <p className="text-mobile" style={styles.aboutText}>
            {isAr
              ? "بكالوريوس تقنية المعلومات - مسار أمن المعلومات"
              : "Bachelor’s Degree in Information Technology - Information Security Track"}
          </p>
    
          <p style={styles.aboutSubText}>
            {isAr
              ? "جامعة جازان | 2022 - 2026"
              : "Jazan University | 2022 - 2026"}
          </p>
        </>
      ),
    },
  
    {
      icon: <Shield size={42} strokeWidth={2.2} />,
  
      title: isAr ? "الاهتمامات" : "Interests",
  
      content: (
        <p className="text-mobile" style={styles.aboutText}>
          {isAr
            ? "مهتم ببناء الأنظمة الحديثة والآمنة وتطوير الحلول الرقمية الموثوقة."
            : "Interested in building modern secure systems and developing reliable digital solutions."}
        </p>
      ),
    },
  
    {
      icon: <BriefcaseBusiness size={42} strokeWidth={2.2} />,
  
      title: isAr ? "المهارات الشخصية" : "Soft Skills",
  
      content: (
        <p className="text-mobile" style={styles.aboutText}>
          {isAr
            ? "سريع التعلّم، بتفكير تحليلي وعمل جماعي فعّال."
            : "Fast learner with analytical thinking and effective teamwork."}
        </p>
      ),
    },
  ];

  // -----------------------------
  // Skills cards data
  // -----------------------------
  const skillGroups = [
    {
      title: isAr ? "تطوير المواقع" : "Systems Development",
      icon: <Code2 size={20} />,
      items: ["React", "JavaScript", "HTML", "CSS", "Vite", "Responsive UI"],
    },
    {
      title: isAr ? "الحلول التقنية" : "Digital Solutions",
      icon: <BarChart3 size={20} />,
      items: ["Excel", "Power BI", "Python", "Statistics", "Visualization"],
    },
    {
      title: isAr ? "الأمن السيبراني" : "Cybersecurity",
      icon: <ShieldCheck size={20} />,
      items: ["Security", "Authentication", "Secure Systems", "Networking", "Linux"],
    },
    {
      title: isAr ? "المهارات الشخصية" : "Soft Skills",
      icon: <BriefcaseBusiness size={20} />,
      items: ["Leadership", "Teamwork", "Communication", "Fast Learning", "Problem Solving"],
    },
  ];
  // -----------------------------
  // Certifications data
  // -----------------------------
  const certifications = [
    {
      title: "Professional Accreditation – Specialist",
      issuer: "Saudi Council of Engineers (SCE)",
    },
    {
      title:
        "Build an AI Agent",
      issuer: "IBM",
    },
  
    {
      title: "Fundamentals of Artificial Intelligence",
      issuer: "SDAIA",
    },
  
    {
      title:
        "Artificial Intelligence Concepts and Advanced Applications",
      issuer: "SDAIA",
    },
  
    {
      title:
        "Analyzing and Presenting Data Using Excel and Power BI Software",
      issuer: "TVTC",
    },
    {
      title: "CompTIA Security+ Course",
      issuer: "CYBERANI",
    },
    {
      title: "The Foundations of Cybersecurity",
      issuer: "Kennesaw State University",
    },
    {
      title: "Introduction to Cybersecurity Careers",
      issuer: "IBM",
    },
  ];

  // -----------------------------
  // Experience data (newest first)
  // -----------------------------
  const experiences = [
    {
      role: isAr ? "مهندس تقنية معلومات" : "IT Engineer",
      company: isAr ? "شركة المنجوف" : "Al-Manjouf Company",
      place: isAr ? "عن بُعد" : "Remote",
      date: isAr ? "أغسطس 2026 – الآن" : "Aug 2026 – Present",
      current: true,
      points: isAr
        ? [
            "إدارة أنظمة الشركة ومواقعها الإلكترونية وتحديثها.",
            "تنفيذ التحديثات والإصلاحات والتحسينات على الأنظمة القائمة.",
          ]
        : [
            "Manage, maintain, and update the company's web systems and websites.",
            "Deliver updates, fixes, and improvements to existing systems.",
          ],
      tags: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Supabase", "Vercel", "Git/GitHub"],
    },
    {
      role: isAr ? "أخصائي رقابة عمليات" : "Operations Control Specialist",
      company: isAr ? "شركة السفير" : "Al Safeer Company",
      place: isAr ? "جازان" : "Jazan",
      date: isAr ? "أغسطس 2026 – الآن" : "Aug 2026 – Present",
      current: true,
      points: isAr
        ? [
            "مراقبة عمليات الأنظمة وسير العمل الإلكتروني في إدارة التشغيل.",
            "بناء نظام إدارة الأسطول للفرع (الباصات والسائقين والأجرة) ويستخدمه فريق التشغيل يوميًا.",
          ]
        : [
            "Monitor system operations and electronic workflows in the operations department.",
            "Built the branch's Fleet Operations System (buses, drivers, pay), now used daily by the operations team.",
          ],
      tags: isAr ? ["رقابة العمليات", "سير العمل", "تطوير الأنظمة"] : ["Operations", "Workflows", "Systems Development"],
    },
    {
      role: isAr ? "متدرب تحليل بيانات" : "Data Analysis Trainee",
      company: isAr ? "تدريب صيفي" : "Summer Training",
      place: "",
      date: isAr ? "يونيو – أغسطس 2025" : "Jun – Aug 2025",
      current: false,
      points: [t.experienceText],
      tags: ["Excel", "Power BI"],
    },
  ];

  // -----------------------------
  // Project case-study modal
  // -----------------------------
  const [activeProject, setActiveProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const openProject = (index) => {
    setActiveProject(index);
    setActiveImage(0);
  };

  useEffect(() => {
    if (activeProject === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeProject]);

  // -----------------------------
  // Projects data
  // -----------------------------
  const projects = [
    {
      title: isAr ? "نظام إدارة الأسطول" : "Fleet Operations System",
      shortTitle: isAr ? "إدارة الأسطول" : "Fleet Operations",
      status: isAr ? "مستخدم حاليًا في الفرع" : "In daily use",
      statusLive: true,
      description: isAr
        ? "نظام ويب داخلي لإدارة عمليات الفرع: الباصات والسائقين ومستنداتهم والغياب، وحساب أجرة السائقين الشهرية تلقائيًا."
        : "An internal web system for branch operations: buses, drivers and their documents, absences, and automatic monthly driver pay.",
      tags: ["HTML", "CSS", "JavaScript", "Supabase", "Vercel", "Excel"],
      images: [
        "/projects/fleet-buses.webp",
        "/projects/fleet-drivers.webp",
        "/projects/fleet-pay.webp",
      ],
      caseStudy: {
        problem: isAr
          ? "بيانات الباصات والسائقين ومستنداتهم وحساب الأجرة الشهرية كانت موزعة بين ملفات Excel، وتأخذ وقتًا وتتعرض للأخطاء."
          : "Bus, driver, and document data, plus monthly pay calculations, were scattered across Excel files, slow to manage and error-prone.",
        solution: isAr
          ? "بنيت نظامًا واحدًا لفريق التشغيل يجمع كل البيانات في مكان واحد، ويحسب الأجرة تلقائيًا حسب عدد الطلاب وأيام الدوام."
          : "I built a single system for the operations team that keeps everything in one place and calculates pay automatically from student counts and working days.",
        features: isAr
          ? [
              "إدارة الباصات وحالاتها (شغّال، احتياط، صيانة)",
              "ملفات السائقين ومتابعة اكتمال المستندات",
              "تسجيل الغياب وفترات تعليق الدراسة",
              "حساب الأجرة الشهرية تلقائيًا",
              "استيراد وتصدير Excel وتقارير",
            ]
          : [
              "Bus fleet management with status (active, reserve, maintenance)",
              "Driver records with document-completion tracking",
              "Absence and school-suspension tracking",
              "Automatic monthly pay calculation",
              "Excel import/export and reports",
            ],
        result: isAr
          ? "يستخدمه فريق التشغيل في الفرع بشكل يومي."
          : "Used daily by the branch operations team.",
      },
    },
    {
      title: isAr ? "صيانتي – نظام صيانة الأسطول" : "Siyanaty – Fleet Maintenance System",
      shortTitle: isAr ? "صيانتي" : "Siyanaty",
      status: isAr ? "مكتمل وجاهز للتشغيل" : "Complete · Ready to launch",
      statusLive: false,
      description: isAr
        ? "نظام لمتابعة صيانة الحافلات: العامل يمسح رمز QR للحافلة ويسجل الصيانة بالصور، والمشرف يتابع كل شيء من لوحة تحكم وتقارير."
        : "A bus maintenance tracking system: workers scan a bus QR code and log jobs with photos, while supervisors follow everything from a dashboard and reports.",
      tags: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"],
      images: [
        "/projects/siyanaty-home.webp",
        "/projects/siyanaty-bus.webp",
        "/projects/siyanaty-buses.webp",
        "/projects/siyanaty-reports.webp",
      ],
      caseStudy: {
        problem: isAr
          ? "لم يكن هناك سجل واضح لصيانة الحافلات: ما الذي تم إصلاحه، ومتى، وما الذي ما زال معلقًا، ومتى تحين الصيانة الدورية."
          : "There was no clear record of bus maintenance: what was fixed, when, what was still pending, and when periodic service was due.",
        solution: isAr
          ? "لكل حافلة رمز QR؛ العامل يمسحه من جواله ويسجل العمل بالصور، والنظام يحفظ السجل الكامل لكل حافلة ويتابع الصيانة الدورية."
          : "Every bus gets a QR code. Workers scan it from their phone and log the job with photos, and the system keeps a full history per bus and tracks periodic service.",
        features: isAr
          ? [
              "رمز QR لكل حافلة وطباعة الملصقات",
              "تسجيل الأعطال بالصور والعمليات المعلقة وأسبابها",
              "الصيانة الدورية وحملات الفحص الشامل",
              "تقارير مع تصدير Excel وطباعة",
              "صلاحيات متعددة وفروع متعددة",
              "حماية: RLS، قفل الحساب بعد المحاولات الفاشلة، سجل تدقيق",
            ]
          : [
              "QR code per bus with sticker printing",
              "Fault logging with photos, pending jobs, and reasons",
              "Periodic service and fleet-wide inspection campaigns",
              "Reports with Excel export and print",
              "Role-based access across multiple branches",
              "Security: RLS, login lockout, and audit log",
            ],
        result: isAr
          ? "النظام مكتمل (الإصدار 1.4) وجاهز للتشغيل الميداني."
          : "Complete (v1.4) and ready for field deployment.",
      },
    },
    {
      title: isAr
        ? "منصة خدمات المدينة الذكية"
        : "Smart City Services Platform",
      shortTitle: isAr ? "منصة المدينة الذكية" : "Smart City Platform",
        description: isAr
        ? "منصة إشرافية للمدينة الذكية مخصصة للمشرفين والإداريين، تضم لوحات تحكم تفاعلية وإدارة البلاغات والتنبيهات والخرائط الرقمية، بينما يمتلك المواطنون تطبيقًا منفصلًا للخدمات."
        : "A smart city management platform designed for supervisors and administrators, featuring interactive dashboards, reports management, alerts, and digital maps, while citizens use a separate dedicated services application.",

      github: "#",
      link:"https://smartcit-dashboard.netlify.app/",
      tags: ["React", "Firebase", "Dashboard", "OTP"],
    },
    {
      title: isAr ? "منصة المكتبة الرقمية" : "Digital Library Platform",
      shortTitle: isAr ? "المكتبة الرقمية" : "Digital Library",
      description: isAr
  ? "منصة مكتبة رقمية بواجهة حديثة، تتيح استعراض الكتب والتنقل بينها بسلاسة ضمن تجربة استخدام بسيطة ومتجاوبة."
  : "A modern digital library platform that allows users to browse books smoothly through a simple, responsive, and user-friendly experience.",

      link: "https://dar-al-kotob.netlify.app/",
      tags: ["React", "JavaScript", "UI/UX", "Responsive"],
    },
  ];
  // Background stars: random positions generated once, so they don't jump on every re-render
  const stars = useMemo(
    () =>
      Array.from({ length: 18 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${1.8 + Math.random() * 1.5}s`,
      })),
    []
  );

  return (
    <div className="desktop-fix" dir={isAr ? "rtl" : "ltr"} style={styles.page}>
      {/* ============================= Background Stars ============================== */}
      <div style={styles.starsLayer}>
  {stars.map((star, i) => (
    <span key={i} style={{ ...styles.star, ...star }} />
  ))}
</div>
      {/* ============================= Background Grid ============================== */}
      <div style={styles.backgroundGrid} />

      {/* ============================= Cursor Glow ============================== */}
      <motion.div
        style={{
          ...styles.cursorGlow,
          left: mouse.x,
          top: mouse.y,
        }}
      />
      {/* ============================= Loading Screen ============================== */}
      <AnimatePresence>
        {intro && (
          <motion.div
            style={styles.intro}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.75, ease: "easeOut" } }}
          >
            <motion.div
              style={styles.introOrb}
              animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.75, 0.45] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />

            <motion.img
              src="/zh-logo.png"
              alt="ZH Logo"
              style={styles.introLogo}
              initial={{ scale: 0.82, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            />

            <motion.div
              style={styles.introLine}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.45, ease: "easeInOut" }}
            />

            <motion.p
              style={styles.introCaption}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.75 }}
            >
              {isAr ? " زياد الفيفي" : "Ziyad Alfaifi"}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        style={styles.blob1}
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        style={styles.blob2}
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* ============================= Navbar ============================== */}
      <motion.nav
        className="navbar-mobile"
        style={{
          ...styles.navbar,
          padding: scrolled ? "10px 20px" : styles.navbar.padding,
          background: scrolled
            ? "rgba(255,255,255,0.035)"
            : styles.navbar.background,
        }}        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.05, ease: "easeOut" }}
      >
        <div style={styles.logoBox}>
          <div style={styles.logoGlow}></div>
          <img
  src="/zh-logo.png"
  alt="ZH Logo"
  style={styles.logoImage}
/>        </div>

        <div className="nav-links-mobile nav-underline" style={styles.navLinks}>
          <a href="#about" style={navStyle("about")}>
            {isAr ? "نبذة" : "About"}
          </a>
          <a href="#skills" style={navStyle("skills")}>
            {isAr ? "المهارات" : "Skills"}
          </a>
          <a href="#experience" style={navStyle("experience")}>
            {isAr ? "الخبرات" : "Experience"}
          </a>
          <a href="#certifications" style={navStyle("certifications")}>
            {isAr ? "الشهادات" : "Certifications"}
          </a>
          <a href="#project" style={navStyle("project")}>
            {isAr ? "المشاريع" : "Projects"}
          </a>
          <a href="#contact" style={navStyle("contact")}>
            {isAr ? "تواصل" : "Contact"}
          </a>
        </div>

        <button
  style={styles.langBtn}
  onClick={() => setLang(isAr ? "en" : "ar")}
>
  <div style={styles.langContent}>
    <Globe size={18} />
    
    <span style={styles.langText}>
      {isAr ? "EN" : "AR"}
    </span>
  </div>
</button>
      </motion.nav>

      {/* ============================= Hero Section ============================== */}
      <section className="hero-section" style={styles.hero}>
        <motion.div
          style={styles.left}
          initial={{ x: isAr ? 55 : -55, opacity: 0, filter: "blur(6px)" }}
          animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 2.1, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              style={styles.badge}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.35 }}
            >
<span style={styles.roleBadge}>
  {rotatingRoles[roleIndex]}
</span>            </motion.div>
          </AnimatePresence>
          <span style={styles.availableBadge}>
  {isAr
    ? "متاح للعمل والفرص الجديدة"
    : "Available for Work And New Opportunities"}
</span>

          <motion.h1 className="hero-title" style={styles.title}>
            {t.title}
          </motion.h1>
          <div style={styles.heroLine}></div>

          <p className="hero-desc" style={styles.desc}>
            {t.desc}
          </p>

          <div
  className="contact-buttons-mobile"
  style={styles.contactButtons}
>
          <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.96 }}
  href="/cv.pdf"
  target="_blank"
  style={styles.primary}
>
  {isAr ? "عرض السيرة الذاتية" : "View CV"}
</motion.a>

<motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.96 }}
  href="#contact"
  style={styles.secondary}
>
  {isAr ? "تواصل معي" : "Contact Me"}
</motion.a>
          </div>
        </motion.div>

        <motion.img
  src="/zh-logo.png"
  alt="ZH Logo"
  style={{
    width: 360,
    height: 360,
    objectFit: "contain",
    borderRadius: "50%",
    border: "3px solid transparent",
    background:
      "linear-gradient(#020617,#020617) padding-box, linear-gradient(135deg, #5cc8ff, #C8A95B, #9b6bff) border-box",
    boxShadow:
      "0 0 35px rgba(200,169,91,0.22), 0 0 70px rgba(200,169,91,0.14)",
  }}
  initial={{ x: isAr ? -55 : 55, opacity: 0, scale: 0.92 }}
  animate={{ x: 0, opacity: 1, scale: 1 }}
  transition={{ duration: 0.75, delay: 2.25, ease: "easeOut" }}
/>
      </section>

      {/* ============================= About Section ============================== */}
      <motion.section
        id="about"
        style={styles.section}
        variants={revealUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="section-title-mobile" style={styles.sectionTitle}>
          {t.about}
        </h2>
        <div style={styles.sectionLine}></div>

        <div className="about-grid-mobile" style={styles.aboutGrid}>
          {aboutCards.map((card) => (
            <motion.div
              key={card.title}
              className="card-mobile premium-card"
              style={styles.aboutCard}
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 35px rgba(56,189,248,0.20)",
                borderColor: "rgba(200,169,91,0.22)",
              }}
            >
              <div style={styles.aboutBigIcon}>{card.icon}</div>
              <h3 className="project-title-mobile" style={styles.aboutTitle}>
                {card.title}
              </h3>
              {card.content}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ============================= Skills Section ============================== */}
      <motion.section
        id="skills"
        style={styles.section}
        variants={revealUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="section-title-mobile" style={styles.sectionTitle}>
          {t.skills}
        </h2>
        <div style={styles.sectionLine}></div>

        <div className="skills-grid-mobile" style={styles.skillsGrid}>
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              className="skill-card-mobile premium-card"
              style={styles.skillsCard}
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 35px rgba(56,189,248,0.20)",
                borderColor: "rgba(200,169,91,0.22)",
              }}
            >
             <h3 className="project-title-mobile" style={styles.skillsCardTitle}>
  <span style={styles.skillTitleIcon}>
    {group.icon}
  </span>
  {group.title}
</h3>

<div style={styles.skillsTags}>
  {group.items.map((item) => (
    <span key={item} style={styles.skillTag}>
      {item}
    </span>
  ))}
</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ============================= Experience Section ============================== */}
      <motion.section
        id="experience"
        style={styles.section}
        variants={revealSide}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="section-title-mobile" style={styles.sectionTitle}>
          {t.experience}
    
        </h2>
        <div style={styles.sectionLine}></div>

        <div className="timeline-mobile" style={styles.timeline}>
          <div style={isAr ? styles.timelineLineAr : styles.timelineLine}></div>

          {experiences.map((exp, i) => (
          <div
            key={exp.role}
            style={{
              ...(isAr ? styles.timelineItemAr : styles.timelineItem),
              marginBottom: i === experiences.length - 1 ? 0 : 26,
            }}
          >
            <div style={isAr ? styles.timelineDotAr : styles.timelineDot}></div>

            <motion.div
              className="project-card-mobile premium-card"
              style={styles.timelineCard}
              initial={{ x: isAr ? 45 : -45, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 35px rgba(56,189,248,0.20)",
                borderColor: "rgba(200,169,91,0.22)",
              }}
            >
              <div style={styles.timelineHeader}>
                <span style={{ ...styles.timelineDate, marginBottom: 0 }}>
                  {exp.company}
                  {exp.place ? ` · ${exp.place}` : ""}
                </span>

                <span style={styles.timelineBadge}>{exp.date}</span>
              </div>

              <h3 className="exp-title-mobile" style={styles.projectTitle}>
                {exp.role}
                {exp.current && (
                  <span style={styles.currentBadge}>
                    {isAr ? "حاليًا" : "Current"}
                  </span>
                )}
              </h3>

              <ul style={styles.expList}>
                {exp.points.map((point) => (
                  <li key={point} className="text-mobile" style={styles.expPoint}>
                    {point}
                  </li>
                ))}
              </ul>

              <div style={{ ...styles.tags, marginTop: 20 }}>
                {exp.tags.map((tag) => (
                  <span key={tag} style={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
          ))}
        </div>
      </motion.section>

      {/* =============================
          Certifications Section
          - Title is visible
          - Desktop: two cards per row
          - Mobile: one card per row
      ============================== */}
      <motion.section
        id="certifications"
        style={styles.section}
        variants={revealUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="section-title-mobile" style={styles.sectionTitle}>
          {t.certifications}
        </h2>
        <div style={styles.sectionLine}></div>

        <div className="cert-grid-mobile" style={styles.certificationsGrid}>
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              className="premium-card"
              style={styles.certificateCard}
              whileHover={{
                y: -4,
                borderColor: "rgba(200,169,91,0.22)",
                boxShadow: "0 0 28px rgba(56,189,248,0.13)",
              }}
              transition={{ duration: 0.18 }}
            >
              <div style={styles.certificateContent}>
                <div style={styles.certificateTextBox}>
                  <h3 style={styles.certificateTitle}>{cert.title}</h3>
                  <span style={styles.certificateIssuer}>{cert.issuer}</span>
                </div>

                <div style={styles.certificateIconBox}>
                  <Award size={24} color="#5cc8ff" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ============================= Projects Section ============================== */}
     
<motion.section
  id="project"
  style={styles.section}
  variants={revealUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
>
  <h2 className="section-title-mobile" style={styles.sectionTitle}>
    {t.project}
  </h2>
  <div style={styles.sectionLine}></div>

  {/* ================= Web Applications ================= */}
  <div style={styles.projectCategory}>
    <div style={styles.categoryHead}>
      <div style={styles.projectCategoryIcon}>
        <LayoutDashboard size={18} />
      </div>

      <div>
        <h3 style={styles.projectCategoryTitle}>
          {isAr ? "تطبيقات الويب" : "Web Applications"}
        </h3>
        

        <p style={styles.projectCategoryDesc}>
  {isAr
    ? "أنظمة وتطبيقات ويب مبنية لحل مشاكل حقيقية."
    : "Real systems and web applications built to solve practical problems."}
</p>

      </div>
    </div>

    <div className="project-grid-mobile" style={styles.projectsGrid}>
      {projects.map((project, index) => {
        const isCaseStudy = Boolean(project.caseStudy);
        const cardProps = isCaseStudy
          ? {
              role: "button",
              tabIndex: 0,
              onClick: () => openProject(index),
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openProject(index);
                }
              },
            }
          : {
              href: project.link,
              target: "_blank",
              rel: "noopener noreferrer",
            };
        const Card = isCaseStudy ? motion.div : motion.a;

        return (
        <Card
          key={project.title}
          {...cardProps}
          className="project-card-mobile premium-card"
          style={{
            ...styles.projectModernCard,
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
            padding: 0,
          }}
          whileHover={{
            y: -6,
            borderColor: "rgba(200,169,91,0.22)",
            boxShadow: "0 0 35px rgba(56,189,248,0.16)",
          }}
          transition={{ duration: 0.18 }}
        >
          <div style={styles.projectBody}>
            {isCaseStudy && (
              <span
                style={{
                  ...styles.projectStatus,
                  ...(project.statusLive ? styles.projectStatusLive : {}),
                }}
              >
                <span
                  style={{
                    ...styles.statusDot,
                    background: project.statusLive ? "#4ade80" : "#C8A95B",
                  }}
                />
                {project.status}
              </span>
            )}

            {!isCaseStudy && (
              <div
                style={{
                  ...styles.projectLinkIcon,
                  [isAr ? "left" : "right"]: 24,
                }}
              >
                <MoveUpRight size={22} strokeWidth={2.2} />
              </div>
            )}

            <h3 className="project-title-mobile" style={styles.projectTitle}>
              <span style={styles.projectCodeIcon}>
                <Code2 size={20} strokeWidth={2.2} />
              </span>
              {window.innerWidth <= 900 ? project.shortTitle : project.title}
            </h3>

            <p className="text-mobile" style={styles.text}>
              {project.description}
            </p>

            <div style={styles.tags}>
              {project.tags.map((tag) => (
                <span style={styles.tag} key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            {isCaseStudy && (
              <span style={styles.caseStudyLink}>
                {isAr ? "عرض تفاصيل المشروع" : "View case study"}
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </span>
            )}
          </div>
        </Card>
        );
      })}
    </div>
  </div>
</motion.section>
      {/* ============================= Contact Section ============================== */}
      <motion.section
        id="contact"
        style={styles.contactSection}
        variants={revealUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
  <h2 className="section-title-mobile" style={styles.sectionTitle}>
    {t.contact}

  </h2>
<div style={styles.sectionLine}></div>
  <motion.div
    className="project-card-mobile premium-card"
    style={styles.contactBox}
    whileHover={{
      borderColor: "rgba(200,169,91,0.22)",
      boxShadow: "0 0 35px rgba(56,189,248,0.16)",
    }}
    transition={{ duration: 0.18 }}
  >

    <h3 style={styles.contactHeading}>
      {isAr ? "خلّنا نتواصل ونبني شيئًا استثنائيًا" : "Let’s Connect & Build Something Exceptional"}
    </h3>

    <p className="text-mobile" style={styles.contactText}>
      {isAr
        ? "مهتم بالفرص في الأمن السيبراني، الحلول التقنية، والحلول الرقمية الحديثة."
        : "Interested in systems development, security, and modern digital solutions opportunities."}
    </p>

    <p style={styles.contactMiniText}>
  {isAr
    ? "منفتح على الفرص الجديدة والتعاونات التقنية."
    : "Open to new opportunities and technical collaborations."}
</p>

    <div style={styles.contactActions}>

      <a
  href="https://www.linkedin.com/in/ziyad7h"
  target="_blank"
  rel="noopener noreferrer"
  style={styles.contactAction}
  className="contact-hover">
  LinkedIn
</a>

    <a
  href="mailto:aziad925@gmail.com"
  style={styles.contactAction}
  className="contact-hover"
>
  Email
</a>

      <a
    href="/cv.pdf"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.contactActionPrimary}
    className="contact-hover">
    {isAr ? "عرض السيرة الذاتية" : "View CV"}
  </a>
    </div>

    <div style={styles.contactInfoGrid}>

      
  <a
    href="mailto:aziad925@gmail.com"
    style={styles.contactInfoCard}
    className="contact-hover"
        >
    <Mail size={22} />

    <span style={styles.contactInfoLabel}>
      Email
    </span>

    <strong>aziad925@gmail.com</strong>
    
  </a>

  <a
    href="https://www.linkedin.com/in/ziyad7h"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.contactInfoCard}
    className="contact-hover"    >
<FaLinkedinIn size={18} />
    <span style={styles.contactInfoLabel}>
      LinkedIn
    </span>

    <strong>ziyad7h</strong>
  </a>

  <a
    href="tel:+966507080683"
    style={styles.contactInfoCard}
    className="contact-hover"    >
    <Phone size={22} />

    <span style={styles.contactInfoLabel}>
      {isAr ? "الهاتف" : "Phone"}
    </span>

    <strong>0507080683</strong>
  </a>
</div>
  </motion.div>
</motion.section>
{/* ============================= Case Study Modal ============================== */}
<AnimatePresence>
  {activeProject !== null && projects[activeProject]?.caseStudy && (() => {
    const p = projects[activeProject];
    const cs = p.caseStudy;
    return (
      <motion.div
        key="case-overlay"
        style={styles.modalOverlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setActiveProject(null)}
      >
        <motion.div
          className="case-modal"
          role="dialog"
          aria-modal="true"
          aria-label={p.title}
          style={styles.modalPanel}
          initial={{ y: 40, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={styles.modalHeader}>
            <div>
              <span
                style={{
                  ...styles.modalStatus,
                  color: p.statusLive ? "#4ade80" : "#C8A95B",
                }}
              >
                <span
                  style={{
                    ...styles.statusDot,
                    background: p.statusLive ? "#4ade80" : "#C8A95B",
                  }}
                />
                {p.status}
              </span>
              <h3 className="case-modal-title" style={styles.modalTitle}>{p.title}</h3>
            </div>
            <button
              type="button"
              aria-label={isAr ? "إغلاق" : "Close"}
              style={styles.modalClose}
              onClick={() => setActiveProject(null)}
            >
              ✕
            </button>
          </div>

          <div style={styles.modalMainImageBox}>
            <img
              src={p.images[activeImage]}
              alt={`${p.title} ${activeImage + 1}`}
              style={styles.modalMainImage}
            />
          </div>

          <div style={styles.modalThumbs}>
            {p.images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveImage(i)}
                style={{
                  ...styles.modalThumb,
                  ...(i === activeImage ? styles.modalThumbActive : {}),
                }}
              >
                <img src={img} alt="" style={styles.modalThumbImg} />
              </button>
            ))}
          </div>

          <p style={styles.modalNote}>
            {isAr
              ? "نظام داخلي · البيانات المعروضة في الصور تجريبية"
              : "Internal system · Screenshots show sample data"}
          </p>

          <div className="case-grid" style={styles.caseGrid}>
            <div style={styles.caseBlock}>
              <h4 style={styles.caseHeading}>{isAr ? "المشكلة" : "The Problem"}</h4>
              <p style={styles.caseText}>{cs.problem}</p>
            </div>
            <div style={styles.caseBlock}>
              <h4 style={styles.caseHeading}>{isAr ? "الحل" : "The Solution"}</h4>
              <p style={styles.caseText}>{cs.solution}</p>
            </div>
          </div>

          <div style={styles.caseBlock}>
            <h4 style={styles.caseHeading}>{isAr ? "أهم المميزات" : "Key Features"}</h4>
            <ul style={styles.caseList}>
              {cs.features.map((f) => (
                <li key={f} style={styles.caseListItem}>
                  <span style={styles.caseBullet} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="case-grid" style={styles.caseGrid}>
            <div style={styles.caseBlock}>
              <h4 style={styles.caseHeading}>{isAr ? "التقنيات" : "Tech Stack"}</h4>
              <div style={{ ...styles.tags, marginTop: 4 }}>
                {p.tags.map((tag) => (
                  <span key={tag} style={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div style={styles.caseBlock}>
              <h4 style={styles.caseHeading}>{isAr ? "النتيجة" : "Outcome"}</h4>
              <p style={styles.caseText}>{cs.result}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  })()}
</AnimatePresence>

{/* ============================= Footer ============================== */}
<footer style={styles.footer}>
  <p style={styles.footerText}>
    {isAr
      ? "جميع الحقوق محفوظة لدى زياد الفيفي — ٢٠٢٦"
      : "All Rights Reserved by Ziyad Alfaifi — 2026"}
  </p>
</footer>
      {/* ============================= Internal CSS Animations + Responsive ============================== */}
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap');

.desktop-fix[dir="rtl"],
.desktop-fix[dir="rtl"] *:not(svg):not(path) {
  font-family: 'Tajawal', sans-serif !important;
}

        .premium-card {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .premium-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          background: radial-gradient(circle at 50% 0%, rgba(103,232,249,0.16), transparent 34%);
          opacity: 0;
          transition: opacity 0.28s ease;
          pointer-events: none;
          z-index: -1;
        }

        .premium-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(15,23,42,0.80), transparent);
          transform: skewX(-18deg);
          transition: left 0.7s ease;
          pointer-events: none;
        }

        .premium-card:hover::before {
          opacity: 1;
        }

        .premium-card:hover::after {
          left: 130%;
        }
        

        .nav-underline a {
          position: relative;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .nav-underline a::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -8px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #5cc8ff, #8b5cf6);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s ease;
        }

        .nav-underline a:hover {
          color: #8b5cf6 !important;
          transform: translateY(-2px);
        }

        .nav-underline a:hover::after {
          transform: scaleX(1);
        }

        .floating-card {
          animation: floatCard 5s ease-in-out infinite;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes twinkle {
          0% {
            transform: translateY(0px);
            opacity: 0.15;
          }
        
          50% {
            opacity: 0.8;
          }
        
          100% {
            transform: translateY(-120px);
            opacity: 0;
          }
        }
        

        .contact-hover {
          transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease,
            background 0.22s ease;
        }

        .contact-hover:hover {
          transform: translateY(-4px);
          box-shadow:
            0 0 22px rgba(200,169,91,0.14),
            0 0 42px rgba(168,85,247,0.10);
          border-color: rgba(56,189,248,0.30);
        }

        .contact-hover:active {
          transform: scale(0.97);
        }

        @media (min-width: 901px) {
          html,
          body,
          #root {
            overflow-x: hidden !important;
            background: #050816 !important;
          }

          .desktop-fix {
            width: 100% !important;
            max-width: 100% !important;
            overflow-x: hidden !important;
          }
        }

        @media (max-width: 768px) {
         html,
          body,
          #root {
            overflow-x: hidden !important;
            background: #050816 !important;
          }

          .navbar-mobile {
            top: 14px !important;
            left: 5% !important;
            right: 5% !important;
            padding: 12px 14px !important;
            border-radius: 20px !important;
          }
        
          .nav-links-mobile {
            display: none !important;
          }
        
          .navbar-mobile button {
            padding: 8px 13px !important;
            font-size: 13px !important;
          }
        
          .hero-section,
          section {
            padding-left: 5% !important;
            padding-right: 5% !important;
          }
        
          .hero-section {
            padding-top: 115px !important;
            gap: 26px !important;
          }
        
          .hero-title {
            font-size: 30px !important;
            line-height: 1.15 !important;
          }
          
        
          .hero-desc {
            font-size: 16px !important;
            line-height: 1.7 !important;
          }
        
          .section-title-mobile {
            font-size: 34px !important;
            line-height: 1.1 !important;
          }
        
          .about-grid-mobile,
          .skills-grid-mobile,
          .cert-grid-mobile,
          .project-grid-mobile {
            grid-template-columns: 1fr !important;
          }
        
          .card-mobile,
          .skill-card-mobile,
          .project-card-mobile {
            padding: 22px !important;
            border-radius: 26px !important;
          }
        
          .project-title-mobile {
            font-size: 24px !important;
            line-height: 1.12 !important;
            display: flex !important;
            align-items: center !important;
            gap: 10px !important;
            flex-wrap: nowrap !important;
            white-space: nowrap !important;
          }
        
          .project-title-mobile span {
            flex-shrink: 0 !important;
            margin: 0 !important;
          }
        
          .text-mobile {
            font-size: 16px !important;
            line-height: 1.7 !important;
          }
        

          .contact-buttons-mobile {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 8px !important;
            flex-wrap: wrap !important;
            width: 100% !important;
          }
          
          .contact-buttons-mobile a {
            width: auto !important;
            min-width: 108px !important;
            padding: 9px 16px !important;
            font-size: 14.5px !important;
            border-radius: 16px !important;
            text-align: center !important;
            line-height: 1.3 !important;
          }
          .hero-image-card {
            padding: 18px !important;
            border-radius: 28px !important;
          }
        
          .hero-image-box {
            height: 330px !important;
            border-radius: 24px !important;
          }
        
          .timeline-mobile {
            max-width: 100% !important;
          }
        
          .hero-section img {
            width: 260px !important;
            height: 260px !important;
          }
          .timelineBadge {
            font-size: 9px !important;
            padding: 3px 7px !important;
          }
        }

        /* Keep section titles visible below the fixed navbar */
        section[id] {
          scroll-margin-top: 110px;
        }

        @media (max-width: 768px) {
          section[id] {
            scroll-margin-top: 90px;
          }

          .exp-title-mobile {
            font-size: 20px !important;
            line-height: 1.35 !important;
          }

          .case-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }

          .case-modal {
            border-radius: 22px !important;
          }
        }
      `}</style>
      <a
  href="https://wa.me/966507080683"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    width: 48,
height: 48,
bottom: 20,
left: 20,
    borderRadius: "50%",
    background: "#25D366",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
    "0 0 18px rgba(37,211,102,0.35)",
    zIndex: 999,
    textDecoration: "none",
  }}
>
<FaWhatsapp size={24} color="#fff" />
</a>
    </div>
  );
}

// =========================================================
// Inline styles
// =========================================================
const styles = {
  
  page: {
    minHeight: "100dvh",
    width: "100%",
    maxWidth: "100%",
    background: "#020617",
    color: "white",
    fontFamily: "'Finlandica', sans-serif",
    overflowX: "hidden",
    position: "relative",
  },

  intro: {
    position: "fixed",
    inset: 0,
    background: "#020617",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  introOrb: {
    position: "absolute",
    width: "clamp(180px, 28vw, 360px)",
    height: "clamp(180px, 28vw, 360px)",
    borderRadius: "50%",
    background: "rgba(34,211,238,0.14)",
    filter: "blur(70px)",
  },

  introLogo: {
    width: "clamp(110px, 16vw, 190px)",
    height: "clamp(110px, 16vw, 190px)",
    objectFit: "contain",
    position: "relative",
    zIndex: 2,
    filter: "drop-shadow(0 0 34px rgba(103,232,249,0.18))",
  },

  introLine: {
    width: "clamp(150px, 20vw, 260px)",
    height: 2,
    marginTop: 26,
    borderRadius: 999,
    background: "linear-gradient(90deg, transparent, #5cc8ff, #8b5cf6, transparent)",
    transformOrigin: "center",
    position: "relative",
    zIndex: 2,
  },

  introCaption: {
    marginTop: 18,
    color: "#94a3b8",
    letterSpacing: 3,
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: 800,
    position: "relative",
    zIndex: 2,
  },

  introText: {
    fontSize: "18vw",
    fontWeight: 900,
    color: "#9b6bff",
    fontFamily: "'Finlandica', sans-serif",
    },

  blob1: {
    position: "fixed",
    width: "clamp(220px, 35vw, 420px)",
    height: "clamp(220px, 35vw, 420px)",
    borderRadius: "50%",
    background: "rgba(34,211,238,0.18)",
    filter: "blur(90px)",
    top: 80,
    left: 40,
  },

  blob2: {
    position: "fixed",
    width: "clamp(240px, 38vw, 460px)",
    height: "clamp(240px, 38vw, 460px)",
    borderRadius: "50%",
    background: "rgba(200,169,91,0.10)",
    filter: "blur(100px)",
    right: 30,
    bottom: 40,
  },

  navbar: {
    position: "fixed",
    top: 18,
    left: "4%",
    right: "4%",
    width: "auto",
    padding: "14px 24px",
    borderRadius: "24px",
    background: "rgba(2,6,23,0.72)",
    border: "1px solid rgba(148,163,184,0.10)",
    backdropFilter: "blur(26px)",
    WebkitBackdropFilter: "blur(26px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 100,
    boxShadow: "0 12px 40px rgba(0,0,0,0.24)",
  },

  logoBox: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },

  logoGlow: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "rgba(200,169,91,0.22)",
    filter: "blur(18px)",
  },

  logoText: {
    position: "relative",
    fontFamily: "'Finlandica', sans-serif",
        fontWeight: 900,
    fontSize: 24,
    letterSpacing: 2,
  },

  navLinks: {
    display: "flex",
    gap: 28,
    flexWrap: "wrap",
    justifyContent: "center",
  },

  navLink: {
    color: "#dbe4ee",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 15,
  },

  navLinkActive: {
    color: "#67e8f9",
    textShadow: "0 0 18px rgba(200,169,91,0.22)",
  },

  langBtn: {
    padding: "10px 18px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(255,255,255,0.1)",
    color: "white",
    cursor: "pointer",
  },

  hero: {
    minHeight: "82vh",
    padding: "170px 5% 70px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 50,
    position: "relative",
    zIndex: 2,
  },

  left: {
    maxWidth: 760,
    flex: 1,
    minWidth: 280,
  },

  badge: {
    color: "#5cc8ff",
    fontWeight: 800,
    marginBottom: 20,
  },

  title: {
    fontFamily: "'Sora', sans-serif",
    fontSize: "clamp(34px, 4.6vw, 56px)",
    lineHeight: 1.05,
    margin: 0,
    fontWeight: 900,
    letterSpacing: "-1px",
    background: "linear-gradient(90deg,#5cc8ff,#8b5cf6,#ffffff)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },

  desc: {
    color: "#cbd5e1",
    fontSize: 20,
    lineHeight: 1.8,
    maxWidth: 680,
    marginTop: 26,
  },

  buttons: {
    display: "flex",
    gap: 14,
    marginTop: 34,
    flexWrap: "wrap",
  },

  contactButtons: {
    display: "flex",
    gap: 14,
    marginTop: 34,
    flexWrap: "wrap",
    alignItems: "center",
  },

  primary: {
    padding: "12px 22px",
    borderRadius: 999,
    background: "#5cc8ff",
    color: "#020617",
    textDecoration: "none",
    fontWeight: 800,
    fontSize: 15,
  },

  secondary: {
    padding: "12px 22px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.1)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.14)",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 15,
  },

  heroCard: {
    flex: 1,
    minWidth: 280,
    background: "transparent",
    border: "none",
    boxShadow: "none",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  bigCircle: {
    width: 340,
    height: 340,
    borderRadius: "50%",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  profileImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(5,8,22,0.94), rgba(5,8,22,0.18), transparent)",
  },

  imageText: {
    position: "absolute",
    bottom: 24,
    left: 24,
  },

  imageSmall: {
    color: "#67e8f9",
    fontSize: 14,
    fontWeight: 800,
  },

  imageName: {
    fontFamily: "'Sora', sans-serif",
        fontSize: 34,
    fontWeight: 900,
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 12,
    marginTop: 16,
  },

  stat: {
    padding: 18,
    borderRadius: 18,
    textAlign: "center",
    background: "rgba(15,23,42,0.80)",
    fontWeight: 900,
  },

  section: {
    padding: "80px 5%",
    position: "relative",
    zIndex: 2,
  },

  sectionTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 34,
    color: "#9b6bff",
    marginBottom: 42,
    fontWeight: 900,
    textAlign: "center",
  },

  text: {
    color: "#cbd5e1",
    fontSize: 19,
    lineHeight: 1.9,
    maxWidth: 900,
  },

  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: 22,
  },

  aboutCard: {
    padding: "clamp(20px, 3vw, 30px)",
    borderRadius: 30,
    background: "rgba(15,23,42,0.82)",
    border: "1px solid rgba(200,169,91,0.10)",
    backdropFilter: "blur(18px)",
  },

  aboutBigIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "#67e8f9",
    marginBottom: 22,
  },

  aboutTitle: {
    fontFamily: "'Sora', sans-serif",
        fontSize: 22,
    marginTop: 0,
    marginBottom: 14,
  },

  aboutText: {
    color: "#cbd5e1",
    lineHeight: 1.8,
    fontSize: 16,
    margin: 0,
  },

  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 24,
    alignItems: "stretch",
  },

  skillsCard: {
    padding: "clamp(20px, 3vw, 30px)",
    borderRadius: 30,
    background: "rgba(15,23,42,0.82)",
    border: "1px solid rgba(200,169,91,0.10)",
    backdropFilter: "blur(18px)",
  },

  skillsCardTitle: {
    fontFamily: "'Sora', sans-serif",
        fontSize: 22,
    marginBottom: 24,
  },

  skillsTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
  },

  skillTag: {
    padding: "10px 16px",
    borderRadius: 999,
    background: "rgba(15,23,42,0.82)",
    border: "1px solid rgba(15,23,42,0.78)",
    color: "#dbe4ee",
    fontSize: 14,
    fontWeight: 700,
  },

  timeline: {
    position: "relative",
    maxWidth: 950,
  },

  timelineLine: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 18,
    width: 2,
    background:
      "linear-gradient(to bottom, rgba(59,130,246,0.8), rgba(103,232,249,0.1))",
  },

  timelineLineAr: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 18,
    width: 2,
    background:
      "linear-gradient(to bottom, rgba(59,130,246,0.8), rgba(103,232,249,0.1))",
  },

  timelineItem: {
    position: "relative",
    paddingLeft: 56,
  },

  timelineItemAr: {
    position: "relative",
    paddingRight: 56,
  },

  timelineDot: {
    position: "absolute",
    left: 8,
    top: 28,
    width: 22,
    height: 22,
    borderRadius: "50%",
    background: "#5cc8ff",
    boxShadow: "0 0 30px rgba(59,130,246,0.9)",
    zIndex: 2,
  },

  timelineDotAr: {
    position: "absolute",
    right: 8,
    top: 28,
    width: 22,
    height: 22,
    borderRadius: "50%",
    background: "#5cc8ff",
    boxShadow: "0 0 30px rgba(59,130,246,0.9)",
    zIndex: 2,
  },

  timelineCard: {
    padding: "clamp(22px, 3vw, 34px)",
    borderRadius: 32,
    background: "rgba(255,255,255,0.075)",
    border: "1px solid rgba(200,169,91,0.10)",
    backdropFilter: "blur(18px)",
  },

  timelineDate: {
    display: "inline-block",
    marginBottom: 14,
    color: "#67e8f9",
    fontWeight: 800,
    letterSpacing: "1px",
  },

  projectCard: {
    padding: "clamp(22px, 3vw, 36px)",
    borderRadius: 32,
    background: "rgba(15,23,42,0.80)",
    border: "1px solid rgba(15,23,42,0.78)",
  },

  projectTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 22,
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
  },

  tags: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 25,
  },

  tag: {
    padding: "10px 16px",
    borderRadius: 999,
    background: "rgba(34,211,238,0.14)",
    color: "#67e8f9",
    fontWeight: 800,
  },

  contact: {
    padding: "90px 5% 130px",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },

  icons: {
    display: "flex",
    justifyContent: "center",
    gap: 18,
    marginTop: 30,
  },

  icon: {
    width: 58,
    height: 58,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.1)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
  },
  langContent: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  
  langText: {
    fontSize: 13,
    fontWeight: 800,
    letterSpacing: 1,
    
  },
  contactSection: {
    padding: "90px 5% 130px",
    position: "relative",
    zIndex: 2,
  },
  
  contactBox: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "clamp(26px, 4vw, 48px)",
    borderRadius: 34,
    background: "rgba(15,23,42,0.82)",
    border: "1px solid rgba(103,232,249,0.1)",
    backdropFilter: "blur(20px)",
  },
  
  contactHeading: {
    fontFamily: "'Sora', sans-serif",
    fontSize: "clamp(18px, 2.4vw, 28px)",
    margin: "0 0 14px",
    textAlign: "center",
    background: "linear-gradient(90deg,#5cc8ff,#8b5cf6,#ffffff)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  
  contactText: {
    textAlign: "center",
    color: "#cbd5e1",
    lineHeight: 1.9,
    maxWidth: 760,
    margin: "0 auto",
    fontSize: 18,
  },

  contactSubText: {
    textAlign: "center",
    color: "#94a3b8",
    fontSize: 15,
    fontWeight: 600,
    marginTop: 16,
    letterSpacing: 0.3,
  },

  
  contactActions: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 14,
    marginTop: 34,
  },
  
  contactAction: {
    padding: "13px 22px",
    borderRadius: 999,
    background: "rgba(15,23,42,0.82)",
    border: "1px solid rgba(103,232,249,0.16)",
    color: "white",
    textDecoration: "none",
    fontWeight: 800,
  },
  
  contactActionPrimary: {
    padding: "13px 24px",
    borderRadius: 999,
    background: "#5cc8ff",
    color: "#020617",
    textDecoration: "none",
    fontWeight: 900,
  },
  
  contactInfoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 16,
    marginTop: 34,
  },
  
  contactInfoCard: {
    padding: 22,
    borderRadius: 22,
    background: "rgba(15,23,42,0.74)",
    border: "1px solid rgba(15,23,42,0.78)",
    textDecoration: "none",
    color: "white",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  
  contactInfoLabel: {
    display: "block",
    color: "#67e8f9",
    fontSize: 13,
    fontWeight: 800,
    marginBottom: 8,
  },
  logoImage: {
    width: 54,
    height: 54,
    objectFit: "contain",
    borderRadius: "50%",
    border: "1.5px solid transparent",
        background:
      "linear-gradient(#020617,#020617) padding-box, linear-gradient(135deg, #5cc8ff, #C8A95B, #9b6bff) border-box",
    boxShadow:
      "0 0 35px rgba(200,169,91,0.22), 0 0 70px rgba(200,169,91,0.14)",
  },
  profileLogo: {
    width: "78%",
    height: "78%",
    objectFit: "contain",
    filter:
      "drop-shadow(0 0 28px rgba(56,189,248,0.22))",
  },

  footer: {
    padding: "35px 5%",
    borderTop: "1px solid rgba(15,23,42,0.78)",
    textAlign: "center",
    marginTop: 40,
  },
  
  footerText: {
    color: "#94a3b8",
    fontSize: 14,
    letterSpacing: 0.5,
  },
  backgroundGrid: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
    opacity: 0.10,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
    backgroundSize: "58px 58px",
    maskImage: "radial-gradient(circle at center, black 0%, transparent 78%)",
    WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 78%)",
  },

  cursorGlow: {
    position: "fixed",
    width: 280,
    height: 280,
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    background: "rgba(59,130,246,0.10)",
    filter: "blur(80px)",
    zIndex: 1,
  },
  starsLayer: {
    position: "fixed",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: 0,
  },
  
  star: {
    position: "absolute",
    width: 2,
    height: 2,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.65)",
    boxShadow: "0 0 12px rgba(255,255,255,0.7)",
    animation: "twinkle linear infinite",
  },
  // Projects: modern project cards with image + actions
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 24,
    position: "relative",
    zIndex: 2,
  },

  projectModernCard: {
    position: "relative",
    borderRadius: 32,
    overflow: "hidden",
    background: "rgba(15,23,42,0.78)",
    border: "1px solid rgba(56,189,248,0.12)",
    backdropFilter: "blur(20px)",
  },

  projectImage: {
    width: "100%",
    height: 260,
    objectFit: "cover",
    background: "rgba(15,23,42,0.95)",
    borderBottom: "1px solid rgba(56,189,248,0.12)",
  },

  projectBody: {
    padding: "clamp(22px, 3vw, 30px)",
  },

  projectButtons: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    marginTop: 24,
  },

  // Certifications: two cards per row on desktop
  certificationsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 18,
    position: "relative",
    zIndex: 2,
  },
  
  certificateCard: {
    padding: "16px",
    borderRadius: 20,
    background: "rgba(15,23,42,0.78)",
    border: "1px solid rgba(200,169,91,0.10)",
    backdropFilter: "blur(18px)",
    minHeight: 115,
    display: "flex",
    alignItems: "center",
  },
  
  certificateContent: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
  },

  certificateTextBox: {
    flex: 1,
    minWidth: 0,
  },
  certificateIconBox: {
    minWidth: 52,
    height: 52,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(56,189,248,0.12)",
    border: "1px solid rgba(200,169,91,0.14)",
  },
  
  certificateTitle: {
    margin: 0,
    fontSize: 17,
    fontWeight: 500,
    color: "#f8fafc",
    lineHeight: 1.65,
  },
  
  certificateIssuer: {
    color: "#5cc8ff",
    fontWeight: 700,
    fontSize: 14,
  },
  projectLinkIcon: {
    position: "absolute",
    top: 24,
    color: "rgba(255,255,255,0.72)",
    transition: "0.2s ease",
  },
  
  availableBadge: {
    display: "inline-block",
    padding: "10px 18px",
    borderRadius: 999,
    background: "rgba(56,189,248,0.12)",
    border: "1px solid rgba(200,169,91,0.14)",
    color: "#67e8f9",
    fontSize: 14,
    fontWeight: 800,
    marginBottom: 18,
    letterSpacing: 0.5,
  },
  projectCategory: {
    marginTop: 34,
  },
  
  projectCategoryTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 22,
    fontWeight: 800,
    color: "#e2e8f0",
    margin: "0 0 6px",
    textAlign: "start",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  sectionLine: {
    width: 110,
    height: 1.5,
    borderRadius: 999,
    margin: "-28px auto 30px",
    background:
      "linear-gradient(90deg, #5cc8ff, #C8A95B, #9b6bff)",
    boxShadow: "0 0 18px rgba(200,169,91,0.22)",
  },
  projectCategoryIcon: {
    width: "54px",
    height: "54px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(20,20,40,0.72)",
    border: "1px solid rgba(200,169,91,0.10)",
    color: "#c084fc",
    marginTop: "8px",
  },
  timelineHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 28,
  },
  
  timelineBadge: {
    padding: window.innerWidth <= 768 ? "5px 10px" : "8px 16px",
    borderRadius: 999,
    background: "rgba(168,85,247,0.10)",
    border: "1px solid rgba(168,85,247,0.28)",
    color: "#d8b4fe",
    fontSize: window.innerWidth <= 768 ? 11 : 13,
    fontWeight: 800,
    whiteSpace: "nowrap",
  },
  heroLine: {
    width: 140,
    height: 2,
    borderRadius: 999,
    marginTop: 22,
    background:
      "linear-gradient(90deg, #5cc8ff, #8b5cf6, transparent)",
    boxShadow: "0 0 18px rgba(56,189,248,0.24)",
  },
  roleBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 20px",
    borderRadius: 999,
    background: "rgba(15,23,42,0.72)",
    border: "1px solid rgba(200,169,91,0.14)",
    backdropFilter: "blur(14px)",
    color: "#67e8f9",
    fontWeight: 700,
    fontSize: 15,
    boxShadow: "0 0 24px rgba(56,189,248,0.10)",
  },
  skillTitleIcon: {
    width: 38,
    height: 38,
    borderRadius: 14,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(168,85,247,0.10)",
    border: "1px solid rgba(200,169,91,0.14)",
    color: "#c084fc",
    boxShadow: "0 0 14px rgba(168,85,247,0.10)",    marginInlineEnd: 12,
    
  },
  projectCategoryDesc: {
    fontSize: 13,
    color: "rgba(203,213,225,0.72)",
    fontWeight: 500,
    letterSpacing: "0.3px",
    margin: 0,
    maxWidth: 760,
    lineHeight: 1.6,
    fontFamily: "Finlandica, sans-serif",
  },
  categoryHead: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    marginBottom: "28px",
    paddingLeft: "0px",
    width: "100%",
  },
  projectCodeIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(168,85,247,0.10)",
    border: "1px solid rgba(200,169,91,0.14)",
    color: "#c084fc",
    marginInlineEnd: 12,
    verticalAlign: "middle",
  },
  projectChartIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(56,189,248,0.10)",
    border: "1px solid rgba(56,189,248,0.22)",
    color: "#5cc8ff",
    flexShrink: 0,
  },
  contactMiniText: {
    textAlign: "center",
    color: "#67e8f9",
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.3px",
    marginTop: 18,
    opacity: 0.9,
  },
  // ---------- Experience ----------
  currentBadge: {
    fontSize: 12,
    fontWeight: 800,
    padding: "4px 10px",
    borderRadius: 999,
    background: "rgba(74,222,128,0.12)",
    border: "1px solid rgba(74,222,128,0.30)",
    color: "#4ade80",
  },
  expList: {
    margin: "14px 0 0",
    paddingInlineStart: 20,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  expPoint: {
    color: "#cbd5e1",
    lineHeight: 1.8,
    fontSize: 16,
  },

  // ---------- Project cards ----------
  projectCover: {
    position: "relative",
    height: 230,
    overflow: "hidden",
    background: "#0b1224",
    borderBottom: "1px solid rgba(56,189,248,0.12)",
  },
  projectCoverImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top center",
    display: "block",
  },
  projectStatus: {
    display: "inline-flex",
    marginBottom: 16,
    alignItems: "center",
    gap: 8,
    padding: "6px 12px",
    borderRadius: 999,
    background: "rgba(5,8,22,0.82)",
    border: "1px solid rgba(200,169,91,0.35)",
    color: "#e9d8a6",
    fontSize: 12.5,
    fontWeight: 800,
    backdropFilter: "blur(8px)",
  },
  projectStatusLive: {
    border: "1px solid rgba(74,222,128,0.40)",
    color: "#bbf7d0",
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    display: "inline-block",
    flexShrink: 0,
  },
  caseStudyLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    marginTop: 22,
    color: "#C8A95B",
    fontWeight: 800,
    fontSize: 15,
  },

  // ---------- Case study modal ----------
  modalOverlay: {
    position: "fixed",
    inset: 0,
    zIndex: 2000,
    background: "rgba(2,6,23,0.80)",
    backdropFilter: "blur(10px)",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "4vh 16px",
    overflowY: "auto",
  },
  modalPanel: {
    width: "100%",
    maxWidth: 1000,
    borderRadius: 28,
    background: "#0a1024",
    border: "1px solid rgba(56,189,248,0.18)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.55), 0 0 40px rgba(56,189,248,0.10)",
    padding: "clamp(18px, 3vw, 32px)",
    color: "white",
  },
  modalHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 20,
  },
  modalStatus: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13,
    fontWeight: 800,
  },
  modalTitle: {
    margin: "8px 0 0",
    fontSize: "clamp(22px, 3vw, 30px)",
    fontWeight: 800,
    lineHeight: 1.25,
  },
  modalClose: {
    width: 42,
    height: 42,
    flexShrink: 0,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    fontSize: 16,
    cursor: "pointer",
  },
  modalMainImageBox: {
    borderRadius: 18,
    overflow: "hidden",
    border: "1px solid rgba(56,189,248,0.16)",
    background: "#f5f7fb",
  },
  modalMainImage: {
    width: "100%",
    display: "block",
  },
  modalThumbs: {
    display: "flex",
    gap: 10,
    marginTop: 12,
    overflowX: "auto",
    paddingBottom: 4,
  },
  modalThumb: {
    flex: "0 0 auto",
    width: 120,
    height: 70,
    padding: 0,
    borderRadius: 10,
    overflow: "hidden",
    border: "2px solid rgba(255,255,255,0.10)",
    background: "#0b1224",
    cursor: "pointer",
    opacity: 0.6,
  },
  modalThumbActive: {
    border: "2px solid #5cc8ff",
    opacity: 1,
  },
  modalThumbImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top center",
    display: "block",
  },
  modalNote: {
    margin: "10px 0 6px",
    fontSize: 12.5,
    color: "#94a3b8",
  },
  caseGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
  },
  caseBlock: {
    marginTop: 16,
    padding: "18px 20px",
    borderRadius: 18,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  caseHeading: {
    margin: "0 0 10px",
    color: "#5cc8ff",
    fontSize: 15,
    fontWeight: 800,
    letterSpacing: "0.3px",
  },
  caseText: {
    margin: 0,
    color: "#cbd5e1",
    lineHeight: 1.85,
    fontSize: 15.5,
  },
  caseList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "10px 22px",
  },
  caseListItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    color: "#e2e8f0",
    lineHeight: 1.7,
    fontSize: 15,
  },
  caseBullet: {
    width: 7,
    height: 7,
    marginTop: 10,
    borderRadius: "50%",
    background: "#C8A95B",
    flexShrink: 0,
  },
};

export default App;
