"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const readers = [
  {
    id: 1,
    name: "Mahadevi Verma",
    image: "/mahadevivarma.avif",
    line: "मैं नीर भरी दुख की बदली…",
    books: [
      {
        id: 1,
        title: "Yama",
        cover: "/91MoKaOB7CL._UF350,350_QL50_.jpg",
        spineColor: "linear-gradient(180deg, #5c3a2e, #241710)",
      },
      {
        id: 2,
        title: "Neerja",
        cover: "/91MoKaOB7CL._UF350,350_QL50_.jpg",
        spineColor: "linear-gradient(180deg, #6b4a3b, #2a1b14)",
      },
      {
        id: 3,
        title: "Ateet Ke Chalchitra",
        cover: "/91MoKaOB7CL._UF350,350_QL50_.jpg",
        spineColor: "linear-gradient(180deg, #5c3a2e, #241710)",
      },
    ],
  },
  {
    id: 2,
    name: "Jaun Elia",
    image: "/jauneliya.jpeg",
    line: "“मुझसे पहले जैसी मोहब्बत अब मत मांगो, मेरे प्रिय…”",
    books: [
      {
        id: 1,
        title: "Shayad",
        cover: "/57041952.jpg",
        spineColor: "linear-gradient(180deg, #4b3228, #1e1511)",
      },
      {
        id: 2,
        title: "Yaani",
        cover: "/57041952.jpg",
        spineColor: "linear-gradient(180deg, #6a4a3a, #241710)",
      },
      {
        id: 3,
        title: "Guman",
        cover: "/57041952.jpg",
        spineColor: "linear-gradient(180deg, #4b3228, #1e1511)",
      },
    ],
  },
  {
    id: 3,
    name: "Munshi Premchand – Godaan",
    image: "/premchandgodana.jpg",
    line: "शब्द ही वो पुल हैं जो दिल से दिल तक जाते हैं।",
    books: [
      {
        id: 1,
        title: "Godaan",
        cover: "/images.jpeg",
        spineColor: "linear-gradient(180deg, #5b3a2a, #241710)",
      },
    ],
  },
  {
    id: 4,
    name: "Robert T. Kiyosaki",
    image: "/RobertKiyosaki.jpg",
    line: "Don’t work for money… make money work for you.",
    books: [
      {
        id: 1,
        title: "Rich Dad Poor Dad",
        cover: "/9781612681139-1-scaled.jpg",
        spineColor: "linear-gradient(180deg, #5b3a2a, #241710)",
      },
      {
        id: 2,
        title: "Cashflow Quadrant",
        cover: "/9781612681139-1-scaled.jpg",
        spineColor: "linear-gradient(180deg, #6d4c3a, #2a1b14)",
      },
      {
        id: 3,
        title: "Rich Dad’s Guide to Investing",
        cover: "/9781612681139-1-scaled.jpg",
        spineColor: "linear-gradient(180deg, #5b3a2a, #241710)",
      },
    ],
  },
];

function FlipBook({ book, index }) {
  const wrapperRef = useRef(null);
  const bookRef = useRef(null);
  const spineRef = useRef(null);
  const coverRef = useRef(null);
  const glowRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!bookRef.current) return;

    gsap.fromTo(
      bookRef.current,
      {
        y: 40,
        opacity: 0,
        rotateY: -15,
      },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.85,
        delay: index * 0.08,
        ease: "power3.out",
      }
    );
  }, [index]);

  useEffect(() => {
    if (!spineRef.current || !coverRef.current || !glowRef.current) return;

    const isMobile = window.innerWidth < 768;
    const tl = gsap.timeline();

    if (open) {
      tl.to(
        glowRef.current,
        {
          opacity: 1,
          scale: 1.18,
          duration: 0.35,
          ease: "power2.out",
        },
        0
      )
        .to(
          spineRef.current,
          {
            rotateY: -95,
            duration: 0.8,
            ease: "power4.out",
          },
          0
        )
        .fromTo(
          coverRef.current,
          isMobile
            ? {
                opacity: 0,
                xPercent: -50,
                x: 0,
                scale: 0.95,
              }
            : {
                opacity: 0,
                x: -16,
                scale: 0.95,
              },
          isMobile
            ? {
                opacity: 1,
                xPercent: -50,
                x: 0,
                scale: 1,
                duration: 0.45,
                ease: "power3.out",
              }
            : {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.45,
                ease: "power3.out",
              },
          "-=0.35"
        );
    } else {
      tl.to(
        coverRef.current,
        isMobile
          ? {
              opacity: 0,
              xPercent: -50,
              x: 0,
              scale: 0.95,
              duration: 0.25,
              ease: "power2.inOut",
            }
          : {
              opacity: 0,
              x: -16,
              scale: 0.95,
              duration: 0.25,
              ease: "power2.inOut",
            },
        0
      )
        .to(
          spineRef.current,
          {
            rotateY: 0,
            duration: 0.75,
            ease: "power4.inOut",
          },
          0
        )
        .to(
          glowRef.current,
          {
            opacity: 0,
            scale: 1,
            duration: 0.25,
            ease: "power2.out",
          },
          0
        );
    }
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className="relative flex h-[280px] w-full max-w-[210px] items-end justify-center overflow-visible"
    >
      <div
        ref={glowRef}
        className="absolute bottom-7 h-10 w-32 rounded-full bg-[#d4a574]/20 blur-2xl opacity-0"
      />

      <div
        ref={bookRef}
        className="relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          ref={coverRef}
          className="
            absolute bottom-0
            left-1/2 -translate-x-1/2
            md:left-[52px] md:translate-x-0
            h-[220px] w-[150px]
            rounded-l-[6px] rounded-r-[14px]
            overflow-hidden border border-white/10
            opacity-0
            shadow-[18px_22px_45px_rgba(0,0,0,0.58)]
          "
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${book.cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/65" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3">
            <p className="line-clamp-2 text-sm font-semibold leading-tight text-white">
              {book.title}
            </p>
          </div>
        </div>

        <div
          ref={spineRef}
          onClick={() => setOpen((prev) => !prev)}
          className="relative cursor-pointer"
          style={{
            width: "52px",
            height: "220px",
            transformStyle: "preserve-3d",
            transformOrigin: "left center",
          }}
        >
          <div
            className="absolute inset-0 rounded-l-[8px] rounded-r-[3px] border border-[#b88952]/20 shadow-[8px_12px_26px_rgba(0,0,0,0.52)]"
            style={{
              background: book.spineColor,
              backfaceVisibility: "hidden",
            }}
          >
            <div className="absolute inset-y-0 left-0 w-[8px] rounded-l-[8px] bg-black/20" />
            <div className="absolute inset-y-0 right-0 w-[2px] bg-[#d4a574]/25" />

            <div className="absolute inset-x-0 top-4 flex justify-center">
              <div className="h-[1px] w-7 bg-[#d4a574]/40" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center px-1">
              <p
                className="text-center text-[10px] uppercase tracking-[0.18em] text-[#ead8ba]"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {book.title}
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-4 flex justify-center">
              <div className="h-[1px] w-7 bg-[#d4a574]/40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReaderRow({ reader, reverse = false }) {
  const rowRef = useRef(null);

  useEffect(() => {
    if (!rowRef.current) return;

    gsap.fromTo(
      rowRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      ref={rowRef}
      className="relative overflow-hidden rounded-[32px] border border-white/8 bg-gradient-to-b from-[#16110d] to-[#0d0907] px-4 py-6 shadow-[0_25px_90px_rgba(0,0,0,0.45)] md:px-10 md:py-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,165,116,0.06),transparent_35%)]" />

      <div
        className={`relative z-10 grid items-center gap-8 lg:grid-cols-[320px_minmax(0,1fr)] ${
          reverse ? "lg:grid-cols-[minmax(0,1fr)_320px]" : ""
        }`}
      >
        <div className={`${reverse ? "lg:order-2" : ""}`}>
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 overflow-hidden rounded-full border border-[#d4a574]/35 shadow-[0_10px_22px_rgba(0,0,0,0.45)]">
              <img
                src={reader.image}
                alt={reader.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.38em] text-[#d4a574]/75">
                Reader
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                {reader.name}
              </h3>
            </div>
          </div>

          <div className="mt-6 rounded-[22px] border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#d4a574]/70">
              A favorite line
            </p>
            <p className="mt-4 text-sm leading-7 text-white/68 md:text-[15px]">
              “{reader.line}”
            </p>
          </div>
        </div>

        <div className={`${reverse ? "lg:order-1" : ""}`}>
          <div className="mb-5 flex items-center justify-between gap-3">
            <p className="text-[10px] uppercase tracking-[0.38em] text-[#d4a574]/75">
              Books I’ve Read
            </p>
            <p className="text-right text-xs text-white/35">
              Click spine to reveal cover
            </p>
          </div>

          <div className="relative rounded-[26px] border border-white/6 bg-gradient-to-b from-[#120d0a] to-[#0a0706] px-3 pb-12 pt-8 md:px-5">
            <div className="flex flex-wrap items-end justify-center gap-5 md:gap-8">
              {reader.books.map((book, index) => (
                <FlipBook key={`${reader.id}-${book.id}`} book={book} index={index} />
              ))}
            </div>

            <div className="absolute bottom-5 left-5 right-5 h-3 rounded-full bg-gradient-to-r from-[#4a2f1f] via-[#8b5a34] to-[#4a2f1f] shadow-[0_8px_18px_rgba(0,0,0,0.45)]" />
            <div className="absolute bottom-0 left-4 right-4 h-7 rounded-b-[22px] bg-gradient-to-b from-[#5f3d27] to-[#2a1a11]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReadersIAdmire() {
  return (
    <section className="relative overflow-hidden bg-[#070707] px-4 py-20 md:px-12 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,165,116,0.05),transparent_35%)]" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[11px] uppercase tracking-[0.42em] text-[#d4a574]/80">
            Influence
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            Readers I Admire
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
            The minds, lines, and books that stayed with me long after the page
            was turned.
          </p>
        </div>

        <div className="space-y-10">
          {readers.map((reader, index) => (
            <ReaderRow
              key={reader.id}
              reader={reader}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}