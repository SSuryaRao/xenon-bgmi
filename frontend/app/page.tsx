'use client';

import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-950 to-black flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-400/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <main className={`w-full max-w-md relative z-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Logo/Avatar Section */}
        <div className={`flex flex-col items-center mb-6 sm:mb-8 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 p-1 shadow-2xl shadow-orange-500/50 animate-float">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden relative group">
              <div className="text-4xl sm:text-5xl font-bold text-orange-500 transition-transform duration-300 group-hover:scale-110">
                XB
              </div>
              {/* Rotating ring effect */}
              <div className="absolute inset-0 rounded-full border-2 border-orange-400/30 animate-spin-slow" />
            </div>
          </div>

          {/* Title with gradient text animation */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 text-center tracking-wide animate-gradient bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text bg-[length:200%_auto]">
            XENON BGMI
          </h1>
          <p className="text-orange-400 text-xs sm:text-sm font-semibold tracking-widest animate-pulse-slow">
            YOUR TRUSTED DEALER
          </p>
        </div>

        {/* Features List with staggered animation */}
        <div className={`bg-black/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-4 sm:mb-6 border border-orange-500/20 shadow-xl transition-all duration-700 delay-400 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/20 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="space-y-3 sm:space-y-4">
            <FeatureItem text="TRUSTED SINCE 4 YEARS" delay={0} />
            <FeatureItem text="2000+ PREVIOUS DEALS DONE" delay={100} />
            <FeatureItem text="SAFE AND SECURE" delay={200} />
          </div>
        </div>

        {/* Services Section with scale animation */}
        <div className={`bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-2xl shadow-orange-500/30 transition-all duration-700 delay-600 hover:scale-[1.02] hover:shadow-orange-500/50 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <h2 className="text-white text-lg sm:text-xl font-bold text-center mb-2 sm:mb-3 animate-pulse-slow">
            ALL PUBG/BGMI STUFFS HERE
          </h2>
          <p className="text-white/90 text-center font-medium text-sm sm:text-base">
            DEALS IN...
          </p>
          <div className="mt-3 sm:mt-4 text-center">
            <p className="text-white text-base sm:text-lg font-semibold leading-relaxed">
              ACCOUNTS • POPULARITY • UC&apos;S • AND MANY MORE
            </p>
          </div>
        </div>

        {/* CTA Buttons with enhanced animations */}
        <div className={`space-y-3 sm:space-y-4 transition-all duration-700 delay-800 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Telegram Button */}
          <a
            href="#"
            className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/50 hover:shadow-2xl group relative overflow-hidden"
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

          {/* WhatsApp Button */}
          <a
            href="#"
            className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-green-500/50 hover:shadow-2xl group relative overflow-hidden"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce-slow group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="text-sm sm:text-base">CHAT IN WHATSAPP</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce-slow group-hover:-rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>

        {/* Footer with fade-in animation */}
        <div className={`mt-6 sm:mt-8 text-center transition-all duration-700 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-orange-300/60 text-xs sm:text-sm animate-pulse-slow">
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
      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5 animate-bounce-slow shadow-lg shadow-green-500/50">
        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-white font-medium text-sm sm:text-base md:text-lg flex-1 leading-tight sm:leading-normal">
        {text} <span className="text-green-400 inline-block animate-pulse">✅</span>
      </p>
    </div>
  );
}
