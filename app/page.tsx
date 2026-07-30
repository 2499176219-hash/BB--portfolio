"use client";

import { useState } from "react";

const content = {
  zh: {
    nav: ["精选案例", "能力", "作品", "经历", "关于"],
    role: "新媒体运营 · 内容策划",
    headline: <>把热点变成<br /><em>有结果的内容</em></>,
    intro: "我是柏欣悦，关注互联网情绪与用户需求，能够从热点判断、选题策划、文案脚本，一直做到视觉、剪辑、发布与数据复盘。",
    view: "查看精选案例",
    resume: "下载简历",
    metrics: [
      ["316万", "抖音单条最高播放"], ["10万+", "小红书单条曝光"],
      ["48%", "网易视频转发增长"], ["5.2万+", "人物稿最高阅读"],
    ],
    casesLabel: "SELECTED CASES · 精选案例",
    casesTitle: "用案例说话",
    casesIntro: "从真实账号、真实内容到真实数据，展示我如何理解用户、抓住话题并完成内容闭环。",
    cases: [
      {
        no: "01", tag: "个人自媒体 · 抖音", title: "从宿舍日常中找到 316 万播放的公共情绪",
        desc: "围绕大学生群体的熟悉场景，以短情境、强反差和快速节奏降低理解成本。独立完成策划、出镜、拍摄、剪辑与发布。",
        stats: ["316万播放", "6.8万点赞", "5.9万转发"], image: "/media/douyin-profile.jpg",
        insight: "用高共识生活场景制造“这就是我”的即时共鸣。",
      },
      {
        no: "02", tag: "个人自媒体 · 小红书", title: "在考研情绪节点，用内容接住用户",
        desc: "考前焦虑集中释放时，以真实、陪伴式表达回应女大学生的情绪需求；封面直给痛点，标题明确承诺内容价值。",
        stats: ["10万曝光", "9106赞", "涨粉100+"], image: "/media/xhs-hit.png",
        insight: "爆款不是追热词，而是在正确的时间给出用户需要的情绪价值。",
      },
      {
        no: "03", tag: "网易传媒 · 内容运营", title: "从热榜到成片，独立完成内容生产闭环",
        desc: "运营网易上流视频号“会问青年”，结合电影、社会话题与泛知识内容完成选题、脚本、剪辑、排版和复盘。",
        stats: ["平均播放3万+", "转发增长48%", "32个选题脚本"], image: "/media/profile-06.jpg",
        insight: "判断热点是否可做：看时效、受众重合、账号调性、信息增量与舆情风险。",
      },
      {
        no: "04", tag: "文旅策划 · 项目负责人", title: "让敦煌文化从“被观看”走向“可进入”",
        desc: "带领5人团队，将丝路文化转化为“剧本体验 + 场景联动 + 文创延展”的产品闭环，负责策划、剧本与统筹。",
        stats: ["2025年立项", "晋级省赛", "4部剧本规划"], image: "/media/dunhuang-case.jpg",
        insight: "用年轻人熟悉的互动叙事，降低传统文化的进入门槛。",
      },
    ],
    capabilityLabel: "CONTENT SYSTEM · 内容能力",
    capabilityTitle: "一条内容，从洞察到复盘",
    capabilities: [
      ["01", "热点监测", "综合即时热榜、微博、抖音与小红书趋势，判断时效与传播空间。"],
      ["02", "用户洞察", "从搜索、评论区和互动数据中识别情绪需求、产品需求与内容偏好。"],
      ["03", "选题策划", "在热点与账号定位之间找到交集，提炼用户愿意点击和分享的角度。"],
      ["04", "文案脚本", "完成标题、长短文案、采访稿、短视频脚本与综艺策划文本。"],
      ["05", "视觉与剪辑", "使用 PR、PS、达芬奇、秀米完成封面、排版、剪辑与基础包装。"],
      ["06", "数据复盘", "关注播放、互动、转发与用户反馈，以周报方式沉淀可复制的方法。"],
    ],
    workLabel: "CREATIVE WORK · 创意作品",
    workTitle: "影像、设计与摄影",
    workIntro: "运营之外，我也持续训练叙事、构图和视觉表达。",
    tabs: ["影像", "平面设计", "摄影"],
    experienceLabel: "EXPERIENCE · 经历",
    experienceTitle: "在不同内容现场，积累判断与执行",
    experiences: [
      ["2025.09—2026.02", "澳门文化旅游报", "新媒体运营", "完成公众号排版、发布与视频剪辑；围绕澳门人文、历史与旅游内容优化标题、封面与阅读路径，月均阅读量提升20%。"],
      ["2025.06—2025.09", "腾讯视频《魔力歌先生》", "选角导演", "参与前期策划、艺人资料建档、面试与现场统筹，成功建联并邀约曾一鸣、刘可夫参与录制。"],
      ["2025.03—2025.06", "北京海西传媒《一起开麦吧》", "内容策划与项目执行", "参与节目定位、人物画像与故事线策划，协同导演、编剧和选角团队推进项目。"],
      ["2024.02—2024.06", "网易传媒", "内容运营", "独立完成视频号选题、脚本、剪辑、排版和复盘；参与非遗人物采访与深度撰稿。"],
    ],
    aboutLabel: "ABOUT ME · 关于我",
    aboutTitle: "对热点敏感，也对真实的人保持好奇",
    aboutText: "戏剧与影视学硕士在读。我的优势是把内容感觉落实为完整执行：既能追踪平台情绪，也能坐下来写稿、做图、剪片和看数据。我希望进入互联网内容团队，在更快的反馈里持续做出既有传播力、也有质感的作品。",
    available: "可立即到岗 · 每周5天 · 可连续实习6个月",
    contact: "联系我",
    location: "兰州在读 · 东莞常驻 · 接受北京 / 深圳 / 广州 / 上海 / 成都 / 重庆",
    footer: "内容要被看见，也要值得被记住。",
  },
  en: {
    nav: ["Cases", "Skills", "Work", "Experience", "About"], role: "Social Media Operations · Content Strategy",
    headline: <>Turning trends into<br /><em>content that performs</em></>,
    intro: "I’m Jerry Bai, a social media operator who takes ideas from trend spotting and user insight to copywriting, visual production, editing, publishing and performance review.",
    view: "View selected cases", resume: "Download résumé",
    metrics: [["3.16M", "Top Douyin views"], ["100K+", "Top RED impressions"], ["48%", "NetEase share growth"], ["52K+", "Top feature reads"]],
    casesLabel: "SELECTED CASES", casesTitle: "Proof, not promises", casesIntro: "Real accounts, real content and measurable outcomes — how I find the right angle and close the content loop.",
    cases: [
      { no:"01", tag:"Owned Media · Douyin", title:"Finding 3.16M views in an everyday dorm moment", desc:"Built a relatable scenario for university students with fast setup and sharp contrast. Owned ideation, on-camera performance, shooting, editing and publishing.", stats:["3.16M views","68K likes","59K shares"], image:"/media/douyin-profile.jpg", insight:"High-share content often begins with an immediate “that’s so me” moment." },
      { no:"02", tag:"Owned Media · RED", title:"Meeting students at the emotional peak of exam season", desc:"Used a direct pain-point cover and companion-like storytelling to answer the emotional needs of female university students before postgraduate entrance exams.", stats:["100K impressions","9,106 likes","100+ follows"], image:"/media/xhs-hit.png", insight:"A trend works when timing and emotional utility meet." },
      { no:"03", tag:"NetEase Media · Operations", title:"From trend list to final cut — independently", desc:"Operated the “Huiwen Youth” WeChat video account, covering topics, scripts, editing, publishing layouts and weekly performance reviews.", stats:["30K+ avg. views","48% share growth","32 scripts"], image:"/media/profile-06.jpg", insight:"I assess relevance through timing, audience fit, brand tone, added value and risk." },
      { no:"04", tag:"Cultural Tourism · Project Lead", title:"Turning Dunhuang from something to see into a world to enter", desc:"Led a five-person team to build an immersive IP loop spanning story experience, physical scenes and cultural merchandise.", stats:["Funded in 2025","Provincial round","4 scripts planned"], image:"/media/dunhuang-case.jpg", insight:"Familiar interactive storytelling lowers the barrier to heritage culture." },
    ],
    capabilityLabel:"CONTENT SYSTEM", capabilityTitle:"From insight to iteration",
    capabilities:[["01","Trend sensing","Track cross-platform signals and assess timing and shareability."],["02","Audience insight","Read search, comments and performance data for real user needs."],["03","Topic strategy","Find the intersection of a live topic and the account’s identity."],["04","Copy & scripts","Write headlines, social copy, interviews, short-video scripts and show concepts."],["05","Visual & editing","Create covers, layouts, edits and motion packages with PR, PS and DaVinci."],["06","Performance review","Turn views, engagement, shares and feedback into repeatable lessons."]],
    workLabel:"CREATIVE WORK", workTitle:"Film, design and photography", workIntro:"Beyond operations, I keep training visual storytelling and composition.", tabs:["Film","Graphic Design","Photography"],
    experienceLabel:"EXPERIENCE", experienceTitle:"Judgment and execution across content environments",
    experiences:[["2025.09—2026.02","CTN Macao","Social Media Operations","Produced and published culture and travel stories, refined headlines, covers and reading flow, contributing to 20% monthly readership growth."],["2025.06—2025.09","Tencent Video · Mr. Magic Song","Casting Director","Supported early-stage planning, artist outreach, interviews and production coordination."],["2025.03—2025.06","Haixi Media · Let’s Open Mic","Content Planning & Production","Worked on positioning, artist profiles and story directions across production teams."],["2024.02—2024.06","NetEase Media","Content Operations","Owned the short-video workflow and contributed to field interviews and long-form profiles."]],
    aboutLabel:"ABOUT ME", aboutTitle:"Sensitive to trends, curious about real people", aboutText:"I’m a postgraduate student in Drama and Film Studies. My strength is turning creative instinct into execution: I can track online sentiment, write, design, edit and read the numbers. I’m looking to grow inside an internet content team where fast feedback makes the work sharper.",
    available:"Available immediately · 5 days/week · 6 months", contact:"Contact me", location:"Studying in Lanzhou · Based in Dongguan · Open to major cities", footer:"Content should be seen — and worth remembering.",
  },
};

const designImages = ["design-1.jpg","design-2.jpg","design-3.jpg","design-4.jpg","design-5.jpg","design-6.jpg"];
const photoImages = ["photo-16.jpg","photo-34.jpg","photo-29.jpg","photo-20.jpg","photo-22.jpg","photo-23.jpg"];

export default function Home() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const [tab, setTab] = useState(0);
  const t = content[lang];
  const filmWorks = [
    ["/media/documentary-poster.png", lang === "zh" ? "纪录片《田鼠大婶·裴爱民》" : "Documentary · Auntie Pei", lang === "zh" ? "制片人 / 导演" : "Producer / Director"],
    ["/media/profile-12.jpg", lang === "zh" ? "AI影像《觉醒·飞天》" : "AI Film · Awakening Feitian", lang === "zh" ? "导演 / 剪辑" : "Director / Editor"],
    ["/media/profile-07.jpg", lang === "zh" ? "MV《干杯》" : "Music Video · Cheers", lang === "zh" ? "导演 / 剪辑" : "Director / Editor"],
  ];

  return (
    <main>
      <header className="nav-shell">
        <a className="wordmark" href="#top" aria-label="Back to top">BAI<span>XY</span></a>
        <nav>{t.nav.map((item, i) => <a key={item} href={["#cases","#skills","#work","#experience","#about"][i]}>{item}</a>)}</nav>
        <button className="lang" onClick={() => setLang(lang === "zh" ? "en" : "zh")} aria-label="切换中英文">{lang === "zh" ? "EN" : "中"}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow">{t.role}</p>
          <h1>{t.headline}</h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions"><a className="button primary" href="#cases">{t.view}<span>↘</span></a><a className="button text" href="/docs/resume.docx" download>{t.resume}<span>↓</span></a></div>
        </div>
        <div className="hero-visual reveal delay">
          <div className="portrait-frame"><img src="/media/profile-12.jpg" alt={lang === "zh" ? "柏欣悦个人形象照" : "Portrait of Jerry Bai"}/></div>
          <span className="vertical-note">CONTENT / CULTURE / PEOPLE / 2026</span>
          <div className="scribble">保持好奇<br/><i>stay curious</i></div>
        </div>
        <div className="metrics">
          {t.metrics.map(([value, label]) => <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="section cases" id="cases">
        <div className="section-heading"><div><p className="section-kicker">{t.casesLabel}</p><h2>{t.casesTitle}</h2></div><p>{t.casesIntro}</p></div>
        <div className="case-list">
          {t.cases.map((item, index) => <article className={`case-card case-${index + 1}`} key={item.no}>
            <div className="case-number">{item.no}</div>
            <div className="case-image"><img src={item.image} alt="" loading="lazy"/></div>
            <div className="case-content"><p className="case-tag">{item.tag}</p><h3>{item.title}</h3><p className="case-desc">{item.desc}</p><div className="case-stats">{item.stats.map(s => <span key={s}>{s}</span>)}</div><p className="case-insight"><b>INSIGHT</b>{item.insight}</p></div>
          </article>)}
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="section-heading light"><div><p className="section-kicker">{t.capabilityLabel}</p><h2>{t.capabilityTitle}</h2></div></div>
        <div className="skill-grid">{t.capabilities.map(([no,title,desc]) => <article className="skill" key={no}><span>{no}</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
      </section>

      <section className="section work" id="work">
        <div className="section-heading"><div><p className="section-kicker">{t.workLabel}</p><h2>{t.workTitle}</h2></div><p>{t.workIntro}</p></div>
        <div className="tabs" role="tablist">{t.tabs.map((label,i) => <button className={tab === i ? "active" : ""} onClick={() => setTab(i)} key={label}>{label}<sup>0{i === 0 ? 3 : 6}</sup></button>)}</div>
        {tab === 0 && <div className="film-grid">{filmWorks.map(([img,title,role]) => <article className="film-card" key={title}><img src={img} alt="" loading="lazy"/><div><h3>{title}</h3><p>{role}</p><span>VIEW PROJECT ↗</span></div></article>)}</div>}
        {tab === 1 && <div className="gallery design-gallery">{designImages.map((img,i) => <img key={img} src={`/media/${img}`} alt={`${lang === "zh" ? "平面设计作品" : "Graphic design work"} ${i+1}`} loading="lazy"/>)}</div>}
        {tab === 2 && <div className="gallery photo-gallery">{photoImages.map((img,i) => <img key={img} src={`/media/${img}`} alt={`${lang === "zh" ? "摄影作品" : "Photography"} ${i+1}`} loading="lazy"/>)}</div>}
      </section>

      <section className="section experience" id="experience">
        <div className="section-heading"><div><p className="section-kicker">{t.experienceLabel}</p><h2>{t.experienceTitle}</h2></div></div>
        <div className="timeline">{t.experiences.map(([date,company,role,desc]) => <article key={company}><time>{date}</time><h3>{company}</h3><h4>{role}</h4><p>{desc}</p></article>)}</div>
      </section>

      <section className="section about" id="about">
        <div className="about-images"><img className="about-main" src="/media/profile-06.jpg" alt=""/><img className="about-id" src="/media/profile-id.jpg" alt=""/></div>
        <div className="about-copy"><p className="section-kicker">{t.aboutLabel}</p><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><div className="available">● {t.available}</div><p className="location">{t.location}</p><div className="contact-links"><a href="mailto:Baixinyue6486@163.com">{t.contact} ↗</a><a href="tel:15775682252">157 7568 2252</a></div></div>
      </section>

      <footer><p>{t.footer}</p><div><a href="https://xhslink.cn/m/AoV0qgWkAxI" target="_blank" rel="noreferrer">小红书 ↗</a><a href="https://v.douyin.com/_Jrhbjqmp-E/" target="_blank" rel="noreferrer">抖音 ↗</a><span>© 2026 BAI XINYUE</span></div></footer>
    </main>
  );
}
