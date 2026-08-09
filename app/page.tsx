"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

const navItems = [
  { id: "about", label: "关于我", cat: 1 },
  { id: "operations", label: "运营案例", cat: 2 },
  { id: "writing", label: "文字图像", cat: 3 },
  { id: "visual", label: "影像创作", cat: 4 },
  { id: "projects", label: "项目策划", cat: 5 },
];

const skills = ["热点洞察", "文案", "运营", "设计", "拍摄", "剪辑", "策划"];
const workflow = ["洞察", "策划", "制作", "发布", "复盘"];
const operationCases = [
  {
    platform: "网易上流工作室-会问青年视频号",
    dataLabel: "视频号",
    detailName: "网易上流工作室-会问青年视频号",
    stat: "10万+",
    statLabel: "单条视频播放",
    note: "整体播放量提升10% · 转发量提升48%",
    title: "从热点判断到完整内容落地",
    summary: "独立完成选题、脚本、剪辑、排版与复盘；月均产出20+条视频。",
    image: "/media/operations/netease/top-video.jpg",
    images: ["/media/operations/netease/top-video.jpg", "/media/operations/netease/data-4.png", "/media/operations/netease/data-1.jpg", "/media/operations/netease/data-2.jpg", "/media/operations/netease/data-3.jpg"],
    results: ["单条视频播放10万+", "实现涨粉3000+", "整体播放量提升10%", "转发量提升48%"],
    role: "内容运营",
    links: [
      ["陈桂林圣杯", "https://weixin.qq.com/sph/Athg4JKOyK"],
      ["京沪高铁", "https://weixin.qq.com/sph/ARuFjKWmQi"],
      ["西班牙嗑瓜子", "https://weixin.qq.com/sph/AxBq4k2RO4"],
      ["图图爸爸", "https://weixin.qq.com/sph/A1baq4wtF0"],
    ],
  },
  {
    platform: "澳门文化旅游公众号",
    dataLabel: "公众号",
    detailName: "排版编辑",
    stat: "+20%",
    statLabel: "月均阅读量",
    note: "公众号内容发布 · 排版 · 视频剪辑",
    title: "文化旅游内容的稳定运营",
    summary: "负责澳门文化旅游报公众号排版、内容发布与视频剪辑，参与选题和账号内容优化。",
    image: "/media/operations/macau/macau-1.jpg",
    images: ["/media/operations/macau/macau-1.jpg", "/media/operations/macau/macau-2.jpg", "/media/operations/macau/macau-3.jpg"],
    results: ["月均阅读量提升20%", "公众号内容发布", "图文排版", "视频剪辑"],
    role: "新媒体运营",
    links: [
      ["澳门文旅案例 01", "https://mp.weixin.qq.com/s/8J-N4jCFVlKDGyxKGsq4cA"],
      ["澳门文旅案例 02", "https://mp.weixin.qq.com/s/HrsT46PC0TlA0vl_cvdKZQ"],
      ["澳门文旅案例 03", "https://mp.weixin.qq.com/s/iyq0QIBKjbNsOXktTRhd5Q"],
    ],
  },
  {
    platform: "小红书",
    dataLabel: "小红书",
    detailName: "创作",
    stat: "10万",
    statLabel: "爆款笔记曝光",
    note: "1.6万赞藏 · 单篇9000+赞",
    title: "大学校园与生活方式的内容增长",
    summary: "围绕用户情绪与实用价值设计选题，爆款笔记获得9000+赞、1500+收藏，并带来100+新增粉丝。",
    image: "/media/operations/xhs/xhs-6.jpg",
    images: ["/media/operations/xhs/xhs-3.jpg", "/media/operations/xhs/xhs-1.jpg", "/media/operations/xhs/xhs-2.jpg", "/media/operations/xhs/xhs-4.jpg", "/media/operations/xhs/xhs-5.jpg"],
    results: ["累计赞藏1.6万", "爆款曝光10万", "单篇9000+赞", "新增粉丝100+"],
    role: "个人账号运营",
    links: [
      ["进入主页", "https://xhslink.cn/m/AoV0qgWkAxI"],
      ["考试爆款", "http://xhslink.cn/o/7u8PPHjS7UX"],
      ["综艺热评", "http://xhslink.cn/o/ARYZUh6RIOB"],
      ["睫毛软广", "http://xhslink.cn/o/5IkTtfWtQ3a"],
    ],
  },
  {
    platform: "抖音",
    dataLabel: "抖音",
    detailName: "创作",
    stat: "316万",
    statLabel: "单条最高播放",
    note: "账号累计获赞11.1万",
    title: "大学生活的切片与情绪的共鸣",
    summary: "以真实大学生校园场景、强共鸣开头和节奏化剪辑完成传播；多个案例进入百万播放区间。",
    image: "/media/operations/douyin/douyin-4.jpg",
    images: ["/media/operations/douyin/douyin-1.jpg", "/media/operations/douyin/douyin-2.jpg", "/media/operations/douyin/douyin-3.jpg"],
    results: ["单条最高316万播放", "账号累计获赞11.1万", "高铁案例151.1万播放", "图书馆案例54万播放"],
    role: "个人账号运营",
    links: [
      ["大学生高铁", "https://v.douyin.com/rnB37vHh-Ag/"],
      ["大学生宿舍日常", "https://v.douyin.com/eAmk99X-IY4/"],
      ["大学图书馆", "https://v.douyin.com/fKRln6dHQu8/"],
      ["进入主页", "https://v.douyin.com/_Jrhbjqmp-E/"],
    ],
  },
];
type WritingItem = { title: string; category: string; pages: string[]; description: string; externalUrl?: string };
const writingItems: WritingItem[] = [
  { title: "会问青年视频脚本", category: "热点选题 / 视频文案", pages: ["/media/text/huiwen-topics.jpg", "/media/text/huiwen-full/topics.png", "/media/text/huiwen-script.jpg", "/media/text/huiwen-full/fujian-youshen.png", "/media/text/huiwen-full/hu-yingjun.png"], description: "完成热点拆解、选题策划与口播脚本写作，将信息密度、叙事节奏和传播钩子统一到短视频表达中。" },
  { title: "非遗匠人公众号推文", category: "人物采访 / 长图文", pages: ["/media/text/huiwen-full/intangible-interview.jpg"], externalUrl: "https://mp.weixin.qq.com/s/KgV62bNCZOLhSf1FMXXp9A", description: "围绕非遗龙舟匠人展开资料研究、采访提纲与人物叙事，点击原文跳转阅读完整推文。" },
  { title: "纪录片《田鼠大婶》拍摄大纲", category: "纪录片调研 / 拍摄方案", pages: Array.from({ length: 12 }, (_, index) => `/media/text/fieldmouse-outline/page-${String(index + 1).padStart(2, "0")}.jpg`), description: "完成前期人物调研、故事剧本、六段式拍摄结构、采访设计、声音方案及现场拍摄重点规划。" },
  { title: "《觉醒·飞天》AI分镜头脚本", category: "42镜完整分镜 / 3分50秒", pages: Array.from({ length: 26 }, (_, index) => `/media/text/ai-storyboard/page-${index + 1}.png`), description: "以敦煌飞天与超级AI“须弥”的冲突为核心，完成故事设定、角色设计及42镜完整分镜头脚本。" },
  { title: "原创《幸福的本能》戏剧剧本", category: "原创戏剧剧本", pages: Array.from({ length: 12 }, (_, index) => `/media/text/original-drama-full/page-${String(index + 1).padStart(2, "0")}.jpg`), description: "原创戏剧剧本，由柏欣悦编剧；网站提供完整逐页预览，不开放源文件下载。" },
];
const videos = [
  { title: "纪录片《田鼠大婶》", role: "制片人", cover: "/media/videos/documentary-cover-original.png", src: "/media/videos/documentary.m4v", type: "video/mp4", description: "人物纪录片，参与前期调研、人物沟通、现场执行与成片统筹。" },
  { title: "AI短片《觉醒·飞天》", role: "编剧 / AI影像创作", cover: "/media/videos/ai-video-cover.jpg", src: "/media/videos/ai-video.m4v", type: "video/mp4", description: "全AI制作赛博国风短片，以敦煌壁画修复为故事入口，探索传统文化与未来科技的碰撞。" },
  { title: "MV《干杯》", role: "导演 / 剪辑", cover: "/media/videos/mv-mayday-cover.jpg", src: "/media/videos/mv.m4v", type: "video/mp4", description: "完成MV创意、现场调度与导演剪辑，用生活化镜头组织青春群像。" },
];
const projects = [
  { name: "腾讯视频音综《魔力歌先生》", type: "全部图像资料", summary: "腾讯视频S+音乐综艺《魔力歌先生》担任选角导演，参与前期策划、艺人资料整理、采访流程设计与录制协调，并完成曾一鸣、刘可夫等艺人建联邀约。", tags: ["选角导演", "艺人建联", "录制执行"], images: ["/media/projects/magic/magic-8-cropped.jpg", "/media/projects/magic/magic-7.jpg", "/media/projects/magic/magic-4.jpg", "/media/projects/magic/magic-1.jpg", "/media/projects/magic/magic-2.jpg", "/media/projects/magic/magic-3.jpg", "/media/projects/magic/magic-6.jpg"], links: [["项目片段 01", "https://v.douyin.com/VJxCIvM535k/"], ["项目片段 02", "https://v.douyin.com/qru6oLS7lng/"]] },
  { name: "优酷视频音综《一起开麦吧》", type: "图像资料展示", summary: "北京卫视×优酷S+音乐综艺。参与节目定位、选手画像、人物故事线与内容策划，并协同推进项目执行。", tags: ["内容策划", "人物画像", "项目执行"], images: ["/media/projects/openmic/openmic-1.jpg", "/media/projects/openmic/openmic-2.jpg", "/media/projects/openmic/openmic-3-cropped.jpg", "/media/projects/openmic/openmic-4-cropped.jpg"], links: [] },
  { name: "敦煌IP沉浸式剧本杀", type: "完整PDF · 31页", summary: "以丝路文化传承为主题的沉浸式文旅创业项目。担任项目负责人，统筹5人团队完成策划、剧本与协调工作，项目晋级2026年“挑战杯”甘肃省赛。", tags: ["项目负责人", "文旅策划", "剧本创作"], images: Array.from({ length: 33 }, (_, index) => index + 1).filter(number => ![31, 32].includes(number)).map(number => `/media/projects/dunhuang-full/page-${String(number).padStart(2, "0")}.jpg`), links: [] },
  { name: "《出发吧，兰州》", type: "完整PDF · 32页", summary: "原创城市文化综艺策划案，以兰州在地文化、城市空间和年轻化表达为核心，完成节目定位、环节设计与视觉化提案。", tags: ["综艺策划", "城市文化", "内容设计"], images: Array.from({ length: 35 }, (_, index) => index + 1).filter(number => ![24, 34, 35].includes(number)).map(number => `/media/projects/lanzhou-full/page-${String(number).padStart(2, "0")}.jpg`), links: [] },
];
const experiences = [
  { period: "2024.02—2024.06", company: "网易传媒科技（北京）有限公司", role: "内容运营", summary: "独立完成选题、脚本、剪辑、排版与复盘，推动整体播放量提升10%、转发量提升48%。" },
  { period: "2025.09—2026.02", company: "澳门文化旅游CTNMACAO", role: "新媒体运营", summary: "负责公众号排版、内容发布与视频剪辑，参与机构账号内容优化，月均阅读量提升约20%。" },
  { period: "2025.03—2025.09", company: "北京海西传媒", role: "内容策划 / 选角导演", summary: "参与《一起开麦吧》《魔力歌先生》前期策划、人物画像、艺人建联、流程统筹与录制执行。" },
];
const software = ["Photoshop", "Premiere", "剪映", "Canva", "Office", "秀米", "Excel", "Codex"];
const photographyOrder = [8, 3, 5, 27, 25, 28, 31, 33, 34, 16, 20, 19, 15, 6, 1];
const photographyItems = photographyOrder.map((number, index) => ({
  label: `摄影作品 ${String(index + 1).padStart(2, "0")}`,
  src: `/portfolio-images/摄影作品_${String(number).padStart(2, "0")}.jpg`,
}));
const posterItems = [1, 2, 3, 4, 5, 6].map(number => ({ number, src: `/media/design-${number}.jpg` }));

function galleryPosition(distance: number) {
  if (Math.abs(distance) > 3) return "gallery-pos-far";
  if (distance < 0) return `gallery-pos-n${Math.abs(distance)}`;
  return `gallery-pos-p${distance}`;
}

function Cat({ number, className = "" }: { number: number; className?: string }) {
  return <img className={`cat-art ${className}`} src={`/media/kawaii-cats/cat-${number}.png`} alt="" draggable={false} />;
}

function Slot({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`content-slot ${className}`}><span>{label}</span><i /><i /><i /></div>;
}

function SectionTitle({ no, title, english }: { no: string; title: string; english: string }) {
  return (
    <header className="section-title">
      <span>{no}</span>
      <div><p>{english}</p><h2>{title}</h2></div>
      <i aria-hidden="true" />
    </header>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [progress, setProgress] = useState(0);
  const [catClicks, setCatClicks] = useState(0);
  const [showEgg, setShowEgg] = useState(false);
  const [activeOperation, setActiveOperation] = useState<number | null>(null);
  const [activeWriting, setActiveWriting] = useState(0);
  const [activeWritingPage, setActiveWritingPage] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const [openProject, setOpenProject] = useState(0);
  const [activePhoto, setActivePhoto] = useState(0);
  const [activePoster, setActivePoster] = useState(0);
  const [previewItem, setPreviewItem] = useState<{ label: string; kind: "poster" | "photo" | "writing" | "project"; src?: string; description?: string } | null>(null);
  const galleryDragStart = useRef<number | null>(null);
  const posterDragStart = useRef<number | null>(null);
  const posterWasDragged = useRef(false);

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    );
    sections.forEach(section => observer.observe(section));

    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(1, window.scrollY / total) : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  useEffect(() => {
    if (activeOperation === null && !previewItem) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (previewItem) setPreviewItem(null);
      else setActiveOperation(null);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeOperation, previewItem]);

  const handleHeroCat = () => {
    const next = catClicks + 1;
    if (next >= 3) {
      setShowEgg(true);
      setCatClicks(0);
      window.setTimeout(() => setShowEgg(false), 3200);
    } else {
      setCatClicks(next);
    }
  };

  const moveGallery = (direction: number) => {
    setActivePhoto(current => (current + direction + photographyItems.length) % photographyItems.length);
  };

  const galleryDistance = (index: number) => {
    let distance = index - activePhoto;
    if (distance > photographyItems.length / 2) distance -= photographyItems.length;
    if (distance < -photographyItems.length / 2) distance += photographyItems.length;
    return distance;
  };

  const handleGalleryDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (galleryDragStart.current === null) return;
    const distance = event.clientX - galleryDragStart.current;
    if (Math.abs(distance) > 65) {
      moveGallery(distance > 0 ? -1 : 1);
      galleryDragStart.current = event.clientX;
    }
  };

  const movePoster = (direction: number) => {
    setActivePoster(current => (current + direction + posterItems.length) % posterItems.length);
  };

  const handlePosterPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (posterDragStart.current === null) return;
    const distance = event.clientX - posterDragStart.current;
    posterDragStart.current = null;
    if (Math.abs(distance) > 45) {
      posterWasDragged.current = true;
      movePoster(distance > 0 ? -1 : 1);
    }
  };

  const selectWriting = (index: number) => {
    setActiveWriting(index);
    setActiveWritingPage(0);
  };

  const moveWritingPage = (direction: number) => {
    const pageCount = writingItems[activeWriting].pages.length;
    if (!pageCount) return;
    setActiveWritingPage(current => (current + direction + pageCount) % pageCount);
  };

  return (
    <main>
      <aside className="cat-nav" aria-label="作品集章节导航">
        <div className="paw-progress" aria-hidden="true">
          <i style={{ height: `${progress * 100}%` }} />
          {[0, 1, 2, 3, 4, 5].map(paw => <span key={paw} className={progress >= paw / 5 ? "lit" : ""}>●</span>)}
        </div>
        {navItems.map(item => (
          <a href={`#${item.id}`} className={activeSection === item.id ? "active" : ""} key={item.id} aria-label={item.label}>
            <Cat number={item.cat} /><span>{item.label}</span>
          </a>
        ))}
        <a className="nav-contact" href="#contact" aria-label="联系我">♡</a>
      </aside>

      <section className="hero" id="top">
        <nav className="hero-text-nav" aria-label="封面快捷导航">
          <a href="#about">关于我</a><a href="#operations">运营案例</a><a href="#writing">文字图像</a><a href="#visual">影像创作</a><a href="#projects">项目策划</a><a href="#contact">联系我</a>
        </nav>
        <div className="hero-doodle doodle-heart">♡</div>
        <div className="hero-doodle doodle-star">✦</div>
        <div className="hero-copy">
          <p className="eyebrow">BAI XINYUE · PERSONAL</p>
          <h1>PORTFOLIO</h1>
          <p className="hero-name">柏欣悦</p>
          <div className="hero-contact"><span>EMAIL · Baixinyue6486@163.com</span><span>TEL · 157 7568 2252</span></div>
          <a className="soft-button" href="#about">进入作品集 <b>↓</b></a>
        </div>
        <div className="hero-visual">
          <img className="hero-character" src="/media/hero-green-character.png" alt="青绿色贝雷帽人物插画" />
          <button className={`hero-cat hero-cat-cover ${catClicks ? "tapped" : ""}`} onClick={handleHeroCat} aria-label="点击首页小猫">
            <Cat number={5} />
            <span>点点我</span>
          </button>
        </div>
        {showEgg && <div className="easter-egg" role="status">热点会过去，洞察会留下。</div>}
        <div className="hero-ribbon">KAWAII CONTENT STUDIO · KAWAII CONTENT STUDIO ·</div>
      </section>

      <section className="section about-section" id="about">
        <SectionTitle no="01" title="关于我" english="ABOUT ME" />
        <div className="about-board">
          <div className="board-tape">PERSONAL FILE · 个人档案</div>
          <div className="board-grid">
            <div className="polaroid-column">
              <div className="polaroid-frame"><img src="/portfolio-images/个人形象照_12.jpg" alt="柏欣悦个人形象照" /><span>BAI XINYUE</span></div>
              <div className="personal-info-card"><b>个人信息</b><span>西北师范大学 · 戏剧与影视学</span><span>在读研二 · 2028届</span><span>可立即到岗 · 可连续实习6个月</span><a href="/docs/resume.pdf" download>下载 PDF 简历 <span>↓</span></a></div>
            </div>
            <div className="experience-column">
              <div className="board-heading"><p>EXPERIENCE</p><h3>实习经历</h3></div>
              {experiences.map((item, index) => (
                <article key={item.company}><span>0{index + 1}</span><div><small>{item.period}</small><h4>{item.company}</h4><p><b>{item.role}</b>{item.summary}</p></div></article>
              ))}
              <div className="board-bottom">
                <div className="software-strip"><b>SOFTWARE</b>{software.map(item => <span key={item}>{item}</span>)}</div>
                <div className="ability-strip"><b>CORE SKILLS</b>{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
                <div className="workflow-strip"><b>CONTENT WORKFLOW</b>{workflow.map((step, index) => <span key={step}>{step}{index < workflow.length - 1 && <i>→</i>}</span>)}</div>
              </div>
            </div>
          </div>
          <Cat number={1} className="about-board-cat" />
        </div>
      </section>

      <section className="section operations-section" id="operations">
        <SectionTitle no="02" title="运营案例" english="CONTENT OPERATIONS" />
        <div className="data-desk">
          <div className="desk-label"><p>DATA FIRST</p><h3>先看我的运营数据</h3><span>用结果验证内容判断，也用复盘推动下一次增长</span></div>
          <div className="notes-grid">
            {operationCases.map((item, index) => (
              <article className={`data-note note-${index + 1}`} key={item.platform}>
                <span>0{index + 1}</span><h3>{item.dataLabel}</h3><strong>{item.stat}</strong><p>{item.statLabel}<br />{item.note}</p><i>✦</i>
              </article>
            ))}
          </div>
          <Cat number={2} className="desk-cat" />
        </div>
        <div className="case-heading"><div><p>CASE STUDIES</p><h3>平台案例展示</h3></div><span>点击卡片查看完整案例</span></div>
        <div className="case-bento">
          {operationCases.map((item, index) => {
            const bentoImages = [item.image, ...item.images.filter(src => src !== item.image)].slice(0, 3);
            return (
              <button className={`bento-case bento-case-${index + 1}`} key={item.platform} onClick={() => setActiveOperation(index)} aria-haspopup="dialog">
                <div className="bento-collage">{bentoImages.map((src, imageIndex) => <img src={src} alt="" key={src} className={`collage-${imageIndex + 1}`} />)}</div>
                <div className="bento-copy"><span>CASE 0{index + 1} · {item.role}</span><h4>{item.platform}</h4><strong>{item.stat}</strong><p>{item.title}</p><i>查看完整案例 ↗</i></div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="section writing-section" id="writing">
        <SectionTitle no="03" title="文字图像" english="WRITING & GRAPHIC" />
        <div className="writing-layout">
          <div className="creative-shelf">
            <div className="shelf-label"><p>文字创作</p><span>点击作品展开预览</span></div>
            {writingItems.map((item, index) => (
              <div className={`book-row book-row-${index + 1} ${index === 0 ? "book-row-first" : ""} ${index === writingItems.length - 1 ? "book-row-last" : ""}`} key={item.title}>
                <button className={`book-item ${activeWriting === index ? "active" : ""}`} onClick={() => selectWriting(index)}><span>0{index + 1}</span><strong>{item.title}</strong><i>{item.externalUrl ? "" : "↗"}</i></button>
                {item.externalUrl && <a className="book-external-link" href={item.externalUrl} target="_blank" rel="noreferrer" onClick={event => event.stopPropagation()}>原文跳转 ↗</a>}
              </div>
            ))}
            <Cat number={3} className="shelf-cat" />
          </div>
          <div className="featured-writing">
            <p>FEATURED · {writingItems[activeWriting].category}</p>
            {writingItems[activeWriting].pages.length > 0 ? <>
              <div className="writing-page-viewer"><button className="writing-main-page" onClick={() => setPreviewItem({ label: `${writingItems[activeWriting].title} · 第${activeWritingPage + 1}页`, kind: "writing", src: writingItems[activeWriting].pages[activeWritingPage], description: writingItems[activeWriting].description })}><img src={writingItems[activeWriting].pages[activeWritingPage]} alt={`${writingItems[activeWriting].title}第${activeWritingPage + 1}页`} /><span>点击放大 ↗</span></button><div><button onClick={() => moveWritingPage(-1)}>←</button><span>{String(activeWritingPage + 1).padStart(2, "0")} / {String(writingItems[activeWriting].pages.length).padStart(2, "0")}</span><button onClick={() => moveWritingPage(1)}>→</button></div></div>
              <div className="writing-thumb-rail">{writingItems[activeWriting].pages.map((src, pageIndex) => <button className={activeWritingPage === pageIndex ? "active" : ""} key={src} onClick={() => setActiveWritingPage(pageIndex)}><img src={src} alt="" loading="lazy" /><span>{String(pageIndex + 1).padStart(2, "0")}</span></button>)}</div>
            </> : <a className="writing-external-link" href={writingItems[activeWriting].externalUrl} target="_blank" rel="noreferrer"><span>完整公众号原文</span><strong>原文跳转</strong><i>↗</i></a>}
            <h3>{writingItems[activeWriting].title}</h3><span>{writingItems[activeWriting].description}</span>
          </div>
        </div>
        <div className="poster-stack-gallery">
          <div className="wall-title"><p>POSTER DESIGN</p><h3>海报设计</h3><span>拖动或点击切换 · 点击大图预览</span></div>
          <div
            className="poster-stack-stage"
            onPointerDown={event => { event.currentTarget.setPointerCapture(event.pointerId); posterDragStart.current = event.clientX; posterWasDragged.current = false; }}
            onPointerUp={handlePosterPointerUp}
            onPointerCancel={() => { posterDragStart.current = null; posterWasDragged.current = false; }}
          >
            {posterItems.map((item, index) => {
              const position = (index - activePoster + posterItems.length) % posterItems.length;
              return (
                <button
                  className={`poster-stack-card poster-stack-pos-${position}`}
                  key={item.number}
                  aria-label={`海报 ${String(item.number).padStart(2, "0")}大图预览`}
                  onClick={() => {
                    if (posterWasDragged.current) {
                      posterWasDragged.current = false;
                      return;
                    }
                    setPreviewItem({ label: `海报设计 ${String(item.number).padStart(2, "0")}`, kind: "poster", src: item.src, description: "平面设计作品大图预览" });
                  }}
                >
                  <img src={item.src} alt={`海报设计 ${String(item.number).padStart(2, "0")}`} draggable={false} />
                  <span>POSTER {String(item.number).padStart(2, "0")} · VIEW ↗</span>
                </button>
              );
            })}
          </div>
          <div className="poster-stack-controls">
            <button onClick={() => movePoster(-1)} aria-label="上一张海报">←</button>
            <span>{String(activePoster + 1).padStart(2, "0")} / {String(posterItems.length).padStart(2, "0")}</span>
            <button onClick={() => movePoster(1)} aria-label="下一张海报">→</button>
          </div>
          <Cat number={1} className="poster-cat" />
        </div>
      </section>

      <section className="section visual-section" id="visual">
        <SectionTitle no="04" title="影像创作" english="VISUAL CREATION" />
        <div className="photo-heading"><div><p>PHOTOGRAPHY</p><h3>摄影作品</h3></div><span>拖动弧形画廊 · 点击查看大图</span></div>
        <div className="circular-gallery-shell">
          <div className="circular-gallery"
            onPointerDown={event => { galleryDragStart.current = event.clientX; }}
            onPointerMove={handleGalleryDrag}
            onPointerUp={() => { galleryDragStart.current = null; }}
            onPointerLeave={() => { galleryDragStart.current = null; }}
          >
            {photographyItems.map((item, index) => {
              const distance = galleryDistance(index);
              return (
                <button key={item.src} className={`circular-photo ${galleryPosition(distance)} ${distance === 0 ? "active" : ""}`} onClick={() => distance === 0 ? setPreviewItem({ label: item.label, kind: "photo", src: item.src }) : setActivePhoto(index)}>
                  <img src={item.src} alt={item.label} draggable={false} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>
          <div className="gallery-controls"><button onClick={() => moveGallery(-1)} aria-label="上一张摄影作品">←</button><span>{String(activePhoto + 1).padStart(2, "0")} / {photographyItems.length}</span><button onClick={() => moveGallery(1)} aria-label="下一张摄影作品">→</button></div>
          <Cat number={3} className="gallery-cat" />
        </div>
        <div className="video-cabinet">
          <div className="cabinet-top"><p>VIDEO SHELF</p><h3>影像展示架</h3><span>选择作品后在主屏幕播放</span></div>
          <div className="video-display">
            <div className="video-screen real-video-player"><video key={videos[activeVideo].src} controls controlsList="nodownload noplaybackrate" disablePictureInPicture preload="metadata" poster={videos[activeVideo].cover} onContextMenu={event => event.preventDefault()}><source src={videos[activeVideo].src} type={videos[activeVideo].type} />当前浏览器暂不支持视频播放。</video></div>
            <div className="video-info"><span>NOW SHOWING · 0{activeVideo + 1}</span><h4>{videos[activeVideo].title}</h4><b>{videos[activeVideo].role}</b><p>{videos[activeVideo].description}</p><small>原画质在线播放；仅供在线预览，不提供下载入口。</small></div>
          </div>
          <div className="video-shelf">
            {videos.map((video, index) => <button className={activeVideo === index ? "active" : ""} onClick={() => setActiveVideo(index)} key={video.title}><img src={video.cover} alt="" /><span>0{index + 1}</span><b>{video.title}</b></button>)}
          </div>
          <Cat number={4} className="video-cat" />
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <SectionTitle no="05" title="项目策划" english="PROJECT PLANNING" />
        <div className="file-cabinet">
          <div className="cabinet-sign"><span>PROJECT FILES</span><p>点击文件夹抽出项目详情</p></div>
          {projects.map((project, index) => (
            <article className={`project-folder folder-${index + 1} ${openProject === index ? "open" : ""}`} key={project.name}>
              <button onClick={() => setOpenProject(openProject === index ? -1 : index)} aria-expanded={openProject === index}>
                <span>0{index + 1}</span><div><small>{project.type}</small><h3>{project.name}</h3></div><b>{openProject === index ? "收起 −" : "打开 +"}</b>
              </button>
              <div className="folder-content">
                <div className="project-summary"><p>{project.summary}</p>{project.tags.map(tag => <span key={tag}>{tag}</span>)}{project.links.length > 0 && <div className="project-links">{project.links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noreferrer">{label} ↗</a>)}</div>}</div>
                <div className="project-document-heading"><h4>{index < 2 ? "全部工作图像" : "完整PDF预览"}</h4><span>共 {project.images.length} 页/张 · 左右滑动 · 点击放大</span></div>
                <div className="project-document-rail">{project.images.map((src, pageIndex) => <button key={src} onClick={() => setPreviewItem({ label: `${project.name} · ${index < 2 ? "图像" : "第"}${pageIndex + 1}${index < 2 ? "" : "页"}`, kind: "project", src, description: project.type })}><img src={src} alt={`${project.name}${pageIndex + 1}`} loading="lazy" /></button>)}</div>
              </div>
            </article>
          ))}
          <Cat number={5} className="cabinet-cat" />
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-heading"><span>06</span><p>CONTACT</p><h2>联系我</h2></div>
        <div className="contact-cluster">
          <img className="contact-character" src="/media/contact-blue-character.png" alt="深蓝色猫耳帽人物插画" />
          <div className="contact-card">
            <img className="qr-image" src="/media/wechat-qr.jpg" alt="柏欣悦微信二维码" />
            <div><p><span>微信</span>BaiBaiyueer</p><p><span>电话</span>157 7568 2252</p><p><span>邮箱</span>Baixinyue6486@163.com</p></div>
          </div>
          <Cat number={5} className="contact-cat" />
        </div>
        <a href="#top">返回顶部 ↑</a>
      </section>

      {activeOperation !== null && (
        <div className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-modal-title">
          <button className="case-modal-backdrop" onClick={() => setActiveOperation(null)} aria-label="关闭案例详情" />
          <div className="case-modal-window">
            <button className="case-modal-close" onClick={() => setActiveOperation(null)} aria-label="关闭案例详情" autoFocus>×</button>
            <article className={`case-workbench workbench-${activeOperation + 1}`}>
              <header><div><span>FULL CASE · 0{activeOperation + 1}</span><h3 id="case-modal-title">{operationCases[activeOperation].detailName}｜{operationCases[activeOperation].title}</h3><p>{operationCases[activeOperation].summary}</p></div><b>{operationCases[activeOperation].role}</b></header>
              <div className="case-result-grid">{operationCases[activeOperation].results.map(result => <strong key={result}>{result}</strong>)}</div>
              <div className="case-method"><span>洞察</span><i>→</i><span>策划</span><i>→</i><span>制作</span><i>→</i><span>发布</span><i>→</i><span>复盘</span></div>
              <div className="case-evidence-heading"><h4>完整图像资料</h4><span>左右滑动 · 点击放大</span></div>
              <div className="case-evidence-rail">{operationCases[activeOperation].images.map((src, imageIndex) => <button key={src} onClick={() => setPreviewItem({ label: `${operationCases[activeOperation].platform}案例资料 ${String(imageIndex + 1).padStart(2, "0")}`, kind: "project", src, description: operationCases[activeOperation].summary })}><img src={src} alt={`${operationCases[activeOperation].platform}案例资料${imageIndex + 1}`} /><span>{String(imageIndex + 1).padStart(2, "0")}</span></button>)}</div>
              <div className="case-link-row"><span className="case-link-hint">点击标签跳转链接</span><div className="case-links">{operationCases[activeOperation].links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noreferrer">{label} ↗</a>)}</div></div>
            </article>
          </div>
        </div>
      )}

      {previewItem && (
        <div className={`preview-modal preview-${previewItem.kind}`} role="dialog" aria-modal="true" aria-label={`${previewItem.label}大图预览`}>
          <button className="preview-backdrop" onClick={() => setPreviewItem(null)} aria-label="关闭预览" />
          <div className="preview-window">
            <header><div><small>{previewItem.kind.toUpperCase()} PREVIEW</small><h3>{previewItem.label}</h3></div><button onClick={() => setPreviewItem(null)} aria-label="关闭预览">×</button></header>
            {previewItem.src ? <img className="preview-artwork" src={previewItem.src} alt={previewItem.label} /> : <Slot label="作品大图预览位置" className="preview-slot" />}
            <p>{previewItem.description || "大图预览"}</p>
          </div>
        </div>
      )}
    </main>
  );
}
