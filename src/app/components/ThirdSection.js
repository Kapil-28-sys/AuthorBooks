"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const storyFrames = [
  {
    no: "01",
    label: "Gallery Motion",
    title: "Not a hero object. A moving editorial wall.",
    desc: "The section feels like a curated luxury exhibition where the collection moves in layers instead of repeating the same stage reveal.",
    word: "GALLERY",
  },
  {
    no: "02",
    label: "Multi-Layer Flow",
    title: "Three lanes. Three rhythms. One premium direction.",
    desc: "Different vertical speeds create visual richness without making the interface feel noisy or chaotic.",
    word: "RHYTHM",
  },
  {
    no: "03",
    label: "Brand Atmosphere",
    title: "The world feels larger than a single cover.",
    desc: "This gives the website scale. The experience starts feeling like a full campaign universe instead of isolated sections.",
    word: "WORLD",
  },
];

const laneOne = [
  { title: "Velvet Bound", subtitle: "Collector Finish", tone: "amber" },
  { title: "Quiet Gold", subtitle: "Signature Mark", tone: "espresso" },
  { title: "Archive Dust", subtitle: "Rare Series", tone: "charcoal" },
  { title: "Obsidian Page", subtitle: "Premium Chapter", tone: "midnight" },
];

const laneTwo = [
  { title: "Golden Spine", subtitle: "Icon Edition", tone: "copper" },
  { title: "Soft Ember", subtitle: "Reader Mood", tone: "amber" },
  { title: "Paper Silence", subtitle: "Luxury Notes", tone: "charcoal" },
  { title: "Burnt Bronze", subtitle: "Studio Finish", tone: "espresso" },
];

const laneThree = [
  { title: "First Light", subtitle: "Limited Drop", tone: "copper" },
  { title: "Rare Paper", subtitle: "Archive Piece", tone: "midnight" },
  { title: "Collector Ink", subtitle: "Editorial Issue", tone: "amber" },
  { title: "Dark Linen", subtitle: "Bound Series", tone: "charcoal" },
];

export default function ThirdSection() {
  const rootRef = useRef(null);
  const sectionRef = useRef(null);

  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  const chapterCardRef = useRef(null);
  const chapterNoRef = useRef(null);
  const chapterLabelRef = useRef(null);
  const chapterTitleRef = useRef(null);
  const chapterDescRef = useRef(null);
  const progressRef = useRef(null);

  const bigWordRef = useRef(null);
  const galleryWrapRef = useRef(null);
  const glowRef = useRef(null);

  const lane1Ref = useRef(null);
  const lane2Ref = useRef(null);
  const lane3Ref = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const setFrame = (index) => {
          const item = storyFrames[index];
          if (chapterNoRef.current) chapterNoRef.current.textContent = item.no;
          if (chapterLabelRef.current) chapterLabelRef.current.textContent = item.label;
          if (chapterTitleRef.current) chapterTitleRef.current.textContent = item.title;
          if (chapterDescRef.current) chapterDescRef.current.textContent = item.desc;
          if (bigWordRef.current) bigWordRef.current.textContent = item.word;
        };

        setFrame(0);

        gsap.set(
          [
            badgeRef.current,
            titleRef.current,
            descRef.current,
            ctaRef.current,
            chapterCardRef.current,
          ],
          { opacity: 0, y: 40 }
        );

        gsap.set(bigWordRef.current, {
          opacity: 0.05,
          y: 30,
          scale: 0.94,
        });

        gsap.set(galleryWrapRef.current, {
          opacity: 0,
          scale: 0.96,
          y: 30,
        });

        gsap.set(glowRef.current, {
          opacity: 0.18,
          scale: 0.82,
        });

        gsap.set(progressRef.current, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        gsap.set(lane1Ref.current, { y: -120 });
        gsap.set(lane2Ref.current, { y: -300 });
        gsap.set(lane3Ref.current, { y: -180 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=2200",
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
            galleryWrapRef.current,
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
              opacity: 0.1,
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
              opacity: 0.72,
              scale: 1.05,
              duration: 0.75,
              ease: "none",
            },
            0.02
          )
          .to(
            progressRef.current,
            {
              scaleX: 0.33,
              duration: 0.4,
              ease: "none",
            },
            0.12
          )
          .to(
            lane1Ref.current,
            {
              y: -520,
              duration: 1,
              ease: "none",
            },
            0.3
          )
          .to(
            lane2Ref.current,
            {
              y: -120,
              duration: 1,
              ease: "none",
            },
            0.3
          )
          .to(
            lane3Ref.current,
            {
              y: -620,
              duration: 1,
              ease: "none",
            },
            0.3
          )
          .to(
            chapterCardRef.current,
            {
              opacity: 0.42,
              y: -8,
              duration: 0.14,
              ease: "none",
            },
            1.06
          )
          .to(
            bigWordRef.current,
            {
              opacity: 0.06,
              scale: 1.05,
              duration: 0.14,
              ease: "none",
            },
            1.06
          )
          .to({}, { duration: 0.01, onStart: () => setFrame(1) }, 1.09)
          .to(
            chapterCardRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.18,
              ease: "none",
            },
            1.14
          )
          .to(
            bigWordRef.current,
            {
              opacity: 0.1,
              scale: 1,
              duration: 0.18,
              ease: "none",
            },
            1.14
          )
          .to(
            progressRef.current,
            {
              scaleX: 0.66,
              duration: 0.4,
              ease: "none",
            },
            1.14
          )
          .to(
            lane1Ref.current,
            {
              y: -260,
              duration: 1,
              ease: "none",
            },
            1.26
          )
          .to(
            lane2Ref.current,
            {
              y: -760,
              duration: 1,
              ease: "none",
            },
            1.26
          )
          .to(
            lane3Ref.current,
            {
              y: -320,
              duration: 1,
              ease: "none",
            },
            1.26
          )
          .to(
            chapterCardRef.current,
            {
              opacity: 0.42,
              y: -8,
              duration: 0.14,
              ease: "none",
            },
            1.86
          )
          .to(
            bigWordRef.current,
            {
              opacity: 0.06,
              scale: 1.05,
              duration: 0.14,
              ease: "none",
            },
            1.86
          )
          .to({}, { duration: 0.01, onStart: () => setFrame(2) }, 1.89)
          .to(
            chapterCardRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.18,
              ease: "none",
            },
            1.94
          )
          .to(
            bigWordRef.current,
            {
              opacity: 0.1,
              scale: 1,
              duration: 0.18,
              ease: "none",
            },
            1.94
          )
          .to(
            progressRef.current,
            {
              scaleX: 1,
              duration: 0.4,
              ease: "none",
            },
            1.94
          )
          .to(
            lane1Ref.current,
            {
              y: -820,
              duration: 1,
              ease: "none",
            },
            2.04
          )
          .to(
            lane2Ref.current,
            {
              y: -430,
              duration: 1,
              ease: "none",
            },
            2.04
          )
          .to(
            lane3Ref.current,
            {
              y: -900,
              duration: 1,
              ease: "none",
            },
            2.04
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
            className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c69052]/10 blur-[170px]"
          />
        </div>

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p
              ref={badgeRef}
              className="inline-flex rounded-full border border-[#d8aa70]/16 bg-[#d8aa70]/8 px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-[#d8aa70]"
            >
              Gallery Motion
            </p>

            <h2
              ref={titleRef}
              className="mt-5 max-w-[680px] text-4xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-7xl"
            >
              A moving exhibition wall.
              <span className="block text-[#d8aa70]">Built for premium rhythm.</span>
            </h2>

            <p
              ref={descRef}
              className="mt-7 max-w-xl text-lg leading-8 text-white/60"
            >
              Yahan ek hi card repeat feel nahi aata. Multi-lane motion se section
              rich lagta hai, aur homepage ko campaign-level scale milta hai.
            </p>

            <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-2 rounded-full bg-[#f7f2ea] px-7 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
                Explore Gallery
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-full border border-white/14 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/[0.06]">
                View Archive
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
                Gallery Motion
              </p>

              <h3
                ref={chapterTitleRef}
                className="mt-3 text-2xl font-semibold tracking-[-0.04em]"
              >
                Not a hero object. A moving editorial wall.
              </h3>

              <p
                ref={chapterDescRef}
                className="mt-3 text-sm leading-7 text-white/60"
              >
                The section feels like a curated luxury exhibition where the collection moves in layers instead of repeating the same stage reveal.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <div
              ref={galleryWrapRef}
              className="relative h-[82vh] min-h-[700px] w-full max-w-[980px] overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_36px_140px_rgba(0,0,0,0.58)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),transparent_22%,transparent_72%,rgba(192,138,74,0.08))]" />

              <div
                ref={bigWordRef}
                className="pointer-events-none absolute left-1/2 top-[6%] z-0 -translate-x-1/2 text-[110px] font-semibold uppercase tracking-[-0.08em] text-white/10 lg:text-[220px]"
              >
                GALLERY
              </div>

              <div className="relative z-10 grid h-full grid-cols-3 gap-4 overflow-hidden rounded-[30px]">
                <LaneShell>
                  <div
                    ref={lane1Ref}
                    className="absolute inset-x-0 top-0 flex flex-col gap-4 p-4 will-change-transform"
                  >
                    {laneOne.concat(laneOne, laneOne).map((item, idx) => (
                      <GalleryCard key={`l1-${idx}`} {...item} compact />
                    ))}
                  </div>
                </LaneShell>

                <LaneShell>
                  <div
                    ref={lane2Ref}
                    className="absolute inset-x-0 top-0 flex flex-col gap-4 p-4 will-change-transform"
                  >
                    {laneTwo.concat(laneTwo, laneTwo).map((item, idx) => (
                      <GalleryCard
                        key={`l2-${idx}`}
                        {...item}
                        featured={idx % 4 === 0}
                      />
                    ))}
                  </div>
                </LaneShell>

                <LaneShell>
                  <div
                    ref={lane3Ref}
                    className="absolute inset-x-0 top-0 flex flex-col gap-4 p-4 will-change-transform"
                  >
                    {laneThree.concat(laneThree, laneThree).map((item, idx) => (
                      <GalleryCard key={`l3-${idx}`} {...item} compact />
                    ))}
                  </div>
                </LaneShell>
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-[110px] bg-[linear-gradient(to_bottom,rgba(5,5,5,0.92),rgba(5,5,5,0.56),transparent)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[110px] bg-[linear-gradient(to_top,rgba(5,5,5,0.92),rgba(5,5,5,0.56),transparent)]" />
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

function LaneShell({ children }) {
  return (
    <div className="relative overflow-hidden rounded-[26px] border border-white/8 bg-black/20">
      {children}
    </div>
  );
}

function GalleryCard({
  title,
  subtitle,
  tone = "amber",
  compact = false,
  featured = false,
}) {
  const toneClasses = {
    amber:
      "from-[#1a130d] via-[#46301e] to-[#b68147]",
    espresso:
      "from-[#0f0d0c] via-[#251b16] to-[#6f4e36]",
    charcoal:
      "from-[#0a0a0a] via-[#1a1a1a] to-[#363636]",
    midnight:
      "from-[#09090d] via-[#161626] to-[#34345a]",
    copper:
      "from-[#120d0c] via-[#3a2418] to-[#af6e3c]",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br ${
        toneClasses[tone] || toneClasses.amber
      } p-[10px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${
        compact ? "min-h-[180px]" : "min-h-[220px]"
      } ${featured ? "ring-1 ring-[#d8aa70]/18" : ""}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),transparent_30%,transparent_70%,rgba(0,0,0,0.18))]" />
      <div className="absolute left-[8%] top-[8%] h-[30%] w-[56%] rotate-[14deg] bg-white/10 blur-[26px]" />
      <div className="absolute inset-[14px] rounded-[18px] border border-white/10" />

      <div className="relative z-10 flex h-full flex-col justify-between rounded-[18px] p-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.34em] text-[#f1d8ac]">
            {subtitle}
          </p>
          <h3 className="mt-4 text-2xl font-semibold leading-[0.96] tracking-[-0.05em] text-white">
            {title}
          </h3>
        </div>

        <div className="mt-6 inline-flex w-fit rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-white/58">
          Premium
        </div>
      </div>
    </div>
  );
}