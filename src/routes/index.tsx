import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { portfolio } from "@/lib/portfolio-data";
import { SparklesBackground } from "@/components/SparklesBackground";
import photoAsset from "@/assets/roseanne-photo-smartcasual.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${portfolio.name} — IT Support & Computer Systems Specialist` },
      {
        name: "description",
        content:
          "Portfolio of an IT Support & Computer Systems Servicing specialist — hardware assembly, networking, OS deployment, and server setup.",
      },
      { property: "og:title", content: `${portfolio.name} — IT Support Portfolio` },
      {
        property: "og:description",
        content:
          "Hands-on IT support: PC assembly, LAN/WAN, crimping, Windows & Linux, server configuration.",
      },
    ],
  }),
  component: Index,
});

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(saved);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SparklesBackground />
      <Nav />
      <Hero />
      <Skills />
      <Experience />
      <Resume />
      <AILearnings />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm">
          <span className="text-primary">~/</span>
          <span className="text-foreground">{portfolio.name.toLowerCase().replace(/\s+/g, "_")}</span>
          <span className="cursor-blink text-primary">▍</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
          <a href="#skills" className="text-muted-foreground hover:text-primary transition">01. Skills</a>
          <a href="#experience" className="text-muted-foreground hover:text-primary transition">02. Experience</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition">03. Contact</a>
        </nav>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="h-9 w-9 grid place-items-center rounded-md border border-border hover:border-primary hover:text-primary transition"
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo */}
          <div className="shrink-0 order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-3 rounded-2xl bg-primary/25 blur-2xl opacity-60 group-hover:opacity-80 transition" />
              <img
                src={photoAsset}
                alt="Roseanne Joy G. Habolin"
                className="relative w-56 h-auto rounded-2xl border-2 border-primary/40 shadow-2xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 order-2 md:order-1">
            <div className="font-mono text-xs text-primary mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary glow" />
              <span>STATUS: AVAILABLE FOR DEPLOYMENT</span>
            </div>

            <p className="font-mono text-sm text-muted-foreground mb-4">
              <span className="text-primary">$</span> whoami
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Hi, I'm{" "}
              <span className="text-primary text-glow">Roseanne</span>,
              <br />
              an IT Support &amp;{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Computer Systems</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-primary/20 -z-0" />
              </span>{" "}
              Servicing Specialist.
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              {portfolio.subheadline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#skills"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-semibold hover:glow transition-all"
              >
                <span>./explore_skills</span>
                <ArrowIcon />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border hover:border-primary hover:text-primary font-mono text-sm font-semibold transition"
              >
                <span>./contact_me</span>
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
              <Stat label="Specialization" value="IT Support" />
              <Stat label="Discipline" value="CSS NC II" />
              <Stat label="Focus" value="Hands-On" />
              <Stat label="Mode" value="On/Off-site" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-primary pl-4">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 font-semibold">{value}</div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader index="01" title="Technical Toolkit" subtitle="// systems, tools & disciplines" />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {Object.entries(portfolio.skills).map(([group, items], i) => (
            <div
              key={group}
              className="group relative rounded-xl border border-border bg-card p-6 transition hover:border-primary"
            >
              <div className="absolute top-4 right-4 font-mono text-xs text-muted-foreground">
                0{i + 1}
              </div>
              <div className="font-mono text-xs text-primary mb-1">// category</div>
              <h3 className="text-xl font-bold mb-5">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="chip chip-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="02"
          title="Hands-On Experience"
          subtitle="// core competencies & training"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {portfolio.experience.map((c) => (
            <article
              key={c.tag}
              className="group relative rounded-xl border border-border bg-card p-7 overflow-hidden transition hover:border-primary hover:-translate-y-1 duration-300"
            >
              <div className="absolute -top-6 -right-6 font-mono text-7xl font-bold text-primary/10 group-hover:text-primary/20 transition">
                {c.tag}
              </div>
              <div className="relative">
                <div className="h-10 w-10 grid place-items-center rounded-md border border-border bg-background mb-5 text-primary">
                  <TerminalIcon />
                </div>
                <h3 className="text-lg font-bold leading-tight mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {c.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.stack.map((s) => (
                    <span key={s} className="font-mono text-[11px] text-primary">
                      {s === "Linux" ? "\n" : `[${s}]`}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.get("name")}`);
    const body = encodeURIComponent(
      `From: ${form.get("name")} <${form.get("email")}>\n\n${form.get("message")}`,
    );
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader index="03" title="Open a Connection" subtitle="// let's build something" />

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Got a system to deploy, a network to configure, or just want to talk shop?
              Drop a message — I respond within a day.
            </p>
            <div className="mt-8 space-y-3 font-mono text-sm">
              <a
                href={`mailto:${portfolio.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition"
              >
                <MailIcon />
                <span>{portfolio.email}</span>
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-border bg-card p-6 space-y-4"
          >
            <Field label="name" name="name" maxLength={100} required />
            <Field label="email" name="email" type="email" maxLength={255} required />
            <Field
              label="message"
              name="message"
              as="textarea"
              maxLength={1000}
              required
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-semibold hover:glow transition"
            >
              {status === "sent" ? "// message queued ✓" : "./send_message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  const schools = [
    {
      title: "Basic Driving NC II",
      org: "Sisters of Mary of Bannuex, Inc.",
      points: [
        "Learned proper vehicle operation and basic maintenance",
        "Practiced safe driving techniques and traffic rules compliance",
        "Trained in defensive driving and safe vehicle handling",
        "Applied road safety and emergency procedures during driving exercises",
      ],
    },
    {
      title: "Computer System Servicing NC II",
      org: "Sisters of Mary of Bannuex, Inc.",
      points: [
        "Helped install software and update applications",
        "Organized computer cables and peripherals",
        "Performed computer assembly and disassembly",
        "Created and tested LAN cables",
        "Developed basic networking and hardware skills",
      ],
    },
    {
      title: "Artificial Intelligence Training",
      org: "Bonifacio Global City, Makati",
      points: [
        "Applied basic AI tools and technologies in training activities",
        "Developed problem-solving and analytical skills",
        "Assisted in data handling and research tasks",
        "Demonstrated teamwork, communication, and adaptability",
      ],
    },
  ];

  const achievements = [
    "With Honors from Kindergarten to G11",
    "Panlalawigan Mind Challenge — Dance for the Environment (2nd Place)",
    "Best in Korean Drummer (Grade 10 Moving-Up)",
    "Ms. Intramurals 2022 — Best in Ramp, Best in Production Number",
    "Ms. International 2021 — Grade 7 acquaintance party",
    "Radio broadcasting competition — Technical Support (1st Place)",
  ];

  const academic = [
    { school: "Sisters of Mary of Bannuex, Inc.", level: "Senior High School", period: "Current" },
    { school: "Sisters of Mary of Bannuex, Inc.", level: "Junior High School", period: "August 2021 – December 2025" },
  ];

  const references = [
    { role: "School Principal", name: "Sr. Mylene B. Arambulo, SM." },
    { role: "Sister-In-Charge", name: "Sr. Lea Gonzaga, SM." },
  ];

  return (
    <section id="resume" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader index="03" title="Resume" subtitle="// roseanne joy g. habolin — ai trainee" />

        <div className="mt-12 rounded-xl border border-border bg-card p-6 md:p-8">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Enthusiastic senior high school student with a strong interest in artificial
            intelligence and emerging technologies. Eager to apply classroom knowledge in
            programming, data analysis, and problem-solving to real-world AI projects.
            Quick learner, detail-oriented, and motivated to contribute to innovative
            solutions while gaining hands-on experience in the field.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {schools.map((s) => (
            <article key={s.title} className="rounded-xl border border-border bg-card p-6">
              <div className="font-mono text-xs text-primary mb-1">// training</div>
              <h3 className="text-lg font-bold leading-tight">{s.title}</h3>
              <div className="mt-1 font-mono text-xs text-muted-foreground">{s.org}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="font-mono text-xs text-primary mb-2">// achievements</div>
            <h3 className="text-xl font-bold mb-4">Highlights</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {achievements.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="text-primary mt-1">★</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="font-mono text-xs text-primary mb-2">// academic data</div>
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="space-y-4 text-sm">
              {academic.map((a) => (
                <li key={a.level} className="border-l-2 border-primary pl-4">
                  <div className="font-semibold">{a.level}</div>
                  <div className="text-muted-foreground">{a.school}</div>
                  <div className="font-mono text-xs text-primary mt-1">{a.period}</div>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="font-mono text-xs text-primary mb-2">// references</div>
              <ul className="space-y-3 text-sm">
                {references.map((r) => (
                  <li key={r.name}>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-muted-foreground">{r.role}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AILearnings() {
  const insights = [
    {
      title: "Prompting Techniques",
      body: "I learned about good prompting techniques that help get better results than simply asking for basic answers. Crafting clear, specific prompts leads to far more useful AI responses.",
    },
    {
      title: "AI Ethics",
      body: "I learned the ethics that should be observed while using AI tools — respecting the data privacy of others, being transparent, ensuring accuracy and reliability, and avoiding the misuse of AI.",
    },
    {
      title: "Prompt Frameworks",
      body: "I learned different formats and frameworks for making good prompts, like APE, CORE, CREATE, and more. Through these frameworks, I can now get great results from the prompts I use.",
    },
    {
      title: "AI & the Future of Work",
      body: "I also learned that AI doesn't really replace jobs — it upgrades each job we have, making our workplace and the work itself better and more efficient. We must not have the misconception that AI is a threat, because it's here to help us do our jobs properly.",
    },
  ];

  return (
    <section id="ai-learnings" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader index="04" title="What I Learned About AI" subtitle="// key takeaways from my training" />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {insights.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-border bg-card p-7 transition hover:border-primary hover:-translate-y-1 duration-300"
            >
              <h3 className="text-lg font-bold leading-tight mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


function Field({
  label,
  name,
  type = "text",
  as,
  required,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "textarea";
  required?: boolean;
  maxLength?: number;
}) {
  const cls =
    "w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition font-sans";
  return (
    <label className="block">
      <span className="font-mono text-xs text-muted-foreground">
        <span className="text-primary">{">"}</span> {label}
      </span>
      <div className="mt-1.5">
        {as === "textarea" ? (
          <textarea name={name} rows={5} required={required} maxLength={maxLength} className={cls} />
        ) : (
          <input name={name} type={type} required={required} maxLength={maxLength} className={cls} />
        )}
      </div>
    </label>
  );
}

function SectionHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <div className="font-mono text-xs text-primary">{`// ${index}`}</div>
      <h2 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      <div className="mt-3 font-mono text-sm text-muted-foreground">{subtitle}</div>
      <div className="mt-6 h-px w-24 bg-primary" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
        <div>
          © {new Date().getFullYear()} {portfolio.name} — built with precision.
        </div>
        <div className="flex items-center gap-5">
          <a href={`mailto:${portfolio.email}`} className="hover:text-primary transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Icons ---------- */
function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
  );
}
function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-x-1"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
  );
}
function TerminalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
  );
}
