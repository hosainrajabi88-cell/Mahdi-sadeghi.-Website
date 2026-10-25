import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Code2, Globe, FileCode, Brain, Bot, PenTool, Image, Video, Cpu, Layers, ShieldCheck, Instagram, Sparkles, Send, Phone, Newspaper, Award, ArrowUpRight, Menu, X, Maximize2, Sun, Moon } from "lucide-react";
import { NetworkCanvas } from "@/components/NetworkCanvas";
import { AICharacter } from "@/components/AICharacter";
import { Reveal } from "@/components/Reveal";
import { content, certificateFiles, langMeta, sectionIds, type Lang } from "@/lib/content";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mahdi Sadeghi — مهدی صادقی | Programmer & AI Enthusiast" },
      { name: "description", content: "مهدی صادقی — دانش‌آموز کامپیوتر، برنامه‌نویس، علاقه‌مند به هوش مصنوعی و طراح وب. Mahdi Sadeghi, computer student, programmer and AI enthusiast." },
      { property: "og:title", content: "Mahdi Sadeghi — Programmer & AI Enthusiast" },
      { property: "og:description", content: "Computer student, programmer, AI enthusiast and web designer. Persian, English and Arabic." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const skillIcons = [Code2, Globe, FileCode, Brain, Bot, PenTool, Image, Video, Cpu, Layers];
const serviceIcons = [Globe, ShieldCheck, Brain, Code2, Instagram, Image, Video, Sparkles];
const footerTargets = ["about", "skills", "projects", "services", "contact"];

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function SectionHead({ title, intro, index }: { title: string; intro?: string; index: string }) {
  return (
    <Reveal className="mb-12 max-w-3xl">
      <p className="mb-3 font-mono text-xs tracking-[0.3em] text-muted-foreground" dir="ltr">{`// ${index}`}</p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">{intro}</p>}
    </Reveal>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("fa");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);
  const [certPreview, setCertPreview] = useState<number | null>(null);
  const [certImgFailed, setCertImgFailed] = useState<Record<string, boolean>>({});
  const t = content[lang];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme === "light" ? "light" : "dark";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("light", initialTheme === "light");
    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && saved in content) setLang(saved);
    const s = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", s, { passive: true });
    return () => window.removeEventListener("scroll", s);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = langMeta[lang].dir;
    localStorage.setItem("lang", lang);
  }, [lang]);
  useEffect(() => {
    if (certPreview === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCertPreview(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [certPreview]);

  const navClick = (id: string) => { setOpen(false); go(id); };
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.add("theme-transition");
    document.documentElement.classList.toggle("light", nextTheme === "light");
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
    window.setTimeout(() => document.documentElement.classList.remove("theme-transition"), 300);
  };

  return (
    <div className={`min-h-screen overflow-x-hidden bg-background text-foreground ${lang === "en" ? "font-display" : "font-persian"}`}>
      {/* NAV */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "glass border-b border-border" : ""}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <button onClick={() => go("home")} className="flex shrink-0 items-center gap-2 font-mono text-sm font-bold" dir="ltr">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-card">MS</span>
            <span className="hidden sm:inline">Mahdi Sadeghi</span>
          </button>
          <ul className="hidden items-center gap-1 xl:flex">
            {sectionIds.map((id, i) => (
              <li key={id}><button onClick={() => navClick(id)} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground">{t.nav[i]}</button></li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "حالت روشن" : "حالت تیره"}
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-2.5 text-xs font-medium text-foreground transition hover:bg-secondary sm:px-3"
            >
              {theme === "dark" ? <><Sun size={15} /><span className="hidden sm:inline">حالت روشن</span></> : <><Moon size={15} /><span className="hidden sm:inline">حالت تیره</span></>}
            </button>
            <div className="flex rounded-lg border border-border bg-card p-0.5" role="group" aria-label="Language">
              {(Object.keys(langMeta) as Lang[]).map((l) => (
                <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l} className={`rounded-md px-2.5 py-1.5 text-xs transition ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{langMeta[l].label}</button>
              ))}
            </div>
            <button className="grid h-9 w-9 place-items-center rounded-lg border border-border xl:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </nav>
        {open && (
          <ul className="glass mx-4 mb-3 grid grid-cols-2 gap-1 rounded-xl border border-border p-2 xl:hidden">
            {sectionIds.map((id, i) => (
              <li key={id}><button onClick={() => navClick(id)} className="w-full rounded-md px-3 py-3 text-start text-sm hover:bg-secondary">{t.nav[i]}</button></li>
            ))}
          </ul>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
          <NetworkCanvas />
          <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-enter text-center lg:text-start">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground">
                <span className="h-2 w-2 animate-pulse rounded-full bg-foreground" />{t.hero.hello}
              </p>
              <h1 className="text-glow font-display text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl" dir="ltr">{t.hero.name}</h1>
              <p className="mt-4 font-mono text-xs tracking-widest text-muted-foreground sm:text-sm">{t.hero.role}</p>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-9 text-foreground/85 lg:mx-0">{t.hero.tagline}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <button onClick={() => go("about")} className="btn-primary">{t.hero.buttons[0]}</button>
                <button onClick={() => go("projects")} className="btn-ghost">{t.hero.buttons[1]}</button>
                <button onClick={() => go("contact")} className="btn-ghost">{t.hero.buttons[2]}</button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
              <div className="animate-spin-slow absolute -inset-6 rounded-full border border-dashed border-border" aria-hidden />
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-b from-foreground/30 to-transparent blur-md" aria-hidden />
              <figure className="relative overflow-hidden rounded-[2rem] border border-border bg-card">
  <img
    src="/portrait.png"
    alt="Mahdi Sadeghi"
    className="aspect-square w-full object-cover"
    width={1254}
    height={1254}
    fetchPriority="high"
  />
  <figcaption
    className="glass absolute inset-x-3 bottom-3 rounded-xl border border-border px-4 py-2 font-mono text-xs"
    dir="ltr"
  >
    <span className="text-muted-foreground">const</span> dev ={" "}
    <span>"Mahdi Sadeghi"</span>;
  </figcaption>
</figure>
  <AICharacter className="absolute -bottom-10 h-36 w-28 ltr:-right-10 rtl:-left-10 sm:h-48 sm:w-36 sm:ltr:-right-16 sm:rtl:-left-16" />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHead title={t.about.title} index="01 about" />
              <Reveal className="card p-6">
                <h3 className="text-2xl font-bold">{t.about.subtitle}</h3>
                <p className="mt-2 text-muted-foreground">{t.about.role}</p>
                <pre className="mt-6 overflow-hidden rounded-lg bg-background p-4 font-mono text-xs leading-6 text-muted-foreground" dir="ltr">{`focus = ["code", "AI", "web"]\nwhile learning:\n    build(ideas)`}</pre>
              </Reveal>
            </div>
            <div className="space-y-6 lg:pt-20">
              {t.about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 80}><p className="text-base leading-9 text-foreground/85 sm:text-lg">{p}</p></Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="container-x">
            <SectionHead title={t.skills.title} intro={t.skills.intro} index="02 skills" />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {t.skills.items.map((s, i) => {
                const I = skillIcons[i] ?? Code2;
                return (
                  <Reveal key={i} delay={i * 50}>
                    <div className="card card-hover flex h-full flex-col items-start gap-4 p-5">
                      <span className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background"><I size={18} /></span>
                      <span className="font-medium">{s}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey" className="section">
          <div className="container-x">
            <SectionHead title={t.journey.title} index="03 journey" />
            <ol className="relative space-y-10 border-s border-border ps-8">
              {t.journey.items.map((it, i) => (
                <Reveal key={i} delay={i * 100}>
                  <li className="relative">
                    <span className="absolute -start-[2.55rem] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-foreground bg-background">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-foreground" />
                    </span>
                    <div className="card card-hover p-6">
                      <p className="font-mono text-sm text-muted-foreground">{it.time}</p>
                      <p className="mt-2 text-lg leading-8">{it.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="container-x">
            <SectionHead title={t.projects.title} intro={t.projects.intro} index="04 projects" />
            <Reveal>
              <article className="card card-hover group grid overflow-hidden md:grid-cols-2">
                <div className="relative min-h-56 border-b border-border bg-background p-6 md:border-b-0 md:border-e" aria-hidden>
                  <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-muted" /><span className="h-2.5 w-2.5 rounded-full bg-muted" /><span className="h-2.5 w-2.5 rounded-full bg-muted" /></div>
                  <div className="mt-6 space-y-3 transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="h-6 w-2/3 rounded bg-secondary" /><div className="h-3 w-full rounded bg-secondary/70" /><div className="h-3 w-5/6 rounded bg-secondary/70" />
                    <div className="grid grid-cols-3 gap-2 pt-3"><div className="h-16 rounded bg-secondary/60" /><div className="h-16 rounded bg-secondary/60" /><div className="h-16 rounded bg-secondary/60" /></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-10">
                  <h3 className="text-2xl font-bold leading-10">{t.projects.name}</h3>
                  <p className="mt-4 leading-8 text-muted-foreground">{t.projects.desc}</p>
                  <button onClick={() => go("contact")} className="btn-primary mt-8 self-start">{t.projects.button}<ArrowUpRight size={16} className="rtl:-scale-x-100" /></button>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section">
          <div className="container-x">
            <SectionHead title={t.services.title} intro={t.services.intro} index="05 services" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.services.items.map((s, i) => {
                const I = serviceIcons[i] ?? Sparkles;
                return (
                  <Reveal key={i} delay={i * 60}>
                    <div className="card card-hover h-full p-6">
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background"><I size={20} /></span>
                      <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* NEWS */}
        <section id="news" className="section">
          <div className="container-x">
            <SectionHead title={t.news.title} index="06 news" />
            <Reveal>
              <div className="card flex flex-col items-center border-dashed px-6 py-16 text-center">
                <span className="grid h-16 w-16 animate-float place-items-center rounded-2xl border border-border bg-background"><Newspaper size={26} /></span>
                <span className="mt-6 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">{t.news.badge}</span>
                <p className="mt-4 max-w-lg leading-8 text-muted-foreground">{t.news.text}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="section">
          <div className="container-x">
            <SectionHead title={t.certificates.title} intro={t.certificates.intro} index="07 certificates" />
            <div className="grid gap-4 md:grid-cols-2">
              {certificateFiles.map((c, i) => (
                <Reveal key={c.id} delay={i * 100}>
                  <article className="card card-hover flex h-full flex-col overflow-hidden p-0">
                    <button type="button" onClick={() => setCertPreview(i)} className="group relative block h-64 w-full border-b border-border bg-background p-5" aria-label={c.title}>
                      {certImgFailed[c.id] ? (
                        <span className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border text-muted-foreground">
                          <Award size={26} />
                          <span className="font-mono text-[11px]" dir="ltr">{c.title}</span>
                        </span>
                      ) : (
                        <img src={c.image} alt={c.title} loading="lazy" onError={() => setCertImgFailed((s) => ({ ...s, [c.id]: true }))} className="mx-auto h-full w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
                      )}
                      <span className="pointer-events-none absolute inset-x-5 bottom-5 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/90 px-3 py-1 font-mono text-[11px] text-muted-foreground"><Maximize2 size={12} />{c.title}</span>
                      </span>
                    </button>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-sm leading-7 text-muted-foreground">{t.certificates.items[i]?.desc}</p>
                      <a href={c.url} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 self-start">{t.certificates.viewBtn}<ArrowUpRight size={16} className="rtl:-scale-x-100" /></a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container-x">
            <SectionHead title={t.contact.title} intro={t.contact.text} index="08 contact" />
            <div className="grid gap-4 md:grid-cols-2">
              <Reveal>
                <div className="card card-hover p-8">
                  <Send size={22} />
                  <p className="mt-4 text-sm text-muted-foreground">{t.contact.telegramLabel}</p>
                  <p className="mt-1 font-mono text-xl" dir="ltr">@mahdi_sadeghi00</p>
                  <a href="https://t.me/mahdi_sadeghi00" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">{t.contact.telegramBtn}</a>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="card card-hover p-8">
                  <Phone size={22} />
                  <p className="mt-4 text-sm text-muted-foreground">{t.contact.phoneLabel}</p>
                  <p className="mt-1 font-mono text-xl" dir="ltr">09147697079</p>
                  <a href="tel:09147697079" className="btn-ghost mt-6">{t.contact.callBtn}</a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-bold">{t.footer.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t.footer.role}</p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {t.footer.links.map((l, i) => (
              <li key={i}><button onClick={() => go(footerTargets[i] ?? "home")} className="hover:text-foreground">{l}</button></li>
            ))}
          </ul>
        </div>
        <p className="border-t border-border py-5 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} {t.footer.name} — {t.footer.rights}</p>
      </footer>

      {certPreview !== null && certificateFiles[certPreview] && (
        <div role="dialog" aria-modal="true" aria-label={certificateFiles[certPreview]!.title} className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm" onClick={() => setCertPreview(null)}>
          <button type="button" onClick={() => setCertPreview(null)} aria-label="Close" className="absolute end-4 top-4 grid h-10 w-10 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition hover:text-foreground"><X size={18} /></button>
          {certImgFailed[certificateFiles[certPreview]!.id] ? (
            <div className="flex max-h-[85vh] flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border px-12 py-16 text-muted-foreground" onClick={(e) => e.stopPropagation()}>
              <Award size={30} />
              <p className="font-mono text-sm" dir="ltr">{certificateFiles[certPreview]!.title}</p>
            </div>
          ) : (
            <img src={certificateFiles[certPreview]!.image} alt={certificateFiles[certPreview]!.title} className="max-h-[85vh] w-auto max-w-full rounded-xl border border-border object-contain" onClick={(e) => e.stopPropagation()} />
          )}
        </div>
      )}
    </div>
  );
}
