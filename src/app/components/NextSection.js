"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const chapters = [
  {
    no: "01",
    label: "Editorial Flow",
    title: "A premium library is more than covers on a screen.",
    desc: "Strong typography, controlled motion, layered surfaces, and disciplined spacing create the feeling of a real premium brand.",
    word: "CURATED",
  },
  {
    no: "02",
    label: "Reader Mood",
    title: "The atmosphere should feel quiet, rich, and intentional.",
    desc: "Instead of visual noise, the section builds emotion through light, rhythm, contrast, and smooth GSAP pacing.",
    word: "MOOD",
  },
  {
    no: "03",
    label: "Collection Identity",
    title: "Every panel should feel like part of one collector universe.",
    desc: "A luxury books site works when each transition feels directed, not random — one visual language, one strong experience.",
    word: "EDITION",
  },
];

export default function NextSection() {
  const rootRef = useRef(null);
  const sectionRef = useRef(null);

  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const actionsRef = useRef(null);

  const chapterCardRef = useRef(null);
  const chapterNoRef = useRef(null);
  const chapterLabelRef = useRef(null);
  const chapterTitleRef = useRef(null);
  const chapterDescRef = useRef(null);

  const bigWordRef = useRef(null);
  const progressRef = useRef(null);

  const stageRef = useRef(null);
  const glowRef = useRef(null);
  const shadowRef = useRef(null);

  const panel1Ref = useRef(null);
  const panel2Ref = useRef(null);
  const panel3Ref = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const setChapter = (index) => {
          const item = chapters[index];
          if (chapterNoRef.current) chapterNoRef.current.textContent = item.no;
          if (chapterLabelRef.current) chapterLabelRef.current.textContent = item.label;
          if (chapterTitleRef.current) chapterTitleRef.current.textContent = item.title;
          if (chapterDescRef.current) chapterDescRef.current.textContent = item.desc;
          if (bigWordRef.current) bigWordRef.current.textContent = item.word;
        };

        setChapter(0);

        gsap.set(
          [
            badgeRef.current,
            titleRef.current,
            descRef.current,
            actionsRef.current,
            chapterCardRef.current,
          ],
          { opacity: 0, y: 40 }
        );

        gsap.set(bigWordRef.current, {
          opacity: 0.08,
          y: 40,
          scale: 0.92,
        });

        gsap.set(stageRef.current, {
          opacity: 0,
          scale: 0.94,
          y: 32,
          transformPerspective: 3000,
          transformStyle: "preserve-3d",
        });

        gsap.set(glowRef.current, { opacity: 0.24, scale: 0.82 });
        gsap.set(shadowRef.current, { opacity: 0.48, scale: 0.86 });
        gsap.set(progressRef.current, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        gsap.set(panel1Ref.current, {
          y: 120,
          rotateX: 10,
          rotateY: -14,
          rotateZ: -4,
          scale: 0.92,
          opacity: 0.55,
        });

        gsap.set(panel2Ref.current, {
          y: 36,
          rotateX: 6,
          rotateY: 0,
          rotateZ: 0,
          scale: 1,
          opacity: 1,
        });

        gsap.set(panel3Ref.current, {
          y: 120,
          rotateX: 10,
          rotateY: 14,
          rotateZ: 4,
          scale: 0.92,
          opacity: 0.55,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=1800",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          [badgeRef.current, titleRef.current, descRef.current, actionsRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "none",
          },
          0
        )
          .to(
            chapterCardRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: "none",
            },
            0.08
          )
          .to(
            stageRef.current,
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.75,
              ease: "none",
            },
            0
          )
          .to(
            bigWordRef.current,
            {
              opacity: 0.12,
              y: 0,
              scale: 1,
              duration: 0.75,
              ease: "none",
            },
            0
          )
          .to(
            glowRef.current,
            {
              opacity: 0.7,
              scale: 1.04,
              duration: 0.8,
              ease: "none",
            },
            0
          )
          .to(
            shadowRef.current,
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "none",
            },
            0
          )
          .to(
            progressRef.current,
            {
              scaleX: 0.33,
              duration: 0.45,
              ease: "none",
            },
            0.1
          )
          .to(
            panel2Ref.current,
            {
              y: -12,
              scale: 1.04,
              duration: 0.75,
              ease: "none",
            },
            0.4
          )
          .to(
            panel1Ref.current,
            {
              y: 150,
              opacity: 0.24,
              scale: 0.88,
              duration: 0.75,
              ease: "none",
            },
            0.4
          )
          .to(
            panel3Ref.current,
            {
              y: 150,
              opacity: 0.24,
              scale: 0.88,
              duration: 0.75,
              ease: "none",
            },
            0.4
          )
          .to(
            chapterCardRef.current,
            {
              opacity: 0.45,
              y: -10,
              duration: 0.14,
              ease: "none",
            },
            1.0
          )
          .to(
            bigWordRef.current,
            {
              opacity: 0.07,
              scale: 1.06,
              duration: 0.14,
              ease: "none",
            },
            1.0
          )
          .to({}, { duration: 0.01, onStart: () => setChapter(1) }, 1.03)
          .to(
            chapterCardRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.18,
              ease: "none",
            },
            1.08
          )
          .to(
            bigWordRef.current,
            {
              opacity: 0.12,
              scale: 1,
              duration: 0.18,
              ease: "none",
            },
            1.08
          )
          .to(
            progressRef.current,
            {
              scaleX: 0.66,
              duration: 0.4,
              ease: "none",
            },
            1.08
          )
          .to(
            panel2Ref.current,
            {
              y: 120,
              rotateY: -14,
              rotateX: 10,
              rotateZ: -4,
              scale: 0.9,
              opacity: 0.3,
              duration: 0.9,
              ease: "none",
            },
            1.22
          )
          .to(
            panel3Ref.current,
            {
              y: -18,
              rotateX: 4,
              rotateY: 0,
              rotateZ: 0,
              scale: 1.05,
              opacity: 1,
              duration: 0.9,
              ease: "none",
            },
            1.22
          )
          .to(
            panel1Ref.current,
            {
              y: 160,
              opacity: 0.14,
              scale: 0.84,
              duration: 0.9,
              ease: "none",
            },
            1.22
          )
          .to(
            chapterCardRef.current,
            {
              opacity: 0.45,
              y: -10,
              duration: 0.14,
              ease: "none",
            },
            1.68
          )
          .to(
            bigWordRef.current,
            {
              opacity: 0.07,
              scale: 1.06,
              duration: 0.14,
              ease: "none",
            },
            1.68
          )
          .to({}, { duration: 0.01, onStart: () => setChapter(2) }, 1.71)
          .to(
            chapterCardRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.18,
              ease: "none",
            },
            1.76
          )
          .to(
            bigWordRef.current,
            {
              opacity: 0.12,
              scale: 1,
              duration: 0.18,
              ease: "none",
            },
            1.76
          )
          .to(
            progressRef.current,
            {
              scaleX: 1,
              duration: 0.4,
              ease: "none",
            },
            1.76
          )
          .to(
            panel3Ref.current,
            {
              y: 130,
              rotateY: 14,
              rotateX: 10,
              rotateZ: 4,
              scale: 0.9,
              opacity: 0.3,
              duration: 0.85,
              ease: "none",
            },
            1.88
          )
          .to(
            panel1Ref.current,
            {
              y: -18,
              rotateX: 4,
              rotateY: 0,
              rotateZ: 0,
              scale: 1.06,
              opacity: 1,
              duration: 0.85,
              ease: "none",
            },
            1.88
          )
          .to(
            panel2Ref.current,
            {
              y: 150,
              opacity: 0.14,
              scale: 0.82,
              duration: 0.85,
              ease: "none",
            },
            1.88
          );
      }, rootRef);

      return () => ctx.revert();
    },
    { scope: rootRef }
  );

  return (
     

     
  <>
    <section className="hidden md:block">
       <div ref={sectionRef} className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_30%)]" />
          <div
            ref={glowRef}
            className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c69052]/10 blur-[160px]"
          />
        </div>

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p
              ref={badgeRef}
              className="inline-flex items-center rounded-full border border-[#d8aa70]/16 bg-[#d8aa70]/8 px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-[#d8aa70]"
            >
              Editorial Motion
            </p>

            <h2
              ref={titleRef}
              className="mt-5 max-w-[650px] text-4xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-7xl"
            >
              Different from the hero.
              <span className="block text-[#d8aa70]">
                Still premium. Still cinematic.
              </span>
            </h2>

            <p
              ref={descRef}
              className="mt-7 max-w-xl text-lg leading-8 text-white/60"
            >
              Hero me book-object reveal hai. Yahan editorial showcase hai.
              Same quality, but different motion language — isi se homepage rich
              lagta hai.
            </p>

            <div ref={actionsRef} className="mt-10 flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-2 rounded-full bg-[#f7f2ea] px-7 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
                Explore Collection
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-full border border-white/14 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/[0.06]">
                Read More
              </button>
            </div>

            <div
              ref={chapterCardRef}
              className="mt-14 max-w-[560px] rounded-[30px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                <div
                  ref={progressRef}
                  className="absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-r from-[#d8aa70] via-[#f2dbb2] to-[#d8aa70]"
                />
              </div>

              <p
                ref={chapterNoRef}
                className="mt-6 text-[11px] uppercase tracking-[0.34em] text-[#d8aa70]"
              >
                01
              </p>

              <p
                ref={chapterLabelRef}
                className="mt-3 text-sm uppercase tracking-[0.22em] text-white/46"
              >
                Editorial Flow
              </p>

              <h3
                ref={chapterTitleRef}
                className="mt-3 text-2xl font-semibold tracking-[-0.04em]"
              >
                A premium library is more than covers on a screen.
              </h3>

              <p
                ref={chapterDescRef}
                className="mt-3 text-sm leading-7 text-white/60"
              >
                Strong typography, controlled motion, layered surfaces, and disciplined spacing create the feeling of a real premium brand.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center [perspective:3000px]">
            <div
              ref={stageRef}
              className="relative h-[760px] w-full max-w-[920px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                ref={bigWordRef}
                className="absolute left-1/2 top-[12%] z-0 -translate-x-1/2 text-[110px] font-semibold uppercase tracking-[-0.08em] text-white/10 lg:text-[210px]"
              >
                CURATED
              </div>

              <div
                ref={shadowRef}
                className="absolute left-1/2 top-[76%] h-[150px] w-[680px] -translate-x-1/2 rounded-full bg-black/80 blur-[56px]"
              />

              <FeaturePanel
                refProp={panel1Ref}
                align="left"
                eyebrow="Collector Notes"
                title="Bound for people who notice detail."
                body="Rich texture, balanced spacing, restrained highlights, and editorial composition that feels expensive."
                stat="12 Editions"
              />

              <FeaturePanel
                refProp={panel2Ref}
                align="center"
                eyebrow="Reader Atmosphere"
                title="Mood before motion."
                body="Smooth reveals, warm gold depth, and visual silence that lets the section breathe like luxury branding."
                stat="Premium Flow"
                featured
              />

              <FeaturePanel
                refProp={panel3Ref}
                align="right"
                eyebrow="Library Identity"
                title="A collection with one visual language."
                body="The panels feel related, the typography feels intentional, and the transitions feel directed."
                stat="Curated World"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="block md:hidden">
      <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <p className="inline-flex rounded-full border border-[#d8aa70]/16 bg-[#d8aa70]/8 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-[#d8aa70]">
          Editorial Flow
        </p>

        <h2 className="mt-4 text-2xl font-semibold leading-[0.95] tracking-[-0.05em] text-white">
          A premium library needs
          <span className="block text-[#d8aa70]">clear visual rhythm.</span>
        </h2>

        <p className="mt-4 text-sm leading-7 text-white/60">
          Strong typography, calm motion, layered surfaces, and proper spacing
          make the mobile experience feel like an app product.
        </p>

        <div className="mt-5 space-y-3">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#f1d8ac]">
              Chapter 01
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">
              Editorial Flow
            </h3>
            <p className="mt-2 text-sm leading-7 text-white/55">
              Everything should feel connected and premium.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#f1d8ac]">
              Chapter 02
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">
              Reader Mood
            </h3>
            <p className="mt-2 text-sm leading-7 text-white/55">
              Quiet, rich, and intentional.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>

  );
}

function FeaturePanel({
  refProp,
  align = "center",
  eyebrow,
  title,
  body,
  stat,
  featured = false,
}) {
  const alignClass =
    align === "left"
      ? "left-[4%]"
      : align === "right"
      ? "right-[4%]"
      : "left-1/2 -translate-x-1/2";

  return (
    <div
      ref={refProp}
      className={`absolute ${alignClass} top-[42%] h-[500px] w-[320px] -translate-y-1/2`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className={`relative h-full w-full overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-[10px] shadow-[0_36px_140px_rgba(0,0,0,0.58)] backdrop-blur-xl ${
          featured ? "ring-1 ring-[#d8aa70]/18" : ""
        }`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_26%,transparent_72%,rgba(192,138,74,0.08))]" />
        <div className="absolute left-[10%] top-[8%] h-[36%] w-[68%] rotate-[14deg] bg-white/10 blur-[28px]" />
        <div className="absolute inset-[18px] rounded-[26px] border border-white/10" />
        <div className="absolute inset-[28px] rounded-[20px] border border-white/6" />
        <div className="absolute bottom-0 left-0 h-[28%] w-full bg-[linear-gradient(to_top,rgba(0,0,0,0.28),transparent)]" />

        <div className="relative z-10 flex h-full flex-col justify-between p-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#f1d8ac]">
              {eyebrow}
            </p>

            <h3 className="mt-6 text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-white">
              {title}
            </h3>

            <p className="mt-5 text-sm leading-8 text-white/68">{body}</p>
          </div>

          <div className="inline-flex w-fit rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-white/56">
            {stat}
          </div>
        </div>
      </div>
    </div>
  );
}