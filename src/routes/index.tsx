import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TableMark } from "@/components/table-mark";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kitchen Table Co. — We build it. You run the neighborhood." },
      {
        name: "description",
        content:
          "A done-for-you neighborhood business, built for moms by a mom who's done it before. Cohort 1 is open — 30 spots.",
      },
      { property: "og:title", content: "Kitchen Table Co." },
      {
        property: "og:description",
        content: "We build it. You run the neighborhood. Cohort 1 is open.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const steps = [
  {
    n: "01",
    title: "You apply.",
    body:
      "Tell us about your neighborhood, your week, and what you're hoping for. Takes about ten minutes. No résumé. No pitch deck.",
  },
  {
    n: "02",
    title: "We find your concept.",
    body:
      "Using the fit finder above, we match you with one of our four tested neighborhood businesses — the one that fits your time, your block, and the way you actually like to spend a Tuesday.",
  },
  {
    n: "03",
    title: "We build it for you.",
    body:
      "Website, booking, payments, supplier list, the playbook, the welcome scripts. Done. You don't have to figure any of it out from scratch.",
  },
  {
    n: "04",
    title: "You open the doors.",
    body:
      "We hand you the keys with a soft-launch plan for the first ten neighbors. You run it. We're a text away.",
  },
  {
    n: "05",
    title: "You grow it your way.",
    body:
      "Some women keep it small and steady. Some scale into something bigger. Both are wins. You decide what enough looks like.",
  },
];

const faqs = [
  {
    q: "Is this a franchise?",
    a: "No. You own your business outright — the name, the customers, the income. We're more like a co-founder who builds the hard parts and then steps back.",
  },
  {
    q: "What if I've never run a business before?",
    a: "Most of the women in Cohort 1 haven't. The whole point is that we built this for the mom who has a hunch and a free hour after bedtime, not for someone with an MBA.",
  },
  {
    q: "How much time does it take each week?",
    a: "Most concepts run on five to ten hours a week once they're set up. A few of them can grow into something bigger if that's what you want. You set the ceiling.",
  },
  {
    q: "What's actually included for $99?",
    a: "Your matched concept, the full build (site, booking, payments, brand), the operating playbook, supplier intros, and twelve weeks of weekly office hours with me and the cohort. That's the whole thing.",
  },
  {
    q: "When does Cohort 1 start?",
    a: "Applications close when 30 spots are filled. We kick off the week after. The build happens over the following month, and you open in roughly six weeks.",
  },
  {
    q: "Who's behind Kitchen Table Co.?",
    a: "Hi — I'm the one writing this. I built three neighborhood businesses from a folding chair in my kitchen over the last decade. This is the toolkit I wish someone had handed me at the start.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <FitFinder />
      <HowItWorks />
      <PriceExplained />
      <Faq />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-3 text-forest">
          <TableMark className="h-8 w-8" />
          <span className="font-display text-xl leading-none tracking-tight">
            kitchen table co.
          </span>
        </a>
        <a
          href="https://tally.so/r/LZOGjv"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-sm bg-forest px-4 py-2.5 text-sm font-medium text-forest-foreground transition-colors hover:bg-forest/90 sm:px-5"
        >
          Apply for Cohort 1
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <p className="mb-8 font-sans text-xs uppercase tracking-[0.22em] text-terracotta">
          Cohort 1 — 30 spots
        </p>
        <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-forest sm:text-6xl md:text-7xl">
          We build it.<br />
          <span className="italic font-normal">You run the neighborhood.</span>
        </h1>
        <div className="mt-8 max-w-2xl space-y-6 font-sans text-lg leading-relaxed text-ink/80 sm:text-xl">
          <p>
            Kitchen Table Co. helps women build small businesses that strengthen their lives,
            their neighborhoods, and their future.
          </p>
          <p>
            We believe meaningful businesses don't have to start with venture capital,
            complicated business plans, or endless hustle.
          </p>
          <p>
            They start with a skill, an opportunity, a community, and someone willing to
            take the first step.
          </p>
          <p>That's where we come in.</p>
          <p>
            We help you discover the right business for your season of life, build it
            alongside you, and launch it with confidence.
          </p>
          <p>
            Whether your goal is extra income, greater flexibility, new friendships, a
            growing savings account, or simply something that's yours, Kitchen Table Co. is
            your partner from idea to opening day.
          </p>
          <p>Because building a business isn't just about making money.</p>
          <p>
            It's about creating a life with more freedom, more connection, and more
            possibility.
          </p>
          <p>Pull up a chair. There's room for you here.</p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#finder"
            className="inline-flex items-center justify-center rounded-sm bg-forest px-6 py-3.5 font-sans text-base font-medium text-forest-foreground transition-colors hover:bg-forest/90"
          >
            Find my concept
          </a>
          <a
            href="https://tally.so/r/LZOGjv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm border border-forest px-6 py-3.5 font-sans text-base font-medium text-forest transition-colors hover:bg-forest hover:text-forest-foreground"
          >
            Apply now
          </a>
        </div>
      </div>
    </section>
  );
}

function FitFinder() {
  return (
    <section id="finder" className="border-b border-rule bg-cream">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <p className="font-sans text-xs uppercase tracking-[0.22em] text-terracotta">
          Start here
        </p>
        <h2 className="mt-4 font-display text-3xl leading-tight text-forest sm:text-4xl">
          Which one is yours?
        </h2>
        <p className="mt-3 max-w-xl font-sans text-base text-ink/75">
          Four tested concepts. Answer a few honest questions and we'll show you the one
          your week actually has room for.
        </p>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="overflow-hidden rounded-sm border border-forest/20 bg-background">
          <iframe
            src="/fit-finder.html"
            title="Fit Finder"
            className="block h-[720px] w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="border-b border-rule">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <p className="font-sans text-xs uppercase tracking-[0.22em] text-terracotta">
          How it works
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-forest sm:text-4xl">
          Five steps. No mystery. No catch you'll find on step four.
        </h2>
        <ol className="mt-14 divide-y divide-rule border-y border-rule">
          {steps.map((s) => (
            <li
              key={s.n}
              className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 py-8 sm:grid-cols-[120px_1fr] sm:py-10"
            >
              <div className="font-display text-3xl text-terracotta sm:text-4xl">
                {s.n}
              </div>
              <div>
                <h3 className="font-display text-2xl text-forest sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-2xl font-sans text-base leading-relaxed text-ink/75">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PriceExplained() {
  return (
    <section className="border-b border-rule bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-24 sm:py-28 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-terracotta">
            The $99, plainly
          </p>
          <p className="mt-6 font-display text-7xl leading-none sm:text-8xl">$99</p>
          <p className="mt-3 font-sans text-sm text-forest-foreground/70">
            One time. For Cohort 1 only.
          </p>
        </div>
        <div className="space-y-5 font-sans text-base leading-relaxed text-forest-foreground/90 sm:text-lg">
          <p>
            I'll be honest — this should cost more, and the next cohort will. The $99
            covers your match, your full build, your playbook, and twelve weeks of weekly
            office hours where I'm in the room with you and the other 29 women.
          </p>
          <p>
            We're charging this little for Cohort 1 because I want to watch this work in
            real neighborhoods, with real moms, before I put a real price on it. You're
            not getting a discount. You're getting the first edition.
          </p>
          <p>
            What you keep: the business, the customers, the income, the name. Forever.
            No revenue share. No equity. No franchise fee. Just $99 and your time.
          </p>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-28">
        <p className="font-sans text-xs uppercase tracking-[0.22em] text-terracotta">
          Questions
        </p>
        <h2 className="mt-4 font-display text-3xl leading-tight text-forest sm:text-4xl">
          The ones I'd ask too.
        </h2>
        <div className="mt-12 border-t border-rule">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-rule">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xl text-forest sm:text-2xl">
                    {f.q}
                  </span>
                  <span
                    className="mt-1 font-display text-2xl leading-none text-terracotta"
                    aria-hidden="true"
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="max-w-2xl pb-7 pr-10 font-sans text-base leading-relaxed text-ink/80">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="apply" className="bg-forest text-forest-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 px-6 py-20 md:flex-row md:items-end">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <TableMark className="h-8 w-8 text-forest-foreground" />
            <span className="font-display text-xl tracking-tight">
              kitchen table co.
            </span>
          </div>
          <p className="mt-8 font-display text-4xl leading-tight sm:text-5xl">
            Cohort 1 is open.<br />
            <span className="italic font-normal text-forest-foreground/85">30 spots.</span>
          </p>
          <p className="mt-5 max-w-md font-sans text-base text-forest-foreground/75">
            Pull up a chair. If it's not the right fit, I'll tell you — and point you to
            something better. That's a promise.
          </p>
        </div>
        <a
          href="#apply"
          className="inline-flex items-center justify-center rounded-sm bg-cream px-7 py-4 font-sans text-base font-medium text-forest transition-colors hover:bg-cream/90"
        >
          Apply for Cohort 1
        </a>
      </div>
      <div className="border-t border-forest-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 font-sans text-sm text-forest-foreground/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kitchen Table Co.</p>
          <p>Built at a kitchen table. Yes, really.</p>
        </div>
      </div>
    </footer>
  );
}
