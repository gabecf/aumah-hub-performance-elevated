import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tools = [
  { name: "Google Ads",   icon: "/tools-icons/google-ads.svg" },
  { name: "Meta Ads",     icon: "/tools-icons/meta.svg" },
  { name: "LinkedIn Ads", icon: "/tools-icons/linkedin.svg" },
  { name: "Analytics",    icon: "/tools-icons/google-analytics.svg" },
  { name: "Zapier",       icon: "/tools-icons/zapier.svg" },
  { name: "n8n",          icon: "/tools-icons/n8n.svg" },
  { name: "WordPress",    icon: "/tools-icons/wordpress.svg" },
  { name: "HubSpot",      icon: "/tools-icons/hubspot.svg" },
  { name: "Tag Manager",  icon: "/tools-icons/gtm.svg" },
  { name: "TikTok Ads",   icon: "/tools-icons/tiktok.svg" },
  { name: "Pinterest Ads", icon: "/tools-icons/pinterest.svg" },
  { name: "ManyChat",     icon: "/tools-icons/manychat.svg" },
];

export default function Services() {
  const ref = useScrollReveal<HTMLElement>();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(2);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const prev = () => setActive((a) => (a - 1 + tools.length) % tools.length);
  const next = () => setActive((a) => (a + 1) % tools.length);

  const getPos = (i: number) => {
    let diff = i - active;
    if (diff > tools.length / 2) diff -= tools.length;
    if (diff < -tools.length / 2) diff += tools.length;
    return diff;
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActive((a) => (a + 1) % tools.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.6, rootMargin: "0px 0px -160px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = el;
        sectionRef.current = el;
      }}
      id="servicos"
      data-theme="dark"
      className="overflow-hidden bg-dark py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          <h2 className="text-[clamp(28px,3.5vw,48px)] font-semibold tracking-tight text-text-dark-bg">
            Ferramentas que dominamos
          </h2>
          <p className="mt-4 max-w-lg text-base text-text-dark-bg/50">
            Do tráfego pago à automação — operamos o ecossistema completo de crescimento digital.
          </p>
        </div>

        {/* Carrossel */}
        <div
          className="relative mt-20 flex w-full items-center justify-center gap-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Seta esquerda */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-text-dark-bg/40 transition-all hover:border-white/30 hover:text-text-dark-bg"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Ícones — container com altura fixa */}
          <div
            className="relative flex flex-1 items-center justify-center"
            style={{ height: "140px" }}
          >
            {tools.map((tool, i) => {
              const pos = getPos(i);
              if (Math.abs(pos) > 2) return null;
              if (isMobile && Math.abs(pos) > 1) return null;

              const isCenter   = pos === 0;
              const isAdjacent = Math.abs(pos) === 1;
              const isEdge     = Math.abs(pos) === 2;

              const xOffset = pos * (isMobile ? 78 : 95);

              return (
                <div
                  key={tool.name + "-wrapper"}
                  className="absolute"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 500ms ease ${Math.abs(pos) * 120}ms, transform 500ms ease ${Math.abs(pos) * 120}ms`,
                  }}
                >
                  <button
                    onClick={() => setActive(i)}
                    aria-label={`Ver ${tool.name}`}
                    className="flex flex-col items-center gap-4 focus:outline-none"
                    style={{
                      transform: `translateX(${xOffset}px)`,
                      opacity: isEdge ? 0.6 : 1,
                      filter: isEdge ? "blur(1px)" : "none",
                      transition: "transform 600ms cubic-bezier(0.4,0,0.2,1), opacity 600ms cubic-bezier(0.4,0,0.2,1), filter 600ms cubic-bezier(0.4,0,0.2,1)",
                      zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                    }}
                  >
                    <div className={`flex items-center justify-center rounded-full transition-all duration-[600ms] ${
                      isCenter
                        ? "h-20 w-20 sm:h-24 sm:w-24 bg-white/[0.10] ring-1 ring-white/20 shadow-[0_0_24px_rgba(100,0,223,0.15),0_8px_24px_rgba(0,0,0,0.4)]"
                        : isAdjacent
                        ? "h-12 w-12 sm:h-[60px] sm:w-[60px] bg-white/[0.06] ring-1 ring-white/10"
                        : "h-9 w-9 sm:h-10 sm:w-10 bg-white/[0.03] ring-1 ring-white/[0.06]"
                    }`}>
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className={`invert transition-all duration-[600ms] ${
                          isCenter ? "h-8 w-8 sm:h-10 sm:w-10 opacity-90"
                          : isAdjacent ? "h-5 w-5 sm:h-6 sm:w-6 opacity-[0.42]"
                          : "h-4 w-4 sm:h-[18px] sm:w-[18px] opacity-[0.18]"
                        }`}
                      />
                    </div>
                    <span className={`text-sm font-medium whitespace-nowrap ${isCenter ? "text-text-dark-bg" : "opacity-0"}`}>
                      {tool.name}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Seta direita */}
          <button
            onClick={next}
            aria-label="Próximo"
            className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-text-dark-bg/40 transition-all hover:border-white/30 hover:text-text-dark-bg"
          >
            <ChevronRight size={18} />
          </button>

        </div>
      </div>
    </section>
  );
}
