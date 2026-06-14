import { createFileRoute } from "@tanstack/react-router";
import { TableMark } from "@/components/table-mark";

export const Route = createFileRoute("/concepts")({
  head: () => ({
    meta: [
      { title: "Kitchen Table Co. — All 37 Concepts" },
      {
        name: "description",
        content:
          "Browse all 37 ready-to-run local business concepts. See exactly what we build for you, what it costs, and what you can earn. Exclusive territories. Two pricing options.",
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
  component: Concepts,
});

function Concepts() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ConceptsNav />
      <ConceptsHero />
      <PricingOptions />
      <MatrixEmbed />
      <ConceptsFooter />
    </div>
  );
}

function ConceptsNav() {
  return (
    <header
      aria-label="Site navigation"
      className="sticky top-0 z-30 border-b border-rule bg-background/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-3 text-forest">
          <TableMark className="h-8 w-8" />
          <span className="font-display text-xl leading-none tracking-tight">
            kitchen table co.
          </span>
        </a>
        <a
          href="https://tally.so/r/LZOGjv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Apply for Kitchen Table Co Cohort 1 — opens application form"
          className="inline-flex items-center rounded-sm bg-forest px-4 py-2.5 text-sm font-medium text-forest-foreground transition-colors hover:bg-forest/90 sm:px-5"
        >
          Apply for Cohort 1
        </a>
      </div>
    </header>
  );
}

function ConceptsHero() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-5xl px-6 pt-16 pb-16 sm:pt-20 sm:pb-20">
        <p className="mb-6 font-sans text-xs uppercase tracking-[0.22em] text-terracotta">
          37 concepts · Exclusive territories
        </p>
        <h1 className="font-display text-4xl leading-tight tracking-tight text-forest sm:text-5xl md:text-6xl">
          Find the one that's yours.
        </h1>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink/80">
          Every concept below comes fully built — website, automations, SOPs, brand kit,
          legal templates, training, and 12 months of support. You pick the concept,
          claim your territory, and open for business in about six weeks.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#matrix"
            className="inline-flex items-center justify-center rounded-sm bg-forest px-6 py-3.5 font-sans text-base font-medium text-forest-foreground transition-colors hover:bg-forest/90"
          >
            Browse all concepts
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-sm border border-forest px-6 py-3.5 font-sans text-base font-medium text-forest transition-colors hover:bg-forest hover:text-forest-foreground"
          >
            Take the fit finder
          </a>
        </div>
      </div>
    </section>
  );
}

function PricingOptions() {
  return (
    <section className="border-b border-rule bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <p className="mb-6 font-sans text-xs uppercase tracking-[0.22em] text-terracotta">
          Two ways in
        </p>
        <h2 className="mb-10 font-display text-3xl leading-tight text-forest sm:text-4xl">
          Pick the model that fits where you are right now.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Option A */}
          <div className="rounded-sm border border-forest/30 bg-background p-8">
            <p className="mb-2 font-sans text-xs uppercase tracking-[0.18em] text-forest">
              Option A
            </p>
            <h3 className="mb-1 font-display text-2xl text-forest">
              Deposit + 10%
            </h3>
            <p className="mb-6 font-sans text-sm text-ink/60">
              Most operators choose this.
            </p>
            <ul className="space-y-3 font-sans text-sm leading-relaxed text-ink/80">
              <li className="flex gap-3">
                <span className="mt-0.5 text-forest">→</span>
                Pay a deposit upfront ($250–$8,000 depending on the concept)
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-forest">→</span>
                Keep 90% of everything you earn. We take 10%.
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-forest">→</span>
                Buy out your license at any time at a fixed price
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-forest">→</span>
                The math works out better the moment you start earning
              </li>
            </ul>
          </div>

          {/* Option B */}
          <div className="rounded-sm border border-rule bg-background p-8">
            <p className="mb-2 font-sans text-xs uppercase tracking-[0.18em] text-terracotta">
              Option B
            </p>
            <h3 className="mb-1 font-display text-2xl text-forest">
              No Deposit + 20%
            </h3>
            <p className="mb-6 font-sans text-sm text-ink/60">
              Zero upfront. Higher ongoing fee.
            </p>
            <ul className="space-y-3 font-sans text-sm leading-relaxed text-ink/80">
              <li className="flex gap-3">
                <span className="mt-0.5 text-terracotta">→</span>
                No deposit. Nothing upfront.
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-terracotta">→</span>
                Keep 80% of what you earn. We take 20%.
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-terracotta">→</span>
                Buy out your license at any time at a fixed price
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-terracotta">→</span>
                Good if you want to test before committing
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-6 font-sans text-sm text-ink/60">
          Both options include exclusive territory protection, the full build, 12 hours of training, and 12 months of support.
          Buyout prices are fixed and listed on each concept below.
        </p>
      </div>
    </section>
  );
}

function MatrixEmbed() {
  return (
    <section id="matrix" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20">
        <p className="mb-4 font-sans text-xs uppercase tracking-[0.22em] text-terracotta">
          The full catalog
        </p>
        <h2 className="mb-3 font-display text-3xl leading-tight text-forest sm:text-4xl">
          What we build. What it costs. What's yours.
        </h2>
        <p className="mb-10 max-w-xl font-sans text-base text-ink/75">
          Filter by price tier. Every dot is a deliverable we build for you before you open.
        </p>
        <div className="overflow-hidden rounded-sm border border-forest/20 bg-background">
          <iframe
            src="/ktc-pricing-matrix.html"
            title="Kitchen Table Co Concept Pricing Matrix"
            className="block w-full border-0"
            style={{ height: "900px" }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function ConceptsFooter() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 px-6 py-20 md:flex-row md:items-end">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <TableMark className="h-8 w-8 text-forest-foreground" />
            <span className="font-display text-xl tracking-tight">
              kitchen table co.
            </span>
          </div>
          <p className="mt-8 font-display text-4xl leading-tight sm:text-5xl">
            Found your concept?<br />
            <span className="italic font-normal text-forest-foreground/85">
              Claim your territory.
            </span>
          </p>
          <p className="mt-5 max-w-md font-sans text-base text-forest-foreground/75">
            Cohort 1 is open. 30 spots. If it's not the right fit, we'll tell you —
            and point you to something better. That's a promise.
          </p>
        </div>
        <a
          href="https://tally.so/r/LZOGjv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Apply for Kitchen Table Co Cohort 1 — opens application form"
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
