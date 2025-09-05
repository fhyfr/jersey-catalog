export default function Header() {
  return (
    <header className="relative bg-gradient-epl-primary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-12 gap-4 h-full opacity-20">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: `${i * 100}ms`}}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-6 py-8">
        {/* Main Header Content */}
        <div className="flex items-center justify-between mb-8">
          {/* Logo & Title */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl shadow-epl border border-brand-cyan/20">
                ⚽
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center">
                <i className="fas fa-star text-xs text-brand-purple"></i>
              </div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-epl-heading font-bold mb-2 tracking-tighter">
                Jersey <span className="text-brand-cyan">Elite</span>
              </h1>
              <p className="text-white/80 text-lg font-epl-body font-medium">
                Premier League Style Collection ⚽
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-white/70 text-sm font-epl-body">Need Help?</p>
              <div className="flex items-center space-x-2 text-brand-cyan font-epl-heading font-semibold">
                <i className="fab fa-whatsapp"></i>
                <span>Chat WhatsApp</span>
              </div>
            </div>
            <button className="bg-white/20 backdrop-blur-md hover:bg-brand-cyan hover:text-brand-purple px-6 py-3 rounded-xl transition-all duration-300 border border-white/20 font-epl-heading font-bold text-sm tracking-tight">
              <i className="fas fa-phone-alt mr-2"></i>
              Contact Us
            </button>
          </div>
        </div>

        {/* Feature Cards - EPL Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 transition-all duration-300 hover:bg-brand-cyan hover:text-brand-purple hover:scale-105">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-cyan rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-purple group-hover:text-brand-cyan transition-all duration-300">
                <i className="fas fa-tshirt text-white text-xl group-hover:text-brand-cyan"></i>
              </div>
              <div className="text-brand-cyan group-hover:text-brand-purple font-bold text-2xl font-sport-numbers mb-1">500+</div>
              <div className="text-white/80 group-hover:text-brand-purple text-sm font-epl-body">Premium Jerseys</div>
            </div>
          </div>

          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 transition-all duration-300 hover:bg-brand-pink hover:text-white hover:scale-105 animation-delay-200">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-pink rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white group-hover:text-brand-pink transition-all duration-300">
                <i className="fas fa-medal text-white text-xl group-hover:text-brand-pink"></i>
              </div>
              <div className="text-brand-pink group-hover:text-white font-bold text-2xl font-sport-numbers mb-1">A+</div>
              <div className="text-white/80 group-hover:text-white text-sm font-epl-body">Top Quality</div>
            </div>
          </div>

          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 transition-all duration-300 hover:bg-brand-cyan hover:text-brand-purple hover:scale-105 animation-delay-400">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-cyan rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-purple group-hover:text-brand-cyan transition-all duration-300">
                <i className="fas fa-shipping-fast text-white text-xl group-hover:text-brand-cyan"></i>
              </div>
              <div className="text-brand-cyan group-hover:text-brand-purple font-bold text-2xl font-sport-numbers mb-1">24H</div>
              <div className="text-white/80 group-hover:text-brand-purple text-sm font-epl-body">Express Delivery</div>
            </div>
          </div>

          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 transition-all duration-300 hover:bg-brand-pink hover:text-white hover:scale-105">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-pink rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white group-hover:text-brand-pink transition-all duration-300">
                <i className="fab fa-whatsapp text-white text-xl group-hover:text-brand-pink"></i>
              </div>
              <div className="text-brand-pink group-hover:text-white font-bold text-2xl font-sport-numbers mb-1">24/7</div>
              <div className="text-white/80 group-hover:text-white text-sm font-epl-body">Customer Care</div>
            </div>
          </div>
        </div>

        {/* Mobile Contact Button */}
        <div className="lg:hidden mt-6 text-center">
          <button className="bg-white/20 backdrop-blur-md hover:bg-brand-cyan hover:text-brand-purple px-8 py-3 rounded-xl transition-all duration-300 border border-white/20 font-epl-heading font-bold">
            <i className="fab fa-whatsapp mr-2"></i>
            Chat WhatsApp
          </button>
        </div>
      </div>

      {/* EPL-style Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:'#00FF85', stopOpacity:0.1}} />
              <stop offset="50%" style={{stopColor:'#E90052', stopOpacity:0.1}} />
              <stop offset="100%" style={{stopColor:'#00FF85', stopOpacity:0.1}} />
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="url(#waveGradient)"></path>
        </svg>
      </div>
    </header>
  );
}
