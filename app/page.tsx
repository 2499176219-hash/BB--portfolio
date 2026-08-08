"use client";

import { useEffect, useState } from "react";

const nav = [
  ["profile", "关于我"], ["cases", "运营案例"], ["writing", "文字图像"],
  ["films", "影像创作"], ["projects", "项目策划"], ["contact", "联系我"],
];

const cases = [
  { no:"01", name:"网易上流工作室 — 会问青年", role:"内容运营", metric:"10万+", label:"单条视频播放", desc:"独立完成选题、脚本、剪辑、排版与复盘；月均产出20+条视频，实现涨粉3000+。", cover:"/media/operations/netease/top-video.jpg", images:["/media/operations/netease/top-video.jpg","/media/operations/netease/data-4.png","/media/operations/netease/data-1.jpg","/media/operations/netease/data-2.jpg","/media/operations/netease/data-3.jpg"], links:[["陈桂林圣杯","https://weixin.qq.com/sph/Athg4JKOyK"],["京沪高铁","https://weixin.qq.com/sph/ARuFjKWmQi"],["西班牙嗑瓜子","https://weixin.qq.com/sph/AxBq4k2RO4"],["图图爸爸","https://weixin.qq.com/sph/A1baq4wtF0"]] },
  { no:"02", name:"澳门文化旅游公众号", role:"排版编辑", metric:"+20%", label:"月均阅读量", desc:"负责公众号排版、内容发布与视频剪辑，参与文化旅游内容选题和账号优化。", cover:"/media/operations/macau/macau-1.jpg", images:["/media/operations/macau/macau-1.jpg","/media/operations/macau/macau-2.jpg","/media/operations/macau/macau-3.jpg"], links:[["案例 01","https://mp.weixin.qq.com/s/8J-N4jCFVlKDGyxKGsq4cA"],["案例 02","https://mp.weixin.qq.com/s/HrsT46PC0TlA0vl_cvdKZQ"],["案例 03","https://mp.weixin.qq.com/s/iyq0QIBKjbNsOXktTRhd5Q"]] },
  { no:"03", name:"小红书", role:"个人账号运营", metric:"10万", label:"爆款笔记曝光", desc:"围绕校园与生活方式设计选题，单篇获得9000+赞、1500+收藏，带来100+新增粉丝。", cover:"/media/operations/xhs/xhs-6.jpg", images:["/media/operations/xhs/xhs-6.jpg","/media/operations/xhs/xhs-3.jpg","/media/operations/xhs/xhs-1.jpg","/media/operations/xhs/xhs-2.jpg","/media/operations/xhs/xhs-4.jpg","/media/operations/xhs/xhs-5.jpg"], links:[["进入主页","https://xhslink.cn/m/AoV0qgWkAxI"],["考试爆款","http://xhslink.cn/o/7u8PPHjS7UX"],["综艺热评","http://xhslink.cn/o/ARYZUh6RIOB"],["睫毛软广","http://xhslink.cn/o/5IkTtfWtQ3a"]] },
  { no:"04", name:"抖音", role:"个人账号运营", metric:"316万", label:"单条最高播放", desc:"以真实大学生校园场景、强共鸣开头和节奏化剪辑完成传播，多个案例进入百万播放区间。", cover:"/media/operations/douyin/douyin-4.jpg", images:["/media/operations/douyin/douyin-4.jpg","/media/operations/douyin/douyin-1.jpg","/media/operations/douyin/douyin-2.jpg","/media/operations/douyin/douyin-3.jpg"], links:[["大学生高铁","https://v.douyin.com/rnB37vHh-Ag/"],["大学生宿舍日常","https://v.douyin.com/eAmk99X-IY4/"],["大学图书馆","https://v.douyin.com/fKRln6dHQu8/"],["进入主页","https://v.douyin.com/_Jrhbjqmp-E/"]] },
];

const writings = [
  { title:"会问青年视频脚本", type:"热点选题 / 视频文案", desc:"热点拆解、选题策划与口播脚本写作。", pages:["/media/text/huiwen-topics.jpg","/media/text/huiwen-full/topics.png","/media/text/huiwen-script.jpg","/media/text/huiwen-full/fujian-youshen.png","/media/text/huiwen-full/hu-yingjun.png"] },
  { title:"非遗匠人公众号推文", type:"人物采访 / 长图文", desc:"围绕非遗龙舟匠人展开资料研究、采访与人物叙事。", pages:["/media/text/huiwen-full/intangible-interview.jpg"], url:"https://mp.weixin.qq.com/s/KgV62bNCZOLhSf1FMXXp9A" },
  { title:"纪录片《田鼠大婶》拍摄大纲", type:"纪录片调研 / 拍摄方案", desc:"前期人物调研、故事结构、采访设计与现场拍摄规划。", pages:Array.from({length:12},(_,i)=>`/media/text/fieldmouse-outline/page-${String(i+1).padStart(2,"0")}.jpg`) },
  { title:"《觉醒·飞天》AI分镜头脚本", type:"42镜完整分镜", desc:"敦煌飞天与超级AI“须弥”的冲突故事设定与完整分镜。", pages:Array.from({length:26},(_,i)=>`/media/text/ai-storyboard/page-${i+1}.png`) },
  { title:"原创《幸福的本能》戏剧剧本", type:"原创戏剧", desc:"由柏欣悦编剧，提供完整逐页预览。", pages:Array.from({length:12},(_,i)=>`/media/text/original-drama-full/page-${String(i+1).padStart(2,"0")}.jpg`) },
];

const photos = [8,3,5,27,25,28,31,33,34,16,20,19,15,6,1].map(n=>`/portfolio-images/摄影作品_${String(n).padStart(2,"0")}.jpg`);
const posters = [1,2,3,4,5,6].map(n=>`/media/design-${n}.jpg`);
const videos = [
  {title:"纪录片《田鼠大婶》", meta:"制片人 / 人物纪录片", cover:"/media/videos/documentary-cover-original.png", src:"/media/videos/documentary-original.mp4"},
  {title:"AI短片《觉醒·飞天》", meta:"编剧 / AI影像创作", cover:"/media/videos/ai-video-cover.jpg", src:"/media/videos/ai-video-web.mp4"},
  {title:"MV《干杯》", meta:"导演 / 剪辑", cover:"/media/videos/mv-mayday-cover.jpg", src:"/media/videos/mv-original.mp4"},
];
const projects = [
  {title:"腾讯视频音综《魔力歌先生》",type:"综艺 / 选角导演",desc:"参与前期策划、艺人资料整理、采访流程设计与录制协调，并完成艺人建联邀约。",imgs:["/media/projects/magic/magic-8-cropped.jpg","/media/projects/magic/magic-7.jpg","/media/projects/magic/magic-4.jpg","/media/projects/magic/magic-1.jpg","/media/projects/magic/magic-2.jpg","/media/projects/magic/magic-3.jpg","/media/projects/magic/magic-6.jpg"]},
  {title:"优酷视频音综《一起开麦吧》",type:"综艺 / 内容策划",desc:"参与节目定位、选手画像、人物故事线与内容策划，并协同推进项目执行。",imgs:["/media/projects/openmic/openmic-1.jpg","/media/projects/openmic/openmic-2.jpg","/media/projects/openmic/openmic-3-cropped.jpg","/media/projects/openmic/openmic-4-cropped.jpg"]},
  {title:"敦煌IP沉浸式剧本杀",type:"文旅 / 项目负责人",desc:"统筹5人团队完成策划、剧本与协调，项目晋级2026年“挑战杯”甘肃省赛。",imgs:Array.from({length:33},(_,i)=>i+1).filter(n=>![31,32].includes(n)).map(n=>`/media/projects/dunhuang-full/page-${String(n).padStart(2,"0")}.jpg`)},
  {title:"《出发吧，兰州》",type:"城市文化 / 综艺策划",desc:"围绕兰州在地文化与年轻化表达，完成节目定位、环节设计与视觉化提案。",imgs:Array.from({length:35},(_,i)=>i+1).filter(n=>![24,34,35].includes(n)).map(n=>`/media/projects/lanzhou-full/page-${String(n).padStart(2,"0")}.jpg`)},
];

function SectionHead({n,en,cn}:{n:string;en:string;cn:string}){return <header className="section-head"><span>{n}</span><p>{en}</p><h2>{cn}</h2></header>}

export default function Home(){
  const [menu,setMenu]=useState(false), [activeCase,setActiveCase]=useState(0), [activeWriting,setActiveWriting]=useState(0), [activeVideo,setActiveVideo]=useState(0), [openProject,setOpenProject]=useState<number|null>(null), [lightbox,setLightbox]=useState<string|null>(null);
  const [progress,setProgress]=useState(0);
  useEffect(()=>{const f=()=>setProgress(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)||0);f();addEventListener("scroll",f,{passive:true});return()=>removeEventListener("scroll",f)},[]);
  return <main>
    <nav className="nav"><a href="#top" className="mark">BX.</a><button onClick={()=>setMenu(!menu)} aria-label="打开菜单">{menu?"CLOSE":"MENU"}</button><div className={menu?"nav-links open":"nav-links"}>{nav.map(([id,l],i)=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}><small>0{i+1}</small>{l}</a>)}</div><i style={{width:`${progress*100}%`}}/></nav>

    <section id="top" className="hero-dark">
      <div className="hero-kicker"><span>NEW MEDIA</span><span>CONTENT</span><span>FILM</span></div>
      <h1><span>柏欣悦</span><em>BAI XINYUE</em></h1>
      <div className="hero-bottom"><p>新媒体运营、内容创作与影像表达。<br/>对热点保持敏感，把想法变成被看见的内容。</p><div><a href="mailto:Baixinyue6486@163.com">EMAIL ↗</a><a href="#profile">SCROLL ↓</a></div></div>
    </section>

    <section id="profile" className="section profile">
      <SectionHead n="01" en="PROFILE" cn="关于我"/>
      <div className="profile-grid"><figure><img src="/media/profile-12.jpg" alt="柏欣悦个人形象照"/><figcaption>BAI XINYUE · 2026</figcaption></figure><div className="profile-copy"><p className="lead">一名关注互联网热点、年轻人情绪与视觉表达的新媒体创作者。</p><dl><div><dt>学校 / 专业</dt><dd>西北师范大学 · 戏剧与影视学</dd></div><div><dt>状态</dt><dd>在读研二 · 2028届</dd></div><div><dt>求职方向</dt><dd>新媒体运营 / 内容策划</dd></div></dl><a className="text-link" href="/docs/resume.pdf" download>下载 PDF 简历 ↘</a></div></div>
      <div className="experience"><h3>EXPERIENCE</h3>{[["2024.02—2024.06","网易传媒科技（北京）有限公司","内容运营"],["2025.09—2026.02","澳门文化旅游 CTNMACAO","新媒体运营"],["2025.03—2025.09","北京海西传媒","内容策划 / 选角导演"]].map((x,i)=><article key={x[1]}><span>0{i+1}</span><time>{x[0]}</time><h4>{x[1]}</h4><p>{x[2]}</p></article>)}</div>
      <div className="ticker"><span>Photoshop</span><span>Premiere</span><span>剪映</span><span>Canva</span><span>秀米</span><span>Excel</span><span>Codex</span></div>
    </section>

    <section id="cases" className="section cases">
      <SectionHead n="02" en="SELECTED CASES" cn="运营案例"/>
      <div className="metrics"><strong>316W<small>单条最高播放</small></strong><strong>3000+<small>账号涨粉</small></strong><strong>20+<small>月均视频产出</small></strong><strong>9000+<small>单篇点赞</small></strong></div>
      <div className="case-tabs">{cases.map((c,i)=><button key={c.name} className={i===activeCase?"active":""} onClick={()=>setActiveCase(i)}><span>{c.no}</span>{c.name}</button>)}</div>
      <article className="case-stage"><div className="case-copy"><span>{cases[activeCase].role}</span><h3>{cases[activeCase].name}</h3><strong>{cases[activeCase].metric}</strong><small>{cases[activeCase].label}</small><p>{cases[activeCase].desc}</p><div className="link-row">{cases[activeCase].links.map(([l,u])=><a key={l} href={u} target="_blank" rel="noreferrer">{l} ↗</a>)}</div></div><div className="case-cover"><img src={cases[activeCase].cover} alt=""/></div></article>
      <div className="horizontal-gallery">{cases[activeCase].images.map((src,i)=><button key={src} onClick={()=>setLightbox(src)}><img src={src} alt={`${cases[activeCase].name}资料 ${i+1}`}/><span>{String(i+1).padStart(2,"0")}</span></button>)}</div>
    </section>

    <section id="writing" className="section writing">
      <SectionHead n="03" en="WRITING & GRAPHIC" cn="文字与图像"/>
      <div className="writing-grid"><div className="writing-menu">{writings.map((w,i)=><button key={w.title} className={i===activeWriting?"active":""} onClick={()=>setActiveWriting(i)}><small>{String(i+1).padStart(2,"0")}</small><span>{w.title}</span><b>↗</b></button>)}</div><div className="writing-feature"><p>{writings[activeWriting].type}</p><h3>{writings[activeWriting].title}</h3><span>{writings[activeWriting].desc}</span>{writings[activeWriting].url&&<a href={writings[activeWriting].url} target="_blank" rel="noreferrer">阅读公众号原文 ↗</a>}<div className="page-rail">{writings[activeWriting].pages.map((src,i)=><button key={src} onClick={()=>setLightbox(src)}><img src={src} alt={`${writings[activeWriting].title}第${i+1}页`}/></button>)}</div></div></div>
      <div className="poster-block"><div><p>POSTER DESIGN</p><h3>海报设计</h3><span>横向拖动浏览，点击查看完整尺寸。</span></div><div className="poster-rail">{posters.map((src,i)=><button key={src} onClick={()=>setLightbox(src)}><img src={src} alt={`海报设计 ${i+1}`}/></button>)}</div></div>
    </section>

    <section id="films" className="section films">
      <SectionHead n="04" en="FILMS & PHOTOGRAPHY" cn="影像创作"/>
      <div className="film-stage"><div className="film-copy"><span>NOW SHOWING · 0{activeVideo+1}</span><h3>{videos[activeVideo].title}</h3><p>{videos[activeVideo].meta}</p></div><video key={videos[activeVideo].src} controls preload="metadata" poster={videos[activeVideo].cover}><source src={videos[activeVideo].src} type="video/mp4"/></video></div>
      <div className="film-tabs">{videos.map((v,i)=><button key={v.title} onClick={()=>setActiveVideo(i)} className={i===activeVideo?"active":""}><img src={v.cover} alt=""/><span>0{i+1}</span><b>{v.title}</b></button>)}</div>
      <div className="photo-head"><p>PHOTOGRAPHY</p><h3>摄影作品</h3><span>横向浏览 · 点击放大</span></div><div className="photo-rail">{photos.map((src,i)=><button key={src} onClick={()=>setLightbox(src)}><img src={src} alt={`摄影作品 ${i+1}`}/><span>{String(i+1).padStart(2,"0")}</span></button>)}</div>
    </section>

    <section id="projects" className="section projects">
      <SectionHead n="05" en="PROJECT ARCHIVE" cn="项目策划"/>
      <div className="project-list">{projects.map((p,i)=><article key={p.title} className={openProject===i?"open":""}><button onClick={()=>setOpenProject(openProject===i?null:i)}><span>0{i+1}</span><small>{p.type}</small><h3>{p.title}</h3><b>{openProject===i?"收起 −":"展开 +"}</b></button>{openProject===i&&<div className="project-body"><p>{p.desc}</p><div className="project-rail">{p.imgs.map((src,j)=><button key={src} onClick={()=>setLightbox(src)}><img src={src} alt={`${p.title}资料 ${j+1}`}/></button>)}</div></div>}</article>)}</div>
    </section>

    <section id="contact" className="contact"><p>06 · CONTACT</p><h2>LET’S<br/>TALK</h2><div className="contact-info"><img src="/media/wechat-qr.jpg" alt="微信二维码"/><div><span>微信</span><b>BaiBaiyueer</b><span>电话</span><a href="tel:15775682252">157 7568 2252</a><span>邮箱</span><a href="mailto:Baixinyue6486@163.com">Baixinyue6486@163.com</a></div></div><a href="#top" className="back">BACK TO TOP ↑</a></section>

    {lightbox&&<div className="lightbox" onClick={()=>setLightbox(null)}><button aria-label="关闭">CLOSE ×</button><img src={lightbox} alt="作品大图"/></div>}
  </main>
}
