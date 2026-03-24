"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroSection() {
  const rootRef = useRef(null);
  const heroRef = useRef(null);

  const introRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const btnsRef = useRef(null);
  const hintRef = useRef(null);

  const stageRef = useRef(null);
  const cameraRef = useRef(null);
  const glowRef = useRef(null);
  const beamRef = useRef(null);
  const dustRef = useRef(null);
  const vignetteRef = useRef(null);
  const floorGlowRef = useRef(null);
  const floorShadowRef = useRef(null);
  const floorReflectionRef = useRef(null);

  const bookRef = useRef(null);
  const spineRef = useRef(null);
  const leftCoverRef = useRef(null);
  const rightCoverRef = useRef(null);

  const leftPages1Ref = useRef(null);
  const leftPages2Ref = useRef(null);
  const leftPages3Ref = useRef(null);

  const rightPages1Ref = useRef(null);
  const rightPages2Ref = useRef(null);
  const rightPages3Ref = useRef(null);

  const innerGlowRef = useRef(null);
  const pageFlipRef = useRef(null);

  const chapter1Ref = useRef(null);
  const chapter2Ref = useRef(null);
  const chapter3Ref = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.075,
      smoothWheel: true,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.set(
          [
            introRef.current,
            titleRef.current,
            paraRef.current,
            btnsRef.current,
            hintRef.current,
            chapter1Ref.current,
            chapter2Ref.current,
            chapter3Ref.current,
          ],
          { opacity: 0, y: 40 }
        );

        gsap.set(stageRef.current, { opacity: 0, scale: 0.96, y: 30 });

        gsap.set(cameraRef.current, {
          transformPerspective: 3800,
          transformStyle: "preserve-3d",
        });

        gsap.set(bookRef.current, {
          rotateX: 24,
          rotateY: -16,
          rotateZ: -7,
          scale: 0.82,
          y: 56,
          transformPerspective: 3800,
          transformOrigin: "center center",
        });

        gsap.set(leftCoverRef.current, {
          rotateY: 0,
          transformOrigin: "right center",
        });

        gsap.set(rightCoverRef.current, {
          rotateY: 0,
          transformOrigin: "left center",
        });

        gsap.set(
          [
            leftPages1Ref.current,
            leftPages2Ref.current,
            leftPages3Ref.current,
            rightPages1Ref.current,
            rightPages2Ref.current,
            rightPages3Ref.current,
          ],
          { rotateY: 0 }
        );

        gsap.set(innerGlowRef.current, { opacity: 0, scale: 0.7 });
        gsap.set(pageFlipRef.current, {
          rotateY: 30,
          rotateZ: -2,
          x: 10,
          opacity: 0,
        });

        gsap.set([glowRef.current, beamRef.current, floorGlowRef.current], {
          opacity: 0.7,
        });

        const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        introTl
          .to(introRef.current, { opacity: 1, y: 0, duration: 0.7 })
          .to(titleRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.35")
          .to(paraRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
          .to(btnsRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.45")
          .to(
            stageRef.current,
            { opacity: 1, scale: 1, y: 0, duration: 1.15 },
            "-=0.65"
          )
          .to(hintRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");

        gsap.to(hintRef.current, {
          y: 10,
          repeat: -1,
          yoyo: true,
          duration: 1.2,
          ease: "sine.inOut",
        });

        gsap.to(glowRef.current, {
          scale: 1.08,
          repeat: -1,
          yoyo: true,
          duration: 4.8,
          ease: "sine.inOut",
        });

        gsap.to(beamRef.current, {
          opacity: 0.9,
          repeat: -1,
          yoyo: true,
          duration: 3.6,
          ease: "sine.inOut",
        });

        gsap.to(dustRef.current, {
          backgroundPosition: "0px 0px, 35px -25px, -18px 22px, 24px -18px",
          repeat: -1,
          yoyo: true,
          duration: 12,
          ease: "sine.inOut",
        });

        gsap.to(bookRef.current, {
          y: "+=6",
          rotateZ: "+=0.9",
          repeat: -1,
          yoyo: true,
          duration: 3.8,
          ease: "sine.inOut",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=5400",
            scrub: 1.15,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl
          // settle
          .to(
            cameraRef.current,
            {
              z: 120,
              rotateX: 1,
              duration: 1.2,
              ease: "none",
            },
            0
          )
          .to(
            bookRef.current,
            {
              rotateX: 14,
              rotateY: -7,
              rotateZ: -2,
              scale: 0.98,
              y: 0,
              duration: 1.2,
              ease: "none",
            },
            0
          )
          .to(
            glowRef.current,
            {
              opacity: 1,
              scale: 1.16,
              duration: 1.2,
              ease: "none",
            },
            0
          )
          .to(
            beamRef.current,
            {
              opacity: 0.9,
              scaleY: 1.08,
              duration: 1,
              ease: "none",
            },
            0.1
          )
          .to(
            floorGlowRef.current,
            {
              opacity: 1,
              scale: 1.12,
              duration: 1,
              ease: "none",
            },
            0.05
          )
          .to(
            floorShadowRef.current,
            {
              opacity: 1,
              scaleX: 1.04,
              duration: 1,
              ease: "none",
            },
            0.05
          )
          .to(
            floorReflectionRef.current,
            {
              opacity: 0.65,
              duration: 1,
              ease: "none",
            },
            0.1
          )
          .to(
            dustRef.current,
            {
              opacity: 0.95,
              duration: 1,
              ease: "none",
            },
            0
          )

          // text fade
          .to(
            [introRef.current, titleRef.current, paraRef.current, btnsRef.current, hintRef.current],
            {
              opacity: 0,
              y: -70,
              duration: 0.82,
              stagger: 0.02,
              ease: "none",
            },
            1.05
          )

          // open phase 1
          .to(
            leftCoverRef.current,
            {
              rotateY: -96,
              duration: 1.25,
              ease: "none",
            },
            1.45
          )
          .to(
            rightCoverRef.current,
            {
              rotateY: 90,
              duration: 1.25,
              ease: "none",
            },
            1.45
          )
          .to(
            leftPages1Ref.current,
            {
              rotateY: -14,
              y: 2,
              duration: 1.1,
              ease: "none",
            },
            1.5
          )
          .to(
            leftPages2Ref.current,
            {
              rotateY: -22,
              y: 4,
              duration: 1.1,
              ease: "none",
            },
            1.53
          )
          .to(
            leftPages3Ref.current,
            {
              rotateY: -32,
              y: 5,
              duration: 1.1,
              ease: "none",
            },
            1.56
          )
          .to(
            rightPages1Ref.current,
            {
              rotateY: 10,
              y: -1,
              duration: 1.1,
              ease: "none",
            },
            1.5
          )
          .to(
            rightPages2Ref.current,
            {
              rotateY: 18,
              y: -2,
              duration: 1.1,
              ease: "none",
            },
            1.53
          )
          .to(
            rightPages3Ref.current,
            {
              rotateY: 27,
              y: -3,
              duration: 1.1,
              ease: "none",
            },
            1.56
          )
          .to(
            bookRef.current,
            {
              rotateX: 20,
              rotateY: 0,
              rotateZ: 0,
              scale: 1.09,
              y: -28,
              duration: 1.28,
              ease: "none",
            },
            1.45
          )
          .to(
            innerGlowRef.current,
            {
              opacity: 1,
              scale: 1.08,
              duration: 0.95,
              ease: "none",
            },
            1.82
          )
          .to(
            chapter1Ref.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "none",
            },
            1.95
          )

          // open phase 2
          .to(
            leftCoverRef.current,
            {
              rotateY: -144,
              duration: 1.2,
              ease: "none",
            },
            2.6
          )
          .to(
            rightCoverRef.current,
            {
              rotateY: 136,
              duration: 1.2,
              ease: "none",
            },
            2.6
          )
          .to(
            leftPages1Ref.current,
            {
              rotateY: -28,
              y: 4,
              duration: 1.1,
              ease: "none",
            },
            2.64
          )
          .to(
            leftPages2Ref.current,
            {
              rotateY: -42,
              y: 7,
              duration: 1.1,
              ease: "none",
            },
            2.67
          )
          .to(
            leftPages3Ref.current,
            {
              rotateY: -58,
              y: 8,
              duration: 1.1,
              ease: "none",
            },
            2.7
          )
          .to(
            rightPages1Ref.current,
            {
              rotateY: 21,
              y: -2,
              duration: 1.1,
              ease: "none",
            },
            2.64
          )
          .to(
            rightPages2Ref.current,
            {
              rotateY: 34,
              y: -4,
              duration: 1.1,
              ease: "none",
            },
            2.67
          )
          .to(
            rightPages3Ref.current,
            {
              rotateY: 49,
              y: -6,
              duration: 1.1,
              ease: "none",
            },
            2.7
          )
          .to(
            bookRef.current,
            {
              rotateX: 28,
              scale: 1.19,
              y: -40,
              duration: 1.2,
              ease: "none",
            },
            2.6
          )
          .to(
            cameraRef.current,
            {
              z: 220,
              rotateY: 3,
              duration: 1.1,
              ease: "none",
            },
            2.6
          )
          .to(
            glowRef.current,
            {
              scale: 1.28,
              duration: 1,
              ease: "none",
            },
            2.7
          )
          .to(
            chapter1Ref.current,
            {
              opacity: 0,
              y: -40,
              duration: 0.6,
              ease: "none",
            },
            2.95
          )
          .to(
            chapter2Ref.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.82,
              ease: "none",
            },
            3.05
          )

          // page flip
          .to(
            pageFlipRef.current,
            {
              opacity: 1,
              rotateY: -8,
              rotateZ: -1,
              x: -10,
              z: 18,
              duration: 0.72,
              ease: "none",
            },
            3.58
          )
          .to(
            pageFlipRef.current,
            {
              rotateY: -132,
              rotateZ: 4,
              x: -36,
              z: 40,
              duration: 0.95,
              ease: "none",
            },
            4.0
          )
          .to(
            bookRef.current,
            {
              scale: 1.245,
              y: -22,
              rotateX: 22,
              duration: 1,
              ease: "none",
            },
            3.72
          )
          .to(
            glowRef.current,
            {
              scale: 1.42,
              opacity: 1,
              duration: 0.95,
              ease: "none",
            },
            3.72
          )
          .to(
            beamRef.current,
            {
              opacity: 1,
              scaleY: 1.12,
              duration: 0.9,
              ease: "none",
            },
            3.82
          )
          .to(
            chapter2Ref.current,
            {
              opacity: 0,
              y: -35,
              duration: 0.6,
              ease: "none",
            },
            4.1
          )
          .to(
            chapter3Ref.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.82,
              ease: "none",
            },
            4.22
          )

          // final premium presentation
          .to(
            cameraRef.current,
            {
              z: 292,
              rotateY: 0,
              rotateX: -2,
              duration: 1,
              ease: "none",
            },
            4.7
          )
          .to(
            bookRef.current,
            {
              scale: 1.31,
              y: -8,
              rotateX: 14,
              duration: 1,
              ease: "none",
            },
            4.7
          )
          .to(
            leftCoverRef.current,
            {
              rotateY: -124,
              duration: 0.82,
              ease: "none",
            },
            4.72
          )
          .to(
            rightCoverRef.current,
            {
              rotateY: 116,
              duration: 0.82,
              ease: "none",
            },
            4.72
          );
      }, rootRef);

      return () => ctx.revert();
    },
    { scope: rootRef }
  );

  return (




    <>
      <section className="relative hidden overflow-hidden bg-[#050505] text-[#f7f2ea] md:block">
        <div ref={heroRef} className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_28%)]" />

            <div
              ref={glowRef}
              className="absolute left-1/2 top-[54%] h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c18a48]/20 blur-[180px] opacity-90"
            />

            <div
              ref={beamRef}
              className="absolute left-1/2 top-[53%] h-[520px] w-[280px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,244,220,0.38)_0%,rgba(255,244,220,0.15)_34%,transparent_72%)] opacity-40 blur-[44px]"
            />

            <div
              ref={dustRef}
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 18% 24%, rgba(255,255,255,0.08) 1px, transparent 1.6px), radial-gradient(circle at 72% 46%, rgba(255,255,255,0.06) 1px, transparent 1.6px), radial-gradient(circle at 40% 78%, rgba(255,255,255,0.05) 1px, transparent 1.6px), radial-gradient(circle at 82% 18%, rgba(255,255,255,0.05) 1px, transparent 1.6px)",
                backgroundSize:
                  "240px 240px, 300px 300px, 280px 280px, 360px 360px",
              }}
            />

            <div
              ref={vignetteRef}
              className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.12),rgba(0,0,0,0.34),rgba(0,0,0,0.82))]"
            />
          </div>

          <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.15fr] lg:px-8">
            <div className="relative z-20 flex items-center">
              <div className="max-w-3xl">
                <p
                  ref={introRef}
                  className="text-[11px] uppercase tracking-[0.38em] text-[#d8aa70]"
                >
                  Cinematic Books • Premium Edition
                </p>

                <h1
                  ref={titleRef}
                  className="mt-6 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl xl:text-[92px]"
                >
                  Open a story
                  <span className="block text-[#d8aa70]">
                    like cinema begins.
                  </span>
                </h1>

                <p
                  ref={paraRef}
                  className="mt-7 max-w-xl text-lg leading-8 text-white/62 md:text-xl"
                >
                  Real page depth, collector-grade covers, dramatic studio light,
                  and a cinematic open-book reveal built to feel physical.
                </p>

                <div ref={btnsRef} className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/books"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#f7f2ea] px-7 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
                  >
                    Explore Books
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/collection"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/[0.06]"
                  >
                    View Collection
                  </Link>
                </div>

                <div
                  ref={hintRef}
                  className="mt-14 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-white/40"
                >
                  <span>Scroll to open</span>
                  <span className="block h-px w-16 bg-white/25" />
                </div>
              </div>

              <StoryBlock
                refProp={chapter1Ref}
                label="Chapter One"
                title="The covers separate. The object feels real."
                text="The book stops reading like a UI shape and starts feeling like a physical collector’s edition."
              />

              <StoryBlock
                refProp={chapter2Ref}
                label="Chapter Two"
                title="Page depth, studio light, and weight build the drama."
                text="The spine glows, the paper stack separates, and the book gains real visual mass."
              />

              <StoryBlock
                refProp={chapter3Ref}
                label="Chapter Three"
                title="A page turns. The cameo feeling arrives."
                text="Now the object becomes cinematic because the motion carries light, depth, and believable material response."
              />
            </div>

            <div className="relative z-10 flex items-center justify-center [perspective:3800px]">
              <div
                ref={stageRef}
                className="relative h-[840px] w-full max-w-[940px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* floor / stage shadow */}
                <div
                  ref={floorShadowRef}
                  className="absolute left-1/2 top-[71%] h-[170px] w-[690px] -translate-x-1/2 rounded-full bg-black/70 blur-[54px] opacity-90"
                />
                <div
                  ref={floorGlowRef}
                  className="absolute left-1/2 top-[72%] h-[130px] w-[560px] -translate-x-1/2 rounded-full bg-[#7e5328]/20 blur-[38px] opacity-90"
                />
                <div
                  ref={floorReflectionRef}
                  className="absolute left-1/2 top-[67%] h-[240px] w-[760px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,240,210,0.08)_0%,rgba(255,240,210,0.03)_36%,transparent_72%)] blur-[36px] opacity-40"
                />

                <div
                  ref={cameraRef}
                  className="absolute inset-0"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    ref={bookRef}
                    className="absolute left-1/2 top-[54%] h-[570px] w-[840px] -translate-x-1/2 -translate-y-1/2"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* spine */}
                    <div
                      ref={spineRef}
                      className="absolute left-1/2 top-1/2 z-40 h-[548px] w-[46px] -translate-x-1/2 -translate-y-1/2 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#7b5933_0%,#2b1c12_42%,#92683e_100%)] shadow-[0_40px_140px_rgba(0,0,0,0.62)]"
                      style={{ transform: "translateZ(28px)" }}
                    >
                      <div className="absolute inset-0 rounded-[24px] bg-[linear-gradient(90deg,rgba(255,255,255,0.12),transparent_40%,transparent_68%,rgba(0,0,0,0.24))]" />
                      <div className="absolute inset-y-[7%] left-1/2 w-[1px] -translate-x-1/2 bg-white/12" />
                      <div className="absolute inset-y-[8%] left-[8px] w-[3px] rounded-full bg-black/20 blur-[3px]" />
                      <div className="absolute inset-y-[8%] right-[8px] w-[2px] rounded-full bg-white/8 blur-[2px]" />
                    </div>

                    {/* core */}
                    <div
                      className="absolute left-1/2 top-1/2 z-20 h-[510px] w-[710px] -translate-x-1/2 -translate-y-1/2"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <PageHalf
                        refProp={leftPages1Ref}
                        side="left"
                        widthClass="w-[336px]"
                        zClass="z-[11]"
                        tone="bg-[linear-gradient(180deg,#fbf4ea_0%,#f2e5d1_60%,#e7d7bf_100%)]"
                        lines
                        style={{
                          transform:
                            "translateX(-100%) translateZ(8px) rotateZ(-0.6deg)",
                        }}
                      />
                      <PageHalf
                        refProp={leftPages2Ref}
                        side="left"
                        widthClass="w-[326px]"
                        zClass="z-[12]"
                        tone="bg-[linear-gradient(180deg,#f8efe3_0%,#eddec9_60%,#e1ceb2_100%)]"
                        style={{
                          transform:
                            "translateX(-100%) translateZ(14px) rotateZ(-0.85deg)",
                        }}
                      />
                      <PageHalf
                        refProp={leftPages3Ref}
                        side="left"
                        widthClass="w-[314px]"
                        zClass="z-[13]"
                        tone="bg-[linear-gradient(180deg,#f4ebde_0%,#e7d7bf_60%,#dbc7aa_100%)]"
                        style={{
                          transform:
                            "translateX(-100%) translateZ(22px) rotateZ(-1.1deg)",
                        }}
                      />

                      <PageHalf
                        refProp={rightPages1Ref}
                        side="right"
                        widthClass="w-[336px]"
                        zClass="z-[11]"
                        tone="bg-[linear-gradient(180deg,#fbf4ea_0%,#f2e5d1_60%,#e7d7bf_100%)]"
                        lines
                        style={{ transform: "translateZ(8px) rotateZ(0.42deg)" }}
                      />
                      <PageHalf
                        refProp={rightPages2Ref}
                        side="right"
                        widthClass="w-[326px]"
                        zClass="z-[12]"
                        tone="bg-[linear-gradient(180deg,#f8efe3_0%,#eddec9_60%,#e1ceb2_100%)]"
                        style={{ transform: "translateZ(14px) rotateZ(0.7deg)" }}
                      />
                      <PageHalf
                        refProp={rightPages3Ref}
                        side="right"
                        widthClass="w-[314px]"
                        zClass="z-[13]"
                        tone="bg-[linear-gradient(180deg,#f4ebde_0%,#e7d7bf_60%,#dbc7aa_100%)]"
                        style={{ transform: "translateZ(22px) rotateZ(1deg)" }}
                      />

                      <div
                        ref={innerGlowRef}
                        className="pointer-events-none absolute left-1/2 top-1/2 z-40 h-[402px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,248,232,0.5)_0%,rgba(255,248,232,0.16)_36%,transparent_72%)] blur-[40px]"
                      />

                      <div
                        className="pointer-events-none absolute left-1/2 top-1/2 z-[39] h-[470px] w-[36px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.12)_34%,transparent_72%)] blur-[18px]"
                        style={{ transform: "translateZ(18px)" }}
                      />

                      <div
                        ref={pageFlipRef}
                        className="absolute left-1/2 top-1/2 z-[45] h-[476px] w-[288px] -translate-y-1/2 rounded-r-[30px] rounded-l-[10px] border border-[#f2e6d2]/38 bg-[linear-gradient(180deg,#fcf5ea_0%,#f3e6d3_60%,#e8d8c0_100%)] shadow-[inset_0_0_26px_rgba(255,255,255,0.34),0_26px_60px_rgba(0,0,0,0.14)]"
                        style={{
                          transform:
                            "translateZ(26px) rotateY(18deg) skewY(-2deg)",
                          transformOrigin: "left center",
                          clipPath: "polygon(0 0, 100% 2%, 100% 98%, 0 100%)",
                        }}
                      >
                        <div className="absolute inset-0 rounded-r-[30px] rounded-l-[10px] bg-[linear-gradient(270deg,rgba(0,0,0,0.13),transparent_24%,transparent_82%,rgba(0,0,0,0.04))]" />
                        <div className="absolute inset-y-0 left-[18%] w-[22%] bg-white/18 blur-[14px]" />
                        <div className="absolute inset-y-[4%] left-[3px] w-[8px] rounded-full bg-[#dec9ab]/70 blur-[1px]" />
                        <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(to_bottom,rgba(90,70,45,0.08)_0px,rgba(90,70,45,0.08)_1px,transparent_2px,transparent_6px)]" />
                      </div>
                    </div>

                    <CoverHalf
                      refProp={leftCoverRef}
                      side="left"
                      titleTop="Signature Edition"
                      titleMain="Midnight"
                      titleAccent="Echoes"
                      footer="By Kapil Vaishnav"
                    />

                    <CoverHalf
                      refProp={rightCoverRef}
                      side="right"
                      titleTop="Collector Cover"
                      titleMain="A Story"
                      titleAccent="Unfolding"
                      footer="Premium Binding"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative block md:hidden">
        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,#0d0d0d_0%,#111111_100%)] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
          <div className="mb-4 inline-flex rounded-full border border-[#d8aa70]/20 bg-[#d8aa70]/8 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-[#d8aa70]">
            Premium Books App
          </div>

          <h1 className="text-3xl font-semibold leading-[0.95] tracking-[-0.06em] text-white">
            Books presented
            <span className="block text-[#d8aa70]">like a luxury app.</span>
          </h1>

          <p className="mt-4 text-sm leading-7 text-white/60">
            Smooth, premium, and focused. On mobile the experience should feel
            like a collector app, not a stretched desktop website.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              href="/books"
              className="inline-flex items-center justify-center rounded-full bg-[#f7f2ea] px-5 py-3 text-sm font-semibold text-black"
            >
              Explore
            </Link>
            <Link
              href="/collection"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white"
            >
              Collection
            </Link>
          </div>

          <div className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-3">
            <div className="rounded-[24px] bg-[linear-gradient(160deg,#120f0d_0%,#2b2018_22%,#5c3f26_58%,#bf8a4a_100%)] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
              <div className="rounded-[20px] border border-white/10 p-4">
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#f1d8ac]">
                  Collector Edition
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-[0.95] tracking-[-0.05em] text-white">
                  Velvet Stories
                </h3>
                <div className="mt-6 flex items-center justify-between">
                  <span className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-white/65">
                    Premium Bound
                  </span>
                  <span className="text-sm font-medium text-white/70">New Drop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}

function StoryBlock({ refProp, label, title, text }) {
  return (
    <div
      ref={refProp}
      className="absolute left-6 top-1/2 max-w-xl -translate-y-1/2 opacity-0 lg:left-8"
    >
      <p className="text-[11px] uppercase tracking-[0.34em] text-[#d8aa70]">
        {label}
      </p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
        {title}
      </h2>
      <p className="mt-5 max-w-lg text-lg leading-8 text-white/62">{text}</p>
    </div>
  );
}

function PageHalf({
  refProp,
  side,
  widthClass,
  zClass,
  tone,
  style,
  lines = false,
}) {
  const isLeft = side === "left";

  return (
    <div
      ref={refProp}
      className={`absolute left-1/2 top-1/2 h-[486px] ${widthClass} -translate-y-1/2 border border-[#f2e6d2]/38 ${tone} ${zClass} ${isLeft
          ? "rounded-l-[32px] rounded-r-[10px]"
          : "rounded-r-[32px] rounded-l-[10px]"
        } shadow-[inset_0_0_30px_rgba(255,255,255,0.34),0_22px_42px_rgba(0,0,0,0.08)]`}
      style={{
        ...style,
        transformStyle: "preserve-3d",
        transformOrigin: isLeft ? "right center" : "left center",
      }}
    >
      <div
        className={`absolute inset-0 ${isLeft
            ? "bg-[linear-gradient(90deg,rgba(0,0,0,0.15),transparent_20%,transparent_82%,rgba(0,0,0,0.06))]"
            : "bg-[linear-gradient(270deg,rgba(0,0,0,0.15),transparent_20%,transparent_82%,rgba(0,0,0,0.06))]"
          } ${isLeft ? "rounded-l-[32px] rounded-r-[10px]" : "rounded-r-[32px] rounded-l-[10px]"}`}
      />

      <div
        className={`absolute top-0 ${isLeft ? "left-0" : "right-0"
          } h-full w-[10px] bg-[linear-gradient(to_bottom,#fff6ea,#eadbc5,#d8c3a5)] opacity-80`}
      />

      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(to_bottom,rgba(90,70,45,0.08)_0px,rgba(90,70,45,0.08)_1px,transparent_2px,transparent_6px)]" />

      <div
        className={`absolute inset-y-[7%] ${isLeft ? "right-[15px]" : "left-[15px]"
          } w-[1px] bg-[#8d7d62]/20`}
      />

      <div
        className={`absolute inset-y-[8%] ${isLeft ? "left-[10px]" : "right-[10px]"
          } w-[8px] rounded-full bg-black/10 blur-[6px]`}
      />

      {lines && (
        <>
          <div
            className={`absolute ${isLeft ? "left-[8%]" : "right-[8%]"
              } top-[13%] h-[2px] w-[54%] bg-[#7c6951]/16`}
          />
          <div
            className={`absolute ${isLeft ? "left-[8%]" : "right-[8%]"
              } top-[19%] h-[2px] w-[66%] bg-[#7c6951]/14`}
          />
          <div
            className={`absolute ${isLeft ? "left-[8%]" : "right-[8%]"
              } top-[25%] h-[2px] w-[58%] bg-[#7c6951]/14`}
          />
          <div
            className={`absolute ${isLeft ? "left-[8%]" : "right-[8%]"
              } top-[34%] h-[165px] w-[84%] rounded-[18px] border border-[#7c6951]/10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_55%)]`}
          />
        </>
      )}
    </div>
  );
}

function CoverHalf({ refProp, side, titleTop, titleMain, titleAccent, footer }) {
  const isLeft = side === "left";

  return (
    <div
      ref={refProp}
      className={`absolute left-1/2 top-1/2 z-50 h-[570px] w-[378px] -translate-y-1/2 border border-white/10 bg-[#0f0f0f] p-3 shadow-[0_40px_160px_rgba(0,0,0,0.76)] ${isLeft
          ? "rounded-l-[42px] rounded-r-[18px]"
          : "rounded-r-[42px] rounded-l-[18px]"
        }`}
      style={{
        transform: isLeft
          ? "translateX(-100%) translateZ(30px)"
          : "translateZ(30px)",
        transformStyle: "preserve-3d",
        transformOrigin: isLeft ? "right center" : "left center",
      }}
    >
      <div
        className={`relative h-full w-full overflow-hidden bg-[linear-gradient(160deg,#111111_0%,#201814_32%,#47311f_65%,#ba8448_100%)] p-9 ${isLeft
            ? "rounded-l-[36px] rounded-r-[15px]"
            : "rounded-r-[36px] rounded-l-[15px]"
          }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_30%),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.28))]" />
        <div className="absolute inset-0 opacity-[0.07] mix-blend-soft-light bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.18)_0px,rgba(255,255,255,0.18)_1px,transparent_2px,transparent_6px)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.16),transparent_22%,transparent_58%,rgba(0,0,0,0.18))]" />
        <div className="absolute inset-y-0 left-0 w-[12px] bg-black/20 blur-[4px]" />
        <div className="absolute inset-y-0 left-6 w-[1px] bg-white/15" />
        <div className="absolute right-6 top-0 h-full w-[1px] bg-white/10" />
        <div className="absolute left-[14%] top-[8%] h-[32%] w-[65%] rotate-[18deg] bg-white/10 blur-[26px]" />
        <div className="absolute inset-y-[2%] right-[8px] w-[3px] rounded-full bg-black/18 blur-[4px]" />
        <div className="absolute bottom-0 left-0 h-[28%] w-full bg-[linear-gradient(to_top,rgba(0,0,0,0.22),transparent)]" />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className={isLeft ? "" : "flex h-full items-center justify-center"}>
            <div className={isLeft ? "" : "text-center"}>
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#f1d8ac]">
                {titleTop}
              </p>
              <h3 className="mt-8 text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-white">
                {titleMain}
                <span className="block text-[#f1d8ac]">{titleAccent}</span>
              </h3>
            </div>
          </div>

          <div>
            <div className="mb-4 h-px w-full bg-white/18" />
            <p className="text-sm text-white/72">{footer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}