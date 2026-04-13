import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="quem-somos"
      data-theme="light"
      className="py-16 lg:py-24"
      style={{ background: "#f5f4f2" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">

          {/* Coluna esquerda — foto */}
          <div className="reveal order-2 lg:col-span-2 lg:order-1">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
              <img
                src="/gabriel-aumah.png"
                alt="Gabriel Castro — Fundador da Aumah Hub"
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

          {/* Coluna direita — conteúdo */}
          <div className="reveal order-1 flex flex-col justify-center lg:col-span-3 lg:order-2">
            <span className="mb-4 inline-block text-[13px] font-semibold uppercase tracking-widest text-orange">
              Quem somos
            </span>

            <h2 className="text-[clamp(28px,3vw,44px)] font-bold leading-tight tracking-tight text-navy">
              Dados antes de opinião.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-navy/60">
              A Aumah nasceu da convicção de que toda decisão de mídia
              deveria ser respaldada por números, não por achismo.
              ROI mensurável como norte — sem jargão de agência,
              sem métricas de vaidade.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-navy">R$12M+</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-navy/40">
                  em verba gerenciada
                </p>
              </div>
              <div className="hidden h-10 w-px bg-navy/15 sm:block" />
              <div>
                <p className="text-3xl font-bold text-navy">3+</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-navy/40">
                  anos de operação
                </p>
              </div>
              <div className="hidden h-10 w-px bg-navy/15 sm:block" />
              <div>
                <p className="text-3xl font-bold text-navy">23</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-navy/40">
                  clientes ativos
                </p>
              </div>
            </div>

            {/* Assinatura */}
            <div className="mt-8 flex items-center gap-3 border-t border-navy/10 pt-6">
              <div>
                <p className="text-sm font-semibold text-navy">Gabriel Castro</p>
                <p className="text-xs text-navy/40">Fundador & Head de Performance</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
