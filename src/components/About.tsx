import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="quem-somos"
      data-theme="light"
      className="py-24"
      style={{ background: "#f5f4f2" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <span className="reveal mb-4 inline-block text-[13px] font-semibold uppercase tracking-widest text-orange">
          Quem somos
        </span>
        <h2 className="reveal text-[clamp(28px,3.5vw,52px)] font-extrabold leading-tight text-navy">
          Dados antes de opinião.
        </h2>
        <p className="reveal mt-6 text-lg leading-relaxed text-text-light-bg/70">
          A Aumah nasceu da convicção de que toda decisão de mídia deveria ser
          respaldada por números, não por achismo. Trabalhamos com Google Ads,
          LinkedIn Ads e Meta Ads tendo o ROI mensurável como norte — sem
          jargões de agência, sem relatórios cheios de vaidade métrica. Cada
          real investido tem um destino claro e um resultado rastreável.
        </p>
        <p className="reveal mt-4 text-lg leading-relaxed text-text-light-bg/70">
          Nossa equipe combina rigor analítico com visão de negócio para
          transformar budget de mídia em receita real. Simples assim.
        </p>
      </div>
    </section>
  );
}
