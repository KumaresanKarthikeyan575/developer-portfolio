import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "Diecast E-commerce Store",
    type: "FULL-STACK DEVELOPMENT",
    description:
      "An online store for collectible diecast cars, featuring product browsing, cart, checkout, inventory management and an admin dashboard.",
    stack: ["Next.js", "Node.js", "MongoDB", "Cashfree Sandbox"],
    link: "https://diecast-store-frontend.vercel.app",
    label: "View Live Website",
  },
  {
    number: "02",
    name: "HealthR",
    type: "BLOCKCHAIN · HEALTHCARE",
    description:
      "A decentralized health-record management project exploring blockchain-based verification and controlled access to medical records.",
    stack: ["React", "Ethereum", "IPFS", "WalletConnect"],
    link: "https://github.com/KumaresanKarthikeyan575/decentralized-health-record-management",
    label: "View Source Code",
  },
  {
    number: "03",
    name: "PharmaChain Vault",
    type: "BLOCKCHAIN · SECURITY",
    description:
      "A blockchain-based medical formula storage project using encryption, decentralized storage and NFT concepts.",
    stack: ["Solidity", "Ethereum", "AES-256", "IPFS"],
    link: "https://github.com/KumaresanKarthikeyan575/PharmaChain-Vault",
    label: "View Source Code",
  },
  {
    number: "04",
    name: "TSender — ERC20 Airdrop Tool",
    type: "BLOCKCHAIN · TOKEN DISTRIBUTION",
    description:
      "A decentralized ERC20 bulk-transfer application that enables users to distribute tokens to multiple wallet addresses, with MetaMask integration, allowance checks, approval handling, and transaction tracking.",
    stack: ["JavaScript", "Solidity", "ERC20", "MetaMask", "EVM Networks"],
    link: "https://github.com/KumaresanKarthikeyan575/fund-sender",
    label: "View Source Code",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Solidity",
  "Ethereum",
  "IPFS",
  "Git",
];

const contacts = {
  email: "kumaresankarthi575@gmail.com",
  linkedin: "https://www.linkedin.com/in/kumaresan-karthikeyan0575/",
  github: "https://github.com/KumaresanKarthikeyan575",
  whatsapp: "https://wa.me/919488182005",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080a08] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="text-xl font-black tracking-tight">
          K<span className="text-lime-400">.</span>DEV
        </a>

        <div className="flex items-center gap-4 text-sm text-zinc-400 sm:gap-6">
          <a href="#about" className="transition hover:text-lime-400">
            About
          </a>
          <a href="#projects" className="transition hover:text-lime-400">
            Projects
          </a>
          <a
            href="#skills"
            className="hidden transition hover:text-lime-400 sm:block"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="rounded-full border border-lime-400/50 px-4 py-2 text-lime-300 transition hover:bg-lime-400 hover:text-black"
          >
            Contact ↗
          </a>
        </div>
      </nav>

      {/* Hero: introduction on the left, one photo on the right */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-12 md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-16">
        <div>
          <p className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            Full-stack developer · Blockchain enthusiast
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            I build digital
            <br />
            products that
            <br />
            <span className="text-lime-400">solve real problems.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            I&apos;m a Computer Science and Engineering graduate who enjoys
            building useful web applications, exploring decentralized
            technologies, and turning ideas into digital products.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
            >
              Explore My Work ↘
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:border-lime-400 hover:text-lime-300"
            >
              View My Resume ↗
            </a>
          </div>

          <p className="mt-8 text-xs tracking-wide text-zinc-500">
            PUDUCHERRY, INDIA · OPEN TO DEVELOPER OPPORTUNITIES
          </p>
        </div>

        {/* Your photo appears only here */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-full bg-lime-400/15 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-lime-400/30 bg-[#101310]">
            <Image
              src="/images/profile.jpeg"
              alt="Kumaresan Karthikeyan"
              width={600}
              height={750}
              priority
              className="relative z-10 h-auto max-h-[560px] w-full object-cover object-top"
            />

            <div className="absolute bottom-4 right-4 z-20 rounded-full border border-lime-400/40 bg-[#080a08]/90 px-4 py-2 text-sm text-lime-300 backdrop-blur">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-lime-400" />
              Open to Work
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-5 text-xs text-zinc-400 sm:text-sm">
            <span>Web Development</span>
            <span className="text-lime-400">•</span>
            <span>Blockchain</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-8 border-t border-white/10 bg-[#0c0e0c]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
                Selected work
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Projects I&apos;ve built.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-zinc-500">
              Practical web development, decentralized applications, and
              blockchain projects.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-[#111411] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/40 sm:p-8"
              >
                <div className="mb-9 flex items-center justify-between">
                  <span className="font-mono text-sm text-lime-400">
                    {project.number} / 04
                  </span>
                  <span className="text-xs text-zinc-500">PROJECT</span>
                </div>

                <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-lime-300 sm:text-xs">
                  {project.type}
                </p>

                <h3 className="text-2xl font-semibold">{project.name}</h3>

                <p className="mt-4 flex-grow text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/[0.05] px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-lime-300 transition hover:text-lime-200"
                >
                  {project.label} <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About: text only, no duplicate photo */}
      <section
        id="about"
        className="scroll-mt-8 mx-auto max-w-6xl px-6 py-20"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
          A little about me
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Curious by nature.
            <br />
            <span className="text-zinc-500">Practical by design.</span>
          </h2>

          <div className="space-y-4 leading-7 text-zinc-400">
            <p>
              I&apos;m Kumaresan Karthikeyan, a Computer Science and Engineering
              graduate from Puducherry. I enjoy developing full-stack web
              applications and exploring blockchain technologies.
            </p>
            <p>
              I learn by building projects, solving technical problems, and
              improving my development skills. I&apos;m looking for developer
              opportunities and freelance projects where I can create useful
              digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-8 border-t border-white/10 bg-[#0c0e0c]"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
            Technologies
          </p>

          <h2 className="mb-8 text-3xl font-semibold tracking-tight">
            Tools I work with.
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-white/10 px-4 py-3 text-sm text-zinc-300 transition hover:border-lime-400/40 hover:text-lime-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-8 mx-auto max-w-6xl px-6 py-20"
      >
        <div className="rounded-3xl border border-lime-400/20 bg-lime-400/[0.05] p-8 sm:p-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
            Have a project in mind?
          </p>

          <h2 className="max-w-2xl text-3xl font-semibold sm:text-5xl">
            Let&apos;s build something useful together.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-400">
            Need a developer for your next web project, or have a job
            opportunity to discuss? I&apos;d be happy to connect.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${contacts.email}`}
              className="rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
            >
              Email Me ↗
            </a>

            <a
              href={contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:border-lime-400 hover:text-lime-300"
            >
              LinkedIn ↗
            </a>

            <a
              href={contacts.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:border-lime-400 hover:text-lime-300"
            >
              GitHub ↗
            </a>

            <a
              href={contacts.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:border-lime-400 hover:text-lime-300"
            >
              WhatsApp ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-6 text-center text-xs text-zinc-500">
        © 2026 Kumaresan Karthikeyan · Built with Next.js
      </footer>
    </main>
  );
}


