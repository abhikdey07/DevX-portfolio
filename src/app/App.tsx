import { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  const skills = [
    { name: 'React.js', level: 90, color: '#61DAFB' },
    { name: 'Node.js', level: 85, color: '#339933' },
    { name: 'JavaScript', level: 88, color: '#F7DF1E' },
    { name: 'TypeScript', level: 82, color: '#3178C6' },
    { name: 'MERN', level: 95, color: '#47A248' },
    { name: 'MySQL', level: 78, color: '#4479A1' },
    { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
    { name: 'Git & GitHub', level: 87, color: '#F05032' },
    { name: 'HTML5', level: 95, color: '#E34F26' },
    { name: 'CSS3', level: 93, color: '#1572B6' }
  ];

  const certifications = [
   {
  title: 'Web Development Internship Certificate ',
  image: '/skillcraft.jpg',
  organization: 'SkillCraft Technology (March 2026 - April 2026)'
},
{
      title: 'Hack Zenith 2025 - Top 10 Finalist',
      image: '/hack.jpg',
      organization: 'Google Developer Groups (2026)'
    },
  
    {
      title: 'Full Stack Development with MERN',
      image: '/mern.jpg',
      organization: 'NASSCOM Foundation / thingQbator (March 2026)'
    },
    {
      title: 'Artificial Intelligence',
      image: '/ai.jpg',
      organization: 'Infosys Springboard (April 2026)'
    },
    
    {
      title: 'HTML & CSS Certificate of Excellence',
      image: '/excellence.jpg',
      organization: 'NASSCOM Foundation / thingQbator (March 2026)'
    },
    {
      title: 'Web Design & Development',
      image: '/nsdc.jpg',
      organization: 'NSDC / Skill India (March 2026)'
    }
    
  ];

  const projects = [
    {
      title: 'Online Exam Proctoring System',
      description: 'Developed a secure online exam proctoring system using React and TypeScript, featuring real-time webcam monitoring, tab-switch detection, and anti-cheating mechanisms to ensure fair and reliable assessments.',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Web APIs'],
      liveLink: 'https://online-exam-system-one.vercel.app/',
      codeLink: 'https://github.com/abhikdey07/Online-Exam-System',
      color: '#FF6B6B'
    },
   {
  title: 'Dev X : Portfolio Website',
  description: 'Designed and developed a modern, responsive personal portfolio website to showcase projects, skills, certifications, and experience with smooth navigation and interactive UI.',
  tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  liveLink: 'https://dev-x-portfolio.vercel.app/',   
  codeLink: 'https://github.com/abhikdey07/DevX-portfolio', 
  color: '#8B5CF6'
},
    {
      title: 'Weather App',
      description: 'A responsive weather application that allows users to search for real-time weather data by city, featuring temperature, humidity, wind speed, and light/dark mode toggle.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
      liveLink: 'https://weather-app-nine-pi-6abpbqpyx4.vercel.app/',
      codeLink: 'https://github.com/abhikdey07/WEATHER-APP',
      color: '#95E1D3'
    },
    {
      title: 'VeloTask',
      description: 'Developed a modern to-do application with task management (CRUD operations), real-time search, local storage persistence, and a glassmorphism UI with dark/light mode support.',
      tech: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'LocalStorage'],
      liveLink: 'https://abhikdey07.github.io/SCT_WD_4/',
      codeLink: 'https://github.com/abhikdey07/SCT_WD_4',
      color: '#F38181'
    },
    {
      title: 'Quantix Calculator',
      description: 'Developed a feature-rich web-based calculator with scientific, programmer, and graph plotting capabilities, including unit conversion, history tracking, and real-time evaluation.',
      tech: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Chart.js'],
      liveLink: 'https://abhikdey07.github.io/SCT_WD_2/',
      codeLink: 'https://github.com/abhikdey07/SCT_WD_2',
      color: '#95E1D3'
    },
    {
      title: 'CollabHub – Real-Time Collaboration Platform',
      description: 'Built a full-stack real-time collaboration platform with live code editing, AI-powered group chat, file sharing, and visual tools like whiteboard and flowchart builder using Socket.io, Node.js, and MongoDB.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'Gemini API'],
      liveLink: 'https://collabhub-in.vercel.app/',
      codeLink: 'https://github.com/abhikdey07/CollabHub',
      color: '#95E1D3'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = menuItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const openGmail = (email: string) => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-indigo-100/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Dev X
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200'
                      : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-slideDown">
            <div className="px-4 py-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                      : 'text-gray-700 hover:bg-indigo-50'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 scroll-animate slide-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                </span>
                <span className="text-sm font-medium text-indigo-700">Available for opportunities</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-600 mb-4">
                  Hi, I'm
                </h2>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Abhik Dey
                  </span>
                </h1>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
                  Computer Science Student &
                  <br />
                  <span className="text-indigo-600"> Aspiring Full Stack Developer</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  Passionate about creating beautiful, functional web applications and Full Stack Development. Specialized in MERN stack development with a focus on user experience and clean code.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 transition-all duration-300 hover:-translate-y-1"
                >
                  View My Work
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold border-2 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 hover:-translate-y-1"
                >
                  Get in Touch
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/abhikdey07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <svg className="w-6 h-6 text-gray-700 group-hover:text-indigo-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/abhik-dey-336360373/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <svg className="w-6 h-6 text-gray-700 group-hover:text-indigo-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <button
                  onClick={() => openGmail('abhik07dey@gmail.com')}
                  className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <svg className="w-6 h-6 text-gray-700 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Profile Image with Rotating Squares */}
            <div className="flex justify-center lg:justify-end scroll-animate slide-right">
              <div className="relative">
                {/* Rotating Squares */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[350px] h-[350px] border-4 border-indigo-300/30 rounded-3xl animate-rotate-slow" />
                  <div className="absolute w-[380px] h-[380px] border-4 border-purple-300/30 rounded-3xl animate-rotate-reverse" />
                  <div className="absolute w-[410px] h-[410px] border-4 border-pink-300/20 rounded-3xl animate-rotate-slow-delayed" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-30 animate-pulse-slow" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-50 animate-float" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-50 animate-float-delayed" />

                {/* Image Container */}
                <div className="relative w-72 h-96 sm:w-80 sm:h-[450px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-indigo-200/50 transform hover:scale-105 transition-transform duration-500 z-10">
                  <img
                    src="/profile.jpg"
                    alt="Abhik Dey"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-2xl shadow-xl border border-indigo-100 animate-bounce-slow z-20">
                  <p className="text-sm font-semibold text-indigo-600">🚀 Open to Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate developer with a love for creating impactful solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎓', title: 'Education', desc: 'Computer Science student with kmowledge in Algorithms, Data Structures, and Database Management & Operating Systems.' },
              { icon: '💻', title: 'Development', desc: 'Passionate about web development and AI, focused on creating modern, scalable, and user-centric applications. Aspiring Full-Stack Developer and AI Enthusiast, passionate about building smart and interactive web applications.' },
              { icon: '🚀', title: 'Innovation', desc: 'Always exploring new technologies and best practices' },
              { icon: '🛠️', title: 'Skills', desc: 'Proficient in web development with a growing interest in AI complemented by effective communication, leadership, and time management skills. Focused on building user-friendly applications while continuously learning and improving.' }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-white to-indigo-50 rounded-2xl border border-indigo-100 hover:border-indigo-300 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-100 hover:-translate-y-2 scroll-animate fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100 scroll-animate fade-up">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I'm a <span className="font-semibold text-indigo-600">Computer Science student</span> from Bishnupur, Bankura, currently pursuing my B.Tech from Dr. B.C. Roy Engineering College, Durgapur. I’m an AI enthusiast and aspiring Full-Stack Developer specializing in the MERN stack, with a strong interest in building modern and user-friendly web applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
             I thrive on solving complex problems, learning new technologies, and contributing to projects that make a meaningful impact. Beyond coding, I enjoy gardening, exploring new ideas through online research, and listening to music. These hobbies help me stay creative, relaxed, and continuously curious about the world around me.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My academic journey and qualifications
            </p>
            <div className="mt-12 space-y-6 max-w-4xl mx-auto">

  {/* B.Tech */}
  <div className="bg-white border shadow-lg rounded-2xl p-6 scroll-animate fade-up hover:scale-105 transition duration-300">
    <h3 className="text-xl font-semibold text-indigo-600">
      B.Tech in Computer Science and Engineering
    </h3>
    <p className="text-gray-600">Dr. B.C. Roy Engineering College</p>
    <p className="text-sm mt-2">🎓 CGPA: 7.9/10</p>
    <p className="text-gray-500 mt-2">
      Currently pursuing B.Tech under MAKAUT (2023 - 2027).
    </p>
  </div>

  {/* 12th */}
  <div className="bg-white border shadow-lg rounded-2xl p-6 scroll-animate fade-up hover:scale-105 transition duration-300">
    <h3 className="text-xl font-semibold text-blue-500">
      Higher Secondary (12th)
    </h3>
    <p className="text-gray-600">Bishnupur High School</p>
    <p className="text-sm mt-2">📊 91.2% (WBCHSE)</p>
    <p className="text-gray-500 mt-2">
      Completed higher secondary education in Science stream (2019 - 2021).
    </p>
  </div>

  {/* 10th */}
  <div className="bg-white border shadow-lg rounded-2xl p-6 scroll-animate fade-up hover:scale-105 transition duration-300">
    <h3 className="text-xl font-semibold text-blue-500">
      Secondary (10th)
    </h3>
    <p className="text-gray-600">Joygaria High School</p>
    <p className="text-sm mt-2">📊 92.71% (WBBSE)</p>
    <p className="text-gray-500 mt-2">
     Completed secondary education and achieved the position of Zone Topper (2014 - 2019).
    </p>
  </div>

</div>
          </div>

          
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional journey and accomplishments
            </p>
            <div className="mt-12 space-y-6 max-w-4xl mx-auto">

  {/* B.Tech */}
  <div className="bg-white border shadow-lg rounded-2xl p-6 scroll-animate fade-up hover:scale-105 transition duration-300">
    <h3 className="text-xl font-semibold text-indigo-600">
     Web Development Intern
    </h3>
    <p className="text-gray-600">SkillCraft Technology</p>
    <p className="text-sm mt-2">   Worked on HTML, CSS, JavaScript projects and built responsive UI with modern animations.</p>
    <p className="text-gray-500 mt-2">
   March 2026 - April 2026
    </p>
  </div>


</div>
          </div>

         
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-indigo-300 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-100 scroll-animate slide-left"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                  <span className="text-sm font-medium text-indigo-600">{skill.level}%</span>
                </div>
                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out skill-bar"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Certifications & Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognition of my continuous learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-indigo-300 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-200 hover:-translate-y-2 scroll-animate zoom-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                  <p className="text-gray-600">{cert.organization}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-indigo-600">🏆</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Some of my recent work and personal projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-indigo-300 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-200 hover:-translate-y-2 scroll-animate flip-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: project.color }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                      style={{ background: `${project.color}20` }}
                    >
                      💼
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-center shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Live Demo
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold text-center border-2 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Code
                        <svg className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm always open to new opportunities and collaborations
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-12 border border-indigo-100 scroll-animate scale-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: '📧', label: 'Email', value: 'abhik07dey@gmail.com', action: () => openGmail('abhik07dey@gmail.com') },
                { icon: '💼', label: 'LinkedIn', value: 'Connect with me', action: () => window.open('https://www.linkedin.com/in/abhik-dey-336360373/', '_blank') },
                { icon: '🔧', label: 'GitHub', value: 'Check my code', action: () => window.open('https://github.com/abhikdey07', '_blank') }
              ].map((contact, index) => (
                <button
                  key={index}
                  onClick={contact.action}
                  className="group p-6 bg-white rounded-2xl border border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-2 text-center cursor-pointer"
                >
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </div>
                  <div className="text-sm font-medium text-gray-500 mb-1">{contact.label}</div>
                  <div className="text-sm font-semibold text-indigo-600">{contact.value}</div>
                </button>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => openGmail('abhik07dey@gmail.com')}
                className="group px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold shadow-xl shadow-indigo-300 hover:shadow-2xl hover:shadow-indigo-400 transition-all duration-300 hover:-translate-y-1 text-lg"
              >
                Send Me a Message
                <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">✉️</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg mb-4">
            Designed & Built by <span className="font-bold">Abhik Dey</span>
          </p>
          <p className="text-indigo-200">
            © 2026 All rights reserved
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {scrollY > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg shadow-indigo-300 hover:shadow-xl hover:shadow-indigo-400 transition-all duration-300 hover:-translate-y-1 z-50 animate-fadeIn"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      <style>{`
        /* Scroll Animations */
        .scroll-animate {
          opacity: 0;
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .scroll-animate.in-view {
          opacity: 1;
        }

        /* Fade Up */
        .fade-up {
          transform: translateY(50px);
        }

        .fade-up.in-view {
          transform: translateY(0);
        }

        /* Slide Left */
        .slide-left {
          transform: translateX(-50px);
        }

        .slide-left.in-view {
          transform: translateX(0);
        }

        /* Slide Right */
        .slide-right {
          transform: translateX(50px);
        }

        .slide-right.in-view {
          transform: translateX(0);
        }

        /* Scale In */
        .scale-in {
          transform: scale(0.9);
        }

        .scale-in.in-view {
          transform: scale(1);
        }

        /* Zoom In */
        .zoom-in {
          transform: scale(0.8);
        }

        .zoom-in.in-view {
          transform: scale(1);
        }

        /* Flip In */
        .flip-in {
          transform: perspective(1000px) rotateY(-15deg);
        }

        .flip-in.in-view {
          transform: perspective(1000px) rotateY(0deg);
        }

        /* Skill Bar Animation */
        .skill-bar {
          transform: scaleX(0);
          transform-origin: left;
        }

        .scroll-animate.in-view .skill-bar {
          animation: fillBar 1.5s ease-out forwards;
        }

        @keyframes fillBar {
          to {
            transform: scaleX(1);
          }
        }

        /* Rotating Squares */
        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotate-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }

        .animate-rotate-reverse {
          animation: rotate-reverse 15s linear infinite;
        }

        .animate-rotate-slow-delayed {
          animation: rotate-slow 25s linear infinite;
        }

        /* Other Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 1s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
