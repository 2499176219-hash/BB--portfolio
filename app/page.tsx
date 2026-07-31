"use client";

import { useEffect, useState } from "react";

type LinkItem = { label: string; href: string };

const navItems = [
  ["01", "个人简历", "#resume"],
  ["02", "运营案例", "#operations"],
  ["03", "文字图像", "#writing"],
  ["04", "影像创作", "#visual"],
  ["05", "项目策划", "#projects"],
];

const operationCases = [
  {
    no: "01",
    name: "网易上流",
    subtitle: "会问青年 · 内容运营",
    color: "coral",
    description: "从热点监测、选题判断到脚本、剪辑、发布和复盘，独立完成短视频内容生产闭环，并参与非遗人物采访与深度撰稿。",
    stats: [["32+", "选题与脚本"], ["48%", "转发增长"], ["5.2万+", "人物稿阅读"]],
    images: [
      "/media/operations/netease/work.jpg",
      "/media/operations/netease/top-video.jpg",
      "/media/operations/netease/data-1.jpg",
      "/media/operations/netease/data-2.jpg",
      "/media/operations/netease/data-3.jpg",
    ],
    links: [
      { label: "陈桂林连掷九个圣杯", href: "https://weixin.qq.com/sph/Athg4JKOyK" },
      { label: "京沪高铁为什么总在亏", href: "https://weixin.qq.com/sph/ARuFjKWmQi" },
      { label: "西班牙人为什么爱嗑瓜子", href: "https://weixin.qq.com/sph/AxBq4k2RO4" },
      { label: "长大后才懂图图爸爸", href: "https://weixin.qq.com/sph/A1baq4wtF0" },
      { label: "龙舟匠人深度采访", href: "https://mp.weixin.qq.com/s/KgV62bNCZOLhSf1FMXXp9A" },
    ],
  },
  {
    no: "02",
    name: "小红书",
    subtitle: "个人账号 · 内容策划与运营",
    color: "pink",
    description: "围绕大学生生活、情绪节点与女性话题完成内容策划、封面文案和发布，通过真实表达建立用户共鸣。",
    stats: [["10万+", "单篇曝光"], ["9106", "单篇点赞"], ["100+", "单篇涨粉"]],
    images: [
      "/media/operations/xhs/xhs-1.jpg",
      "/media/operations/xhs/xhs-2.jpg",
      "/media/operations/xhs/xhs-3.jpg",
      "/media/operations/xhs/xhs-4.jpg",
      "/media/operations/xhs/xhs-5.jpg",
      "/media/operations/xhs/xhs-6.jpg",
    ],
    links: [
      { label: "进入小红书主页", href: "https://xhslink.cn/m/AoV0qgWkAxI" },
      { label: "考研情绪节点内容", href: "https://xhslink.cn/o/7u8PPHjS7UX" },
      { label: "《春色寄情人》内容", href: "https://xhslink.cn/o/ARYZUh6RIOB" },
      { label: "假睫毛种草内容", href: "https://xhslink.cn/o/5IkTtfWtQ3a" },
    ],
  },
  {
    no: "03",
    name: "抖音",
    subtitle: "个人账号 · 策划 / 出镜 / 拍摄 / 剪辑",
    color: "blue",
    description: "从宿舍、高铁、图书馆等高共识场景中提炼戏剧冲突，用快速节奏和生活化表演降低理解成本。",
    stats: [["316万", "单条最高播放"], ["6.8万", "单条点赞"], ["5.9万", "单条转发"]],
    images: [
      "/media/operations/douyin/douyin-1.jpg",
      "/media/operations/douyin/douyin-2.jpg",
      "/media/operations/douyin/douyin-3.jpg",
      "/media/operations/douyin/douyin-4.jpg",
    ],
    links: [
      { label: "进入抖音主页", href: "https://v.douyin.com/_Jrhbjqmp-E/" },
      { label: "女生宿舍日常", href: "https://v.douyin.com/eAmk99X-IY4/" },
      { label: "高铁车厢观察", href: "https://v.douyin.com/rnB37vHh-Ag/" },
      { label: "图书馆场景内容", href: "https://v.douyin.com/fKRln6dHQu8/" },
    ],
  },
  {
    no: "04",
    name: "澳门文化旅游报",
    subtitle: "公众号 · 新媒体运营",
    color: "yellow",
    description: "负责公众号选题、文案、图文编辑与排版发布，围绕澳门人文、历史和旅行内容优化标题与阅读路径。",
    stats: [["20%", "月阅读提升"], ["图文", "选题与排版"], ["多媒体", "素材整合"]],
    images: [
      "/media/operations/macau/macau-1.jpg",
      "/media/operations/macau/macau-2.jpg",
      "/media/operations/macau/macau-3.jpg",
    ],
    links: [
      { label: "澳门文旅代表作品 01", href: "https://mp.weixin.qq.com/s/8J-N4jCFVlKDGyxKGsq4cA" },
      { label: "澳门文旅代表作品 02", href: "https://mp.weixin.qq.com/s/HrsT46PC0TlA0vl_cvdKZQ" },
      { label: "澳门文旅代表作品 03", href: "https://mp.weixin.qq.com/s/iyq0QIBKjbNsOXktTRhd5Q" },
    ],
  },
];

const designImages = ["design-1.jpg", "design-2.jpg", "design-3.jpg", "design-4.jpg", "design-5.jpg", "design-6.jpg"];
const photoImages = ["photo-16.jpg", "photo-34.jpg", "photo-29.jpg", "photo-20.jpg", "photo-22.jpg", "photo-23.jpg"];

function Cat({ kind, className = "" }: { kind: 1 | 2 | 3; className?: string }) {
  return <span className={`cat cat-${kind} ${className}`} role="img" aria-label="手绘小猫贴纸" />;
}

function DoodleTitle({ no, title, english }: { no: string; title: string; english: string }) {
  return (
    <div className="doodle-title reveal">
      <span className="part">PART {no}</span>
      <strong>{no}</strong>
      <div><h2>{title}</h2><p>{english}</p></div>
    </div>
  );
}

function LinkList({ links }: { links: LinkItem[] }) {
  return (
    <div className="work-links">
      {links.map((link, index) => (
        <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
          <span>{String(index + 1).padStart(2, "0")}</span>{link.label}<b>↗</b>
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const openImage = (src: string, alt: string, className = "") => (
    <button className={`image-button ${className}`} onClick={() => setLightbox(src)} aria-label={`放大查看${alt}`}>
      <img src={src} alt={alt} loading="lazy" />
    </button>
  );

  return (
    <main>
      <section className="cover" id="top">
        <div className="cover-copy reveal">
          <h1>柏欣悦</h1>
          <div className="cover-contact">
            <p>微信：BaiBaiyueer</p>
            <p>邮箱：Baixinyue6486@163.com</p>
          </div>
        </div>
        <Cat kind={1} className="cover-cat-one" />
        <Cat kind={3} className="cover-cat-two" />
        <i className="doodle-star">☆</i><i className="doodle-flower">✿</i>
      </section>

      <nav className="chapter-nav" aria-label="作品集章节导航">
        <a href="#top" className="mini-name">柏欣悦</a>
        <div>{navItems.map(([no, label, href]) => <a href={href} key={href}><span>{no}</span>{label}</a>)}</div>
      </nav>

      <section className="contents paper-section" id="contents">
        <p className="hand-note reveal">今天来看点什么？</p>
        <div className="contents-heading reveal"><span>CONTENTS</span><h2>目录</h2></div>
        <div className="contents-list">
          {navItems.map(([no, label, href], index) => (
            <a href={href} key={href} className="reveal" style={{ transitionDelay: `${index * 60}ms` }}>
              <strong>{no}</strong><span>{label}</span><b>↘</b>
            </a>
          ))}
        </div>
        <Cat kind={2} className="contents-cat" />
      </section>

      <section className="chapter resume-section" id="resume">
        <DoodleTitle no="01" title="个人简历" english="ABOUT ME" />
        <div className="resume-layout">
          <div className="resume-paper reveal">
            {openImage("/media/resume-preview.jpg", "柏欣悦PDF个人简历")}
            <a className="sticker-link" href="/docs/resume.pdf" target="_blank">打开完整 PDF ↗</a>
          </div>
          <div className="resume-side reveal">
            <div className="id-photo"><img src="/media/profile-id-new.jpg" alt="柏欣悦证件照" /></div>
            <p className="marker">内容运营 / 策划 / 文案 / 视觉 / 影像</p>
            <div className="resume-facts">
              <span>戏剧与影视学硕士在读</span>
              <span>可立即到岗</span>
              <span>每周实习 5 天</span>
              <span>可连续实习 6 个月</span>
            </div>
            <Cat kind={3} />
          </div>
        </div>
      </section>

      <section className="chapter operations-section" id="operations">
        <DoodleTitle no="02" title="运营案例" english="CONTENT OPERATIONS" />
        <p className="chapter-intro reveal">热点不是终点，把判断落实为选题、内容和数据结果，才算完成闭环。</p>
        <div className="operation-stack">
          {operationCases.map((item, caseIndex) => (
            <article className={`operation-case ${item.color} reveal`} key={item.name}>
              <header>
                <span className="case-no">{item.no}</span>
                <div><p>{item.subtitle}</p><h3>{item.name}</h3></div>
                {caseIndex === 0 ? <Cat kind={1} /> : caseIndex === 2 ? <Cat kind={3} /> : null}
              </header>
              <div className="case-summary">
                <p>{item.description}</p>
                <div className="case-stats">{item.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
              </div>
              <div className={`case-collage collage-${item.images.length}`}>
                {item.images.map((src, index) => openImage(src, `${item.name}工作展示${index + 1}`, `tilt-${(index % 3) + 1}`))}
              </div>
              <LinkList links={item.links} />
            </article>
          ))}
        </div>
      </section>

      <section className="chapter writing-section" id="writing">
        <DoodleTitle no="03" title="文字图像" english="WRITING & SCRIPT" />
        <p className="chapter-intro reveal">脚本、采访、剧本和综艺文本：把脑海里的画面写成可以执行的内容。</p>
        <div className="writing-grid">
          <article className="writing-card lime reveal">
            <span>01 / 视频脚本</span><h3>会问青年视频脚本</h3>
            <p>结合热点、影视内容与社会情绪完成选题拆解、信息补充、结构设计和口语化表达。</p>
            <div className="writing-pair">
              {openImage("/media/text/huiwen-topics.jpg", "会问青年选题展示")}
              {openImage("/media/text/huiwen-script.jpg", "会问青年脚本展示")}
            </div>
          </article>
          <article className="writing-card cream reveal">
            <span>02 / 人物采访</span><h3>网易非遗人物采访</h3>
            <p>参与龙舟匠人采访与深度撰稿，用人物细节建立叙事温度，单篇累计阅读5.2万+。</p>
            {openImage("/media/text/netease-interview.jpg", "网易非遗人物采访稿")}
            <a href="https://mp.weixin.qq.com/s/KgV62bNCZOLhSf1FMXXp9A" target="_blank" rel="noreferrer">阅读发布作品 ↗</a>
          </article>
          <article className="writing-card cyber reveal">
            <span>03 / AI 分镜</span><h3>《赛博敦煌·灵韵重生》</h3>
            <p>3分50秒全AI赛博国风短片。以“算法与灵魂的碰撞”为主线，完成故事、角色、五幕结构和完整分镜设计。</p>
            <div className="storyboard-facts"><b>40</b><span>镜完整分镜</span><b>05</b><span>幕叙事结构</span><b>03</b><span>核心人物</span></div>
            <div className="story-sample"><em>镜头 01</em><strong>超远景 · 缓慢下压</strong><p>纯黑赛博空间中，翠绿色代码雨汇聚为半透明莫高窟。</p></div>
            <div className="doc-actions"><a href="/docs/cyber-dunhuang-storyboard.pdf" target="_blank">预览完整脚本 ↗</a><a href="/docs/cyber-dunhuang-storyboard.docx">DOCX ↓</a></div>
          </article>
          <article className="writing-card drama reveal">
            <span>04 / 原创剧本</span><h3>原创戏剧剧本《一路之下》</h3>
            <p>从人物关系、情境冲突到舞台行动，展示长篇叙事、对白和戏剧结构能力。</p>
            {openImage("/media/text/drama-preview.jpg", "原创戏剧剧本一路之下")}
            <a href="/docs/original-drama.pdf" target="_blank">查看完整剧本 ↗</a>
          </article>
          <article className="writing-card show reveal">
            <span>05 / 综艺台本</span><h3>原创综艺策划与台本</h3>
            <p>完成节目环节、主持串联、嘉宾互动和节奏设计，把创意转化为可录制的节目文本。</p>
            {openImage("/media/text/variety-preview.jpg", "原创综艺台本")}
            <a href="/docs/original-variety-script.pdf" target="_blank">查看完整台本 ↗</a>
          </article>
        </div>
      </section>

      <section className="chapter visual-section" id="visual">
        <DoodleTitle no="04" title="影像创作" english="VISUAL CREATION" />
        <div className="visual-block reveal">
          <div className="visual-label"><span>A</span><h3>静态视觉</h3><p>海报设计 / 摄影</p></div>
          <div className="poster-row">{designImages.map((image, index) => openImage(`/media/${image}`, `海报设计作品${index + 1}`))}</div>
          <div className="photo-wall">{photoImages.map((image, index) => openImage(`/media/${image}`, `摄影作品${index + 1}`))}</div>
        </div>
        <div className="visual-block film-zone reveal">
          <div className="visual-label"><span>B</span><h3>动态影像</h3><p>纪录片 / AI视频 / MV / 热门短视频</p></div>
          <div className="film-cards">
            <article><img src="/media/documentary-poster.jpg" alt="纪录片田鼠大婶裴爱民"/><span>纪录片</span><h4>《田鼠大婶·裴爱民》</h4><p>制片人 / 导演</p></article>
            <article><img src="/media/profile-12.jpg" alt="AI影像觉醒飞天"/><span>AI VIDEO</span><h4>《觉醒·飞天》</h4><p>导演 / 剪辑</p></article>
            <article><img src="/media/profile-07.jpg" alt="MV干杯"/><span>MUSIC VIDEO</span><h4>MV《干杯》</h4><p>导演 / 剪辑</p></article>
            <article><img src="/media/operations/netease/top-video.jpg" alt="会问青年最高赞视频"/><span>TOP CONTENT</span><h4>会问青年最高赞视频</h4><p>策划 / 脚本 / 剪辑</p><a href="https://weixin.qq.com/sph/A1baq4wtF0" target="_blank" rel="noreferrer">播放作品 ↗</a></article>
          </div>
        </div>
      </section>

      <section className="chapter projects-section" id="projects">
        <DoodleTitle no="05" title="项目策划" english="PROJECT PLANNING" />
        <p className="chapter-intro reveal">从节目策划、人物研究到现场执行；从文旅IP到完整综艺方案。</p>

        <article className="project magic-project reveal">
          <div className="project-heading"><span>01</span><div><p>腾讯视频 S+ 音乐综艺</p><h3>《魔力歌先生》</h3><b>选角导演 / 前期策划与现场统筹</b></div><Cat kind={1}/></div>
          <p className="project-copy">参与艺人资料建档、邀约沟通、面试流程和录制现场执行，成功建联并邀请歌手曾一鸣、刘可夫参与节目录制。</p>
          <div className="project-gallery magic-gallery">{[1,2,3,4,5,6,7,8].map(n => openImage(`/media/projects/magic/magic-${n}.jpg`, `魔力歌先生工作资料${n}`))}</div>
          <LinkList links={[{label:"曾一鸣节目片段",href:"https://v.douyin.com/VJxCIvM535k/"},{label:"刘可夫节目片段",href:"https://v.douyin.com/qru6oLS7lng/"}]} />
          <a className="project-doc" href="/docs/magic-song.pdf" target="_blank">查看项目方案 PDF ↗</a>
        </article>

        <article className="project openmic-project reveal">
          <div className="project-heading"><span>02</span><div><p>北京卫视 × 优酷 S+ 综艺</p><h3>《一起开麦吧》</h3><b>内容策划 / 项目执行</b></div><Cat kind={3}/></div>
          <p className="project-copy">参与节目定位、选手画像、人物故事线和内容表达方向策划，协同导演、编剧与选角团队推进前期方案。</p>
          <div className="project-gallery openmic-gallery">{[1,2,3,4].map(n => openImage(`/media/projects/openmic/openmic-${n}.jpg`, `一起开麦吧工作资料${n}`))}</div>
          <div className="doc-actions"><a href="/docs/open-mic-intro.pdf" target="_blank">节目介绍 PDF ↗</a><a href="/docs/open-mic-profiles.pdf" target="_blank">选手画像 PDF ↗</a></div>
        </article>

        <article className="project dunhuang-project reveal">
          <div className="project-heading"><span>03</span><div><p>沉浸式文旅项目</p><h3>敦煌剧本杀</h3><b>项目负责人 / 策划与剧本统筹</b></div><Cat kind={2}/></div>
          <p className="project-copy">带领团队将丝路文化转化为“剧本体验、场景联动、文创延展”的产品闭环，用互动叙事降低传统文化的进入门槛。</p>
          <div className="project-gallery dunhuang-gallery">{["overview",4,10,11,18].map((n,index) => openImage(`/media/projects/dunhuang/dunhuang-${n}.jpg`, `敦煌剧本杀项目资料${index+1}`))}</div>
        </article>

        <article className="project lanzhou-project reveal">
          <div className="project-heading"><span>04</span><div><p>原创文化综艺策划</p><h3>《出发吧，兰州》</h3><b>节目定位 / 叙事设计 / 环节策划</b></div><Cat kind={1}/></div>
          <p className="project-copy">以兰州城市气质和黄河文化为核心，设计节目定位、受众、常驻与飞行嘉宾、三幕叙事、声音表达与文创延展。</p>
          <div className="project-gallery lanzhou-gallery">{[1,4,8,17,23,28].map(n => openImage(`/media/projects/lanzhou/lanzhou-${n}.jpg`, `出发吧兰州PPT第${n}页`))}</div>
        </article>
      </section>

      <section className="contact-section" id="contact">
        <Cat kind={2} className="contact-cat" />
        <p className="hand-note">期待和你一起做好内容！</p>
        <h2>柏欣悦</h2>
        <div className="contact-layout">
          <img src="/media/wechat-qr.jpg" alt="柏欣悦微信二维码" />
          <div>
            <p><span>微信</span>BaiBaiyueer</p>
            <a href="tel:15775682252"><span>电话</span>157 7568 2252</a>
            <a href="mailto:Baixinyue6486@163.com"><span>邮箱</span>Baixinyue6486@163.com</a>
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="作品大图预览" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} aria-label="关闭预览">×</button>
          <img src={lightbox} alt="作品大图" onClick={event => event.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
