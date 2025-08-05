// 


// Hero.tsx
"use client";

import Lottie from "lottie-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Load the animation data from public folder
    fetch("/animations/AI-animation.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Meet Your AI Workforce
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            7 specialized AI agents working 24/7 to transform your business.
            <br />
            <span className="text-green-400 font-semibold">No sick days. No downtime. Just results.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
              Book Consultation
            </button>
            <button className="border-2 border-amber-100 text-amber-100 hover:bg-amber-100 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Calculate Your ROI
            </button>
          </div>
        </div>

        {/* Right - Lottie Animation */}
        <div className="flex justify-center items-center">
          <div className="w-full h-64 md:h-80 flex items-center justify-center">
            {animationData ? (
              <div className="lottie-container">
                <Lottie
                  animationData={animationData}
                  loop={false}
                  autoplay={true}
                  initialSegment={[0, 60]} // Start at frame 0, stop at frame 65
                  style={{ 
                    width: "100%", 
                    height: "100%",
                    maxWidth: "400px",
                    maxHeight: "400px"
                  }}
                />
              </div>
            ) : (
              // Fallback while loading
              <div className="w-full h-full bg-white/5 rounded-xl border border-slate-700 flex items-center justify-center text-6xl text-white/20 animate-pulse">
                🤖
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}




