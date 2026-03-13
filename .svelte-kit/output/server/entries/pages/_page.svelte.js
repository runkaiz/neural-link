import { a0 as ensure_array_like, a1 as attr_class, a2 as attr, e as escape_html, a3 as stringify, a4 as head } from "../../chunks/index.js";
import "clsx";
function Nav($$renderer) {
  $$renderer.push(`<nav class="fixed top-0 w-full px-6 py-4 flex justify-between items-center z-50 bg-cream/90 backdrop-blur-md border-b border-ink-light/20"><a href="#hero" class="font-serif font-bold text-xl tracking-tight text-teal">Neural Link</a> <div class="flex gap-6 text-sm font-medium text-ink-muted"><a href="#research" class="hover:text-teal transition-colors">Research</a> <a href="#design" class="hover:text-teal transition-colors">Design</a> <a href="#reflection" class="hover:text-teal transition-colors">Reflection</a></div></nav>`);
}
function Hero($$renderer) {
  $$renderer.push(`<section id="hero" class="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto mb-32"><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end"><div class="lg:col-span-7 pt-10 md:pt-20 fade-up"><p class="font-serif italic text-2xl md:text-3xl text-ink-muted mb-4">By Peter, Khawton, Nico</p> <h1 class="font-serif text-[12vw] lg:text-[9vw] leading-[0.85] tracking-tighter text-ink mb-8 -ml-1 lg:-ml-2">Neural Link</h1> <p class="text-xl md:text-2xl text-ink-muted font-medium max-w-2xl leading-relaxed">Redesigning focus and belonging for international students with ADHD.</p> <div class="mt-12 pt-6 border-t border-ink-light/40 flex flex-wrap gap-x-8 gap-y-4 text-sm tracking-wide uppercase text-ink-muted"><span class="flex items-center gap-2"><iconify-icon icon="lucide:search"></iconify-icon> UX Research &amp; Design</span> <span class="flex items-center gap-2"><iconify-icon icon="lucide:map-pin"></iconify-icon> University of Washington</span> <span class="flex items-center gap-2"><iconify-icon icon="lucide:calendar"></iconify-icon> Oct–Dec 2025</span></div> <div class="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-wide uppercase text-ink-light"><span class="flex items-center gap-2"><iconify-icon icon="lucide:book-open"></iconify-icon> HCDE 302 &amp; HCDE 303</span> <span class="flex items-center gap-2"><iconify-icon icon="lucide:info"></iconify-icon> Not affiliated with Neuralink Corp.</span></div></div> <div class="lg:col-span-5 relative mt-12 lg:mt-0 fade-up delay-200"><div class="relative aspect-[4/5] md:aspect-auto md:h-[600px] w-full rounded-2xl bg-cream-dark overflow-hidden"><img src="/images/hero-app.webp" alt="Neural Link App Interface" class="w-full h-full object-cover object-top mix-blend-darken"/></div> <div class="absolute -bottom-8 -left-4 md:-left-12"><a href="https://www.youtube.com/watch?v=Xnhi0m7zKBU" target="_blank" rel="noopener noreferrer" class="w-48 md:w-64 aspect-video bg-ink rounded-lg shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 block"><img src="https://img.youtube.com/vi/Xnhi0m7zKBU/maxresdefault.jpg" alt="Project Video" class="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"/> <div class="absolute inset-0 flex items-center justify-center"><div class="w-12 h-12 bg-cream rounded-full flex items-center justify-center pl-1 text-teal"><iconify-icon icon="lucide:play" class="text-2xl"></iconify-icon></div></div></a> <a href="https://www.youtube.com/watch?v=TbRBkUwOiD8" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-teal transition-colors"><iconify-icon icon="lucide:film" class="text-sm"></iconify-icon> Watch the artistic cut</a></div></div></div></section>`);
}
function UserResearch($$renderer) {
  $$renderer.push(`<section id="research" class="py-24 md:py-32 border-t border-ink-light/20"><div class="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto"><div class="mb-16 md:mb-24 text-center md:text-left fade-up"><h2 class="font-serif text-teal text-lg md:text-xl tracking-widest uppercase mb-4">User Research</h2> <h3 class="font-serif italic text-4xl md:text-6xl text-ink">The Silent Struggle in the Ave</h3></div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"><div class="lg:col-span-5 lg:sticky top-32"><div class="relative"><img src="/images/oliver-portrait.webp" alt="Portrait of Oliver" class="w-full h-auto ink-blend"/> <div class="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48"><img src="/images/peer-community.webp" alt="Oliver stressed at cafe" class="w-full h-full object-contain ink-blend opacity-80"/></div></div></div> <div class="lg:col-span-7 lg:col-start-6 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-muted space-y-8"><p class="drop-cap fade-up">Meet Oliver. By day, he is the life of the Thai Student Association. He's social, creative, and always surrounded by friends on campus. To an outside observer, he is navigating the international student experience flawlessly.</p> <p class="fade-up">But at night, the narrative fractures. When the social noise fades and he returns to his dorm, the "ADHD freeze" sets in. His phone lights up with Canvas notifications. Three assignments are due by midnight. Instead of starting, he feels a paralyzing wave of overwhelm.</p> <div class="my-12 flex justify-center py-8 border-y border-ink-light/20 fade-up"><img src="/images/cloud-icon.webp" alt="Oliver overwhelmed dropping book" class="h-64 object-contain ink-blend"/></div> <p class="fade-up">The traditional university advice is to visit the counseling center. But Oliver doesn't want clinical help. The idea of sitting in a sterile room explaining cultural nuances to a professional feels alienating.</p> <p class="text-2xl font-serif text-teal italic pl-6 border-l-2 border-teal fade-up">He doesn't want to be "fixed." He wants a community that simply "gets it" without requiring him to translate his experience.</p></div></div></div></section>`);
}
function Statistics($$renderer) {
  $$renderer.push(`<section class="bg-teal text-cream py-32 px-6 md:px-12 lg:px-24 overflow-hidden"><div class="max-w-[1400px] mx-auto"><h2 class="font-serif text-3xl md:text-5xl lg:text-7xl text-cream mb-24 max-w-4xl fade-up">Oliver Isn't Alone: <span class="italic opacity-70">The Invisible Wall</span></h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8"><div class="relative pt-8 border-t border-cream/20 fade-up"><div class="absolute -top-10 right-0 w-24 h-24 bg-cream rounded-full flex items-center justify-center p-4 shadow-xl mix-blend-screen"><img src="/images/gpa-icon.webp" alt="ADHD Depression Overlap" class="w-full h-full object-contain grayscale invert"/></div> <span class="block text-sm font-medium tracking-widest uppercase mb-4 text-cream/60">The Overlap</span> <div class="font-serif text-6xl lg:text-8xl mb-6 leading-none">5.6%</div> <p class="text-lg lg:text-xl text-cream/80 leading-relaxed">of college students navigate ADHD, while <strong class="text-cream font-bold">44%</strong> manage depression symptoms.</p></div> <div class="relative pt-8 border-t border-cream/20 fade-up delay-100"><div class="absolute -top-10 right-0 w-24 h-24 bg-cream rounded-full flex items-center justify-center p-4 shadow-xl mix-blend-screen"><img src="/images/burden-icon.webp" alt="Burden Icon" class="w-full h-full object-contain grayscale invert"/></div> <span class="block text-sm font-medium tracking-widest uppercase mb-4 text-cream/60">The Double Hit</span> <div class="font-serif text-6xl lg:text-8xl mb-6 leading-none">24%</div> <p class="text-lg lg:text-xl text-cream/80 leading-relaxed">of students experience an overlap, where academic performance takes the hardest hit.</p></div> <div class="relative pt-8 border-t border-cream/20 fade-up delay-200"><div class="absolute -top-10 right-0 w-24 h-24 bg-cream rounded-full flex items-center justify-center p-4 shadow-xl mix-blend-screen"><img src="/images/extra-2.webp" alt="GPA Drop" class="w-full h-full object-contain grayscale invert"/></div> <span class="block text-sm font-medium tracking-widest uppercase mb-4 text-cream/60">The GPA Tax</span> <div class="font-serif text-6xl lg:text-8xl mb-6 leading-none">-0.49</div> <p class="text-lg lg:text-xl text-cream/80 leading-relaxed">average drop in GPA points associated with a depression diagnosis.</p></div></div> <div class="mt-24 pt-12 border-t border-cream/10 text-center"><p class="font-serif italic text-3xl md:text-5xl text-cream">"When depression scores go up, <br class="hidden md:block"/>GPAs go down."</p></div></div></section>`);
}
function LocalContext($$renderer) {
  $$renderer.push(`<section class="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div class="order-2 lg:order-1 relative fade-up"><div class="aspect-square md:aspect-[4/3] bg-cream-dark rounded-3xl overflow-hidden"><img src="/images/uw-campus.webp" alt="UW Campus Context" class="w-full h-full object-cover mix-blend-multiply"/></div> <div class="absolute -bottom-8 -right-4 md:right-8 bg-cream border border-ink-light/30 p-6 rounded-2xl shadow-xl max-w-xs"><p class="font-serif text-3xl text-teal mb-2">470+</p> <p class="text-sm text-ink-muted leading-tight">International students at UW estimated to live with ADHD-level symptoms.</p></div></div> <div class="order-1 lg:order-2 space-y-8 fade-up delay-200"><h2 class="font-serif text-sm tracking-widest uppercase text-ink-muted">Bringing it Home to UW</h2> <blockquote class="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-ink"><span class="text-teal">"</span>How might we design a way to help international students with ADHD at UW to build communities and focus on daily tasks?<span class="text-teal">"</span></blockquote></div></div></section>`);
}
function ResearchProcess($$renderer) {
  $$renderer.push(`<section class="py-24 bg-cream-dark px-6 md:px-12 lg:px-24"><div class="max-w-[1400px] mx-auto"><div class="flex flex-col md:flex-row justify-between items-baseline mb-16 fade-up"><h2 class="font-serif text-4xl text-ink">Research Process</h2> <p class="text-ink-muted uppercase tracking-widest text-sm mt-4 md:mt-0">At a Glance</p></div> <div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-light/20 border border-ink-light/20 rounded-2xl overflow-hidden fade-up"><div class="bg-cream p-8 flex flex-col items-center justify-center text-center"><iconify-icon icon="lucide:users" class="text-3xl text-teal mb-4"></iconify-icon> <div class="font-serif text-4xl md:text-5xl mb-2 text-ink">3</div> <div class="text-sm font-medium text-ink-muted uppercase tracking-wider">Interviews</div></div> <div class="bg-cream p-8 flex flex-col items-center justify-center text-center"><iconify-icon icon="lucide:user-plus" class="text-3xl text-teal mb-4"></iconify-icon> <div class="font-serif text-4xl md:text-5xl mb-2 text-ink">8</div> <div class="text-sm font-medium text-ink-muted uppercase tracking-wider">Participants</div></div> <div class="bg-cream p-8 flex flex-col items-center justify-center text-center"><iconify-icon icon="lucide:calendar-clock" class="text-3xl text-teal mb-4"></iconify-icon> <div class="font-serif text-4xl md:text-5xl mb-2 text-ink">20</div> <div class="text-sm font-medium text-ink-muted uppercase tracking-wider">Weeks</div></div> <div class="bg-cream p-8 flex flex-col items-center justify-center text-center"><iconify-icon icon="lucide:layers" class="text-3xl text-teal mb-4"></iconify-icon> <div class="font-serif text-4xl md:text-5xl mb-2 text-ink">6</div> <div class="text-sm font-medium text-ink-muted uppercase tracking-wider">Methods</div></div></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 fade-up"><div><h4 class="font-serif text-xl mb-4">Methods &amp; Methodology</h4> <p class="text-ink-muted leading-relaxed">We employed a mixed-methods approach to understand the dual burden of academic pressure and cultural displacement. This included semi-structured interviews (3), follow-up user testing (2), expert critique sessions (1), an initial screening survey, user journey mapping, thematic analysis, and storyboarding.</p></div> <div><h4 class="font-serif text-xl mb-4">Participants &amp; Timeline</h4> <p class="text-ink-muted leading-relaxed">Over 20 weeks, we engaged with 8 international students primarily from East and Southeast Asia at the University of Washington. Participants were screened for high academic workloads and self-reported symptoms associated with ADHD, focusing on their specific daily friction points.</p></div></div></div></section>`);
}
function KeyMilestones($$renderer) {
  const milestones = [
    {
      num: "01",
      title: "Identifying Help-Seeking Barriers",
      description: "We discovered a crucial disconnect: international students heavily prefer peer-based support networks over professional, clinical psychologists due to fear of stigma and a desire for shared contextual understanding.",
      image: "/images/oliver-overwhelmed.webp",
      alt: "Peer vs Pro Support"
    },
    {
      num: "02",
      title: "Mapping Perception Pain Points",
      description: 'Through thematic analysis, we mapped how diverse cultural backgrounds heavily influence decisions about utilizing university mental health services, often viewing them as a "last resort" rather than proactive maintenance.',
      image: "/images/cultural-perceptions.webp",
      alt: "Cultural Perceptions"
    },
    {
      num: "03",
      title: "Synthesizing Trust Drivers",
      description: "This pivotal moment shifted our entire design strategy: moving away from a clinical-focused tool toward a peer-led community model centered on mutual accountability and gamified focus.",
      image: "/images/oliver-cafe.webp",
      alt: "Shifting to Peer Community"
    }
  ];
  $$renderer.push(`<section class="py-32 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto"><h2 class="font-serif text-4xl md:text-6xl text-center mb-24 fade-up">Key Milestones</h2> <div class="space-y-16 md:space-y-0"><!--[-->`);
  const each_array = ensure_array_like(milestones);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let milestone = each_array[i];
    $$renderer.push(`<div${attr_class(`flex flex-col items-center gap-8 md:gap-16 fade-up ${stringify(i > 0 ? "md:mt-24" : "")} ${stringify(i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row")}`)}><div class="w-full md:w-1/2 aspect-square md:aspect-[4/3] bg-cream-dark rounded-2xl overflow-hidden p-8 flex items-center justify-center"><img${attr("src", milestone.image)}${attr("alt", milestone.alt)} class="w-full h-full object-contain ink-blend"/></div> <div${attr_class(`w-full md:w-1/2 ${stringify(i % 2 === 1 ? "md:pl-12" : "md:pr-12")}`)}><span class="text-teal font-medium tracking-widest text-sm uppercase mb-3 block">Milestone ${escape_html(milestone.num)}</span> <h3 class="font-serif text-3xl md:text-4xl mb-6">${escape_html(milestone.title)}</h3> <p class="text-lg text-ink-muted">${escape_html(milestone.description)}</p></div></div>`);
  }
  $$renderer.push(`<!--]--></div></section>`);
}
function CoreInsights($$renderer) {
  const findings = [
    {
      image: "/images/barrier-card.webp",
      alt: "Barrier",
      tagColor: "bg-red-100 text-red-800",
      tag: "Barrier",
      title: "Systemic Distrust",
      description: "Students actively avoid seeking official help due to perceived high costs, limited awareness of resources, and a deep-seated distrust of clinical counselors understanding their background."
    },
    {
      image: "/images/extra-1.webp",
      alt: "Inspiration",
      tagColor: "bg-teal-light/20 text-teal-light",
      tag: "Inspiration",
      title: "Cultural Comfort",
      description: "Comfort and psychological safety are predominantly found within informal peer-led communities and cultural student organizations, rather than official university channels."
    },
    {
      image: "/images/inspiration-card.webp",
      alt: "Pain Point",
      tagColor: "bg-orange-100 text-orange-800",
      tag: "Pain Point",
      title: "The Academic Freeze",
      description: 'Chronic procrastination and sudden academic "freezes" are the most severe daily impacts, severely damaging academic performance and creating a cycle of guilt and avoidance.'
    }
  ];
  $$renderer.push(`<section class="py-24 border-y border-ink-light/20 px-6 md:px-12 lg:px-24"><div class="max-w-[1400px] mx-auto"><h2 class="font-serif text-3xl text-center mb-16 fade-up">Core Insights</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
  const each_array = ensure_array_like(findings);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let finding = each_array[i];
    $$renderer.push(`<div${attr_class(`bg-white rounded-3xl p-8 shadow-sm border border-ink-light/10 hover:shadow-xl transition-shadow duration-300 fade-up ${stringify(i === 1 ? "delay-100" : i === 2 ? "delay-200" : "")}`)}><div class="h-40 mb-8 flex justify-center items-center"><img${attr("src", finding.image)}${attr("alt", finding.alt)} class="h-full object-contain ink-blend"/></div> <span${attr_class(`inline-block px-3 py-1 ${stringify(finding.tagColor)} text-xs font-bold uppercase tracking-wider rounded-full mb-4`)}>${escape_html(finding.tag)}</span> <h4 class="font-serif text-xl mb-3">${escape_html(finding.title)}</h4> <p class="text-ink-muted text-sm leading-relaxed">${escape_html(finding.description)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
function DesignIteration($$renderer) {
  const lowFiScreens = [
    "/images/low/3bo6c9yXiSsfY0K05sb0d43Qkeg.png.webp",
    "/images/low/9pH3d2YM3HGKPJrL5F2kdXmKPnA.png.webp",
    "/images/low/i6x29RbeBVEGLUDq4tLsVeh0SI.png.webp"
  ];
  const midFiScreens = [
    "/images/mid/2gaZCDj0yzynLmkwkfpw2TB2It4.png.avif",
    "/images/mid/ey8C9oo7YXzrnwTLRUOZOtMo.png.avif",
    "/images/mid/zUiIsYWnGU0dtIvqvi7tV7YMk8.png.avif"
  ];
  const hiFiScreens = [
    "/images/high/ByaZlG0bjDWG5BVFv5ke65HSlWk.png.webp",
    "/images/high/KN50M76qpbtfzmM998eKRnf9860.png.webp",
    "/images/high/PClrPzfVPniQBWsXmSLtbmE4.png.webp",
    "/images/high/i6HPHyWbiysJU5N98h1wmu0IFA.png.avif",
    "/images/high/PvumLk2JOtzV7jITqGbrRyec.png.avif",
    "/images/high/yaBU9WBGAhmqDDgQceHTpNjosvQ.png.avif",
    "/images/high/GyNmzQ2poFNQXhj1h32UpgIoMsw.png.webp"
  ];
  $$renderer.push(`<section id="design" class="py-32 px-6 lg:pl-24 lg:pr-0 overflow-hidden"><div class="max-w-[1400px] mx-auto"><h2 class="font-serif text-teal text-5xl md:text-7xl mb-24 fade-up">UX Design <span class="italic text-ink">&amp; Iteration</span></h2> <div class="mb-32"><div class="max-w-xl mb-12 lg:pr-24 fade-up"><h3 class="font-serif text-3xl mb-4">A. Low-Fidelity Prototype</h3> <p class="text-ink-muted mb-6">Explored basic gamified productivity flows including task management, leaderboards, and a core focus mode.</p> <ul class="list-none space-y-3 text-sm"><li class="flex items-start gap-2"><iconify-icon icon="lucide:arrow-right" class="text-teal mt-1"></iconify-icon> <span class="text-ink-muted"><strong>Result:</strong> Canvas integration deemed absolutely critical.</span></li> <li class="flex items-start gap-2"><iconify-icon icon="lucide:arrow-right" class="text-teal mt-1"></iconify-icon> <span class="text-ink-muted"><strong>Feedback:</strong> Camera tracking raised massive privacy concerns.</span></li> <li class="flex items-start gap-2"><iconify-icon icon="lucide:arrow-right" class="text-teal mt-1"></iconify-icon> <span class="text-ink-muted"><strong>Reaction:</strong> Leaderboards had mixed reception (competitive anxiety).</span></li></ul></div> <div class="flex overflow-x-auto gap-8 pb-12 pr-6 snap-x snap-mandatory no-scrollbar"><!--[-->`);
  const each_array = ensure_array_like(lowFiScreens);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let src = each_array[i];
    $$renderer.push(`<div class="w-[280px] h-[580px] rounded-[2.5rem] border-[10px] border-ink-light/30 bg-white shadow-xl relative shrink-0 snap-center overflow-hidden"><div class="absolute top-0 inset-x-0 h-5 bg-ink-light/30 rounded-b-xl w-1/3 mx-auto"></div> <img${attr("src", src)}${attr("alt", `Lo-Fi Screen ${stringify(i + 1)}`)} class="w-full h-full object-cover object-top"/></div>`);
  }
  $$renderer.push(`<!--]--></div></div> <div class="mb-32"><div class="max-w-xl mb-12 lg:pr-24 fade-up"><h3 class="font-serif text-3xl mb-4">B. Mid-Fidelity Prototype</h3> <p class="text-ink-muted mb-6">Applied initial design system logic. Shifted away from punitive camera tracking towards positive reinforcement.</p> <ul class="list-none space-y-3 text-sm"><li class="flex items-start gap-2"><iconify-icon icon="lucide:alert-circle" class="text-orange-500 mt-1"></iconify-icon> <span class="text-ink-muted"><strong>Usability Issue:</strong> Inability to add non-Canvas tasks was highly frustrating.</span></li> <li class="flex items-start gap-2"><iconify-icon icon="lucide:check-circle-2" class="text-teal mt-1"></iconify-icon> <span class="text-ink-muted"><strong>Success:</strong> Lock-screen focus feature was highly valued by testers.</span></li> <li class="flex items-start gap-2"><iconify-icon icon="lucide:users" class="text-teal mt-1"></iconify-icon> <span class="text-ink-muted"><strong>Insight:</strong> Direct competition was "stressful"; users strongly preferred collaborative modes.</span></li></ul></div> <div class="flex overflow-x-auto gap-8 pb-12 pr-6 snap-x snap-mandatory no-scrollbar"><!--[-->`);
  const each_array_1 = ensure_array_like(midFiScreens);
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let src = each_array_1[i];
    $$renderer.push(`<div class="w-[280px] h-[580px] rounded-[2.5rem] border-8 border-ink bg-[#f8f9fa] shadow-2xl relative shrink-0 snap-center overflow-hidden"><div class="absolute top-0 inset-x-0 h-6 bg-ink rounded-b-xl w-[40%] mx-auto z-10"></div> <img${attr("src", src)}${attr("alt", `Mid-Fi Screen ${stringify(i + 1)}`)} class="w-full h-full object-cover object-top"/></div>`);
  }
  $$renderer.push(`<!--]--></div></div> <div><div class="max-w-xl mb-12 lg:pr-24 fade-up"><h3 class="font-serif text-3xl mb-4 text-teal">C. High-Fidelity App</h3> <p class="text-ink-muted mb-6">The final iteration balanced warm aesthetics with robust utility. Focused on peer accountability over clinical tracking.</p> <ul class="list-none space-y-3 text-sm"><li class="flex items-start gap-2"><iconify-icon icon="lucide:zap" class="text-teal mt-1"></iconify-icon> <span class="text-ink-muted"><strong>Change:</strong> Added manual "+" entry for personal, non-academic tasks (e.g., "do laundry").</span></li> <li class="flex items-start gap-2"><iconify-icon icon="lucide:zap" class="text-teal mt-1"></iconify-icon> <span class="text-ink-muted"><strong>Change:</strong> Timer automatically links to estimated task lengths.</span></li> <li class="flex items-start gap-2"><iconify-icon icon="lucide:zap" class="text-teal mt-1"></iconify-icon> <span class="text-ink-muted"><strong>Feature:</strong> Collaborative "Boss" competitions where pods unlock real UW Ave restaurant coupons.</span></li></ul></div> <div class="flex overflow-x-auto gap-8 pb-12 pr-6 snap-x snap-mandatory no-scrollbar"><!--[-->`);
  const each_array_2 = ensure_array_like(hiFiScreens);
  for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
    let src = each_array_2[i];
    $$renderer.push(`<div class="w-[280px] h-[580px] rounded-[2.5rem] border-8 border-ink bg-white shadow-2xl relative shrink-0 snap-center overflow-hidden group cursor-pointer"><div class="absolute top-0 inset-x-0 h-6 bg-ink rounded-b-xl w-[40%] mx-auto z-10"></div> <img${attr("src", src)}${attr("alt", `Hi-Fi Screen ${stringify(i + 1)}`)} class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"/></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div></section>`);
}
function Reflection($$renderer) {
  $$renderer.push(`<section id="reflection" class="bg-ink text-cream py-32 px-6 md:px-12 lg:px-24"><div class="max-w-[1400px] mx-auto"><div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24"><div class="lg:col-span-7 fade-up"><h2 class="font-serif text-3xl md:text-5xl text-cream mb-8">Challenges <span class="italic opacity-50">&amp; Surprises</span></h2> <div class="space-y-8"><div class="border-l border-cream/20 pl-6"><h4 class="font-sans text-sm tracking-widest uppercase text-teal-light mb-2">The Hardest Pivot</h4> <p class="text-lg leading-relaxed text-cream/80">Our biggest challenge was receiving critical feedback on our mid-point video presentation tone. We initially leaned too heavily into a "clinical productivity" aesthetic. Re-aligning the visual and product tone to feel empathetic rather than punitive required a complete teardown of our UI components.</p></div> <div class="border-l border-cream/20 pl-6"><h4 class="font-sans text-sm tracking-widest uppercase text-teal-light mb-2">The Big Surprise</h4> <p class="text-lg leading-relaxed text-cream/80">We hypothesized that anonymity would be paramount. Surprisingly, the qualitative data showed a strong preference for identifiable social support over anonymous professional counselors. Students didn't want to hide; they wanted to struggle together, visibly.</p></div></div></div> <div class="lg:col-span-5 fade-up delay-200"><h2 class="font-serif text-3xl md:text-5xl text-cream mb-8">Next Steps</h2> <ul class="space-y-6"><li class="bg-cream/5 p-6 rounded-2xl border border-cream/10"><p class="text-cream/90 leading-relaxed">If we had more time, we would have planned usability tests further in advance to secure a larger pool of participants (N>15) for quantitative significance.</p></li> <li class="bg-cream/5 p-6 rounded-2xl border border-cream/10"><p class="text-cream/90 leading-relaxed">A second rigorous testing round is needed specifically on the manual "+" button flow and the redesigned icon labels, as these were last-minute high-fidelity changes.</p></li></ul></div></div> <div class="pt-12 border-t border-cream/20 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"><div><p class="font-serif text-2xl mb-1">Team Collaboration</p> <p class="text-sm text-cream/50 max-w-xl">Our team seamlessly split the workload into three specialized parts (Research, Interaction, Visuals) while maintaining a core of collaborative, synchronous brainstorming sessions twice a week.</p></div> <div class="text-right"><a href="#hero" class="inline-flex items-center gap-2 text-teal-light hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">Back to Top <iconify-icon icon="lucide:arrow-up"></iconify-icon></a></div></div> <div class="mt-12 pt-8 border-t border-cream/10 text-center"><p class="text-xs text-cream/30 leading-relaxed max-w-2xl mx-auto">An undergraduate student project from HCDE 302 &amp; HCDE 303 at the University of Washington, Seattle.
				The team codename "Neural Link" is a humorous take and has no affiliation with Elon Musk's Neuralink brain interface device.</p></div></div></section>`);
}
function _page($$renderer) {
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Neural Link — UX Case Study</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Redesigning focus and belonging for international students with ADHD. A UX case study from HCDE 302 &amp; HCDE 303 at the University of Washington."/>`);
  });
  $$renderer.push(`<div class="min-h-screen relative w-full overflow-x-hidden bg-noise bg-cream text-ink font-sans antialiased selection:bg-teal selection:text-cream">`);
  Nav($$renderer);
  $$renderer.push(`<!----> <main class="pt-24 md:pt-32 relative z-10">`);
  Hero($$renderer);
  $$renderer.push(`<!----> `);
  UserResearch($$renderer);
  $$renderer.push(`<!----> `);
  Statistics($$renderer);
  $$renderer.push(`<!----> `);
  LocalContext($$renderer);
  $$renderer.push(`<!----> `);
  ResearchProcess($$renderer);
  $$renderer.push(`<!----> `);
  KeyMilestones($$renderer);
  $$renderer.push(`<!----> `);
  CoreInsights($$renderer);
  $$renderer.push(`<!----> `);
  DesignIteration($$renderer);
  $$renderer.push(`<!----> `);
  Reflection($$renderer);
  $$renderer.push(`<!----></main></div>`);
}
export {
  _page as default
};
