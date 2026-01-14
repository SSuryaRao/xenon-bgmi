'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-black flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <main className={`w-full max-w-md relative z-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Logo/Avatar Section */}
        <div className={`flex flex-col items-center mb-6 sm:mb-8 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-4 sm:mb-6 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/50 animate-float">
            <Image
              src="/logo.jpg"
              alt="Xenon X Carlos Logo"
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              priority
            />
            {/* Rotating ring effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/30 animate-spin-slow" />
          </div>

          {/* Title with gradient text animation */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 text-center tracking-wide animate-gradient bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text bg-[length:200%_auto]">
            XENON X CARLOS
          </h1>
          <p className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest animate-pulse-slow">
            YOUR TRUSTED DEALER
          </p>
        </div>

        {/* Features List with staggered animation */}
        <div className={`bg-black/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-4 sm:mb-6 border border-cyan-500/20 shadow-xl transition-all duration-700 delay-400 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/20 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="space-y-3 sm:space-y-4">
            <FeatureItem text="TRUSTED SINCE 4 YEARS" delay={0} />
            <FeatureItem text="2000+ PREVIOUS DEALS DONE" delay={100} />
            <FeatureItem text="SAFE AND SECURE" delay={200} />
          </div>
        </div>

        {/* CTA Buttons with enhanced animations */}
        <div className={`space-y-3 sm:space-y-4 transition-all duration-700 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Telegram Button */}
          <a
            href="#"
            className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-cyan-500/50 hover:shadow-2xl group relative overflow-hidden"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce-slow group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
            <span className="text-sm sm:text-base">JOIN TELEGRAM NOW</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce-slow group-hover:-rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
          </a>
        </div>

        {/* Footer with fade-in animation */}
        <div className={`mt-6 sm:mt-8 text-center transition-all duration-700 delay-800 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-cyan-300/60 text-xs sm:text-sm animate-pulse-slow">
            Fast • Reliable • Trusted
          </p>
        </div>
      </main>
    </div>
  );
}

function FeatureItem({ text, delay }: { text: string; delay: number }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`flex items-start gap-2 sm:gap-3 transition-all duration-500 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-500 flex items-center justify-center mt-0.5 animate-bounce-slow shadow-lg shadow-cyan-500/50">
        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-white font-medium text-sm sm:text-base md:text-lg flex-1 leading-tight sm:leading-normal">
        {text} <span className="text-cyan-400 inline-block animate-pulse">✅</span>
      </p>
    </div>
  );
}
