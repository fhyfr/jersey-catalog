export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="text-center">
        {/* Modern Loading Animation */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto relative">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-primary animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-brand-gold animate-spin animation-delay-200" style={{animationDirection: 'reverse'}}></div>
          </div>
          
          {/* Jersey Icon in Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-tshirt text-2xl text-brand-primary animate-pulse"></i>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-3">
          <h3 className="text-xl font-heading font-bold text-brand-secondary">
            Memuat Koleksi Jersey...
          </h3>
          <p className="text-brand-muted font-display">
            Mengambil data terbaru dari Google Sheets
          </p>
          
          {/* Loading Steps */}
          <div className="space-y-2 mt-6">
            <div className="flex items-center justify-center space-x-2 text-sm text-brand-muted">
              <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
              <span>Menghubungkan ke database...</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-brand-muted animation-delay-400">
              <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
              <span>Memuat informasi jersey...</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-brand-muted">
              <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse animation-delay-200"></div>
              <span>Menyiapkan katalog...</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-modern rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-8 p-4 bg-gradient-light rounded-2xl max-w-md mx-auto">
          <div className="text-xs text-brand-muted font-display">
            <i className="fas fa-lightbulb text-brand-gold mr-2"></i>
            Tahukah Anda? Jersey sepak bola pertama kali digunakan pada tahun 1870!
          </div>
        </div>
      </div>
    </div>
  );
}
