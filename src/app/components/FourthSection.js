"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const manifestoSteps = [
  {
    no: "01",
    label: "Material Thinking",
    title: "Luxury starts where restraint begins.",
    desc: "Premium design loud effects se nahi banta. It comes from spacing, proportion, weight, and the confidence to keep things calm.",
    word: "FORM",
  },
  {
    no: "02",
    label: "Motion Discipline",
    title: "Movement should guide the eye, not beg for attention.",
    desc: "Every reveal should have a reason. Good motion makes the brand feel expensive because it feels controlled.",
    word: "MOTION",
  },
  {
    no: "03",
    label: "Brand Presence",
    title: "The world should feel curated, not assembled.",
    desc: "When typography, surfaces, and transitions all speak the same language, the experience feels like a true collection.",
    word: "PRESENCE",
  },
];

const manifestoPanels = [
  {
    eyebrow: "Form",
    title: "Surfaces should feel composed.",
    body: "Clean planes, quiet highlights, and controlled density create a premium reading of the interface.",
    align: "left",
  },
  {
    eyebrow: "Motion",
    title: "Animation should carry intent.",
    body: "The eye should move naturally. Nothing should feel like filler just because GSAP is available.",
    align: "right",
  },
  {
    eyebrow: "Presence",
    title: "The brand should feel authored.",
    body: "When every section has a role and a distinct motion language, the homepage starts feeling unforgettable.",
    align: "left",
    featured: true,
  },
];

export default function FourthSection() {
  const rootRef = useRef(null);
  const sectionRef = useRef(null);

  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  const infoRef = useRef(null);
  const infoNoRef = useRef(null);
  const infoLabelRef = useRef(null);
  const infoTitleRef = useRef(null);
  const infoDescRef = useRef(null);
  const progressRef = useRef(null);

  const bigWordDesktopRef = useRef(null);
  const bigWordMobileRef = useRef(null);

  const stageRef = useRef(null);
  const glowRef = useRef(null);

  const panel1Ref = useRef(null);
  const panel2Ref = useRef(null);
  const panel3Ref = useRef(null);

  const mobileStageRef = useRef(null);
  const mobilePanel1Ref = useRef(null);
  const mobilePanel2Ref = useRef(null);
  const mobilePanel3Ref = useRef(null);

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 768;

      const ctx = gsap.context(() => {
        const setStep = (index) => {
          const item = manifestoSteps[index];

          if (infoNoRef.current) infoNoRef.current.textContent = item.no;
          if (infoLabelRef.current) infoLabelRef.current.textContent = item.label;
          if (infoTitleRef.current) infoTitleRef.current.textContent = item.title;
          if (infoDescRef.current) infoDescRef.current.textContent = item.desc;

          if (bigWordDesktopRef.current) bigWordDesktopRef.current.textContent = item.word;
          if (bigWordMobileRef.current) bigWordMobileRef.current.textContent = item.word;
        };

        setStep(0);

        gsap.set(
          [
            badgeRef.current,
            titleRef.current,
            descRef.current,
            ctaRef.current,
            infoRef.current,
          ],
          { opacity: 0, y: isMobile ? 24 : 36 }
        );

        gsap.set(progressRef.current, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        if (isMobile) {
          gsap.set(bigWordMobileRef.current, {
            opacity: 0.04,
            y: 18,
            scale: 0.98,
          });

          gsap.set(mobileStageRef.current, {
            opacity: 0,
            y: 24,
            scale: 0.98,
          });

          gsap.set(
            [mobilePanel1Ref.current, mobilePanel2Ref.current, mobilePanel3Ref.current],
            {
              opacity: 0,
              y: 44,
              scale: 0.96,
            }
          );

          const mobileTl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              end: "bottom 28%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          mobileTl
            .to(
              [badgeRef.current, titleRef.current, descRef.current, ctaRef.current],
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
              infoRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 0.45,
                ease: "none",
              },
              0.08
            )
            .to(
              bigWordMobileRef.current,
              {
                opacity: 0.08,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: "none",
              },
              0.08
            )
            .to(
              mobileStageRef.current,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.7,
                ease: "none",
              },
              0.12
            )
            .to(
              progressRef.current,
              {
                scaleX: 0.33,
                duration: 0.35,
                ease: "none",
              },
              0.14
            )
            .to(
              mobilePanel1Ref.current,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.45,
                ease: "none",
              },
              0.22
            )
            .to(
              infoRef.current,
              {
                opacity: 0.42,
                y: -8,
                duration: 0.14,
                ease: "none",
              },
              0.74
            )
            .to({}, { duration: 0.01, onStart: () => setStep(1) }, 0.77)
            .to(
              infoRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 0.18,
                ease: "none",
              },
              0.82
            )
            .to(
              bigWordMobileRef.current,
              {
                opacity: 0.08,
                scale: 1,
                duration: 0.18,
                ease: "none",
              },
              0.82
            )
            .to(
              progressRef.current,
              {
                scaleX: 0.66,
                duration: 0.35,
                ease: "none",
              },
              0.84
            )
            .to(
              mobilePanel2Ref.current,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.45,
                ease: "none",
              },
              0.92
            )
            .to(
              mobilePanel1Ref.current,
              {
                y: -8,
                scale: 0.985,
                opacity: 0.72,
                duration: 0.45,
                ease: "none",
              },
              0.92
            )
            .to(
              infoRef.current,
              {
                opacity: 0.42,
                y: -8,
                duration: 0.14,
                ease: "none",
              },
              1.42
            )
            .to({}, { duration: 0.01, onStart: () => setStep(2) }, 1.45)
            .to(
              infoRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 0.18,
                ease: "none",
              },
              1.5
            )
            .to(
              bigWordMobileRef.current,
              {
                opacity: 0.08,
                scale: 1,
                duration: 0.18,
                ease: "none",
              },
              1.5
            )
            .to(
              progressRef.current,
              {
                scaleX: 1,
                duration: 0.35,
                ease: "none",
              },
              1.52
            )
            .to(
              mobilePanel3Ref.current,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.45,
                ease: "none",
              },
              1.6
            )
            .to(
              [mobilePanel1Ref.current, mobilePanel2Ref.current],
              {
                y: (i) => (i === 0 ? -14 : -6),
                scale: (i) => (i === 0 ? 0.96 : 0.98),
                opacity: (i) => (i === 0 ? 0.38 : 0.68),
                duration: 0.45,
                stagger: 0.02,
                ease: "none",
              },
              1.6
            );

          return;
        }

        gsap.set(bigWordDesktopRef.current, {
          opacity: 0.05,
          y: 24,
          scale: 0.95,
        });

        gsap.set(stageRef.current, {
          opacity: 0,
          scale: 0.96,
          y: 32,
        });

        gsap.set(glowRef.current, {
          opacity: 0.18,
          scale: 0.84,
        });

        gsap.set(panel1Ref.current, {
          clipPath: "inset(100% 0% 0% 0% round 28px)",
          y: 40,
        });

        gsap.set(panel2Ref.current, {
          clipPath: "inset(100% 0% 0% 0% round 28px)",
          y: 40,
        });

        gsap.set(panel3Ref.current, {
          clipPath: "inset(100% 0% 0% 0% round 28px)",
          y: 40,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=2000",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          [badgeRef.current, titleRef.current, descRef.current, ctaRef.current],
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
            infoRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: "none",
            },
            0.1
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
            glowRef.current,
            {
              opacity: 0.72,
              scale: 1.04,
              duration: 0.8,
              ease: "none",
            },
            0
          )
          .to(
            bigWordDesktopRef.current,
            {
              opacity: 0.1,
              y: 0,
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
              duration: 0.4,
              ease: "none",
            },
            0.1
          )
          .to(
            panel1Ref.current,
            {
              clipPath: "inset(0% 0% 0% 0% round 28px)",
              y: 0,
              duration: 0.8,
              ease: "none",
            },
            0.35
          )
          .to(
            infoRef.current,
            {
              opacity: 0.42,
              y: -8,
              duration: 0.14,
              ease: "none",
            },
            0.98
          )
          .to(
            bigWordDesktopRef.current,
            {
              opacity: 0.06,
              scale: 1.04,
              duration: 0.14,
              ease: "none",
            },
            0.98
          )
          .to({}, { duration: 0.01, onStart: () => setStep(1) }, 1.01)
          .to(
            infoRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.18,
              ease: "none",
            },
            1.06
          )
          .to(
            bigWordDesktopRef.current,
            {
              opacity: 0.1,
              scale: 1,
              duration: 0.18,
              ease: "none",
            },
            1.06
          )
          .to(
            progressRef.current,
            {
              scaleX: 0.66,
              duration: 0.4,
              ease: "none",
            },
            1.06
          )
          .to(
            panel2Ref.current,
            {
              clipPath: "inset(0% 0% 0% 0% round 28px)",
              y: 0,
              duration: 0.8,
              ease: "none",
            },
            1.2
          )
          .to(
            panel1Ref.current,
            {
              y: -10,
              scale: 0.985,
              opacity: 0.7,
              duration: 0.7,
              ease: "none",
            },
            1.2
          )
          .to(
            infoRef.current,
            {
              opacity: 0.42,
              y: -8,
              duration: 0.14,
              ease: "none",
            },
            1.66
          )
          .to(
            bigWordDesktopRef.current,
            {
              opacity: 0.06,
              scale: 1.04,
              duration: 0.14,
              ease: "none",
            },
            1.66
          )
          .to({}, { duration: 0.01, onStart: () => setStep(2) }, 1.69)
          .to(
            infoRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.18,
              ease: "none",
            },
            1.74
          )
          .to(
            bigWordDesktopRef.current,
            {
              opacity: 0.1,
              scale: 1,
              duration: 0.18,
              ease: "none",
            },
            1.74
          )
          .to(
            progressRef.current,
            {
              scaleX: 1,
              duration: 0.4,
              ease: "none",
            },
            1.74
          )
          .to(
            panel3Ref.current,
            {
              clipPath: "inset(0% 0% 0% 0% round 28px)",
              y: 0,
              duration: 0.8,
              ease: "none",
            },
            1.88
          )
          .to(
            [panel1Ref.current, panel2Ref.current],
            {
              y: (i) => (i === 0 ? -18 : -8),
              scale: (i) => (i === 0 ? 0.96 : 0.98),
              opacity: (i) => (i === 0 ? 0.38 : 0.68),
              duration: 0.8,
              stagger: 0.02,
              ease: "none",
            },
            1.88
          )
          .to(
            glowRef.current,
            {
              opacity: 0.92,
              scale: 1.16,
              duration: 0.75,
              ease: "none",
            },
            1.96
          )
          .to(
            stageRef.current,
            {
              scale: 1.03,
              y: -10,
              duration: 0.75,
              ease: "none",
            },
            1.96
          );
      }, rootRef);

      return () => ctx.revert();
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-transparent text-white"
    >
      <div ref={sectionRef} className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_30%)]" />
          <div
            ref={glowRef}
            className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c69052]/10 blur-[160px]"
          />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-4 py-14 sm:px-5 sm:py-16 md:px-6 md:py-20 lg:min-h-screen lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-8 lg:py-24">
          <div>
            <p
              ref={badgeRef}
              className="inline-flex rounded-full border border-[#d8aa70]/16 bg-[#d8aa70]/8 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-[#d8aa70] sm:px-4 sm:text-[11px] sm:tracking-[0.34em]"
            >
              Brand Manifesto
            </p>

            <h2
              ref={titleRef}
              className="mt-4 max-w-[680px] text-3xl font-semibold leading-[0.92] tracking-[-0.06em] sm:mt-5 sm:text-4xl md:text-5xl lg:text-7xl"
            >
              Premium feel comes from control.
              <span className="block text-[#d8aa70]">Not noise.</span>
            </h2>

            <p
              ref={descRef}
              className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:mt-6 sm:text-base sm:leading-8 lg:mt-7 lg:text-lg"
            >
              Ye section brand philosophy ko visual form deta hai — surfaces,
              motion, restraint, aur one-language experience.
            </p>

            <div
              ref={ctaRef}
              className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4 lg:mt-10"
            >
              <button className="group inline-flex items-center gap-2 rounded-full bg-[#f7f2ea] px-5 py-3 text-xs font-semibold text-black transition hover:scale-[1.02] sm:px-7 sm:py-3.5 sm:text-sm">
                Read Manifesto
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-full border border-white/14 bg-white/[0.03] px-5 py-3 text-xs font-semibold text-white backdrop-blur-xl transition hover:bg-white/[0.06] sm:px-7 sm:py-3.5 sm:text-sm">
                View Process
              </button>
            </div>

            <div
              ref={infoRef}
              className="mt-8 w-full rounded-[26px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:mt-10 sm:rounded-[30px] sm:p-6 md:max-w-[560px] lg:mt-14"
            >
              <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                <div
                  ref={progressRef}
                  className="absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-r from-[#d8aa70] via-[#f2dbb2] to-[#d8aa70]"
                />
              </div>

              <p
                ref={infoNoRef}
                className="mt-5 text-[10px] uppercase tracking-[0.28em] text-[#d8aa70] sm:mt-6 sm:text-[11px] sm:tracking-[0.34em]"
              >
                01
              </p>

              <p
                ref={infoLabelRef}
                className="mt-3 text-xs uppercase tracking-[0.18em] text-white/46 sm:text-sm sm:tracking-[0.22em]"
              >
                Material Thinking
              </p>

              <h3
                ref={infoTitleRef}
                className="mt-3 text-xl font-semibold tracking-[-0.04em] sm:text-2xl"
              >
                Luxury starts where restraint begins.
              </h3>

              <p
                ref={infoDescRef}
                className="mt-3 text-sm leading-7 text-white/60"
              >
                Premium design loud effects se nahi banta. It comes from
                spacing, proportion, weight, and the confidence to keep things
                calm.
              </p>
            </div>
          </div>

          <div className="relative z-10">
            <div className="hidden md:flex items-center justify-center">
              <div
                ref={stageRef}
                className="relative h-[82vh] min-h-[700px] w-full max-w-[980px]"
              >
                <div
                  ref={bigWordDesktopRef}
                  className="pointer-events-none absolute left-1/2 top-[4%] z-0 -translate-x-1/2 text-[110px] font-semibold uppercase tracking-[-0.08em] text-white/10 lg:text-[220px]"
                >
                  FORM
                </div>

                <div className="absolute inset-0 flex flex-col gap-5">
                  <ManifestoPanel
                    refProp={panel1Ref}
                    align="left"
                    eyebrow={manifestoPanels[0].eyebrow}
                    title={manifestoPanels[0].title}
                    body={manifestoPanels[0].body}
                  />

                  <ManifestoPanel
                    refProp={panel2Ref}
                    align="right"
                    eyebrow={manifestoPanels[1].eyebrow}
                    title={manifestoPanels[1].title}
                    body={manifestoPanels[1].body}
                  />

                  <ManifestoPanel
                    refProp={panel3Ref}
                    align="left"
                    eyebrow={manifestoPanels[2].eyebrow}
                    title={manifestoPanels[2].title}
                    body={manifestoPanels[2].body}
                    featured
                  />
                </div>
              </div>
            </div>

            <div
              ref={mobileStageRef}
              className="md:hidden relative mt-6 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-3 shadow-[0_24px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),transparent_26%,transparent_72%,rgba(192,138,74,0.08))]" />

              <div
                ref={bigWordMobileRef}
                className="pointer-events-none absolute left-1/2 top-4 z-0 -translate-x-1/2 text-[56px] font-semibold uppercase tracking-[-0.08em] text-white/10"
              >
                FORM
              </div>

              <div className="relative z-10 space-y-4 pt-16">
                <ManifestoPanel
                  refProp={mobilePanel1Ref}
                  eyebrow={manifestoPanels[0].eyebrow}
                  title={manifestoPanels[0].title}
                  body={manifestoPanels[0].body}
                  mobile
                />

                <ManifestoPanel
                  refProp={mobilePanel2Ref}
                  eyebrow={manifestoPanels[1].eyebrow}
                  title={manifestoPanels[1].title}
                  body={manifestoPanels[1].body}
                  mobile
                />

                <ManifestoPanel
                  refProp={mobilePanel3Ref}
                  eyebrow={manifestoPanels[2].eyebrow}
                  title={manifestoPanels[2].title}
                  body={manifestoPanels[2].body}
                  featured
                  mobile
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ManifestoPanel({
  refProp,
  align = "left",
  eyebrow,
  title,
  body,
  featured = false,
  mobile = false,
}) {
  return (
    <div
      ref={refProp}
      className={`relative w-full ${
        !mobile && align === "right" ? "ml-auto" : ""
      } ${
        mobile ? "max-w-full" : featured ? "max-w-[92%]" : "max-w-[82%]"
      }`}
      style={refProp ? { willChange: "transform, opacity, clip-path" } : undefined}
    >
      <div
        className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-[10px] shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:rounded-[28px] ${
          featured ? "ring-1 ring-[#d8aa70]/16" : ""
        }`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),transparent_26%,transparent_72%,rgba(192,138,74,0.08))]" />
        <div className="absolute left-[10%] top-[8%] h-[36%] w-[58%] rotate-[14deg] bg-white/10 blur-[28px]" />
        <div className="absolute inset-[16px] rounded-[18px] border border-white/10 sm:rounded-[20px]" />
        <div className="absolute inset-[24px] rounded-[14px] border border-white/6 sm:inset-[26px] sm:rounded-[16px]" />

        <div
          className={`relative z-10 rounded-[18px] bg-[linear-gradient(155deg,#0f0d0d_0%,#1e1712_18%,#35261d_48%,#61462f_78%,#b9824b_100%)] ${
            mobile ? "p-5" : "p-8"
          }`}
        >
          <p className="text-[9px] uppercase tracking-[0.28em] text-[#f1d8ac] sm:text-[10px] sm:tracking-[0.34em]">
            {eyebrow}
          </p>

          <h3
            className={`mt-4 max-w-[620px] font-semibold leading-[0.96] tracking-[-0.05em] text-white ${
              mobile ? "text-2xl" : "text-3xl lg:text-4xl"
            }`}
          >
            {title}
          </h3>

          <p
            className={`mt-4 max-w-[620px] text-white/68 ${
              mobile ? "text-sm leading-7" : "text-sm leading-8"
            }`}
          >
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}