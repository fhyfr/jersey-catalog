import Image from 'next/image'

export default function JerseyCard({ jersey }) {
  const {
    nama_jersey,
    klub,
    harga,
    link_gambar,
    whatsapp_number = "6281234567890" // Default WhatsApp number
  } = jersey;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleWhatsAppClick = () => {
    const message = `Hello! I'm interested in ${nama_jersey} - ${klub}. Is it still available?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsapp_number}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group card-epl overflow-hidden transition-all duration-500 hover:shadow-epl-strong hover:-translate-y-3">
      {/* Image Container */}
      <div className="relative h-72 bg-gradient-light overflow-hidden">
        {link_gambar ? (
          <Image
            src={link_gambar}
            alt={`${nama_jersey} - ${klub}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="h-full flex items-center justify-center bg-gradient-light">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-epl">
                <i className="fas fa-tshirt text-3xl text-brand-purple"></i>
              </div>
              <p className="text-brand-muted text-sm font-epl-body">Image not available</p>
            </div>
          </div>
        )}
        
        {/* EPL-style Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Premium Badge - EPL Style */}
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-epl text-white px-3 py-1.5 rounded-full text-xs font-epl-heading font-bold shadow-epl backdrop-blur-sm border border-brand-cyan/30">
            <i className="fas fa-crown mr-1"></i>
            PREMIER
          </span>
        </div>

        {/* Quick Actions - EPL Theme */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 space-y-2">
          <button className="w-10 h-10 bg-brand-cyan/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-epl hover:bg-brand-cyan transition-colors duration-200">
            <i className="fas fa-eye text-brand-purple"></i>
          </button>
          <button className="w-10 h-10 bg-brand-pink/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-epl hover:bg-brand-pink transition-colors duration-200 animation-delay-200">
            <i className="far fa-heart text-white hover:text-white"></i>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Club Badge - EPL Style */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-6 h-6 bg-gradient-epl rounded-full flex items-center justify-center">
            <i className="fas fa-shield-alt text-white text-xs"></i>
          </div>
          <span className="text-brand-purple font-epl-heading font-bold text-sm uppercase tracking-wider">
            {klub}
          </span>
        </div>
        
        {/* Jersey Name - EPL Typography */}
        <h3 className="text-xl font-epl-heading font-bold text-brand-text mb-3 line-clamp-2 group-hover:text-brand-purple transition-colors duration-300 tracking-tight">
          {nama_jersey}
        </h3>

        {/* Features - EPL Style */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-brand-light text-brand-purple text-xs px-3 py-1 rounded-full font-epl-body font-medium border border-brand-cyan/20">
            <i className="fas fa-certificate text-brand-cyan mr-1"></i>
            Authentic
          </span>
          <span className="bg-brand-light text-brand-purple text-xs px-3 py-1 rounded-full font-epl-body font-medium border border-brand-pink/20">
            <i className="fas fa-rocket text-brand-pink mr-1"></i>
            Express Ship
          </span>
        </div>

        {/* Price Section - EPL Style */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-2xl font-epl-heading font-bold text-brand-purple sport-numbers">
              {formatPrice(parseInt(harga) || 0)}
            </div>
            <div className="text-brand-muted text-sm line-through font-epl-body">
              {formatPrice((parseInt(harga) || 0) * 1.25)}
            </div>
          </div>
          <div className="text-right">
            <div className="bg-gradient-epl-accent text-white px-3 py-1 rounded-full text-xs font-epl-heading font-bold">
              <i className="fas fa-bolt mr-1"></i>
              LIMITED
            </div>
          </div>
        </div>

        {/* WhatsApp Button - EPL Style */}
        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-epl-heading font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-epl hover:shadow-epl-strong transform hover:scale-105 active:scale-95 group"
        >
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <i className="fab fa-whatsapp text-lg"></i>
          </div>
          <span className="tracking-tight">Order via WhatsApp</span>
          <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
        </button>

        {/* Additional Info - EPL Style */}
        <div className="mt-4 pt-4 border-t border-brand-purple/10">
          <div className="flex items-center justify-between text-xs text-brand-muted font-epl-body">
            <span className="flex items-center">
              <i className="fas fa-check-circle text-brand-cyan mr-1"></i>
              In Stock
            </span>
            <span className="flex items-center">
              <i className="fas fa-users text-brand-pink mr-1"></i>
              <span className="font-sport-numbers">150+</span> sold
            </span>
            <span className="flex items-center">
              <i className="fas fa-star text-yellow-500 mr-1"></i>
              <span className="font-sport-numbers">4.8</span>
            </span>
          </div>
        </div>
      </div>

      {/* EPL Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none epl-glow"></div>
    </div>
  );
}
