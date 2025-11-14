import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface StatProps {
  end: number;
  suffix: string;
  label: string;
  prefix?: string;
}

function StatCounter({ end, suffix, label, prefix = "" }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center group">
      <div className="mb-4">
        <span className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary group-hover:scale-110 transition-transform duration-300 inline-block">
          {prefix}{count}{suffix}
        </span>
      </div>
      <p className="text-base lg:text-lg text-muted-foreground font-semibold">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { end: 65, suffix: "%", label: t('stats.reduction'), prefix: "" },
    { end: 2, suffix: "min", label: t('stats.responseTime'), prefix: "<" },
    { end: 24, suffix: "/7", label: t('stats.availability'), prefix: "" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 gradient-bg relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-3 sm:mb-4">
            {t('stats.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            {t('stats.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <StatCounter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
