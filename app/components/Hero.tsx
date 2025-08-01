export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Unity7 Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 mb-6">
            {/* Geometric Logo Shape */}
            <svg 
              viewBox="0 0 200 200" 
              className="w-full h-full text-amber-100"
              fill="currentColor"
            >
              <path d="M100 20 L160 60 L160 140 L100 180 L40 140 L40 60 Z" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    fill="none"
                    className="text-amber-100"
              />
              <path d="M70 80 L130 80 L115 110 L85 110 Z" 
                    fill="currentColor"
                    className="text-amber-100"
              />
            </svg>
          </div>
        </div>

        {/* Company Name */}
        <h1 className="text-6xl md:text-8xl font-light text-amber-100 mb-6 tracking-wide">
          Unity7
        </h1>

        {/* Tagline */}
        <h2 className="text-2xl md:text-3xl font-light text-amber-100 mb-8">
          Data-Driven Business Growth
        </h2>

        {/* Divider Line */}
        <div className="w-24 h-1 bg-amber-100 mx-auto mb-12"></div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Transform your business with intelligent data solutions and strategic insights that drive measurable growth and competitive advantage.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 transform hover:scale-105">
            Get Started Today
          </button>
          <button className="border-2 border-amber-100 text-amber-100 hover:bg-amber-100 hover:text-slate-800 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}